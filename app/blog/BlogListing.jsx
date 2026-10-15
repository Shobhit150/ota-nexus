"use client";



import Link from "next/link";

import { useMemo, useState } from "react";



const categories = [

  "All articles",

  "OTA Distribution",

  "Revenue Management",

  "Direct Bookings",

  "Marketing",

  "Guest Experience",

];



function formatDate(date) {

  if (!date) return "";

  const parsed = new Date(date);



  if (Number.isNaN(parsed.getTime())) return date;



  return parsed.toLocaleDateString("en-GB", {

    day: "numeric",

    month: "short",

    year: "numeric",

  });

}



export default function BlogListing({ posts = [] }) {

  const [activeCategory, setActiveCategory] = useState("All articles");

  const [search, setSearch] = useState("");



  const filteredPosts = useMemo(() => {

    const query = search.trim().toLowerCase();



    return [...posts]

      .sort(

        (a, b) =>

          new Date(b.date || b.publishedAt || 0).getTime() -

          new Date(a.date || a.publishedAt || 0).getTime()

      )

      .filter((post) => {

        const category = post.category || "Hospitality";

        const matchesCategory =

          activeCategory === "All articles" ||

          category.toLowerCase() === activeCategory.toLowerCase();



        const matchesSearch = [

          post.title,

          post.excerpt,

          post.description,

          category,

        ]

          .filter(Boolean)

          .join(" ")

          .toLowerCase()

          .includes(query);



        return matchesCategory && matchesSearch;

      });

  }, [posts, activeCategory, search]);



  const featuredPost = filteredPosts[0];

  const remainingPosts = filteredPosts.slice(1);



  return (

    <main className="min-h-screen text-[#f2efe9]">

      {/* Introduction */}

      <header className="border-b border-white/10">

        <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">

          <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#cbb071] sm:text-xs">

            <span className="h-px w-7 bg-[#cbb071]" />

            The OTA Nexus Journal

          </p>



          <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">

            <h1 className="max-w-3xl text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">

              Better bookings.

              <br />

              <span className="font-serif italic text-[#cbb071]">

                Better business.

              </span>

            </h1>



            <p className="max-w-md text-sm leading-7 text-[#cbc7c0] sm:text-base md:justify-self-end">

              Practical perspectives on hotel distribution, pricing, direct

              bookings, and the marketing decisions that help hospitality

              businesses grow.

            </p>

          </div>

        </div>

      </header>



      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Filters */}

        <section aria-label="Articles" className="pt-8">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map((category) => {

                const active = activeCategory === category;



                return (

                  <button

                    key={category}

                    type="button"

                    aria-pressed={active}

                    onClick={() => setActiveCategory(category)}

                    className={`shrink-0 rounded-md border px-3 py-2 text-xs transition-colors sm:text-sm ${

                      active

                        ? "border-[#cbb071] bg-[#cbb071] text-[#10131c]"

                        : "border-white/10 text-[#cbc7c0] hover:border-[#cbb071]/60 hover:text-[#f2efe9]"

                    }`}

                  >

                    {category}

                  </button>

                );

              })}

            </div>



            <input

              type="search"

              value={search}

              onChange={(event) => setSearch(event.target.value)}

              placeholder="Search articles..."

              aria-label="Search articles"

              className="w-full rounded-md border border-white/10 bg-[#191c25] px-4 py-3 text-sm text-[#f2efe9] outline-none placeholder:text-[#777b84] focus:border-[#cbb071]/70 lg:max-w-xs"

            />

          </div>



          {/* List heading */}

          <div className="mt-9 flex items-center justify-between border-b border-white/10 pb-4">

            <h2 className="font-serif text-xl text-[#f2efe9] sm:text-2xl">

              {search.trim()

                ? "Search results"

                : activeCategory === "All articles"

                  ? "From the journal"

                  : activeCategory}

            </h2>



            <span className="text-xs text-[#99999e]">

              {filteredPosts.length}{" "}

              {filteredPosts.length === 1 ? "article" : "articles"}

            </span>

          </div>



          {/* Featured article */}

          {featuredPost && (

            <article className="border-b border-white/10 py-8 sm:py-10">

              <div className="flex min-w-0 flex-col items-start justify-center">

                <div className="flex flex-wrap items-center gap-2 text-xs text-[#99999e]">

                  <span className="font-medium text-[#cbb071]">

                    {featuredPost.category || "Hospitality"}

                  </span>



                  {(featuredPost.date || featuredPost.publishedAt) && (

                    <>

                      <span>·</span>

                      <time

                        dateTime={

                          featuredPost.date || featuredPost.publishedAt

                        }

                      >

                        {formatDate(

                          featuredPost.date || featuredPost.publishedAt

                        )}

                      </time>

                    </>

                  )}

                </div>



                <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">

                  <Link

                    href={`/blog/${featuredPost.slug}`}

                    className="transition-colors hover:text-[#cbb071]"

                  >

                    {featuredPost.title}

                  </Link>

                </h3>



                {(featuredPost.excerpt || featuredPost.description) && (

                  <p className="mt-4 text-sm leading-7 text-[#cbc7c0] sm:text-base">

                    {featuredPost.excerpt || featuredPost.description}

                  </p>

                )}



                <Link

                  href={`/blog/${featuredPost.slug}`}

                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#cbb071] hover:text-[#e0c58a]"

                >

                  Read article <span aria-hidden="true">→</span>

                </Link>

              </div>



              

            </article>

          )}



          {/* Remaining articles */}

          <div className="divide-y divide-white/10">

            {remainingPosts.map((post) => (

              <article

                key={post.slug}

                className="group grid gap-5 py-7 sm:grid-cols-[minmax(0,1fr)_150px] sm:py-8"

              >

                <div className="min-w-0">

                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#99999e]">

                    <span className="font-medium text-[#cbb071]">

                      {post.category || "Hospitality"}

                    </span>



                    {(post.date || post.publishedAt) && (

                      <>

                        <span>·</span>

                        <time dateTime={post.date || post.publishedAt}>

                          {formatDate(post.date || post.publishedAt)}

                        </time>

                      </>

                    )}

                  </div>



                  <h3 className="mt-3 font-serif text-xl leading-snug sm:text-2xl">

                    <Link

                      href={`/blog/${post.slug}`}

                      className="transition-colors hover:text-[#cbb071]"

                    >

                      {post.title}

                    </Link>

                  </h3>



                  {(post.excerpt || post.description) && (

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#cbc7c0]">

                      {post.excerpt || post.description}

                    </p>

                  )}



                  <Link

                    href={`/blog/${post.slug}`}

                    className="mt-4 inline-flex items-center gap-2 text-sm text-[#cbb071] hover:text-[#e0c58a]"

                  >

                    Read article <span aria-hidden="true">→</span>

                  </Link>

                </div>



                {(post.coverImage || post.image) && (

                  <Link

                    href={`/blog/${post.slug}`}

                    aria-label={`Read ${post.title}`}

                    className="order-first aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-[#191c25] sm:order-last sm:aspect-[4/3]"

                  >

                    <img

                      src={post.coverImage || post.image}

                      alt={post.imageAlt || ""}

                      loading="lazy"

                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"

                    />

                  </Link>

                )}

              </article>

            ))}



            {filteredPosts.length === 0 && (

              <div className="py-16 text-center">

                <p className="font-serif text-xl">No articles found.</p>

                <p className="mt-2 text-sm text-[#99999e]">

                  Try another search or category.

                </p>

                <button

                  type="button"

                  onClick={() => {

                    setSearch("");

                    setActiveCategory("All articles");

                  }}

                  className="mt-4 text-sm text-[#cbb071] underline underline-offset-4"

                >

                  Clear filters

                </button>

              </div>

            )}

          </div>

        </section>



        <footer className="mt-10 border-t border-white/10 py-8">

          <p className="text-xs leading-6 text-[#99999e]">

            OTA Nexus — Distribution, marketing, and growth for hospitality

            businesses.

          </p>

        </footer>

      </div>

    </main>

  );

}