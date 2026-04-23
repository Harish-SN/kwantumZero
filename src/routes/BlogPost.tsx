import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../lib/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="shell" style={{ paddingTop: "22vh", paddingBottom: 120 }}>
        <h1>Not found.</h1>
        <p><Link to="/blog">Back to writing</Link></p>
      </div>
    );
  }

  return (
    <article className="shell" style={{ paddingTop: "18vh", paddingBottom: 160, maxWidth: 720 }}>
      <Link to="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-faint)", borderBottom: "none", display: "inline-block", marginBottom: 48 }}>
        ← Writing
      </Link>
      <div className="label" style={{ marginBottom: 20, color: "var(--text-faint)" }}>{formatDate(post.date)}</div>
      <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.05, marginBottom: 56 }}>{post.title}</h1>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}