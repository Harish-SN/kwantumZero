import matter from "gray-matter";
import { marked } from "marked";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface Post extends PostMeta {
  html: string;
}

const files = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

function parsePost(path: string, raw: string): Post {
  const { data, content } = matter(raw);
  const slug = (data.slug as string) || slugFromPath(path);
  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || new Date().toISOString().slice(0, 10),
    summary: (data.summary as string) || "",
    tags: (data.tags as string[]) || [],
    html: marked.parse(content, { async: false }) as string,
  };
}

const allPosts: Post[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostMeta(): PostMeta[] {
  return allPosts.map(({ html: _html, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}