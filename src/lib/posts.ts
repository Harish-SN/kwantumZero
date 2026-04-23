import fm from "front-matter";
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

interface FrontmatterAttrs {
  title?: string;
  date?: string;
  summary?: string;
  tags?: string[];
  slug?: string;
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
  const { attributes, body } = fm<FrontmatterAttrs>(raw);
  const slug = attributes.slug || slugFromPath(path);
  return {
    slug,
    title: attributes.title || slug,
    date: attributes.date || new Date().toISOString().slice(0, 10),
    summary: attributes.summary || "",
    tags: attributes.tags || [],
    html: marked.parse(body, { async: false }) as string,
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