
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blogs";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | OTA Nexus`,
    description: post.description,
    alternates: {
      canonical: `https://otanexus.in/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://otanexus.in/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date ?? undefined,
      authors: [post.author],
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: {
      h2: (props) => (
        <h2
          className="mb-4 mt-10 text-2xl font-semibold text-white"
          {...props}
        />
      ),
      h3: (props) => (
        <h3
          className="mb-3 mt-7 text-xl font-semibold text-white"
          {...props}
        />
      ),
      p: (props) => (
        <p className="mb-5 leading-8 text-slate-300" {...props} />
      ),
      ul: (props) => (
        <ul
          className="mb-6 list-disc space-y-2 pl-6 text-slate-300"
          {...props}
        />
      ),
      ol: (props) => (
        <ol
          className="mb-6 list-decimal space-y-2 pl-6 text-slate-300"
          {...props}
        />
      ),
      a: (props) => (
        <a
          className="text-[#C5A46D] underline underline-offset-4"
          {...props}
        />
      ),
    },
  });

  const dateLabel = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date ?? undefined,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "OTA Nexus",
      url: "https://otanexus.in",
    },
    mainEntityOfPage: `https://otanexus.in/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#080D18] text-white">
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <Link
          href="/blog"
          className="text-sm text-[#C5A46D] hover:underline"
        >
          ← All articles
        </Link>

        <header className="mb-10 mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C5A46D]">
            {post.category}
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            {post.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{post.author}</span>
            {dateLabel && <time dateTime={post.date}>{dateLabel}</time>}
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="border-t border-white/10 pt-8">
          {content}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-lg font-semibold">
            Building smarter connected devices?
          </p>
          <p className="mt-2 text-slate-400">
            Explore how OTA Nexus can support your device update
            and management needs.
          </p>
          <Link
            href="https://wa.me/919560440478?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20for%20my%20property.%20Could%20you%20please%20share%20more%20details%3F?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20services%20for%20my%20property.%20Could%20you%20please%20share%20more%20details%3F"
            className="mt-5 inline-block rounded-lg bg-[#C5A46D] px-5 py-3 text-sm font-semibold text-[#080D18]"
          >
            Contact our team
          </Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
