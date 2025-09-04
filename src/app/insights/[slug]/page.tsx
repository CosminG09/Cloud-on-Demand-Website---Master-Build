import { notFound } from "next/navigation";
import { getAllPosts, getCompiledPost } from "@/lib/content/posts";

export const generateStaticParams = async () =>
  (await getAllPosts()).map((p) => ({ slug: p.slug }));

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    const { meta, content } = await getCompiledPost(params.slug);
    return (
      <main className="p-8 mx-auto">
        <article className="prose prose-slate max-w-none">
          <h1 className="font-display text-3xl font-semibold mb-4">{meta.title}</h1>
          {content}
        </article>
      </main>
    );
  } catch (e) {
    // TEMP debug: show why compilation failed
    console.error("MDX compile error for slug:", params.slug, e);
    return notFound();
  }
  
}
