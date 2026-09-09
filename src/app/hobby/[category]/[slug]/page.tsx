import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getPost, listPosts, renderMarkdown, type CategoryId } from "@/lib/hobby";
import { site } from "@/content/site";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return categories.flatMap((c) => listPosts(c.id).map((p) => ({ category: c.id, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const p = getPost(category as CategoryId, slug);
  return { title: p ? `${p.title} — ${site.fullName}` : site.fullName, description: p?.summary };
}

export default async function HobbyPost({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const c = getCategory(category);
  const p = c ? getPost(c.id as CategoryId, slug) : undefined;
  if (!c || !p) notFound();
  const html = renderMarkdown(p.body);

  return (
    <main className="page theme-dark">
      <div className="grid">
        <article className="tile xl span-4 auto post">
          <p className="tile-p" style={{ color: "var(--faint)", fontSize: 13 }}>
            <Link href={`/hobby/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>{c.name}</Link> · {p.date}
          </p>
          <h1 className="tile-title" style={{ fontSize: 34, lineHeight: "42px", marginTop: 10 }}>{p.title}</h1>
          {p.summary && <p className="tile-sub" style={{ fontSize: 17, lineHeight: "26px" }}>{p.summary}</p>}
          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <Footer />
      </div>
    </main>
  );
}
