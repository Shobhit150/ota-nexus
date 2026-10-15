
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(
        path.join(postsDirectory, file),
        "utf8"
      );
      const { data } = matter(source);

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        category: data.category ?? "Insights",
        date: data.date
          ? new Date(data.date).toISOString()
          : new Date(0).toISOString(),
        author: data.author ?? "OTA Nexus Team",
        readingTime: data.readingTime ?? "5 min read",
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "Insights",
    date: data.date ? new Date(data.date).toISOString() : null,
    author: data.author ?? "OTA Nexus Team",
    readingTime: data.readingTime ?? "5 min read",
    content,
  };
}
