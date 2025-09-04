import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content/posts";

export const generateStaticParams = async () =>
  (await getAllPosts()).map((p) => ({ slug: p.slug }));

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
