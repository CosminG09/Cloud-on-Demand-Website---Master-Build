// src/lib/content/posts.ts
// WHAT: MDX-enabled content loader for App Router (Next 13.5)
// WHY: Compiles .mdx to React so JSX works; keeps fast list loading with front-matter only
// EXPECTED: /insights/[slug] will consume compiled MDX content

import fg from "fast-glob";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { compileMDX } from "next-mdx-remote/rsc";

// 1) Front-matter schema: stable SEO fields + defaults
const PostSchema = z.object({
  title: z.string(),
  date: z.string(),                 // ISO string
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  author: z.string().default("Cloud on Demand"),
});

export type PostMeta = z.infer<typeof PostSchema> & { slug: string };

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

// 2) Fast list loader (no MDX compile)
export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await fg("**/*.{md,mdx}", { cwd: POSTS_DIR });
  const posts: PostMeta[] = [];

  for (const rel of entries) {
    const abs = path.join(POSTS_DIR, rel);
    const raw = await fs.readFile(abs, "utf8");
    const parsed = matter(raw);                     // only front-matter here
    const data = PostSchema.parse(parsed.data);
    const slug = rel.replace(/\.(md|mdx)$/, "");
    posts.push({ ...data, slug });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

// detail loader — compile MDX to React (JSX enabled) using gray-matter for front-matter
export async function getCompiledPost(slug: string): Promise<{
  meta: PostMeta;
  content: React.ReactNode;
}> {
  const abs = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(abs, "utf8");

  // Parse front-matter first (more reliable)
  const parsed = matter(raw);
  const meta = PostSchema.parse({ ...parsed.data, slug });

  // Compile only the markdown/MDX body
  const { content } = await compileMDX({
    source: parsed.content,
    options: {
      // no parseFrontmatter here — we already parsed it with gray-matter
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
        ],
      },
    },
  });

  return { meta, content };
}

