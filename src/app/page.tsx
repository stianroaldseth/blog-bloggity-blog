import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { format } from "date-fns";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Blog Bloggity Blog
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Thoughts, stories, and ideas.
          </p>
        </header>

        <section>
          <h2 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Latest Posts
          </h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-lg border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <Link href={`/blog/${post.slug}`}>
                  <time className="text-sm text-zinc-500 dark:text-zinc-500">
                    {format(new Date(post.date), "MMMM d, yyyy")}
                  </time>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-blue-600 dark:text-blue-400">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
