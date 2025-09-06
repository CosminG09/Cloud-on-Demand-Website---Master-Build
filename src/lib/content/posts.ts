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

// 1) Front-matter schema: stable SEO fields + defaults (Step-4 minimal)
//    We keep 'slug' OUT of the base schema, then add it in PostMetaSchema.
const PostSchema = z.object({
  title: z.string(),
  date: z.string(), // ISO string preferred
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  author: z.string().default("Cloud on Demand"),
});

// 1b) Runtime/TS schema that INCLUDES slug (required for routing/SEO)
const PostMetaSchema = PostSchema.extend({
  slug: z.string(),
});

export type PostMeta = z.infer<typeof PostMetaSchema>;

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

// 2) Fast list loader (no MDX compile) — used for indexes/cards
export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await fg("**/*.{md,mdx}", { cwd: POSTS_DIR });
  const posts: PostMeta[] = [];

  for (const rel of entries) {
    const abs = path.join(POSTS_DIR, rel);
    const raw = await fs.readFile(abs, "utf8");

    // Parse front-matter only (fast)
    const parsed = matter(raw);

    // Derive slug from filename (Step-4 resilience);
    // authors may still provide 'slug' in front-matter later.
    const fileSlug = rel.replace(/\.(md|mdx)$/, "");

    // Merge parsed.data + derived slug, then validate as PostMeta
    const data = PostMetaSchema.parse({
      ...parsed.data,
      slug: (parsed.data as any)?.slug ?? fileSlug,
    });

    posts.push(data);
  }

  // Sort by date desc (assumes ISO-like strings); adjust if needed in Step-5
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

// 3) Detail loader — compile MDX to React (JSX enabled) using gray-matter for front-matter
export async function getCompiledPost(slug: string): Promise<{
  meta: PostMeta;
  content: React.ReactNode;
}> {
  const abs = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(abs, "utf8");

  // Parse front-matter first (more reliable)
  const parsed = matter(raw);

  // Validate full meta (includes slug)
  const meta = PostMetaSchema.parse({
    ...parsed.data,
    slug, // route param is authoritative for the page we load
  });

  // Compile only the markdown/MDX body (we already parsed front-matter)
  const { content } = await compileMDX({
    source: parsed.content,
    options: {
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
