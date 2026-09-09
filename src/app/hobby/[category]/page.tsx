import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, listPosts, type CategoryId } from "@/lib/hobby";
import { site } from "@/content/site";
import { ArrowUpRight } from "@/components/Icons";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  return { title: c ? `${c.name} — Hobby — ${site.fullName}` : site.fullName };
}

export default async function HobbyCategory({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();
  const posts = listPosts(c.id as CategoryId);

  return (
    <main className="page theme-dark">
      <div className="grid">
        <section className="tile xl span-4 auto" style={{ minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="eyebrow" style={{ marginTop: 0 }}>Hobby</p>
          <h1 className="hero-h1" style={{ fontSize: 40, lineHeight: "48px" }}><b>{c.name}</b> <span style={{ color: "var(--faint)" }}>· {c.ko}</span></h1>
          <p className="hero-meta" style={{ marginTop: 12 }}>{c.blurb}</p>
          <div className="chips" style={{ marginTop: 20 }}>
            {categories.map((x) => (
              <Link key={x.id} href={`/hobby/${x.id}`} className="chip" style={x.id === c.id ? { background: "var(--ink)", color: "var(--bg)" } : undefined}>{x.name}</Link>
            ))}
          </div>
        </section>

        {posts.length === 0 ? (
          <section className="tile xl span-4 auto" style={{ minHeight: 200, display: "flex", alignItems: "center" }}>
            <p className="tile-p">아직 글이 없어요. 곧 채워집니다.</p>
          </section>
        ) : (
          <div className="subgrid">
            {posts.map((p) => (
              <Link key={p.slug} href={`/hobby/${c.id}/${p.slug}`} className="tile xl tile-link auto post-card">
                <p className="tile-p" style={{ color: "var(--faint)", fontSize: 13 }}>{p.date}</p>
                <h2 className="tile-title" style={{ fontSize: 24, lineHeight: "30px", marginTop: 8 }}>{p.title}</h2>
                <p className="tile-p" style={{ marginTop: 12 }}>{p.summary}</p>
                <span className="circle-btn" style={{ marginTop: 20 }} aria-hidden><ArrowUpRight /></span>
              </Link>
            ))}
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}
