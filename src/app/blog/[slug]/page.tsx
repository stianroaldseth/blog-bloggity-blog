import Link from "next/link";
import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { format } from "date-fns";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: `${post.title} | Blog Bloggity Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← Back to all posts
        </Link>

        <article className="mt-8">
          <header className="mb-8">
            <time className="text-sm text-zinc-500 dark:text-zinc-500">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {post.title}
            </h1>
          </header>

          <div
            className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-pre:bg-zinc-900 prose-pre:text-zinc-100"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>
      </main>
    </div>
  );
}
