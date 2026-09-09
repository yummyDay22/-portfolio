import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, story } from "@/content/site";
import { categories, countPosts, latestPost } from "@/lib/hobby";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = { title: `Story — ${site.fullName}` };

export default function About() {
  const counts = countPosts();
  const latest = latestPost();
  return (
    <main className="page theme-dark">
      <div className="grid">
        <section className="tile xl span-4 auto" style={{ minHeight: 328, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="hero-row">
            <div className="hero-text">
              <h1 className="hero-h1"><b>{story.heroLead}.</b> {story.heroRest}</h1>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${site.email}`}>프로젝트 제안하기 <ArrowUpRight className="arrow" /></a>
              </div>
            </div>
            <div className="hero-photo">
              <Image src="/media/me-story.jpg" alt={`${site.name} 프로필 사진`} fill sizes="300px" priority />
            </div>
          </div>
        </section>

        <section className="tile xl span-2 rows-2">
          <h2 className="tile-title" style={{ fontSize: 28, lineHeight: "34px" }}>제가 일하는 방식.</h2>
          <p className="eyebrow" style={{ marginTop: 28 }}>어떻게 여기까지 왔나</p>
          {story.howIGotHere.map((t) => <p key={t.slice(0, 20)} className="tile-p" style={{ fontSize: 15, lineHeight: "24px" }}>{t}</p>)}
          {story.abilities.map((a, i) => (
            <p key={a.k} className="tile-p" style={{ fontSize: 15, lineHeight: "24px" }}><b>{i + 1}. {a.k}</b> — {a.v}</p>
          ))}
          <p className="eyebrow">지금 서 있는 곳</p>
          {story.whereIStand.map((t) => <p key={t.slice(0, 20)} className="tile-p" style={{ fontSize: 15, lineHeight: "24px" }}>{t}</p>)}
          <p className="eyebrow">찾고 있는 것</p>
          <p className="tile-p" style={{ fontSize: 15, lineHeight: "24px" }}>실제 비즈니스 문제를 AI로 정의하고 해결하는 일. <b>AI 기능은 챗 박스가 아니라 리뷰 큐여야 한다고 생각합니다.</b></p>
        </section>

        <section className="tile span-2">
          <p className="tile-p" style={{ color: "var(--faint)", marginBottom: 14 }}>Hobby</p>
          <div className="list">
            {categories.map((c) => (
              <Link key={c.id} href={`/hobby/${c.id}`} className="hobby-row">
                <div><div className="k">{c.name}</div><div className="d">{c.ko} · {c.blurb}</div></div>
                <span className="n">{counts[c.id]}편 →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="tile" style={{ display: "flex", flexDirection: "column" }}>
          <p className="tile-p" style={{ color: "var(--faint)" }}>나는 지금</p>
          {latest ? (
            <>
              {latest.image && (
                <div style={{ position: "relative", width: "100%", height: 130, borderRadius: 14, overflow: "hidden", marginTop: 12, background: "var(--fill)" }}>
                  <Image src={latest.image} alt="" fill sizes="300px" style={{ objectFit: "cover" }} />
                </div>
              )}
              <p className="tile-p" style={{ color: "var(--faint)", fontSize: 12, marginTop: 12 }}>{categories.find((c) => c.id === latest.category)?.name} · {latest.date}</p>
              <p className="tile-h" style={{ marginTop: 6 }}>{latest.title}</p>
              <Link href={`/hobby/${latest.category}/${latest.slug}`} className="btn btn-outline" style={{ alignSelf: "flex-end", marginTop: "auto" }}>보러가기 <ArrowUpRight className="arrow" /></Link>
            </>
          ) : (
            <p className="tile-p" style={{ marginTop: 10 }}>아직 글이 없어요.</p>
          )}
        </section>

        <section className="tile" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <p className="tile-p" style={{ color: "var(--faint)" }}>이력서</p>
            <p className="tile-h" style={{ marginTop: 10 }}>긴 버전은 한 장으로.</p>
          </div>
          <a className="btn btn-outline" href={site.cv} target="_blank" rel="noreferrer" style={{ alignSelf: "flex-start" }}>이력서 보기 (PDF) <ArrowUpRight className="arrow" /></a>
        </section>

        <section className="tile xl span-4 auto" style={{ minHeight: 200, display: "flex", alignItems: "center" }}>
          <h2 className="hero-h1" style={{ fontSize: 32, lineHeight: "40px" }}><b>다음 모험을 기다리고 있습니다.</b> 만들고 싶은 게 있고 첫 버전이 빨리 필요하다면, 이야기해요.</h2>
        </section>

        <Footer />
      </div>
    </main>
  );
}
