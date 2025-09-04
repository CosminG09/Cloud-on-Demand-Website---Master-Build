import Link from "next/link";
import { getAllPosts } from "@/lib/content/posts";

export default async function InsightsPage() {
  const posts = await getAllPosts();
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Insights</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/insights/${p.slug}`} className="underline">
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
