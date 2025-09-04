import fg from "fast-glob";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { marked } from "marked";

const PostSchema = z.object({
  title: z.string(),
  date: z.string(), // ISO date (e.g., 2025-09-04)
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  author: z.string().default("Cloud on Demand"),
});

export type Post = z.infer<typeof PostSchema> & { slug: string; html: string };

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getAllPosts(): Promise<Post[]> {
  const entries = await fg("**/*.{md,mdx}", { cwd: POSTS_DIR });
  const posts: Post[] = [];

  for (const rel of entries) {
    const abs = path.join(POSTS_DIR, rel);
    const raw = await fs.readFile(abs, "utf8");
    const parsed = matter(raw);
    const data = PostSchema.parse(parsed.data);
    const html = marked.parse(parsed.content) as string; // local/trusted content
    const slug = rel.replace(/\.(md|mdx)$/, "");
    posts.push({ ...data, slug, html });
  }

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
