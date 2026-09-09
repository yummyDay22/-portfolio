import Image from "next/image";
import { companies, explorations, projects, services, site } from "@/content/site";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { MiniMock } from "@/components/MiniMocks";
import { ArrowUpRight, serviceIcon } from "@/components/Icons";

export default function Home() {
  return (
    <main className="page">
      <div className="grid">
        {/* Hero — danielsun: statement + CTA */}
        <section className="tile xl span-4 auto" style={{ minHeight: 328, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="hero-row">
            <div className="hero-text">
              <h1 className="hero-h1">
                <b>HELLO</b>, MY name is <b>Hoseong</b>. I am <b>AI Product Builder</b>
              </h1>
              <p className="hero-meta">1인 창업(수리넷), 삼일PwC AX 인재전쟁 상위 1%, 데이터 사이언스 해커톤 우승, 개인 프로젝트 등 기획·구현·검증 1인 개발</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`mailto:${site.email}`}>프로젝트 제안하기 <ArrowUpRight className="arrow" /></a>
                <a className="btn btn-outline" href="#work">작업 보기</a>
              </div>
            </div>
            <div className="hero-photo">
              <Image src="/media/me-works-v2.jpg" alt={`${site.name} 프로필 사진`} fill sizes="300px" priority />
            </div>
          </div>
        </section>

        {/* Projects — 2-col cards */}
        <span id="work" style={{ position: "absolute", marginTop: -100 }} aria-hidden />
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>

        {/* Services — danielsun "Everything your product needs" */}
        <section className="tile xl span-2" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 className="tile-title" style={{ fontSize: 28, lineHeight: "36px", maxWidth: 480 }}>AI 제품이 진지하게 받아들여지기까지 필요한 전부</h2>
          <p className="tile-sub" style={{ fontSize: 16, lineHeight: "24px", maxWidth: 480 }}>첫 프로토타입부터 배포되는 버전까지, 그리고 그걸 정직하게 유지하는 검증까지.</p>
        </section>
        {services.map((s) => {
          const Icon = serviceIcon[s.icon];
          return (
            <section key={s.id} className="tile">
              <div className="app-icon" style={{ background: s.color }}><Icon /></div>
              <h3 className="tile-h" style={{ marginTop: 20 }}>{s.title}</h3>
              <p className="tile-p" style={{ marginTop: 8, fontSize: 15, lineHeight: "23px" }}>{s.body}</p>
            </section>
          );
        })}
        <section className="tile span-2">
          <p className="tile-p" style={{ color: "var(--faint)" }}>함께 일했거나 무대가 된 곳</p>
          <div className="logo-grid">
            {companies.map((c) => <div key={c} className="logo"><i aria-hidden />{c}</div>)}
          </div>
        </section>

        {/* Explorations — danielsun marquee */}
        <section className="tile span-4" style={{ minHeight: 328 }}>
          <h2 className="tile-h">호기심으로 한계를 밀어붙이는 중</h2>
          <p className="tile-p" style={{ marginTop: 6 }}>사이드 실험, 인터페이스 스케치, 배우려고 만든 도구들.</p>
          <div className="marquee-wrap">
            <div className="marquee">
              {[...explorations, ...explorations].map((e, i) => (
                <div key={`${e.id}-${i}`} style={{ flex: "none" }}>
                  <MiniMock id={e.id} />
                  <div className="m-text" style={{ marginTop: 8, paddingLeft: 4 }}><span style={{ color: "var(--ink)", fontWeight: 500 }}>{e.title}</span> · {e.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
