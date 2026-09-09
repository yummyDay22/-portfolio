import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, site } from "@/content/site";
import { MediaBlock } from "@/components/Media";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} — ${site.name}` : site.fullName, description: p?.tagline };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="page">
      <div className="grid">
        {/* Hero — title + intro (danielsun project page) */}
        <section className="tile xl span-2 rows-2" style={{ display: "flex", flexDirection: "column" }}>
          <div className="chips">{p.tags.map((t) => <span key={t} className="chip" style={{ background: "var(--win)", boxShadow: "var(--sh-card)" }}>{t}</span>)}</div>
          <h1 className="tile-title" style={{ fontSize: 36, lineHeight: "42px", marginTop: 24 }}>{p.title}</h1>
          <p className="tile-sub" style={{ fontSize: 18, lineHeight: "26px" }}>{p.tagline}</p>
          <p className="tile-p" style={{ marginTop: 20, fontSize: 15, lineHeight: "23px" }}>{p.intro}</p>
          {p.links && (
            <div className="link-row">
              {p.links.map((l) => <a key={l.href} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">{l.label} <ArrowUpRight className="arrow" /></a>)}
            </div>
          )}
          <div className="list" style={{ marginTop: "auto", paddingTop: 24 }}>
            <div className="list-row"><span className="d">역할</span><span className="k" style={{ fontSize: 14, lineHeight: "20px", textAlign: "right" }}>{p.role}</span></div>
            <div className="list-row"><span className="d">기간</span><span className="k" style={{ fontSize: 14, lineHeight: "20px", textAlign: "right" }}>{p.timeline}</span></div>
          </div>
        </section>
        <section className="tile xl span-2 rows-2"><MediaBlock media={p.hero} big /></section>

        {/* Stats row — one tile, four columns */}
        <section className="tile span-4 auto stats">
          {p.stats.map((s) => (
            <div key={s.k} className="stat">
              <div className="v">{s.v}</div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </section>

        {/* Long story short */}
        <section className="tile xl span-2 auto">
          <h2 className="tile-h">Long story short</h2>
          <div style={{ marginTop: 16 }}>{p.story.map((t) => <p key={t.slice(0, 24)} className="tile-p" style={{ fontSize: 15, lineHeight: "24px" }}>{t}</p>)}</div>
        </section>
        <section className="tile auto">
          <p className="tile-p" style={{ color: "var(--faint)", marginBottom: 12 }}>한 일</p>
          <div className="chips">{p.services.map((s) => <span key={s} className="chip">{s}</span>)}</div>
        </section>
        <section className="tile auto">
          <p className="tile-p" style={{ color: "var(--faint)", marginBottom: 12 }}>도구</p>
          <div className="chips">{p.tools.map((s) => <span key={s} className="chip" style={{ background: "var(--win)", boxShadow: "var(--sh-card)" }}>{s}</span>)}</div>
        </section>

        {/* Sections — text tile + media tile pairs */}
        {p.sections.map((s) => (
          <SectionTiles key={s.title} s={s} />
        ))}

        <Footer />
      </div>
    </main>
  );
}

function SectionTiles({ s }: { s: (typeof projects)[number]["sections"][number] }) {
  const text = (
    <section className="tile xl span-2 auto">
      <h2 className="tile-title" style={{ fontSize: 22, lineHeight: "28px" }}>{s.title}</h2>
      <p className="tile-sub" style={{ fontSize: 15, lineHeight: "23px", marginTop: 8 }}>{s.blurb}</p>
      {s.body?.map((t) => <p key={t.slice(0, 20)} className="tile-p" style={{ marginTop: 12 }}>{t}</p>)}
      {s.bullets && <ul className="bullets">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
    </section>
  );
  if (!s.media) return text;
  if (s.media.type === "gallery") {
    return (
      <>
        <section className="tile span-4" style={{ minHeight: 420 }}>
          <h2 className="tile-title" style={{ fontSize: 22, lineHeight: "28px" }}>{s.title}</h2>
          <p className="tile-sub" style={{ fontSize: 15, lineHeight: "23px", marginTop: 8 }}>{s.blurb}</p>
          <MediaBlock media={s.media} />
        </section>
      </>
    );
  }
  return (
    <>
      <section className="tile xl span-2 rows-2">
        <h2 className="tile-title" style={{ fontSize: 22, lineHeight: "28px" }}>{s.title}</h2>
        <p className="tile-sub" style={{ fontSize: 15, lineHeight: "23px", marginTop: 8 }}>{s.blurb}</p>
        {s.body?.map((t) => <p key={t.slice(0, 20)} className="tile-p" style={{ marginTop: 12 }}>{t}</p>)}
        {s.bullets && <ul className="bullets">{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
      </section>
      <section className="tile xl span-2 rows-2"><MediaBlock media={s.media} /></section>
    </>
  );
}
