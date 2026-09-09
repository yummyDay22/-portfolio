import Image from "next/image";
import type { Project } from "@/content/site";
import { AutoVideo, Phone } from "./Media";

/* Home-card visuals: real media from each project, laid out like marco's live tiles. */
export default function CardVisual({ p }: { p: Project }) {
  switch (p.card) {
    case "hhi":
      return (
        <div className="mock" aria-hidden>
          <Phone width={216} style={{ position: "absolute", left: 16, top: 24 }}>
            <AutoVideo src="/media/hhi-demo.mp4" poster="/media/hhi-demo-poster.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </Phone>
          <div className="win" style={{ right: 0, top: 150, width: 300, height: 150, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 28px" }}>
            <Image src="/media/hhi-logo-crop.png" alt="HD현대중공업" width={820} height={220} sizes="300px" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      );
    case "jeonse":
      return (
        <div className="mock" aria-hidden>
          <div className="win" style={{ left: 0, top: 0, width: 360, height: 480 }}>
            <Image src="/media/jeonse-talk-1.jpg" alt="" fill sizes="400px" style={{ objectFit: "cover" }} />
          </div>
          <div className="win" style={{ right: 0, top: 60, width: 250, padding: 16 }}>
            <div className="m-tiny">FINAL CV RMSE</div>
            <div style={{ fontSize: 34, lineHeight: "38px", fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.8px", marginTop: 4 }}>6,768<span style={{ fontSize: 16, color: "var(--muted)", marginLeft: 4 }}>만원</span></div>
            <div className="m-text" style={{ marginTop: 4 }}>log RMSE 0.5782 · 단독 최고 대비 −32만원</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 70, marginTop: 16 }}>
              {[6812, 6798, 6775, 6789, 6803].map((v, i) => <div key={i} style={{ flex: 1, height: `${((v - 6700) / 130) * 100}%`, borderRadius: 4, background: i === 2 ? "var(--accent)" : "var(--fill)" }} />)}
            </div>
            <div className="m-tiny" style={{ marginTop: 6 }}>5-FOLD · 변동 &lt; 1%</div>
            <div className="m-row" style={{ padding: "10px 0 0", marginTop: 10 }}><span className="m-tag ok">1위</span><span className="m-text">road_mean_Y_smooth</span></div>
          </div>
        </div>
      );
    case "stockchat":
      return (
        <div className="mock" aria-hidden>
          <Phone width={216} style={{ position: "absolute", left: 16, top: 24 }} aspect="626 / 1080">
            <AutoVideo src="/media/stockchat-demo.mp4" poster="/media/stockchat-demo-poster.jpg" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </Phone>
          <div className="win col" style={{ right: 0, top: 56, width: 300 }}>
            <div className="m-head"><span className="m-title">주문 제안</span><span style={{ marginLeft: "auto" }} className="m-tag run">5분 TTL</span></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 12 }}>
              <div className="m-bubble bot">삼성전자 10주 사줘</div>
              <div className="m-bubble user">현재가 71,200원 · 예상 712,000원. 매수가능금액 확인했어요. 아래에서 확인하면 주문이 나갑니다.</div>
            </div>
            <div className="m-row" style={{ justifyContent: "space-between", background: "var(--tile)" }}>
              <span className="m-text">AI는 제안만 · 체결은 사용자</span>
              <span className="m-tag" style={{ background: "var(--ink)", color: "var(--bg)", height: 22 }}>확인</span>
            </div>
          </div>
        </div>
      );
    case "ax":
      return (
        <div className="mock" aria-hidden>
          <div className="win" style={{ left: 0, top: 0, width: 440, height: 440 }}>
            <Image src="/media/ax-poster.png" alt="" fill sizes="480px" style={{ objectFit: "cover" }} />
          </div>
          <div className="win" style={{ right: 0, top: 300, width: 230, padding: 16 }}>
            <div className="m-tiny">본선 진출</div>
            <div style={{ fontSize: 30, lineHeight: "34px", fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.6px", marginTop: 4 }}>5,300 → 60</div>
            <div className="m-text" style={{ marginTop: 2 }}>지원자 대비 상위 약 1%</div>
          </div>
        </div>
      );
    case "surinet":
      return (
        <div className="mock" aria-hidden>
          <div className="win" style={{ left: 0, right: 0, top: 0 }}>
            <Image src="/media/surinet-home.png" alt="" width={2846} height={1750} sizes="700px" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      );
    case "combi":
      return (
        <div className="mock" aria-hidden>
          <div className="win" style={{ left: 0, right: 0, top: 0, aspectRatio: "1440 / 938", background: "#0b1c3a" }}>
            <AutoVideo src="/media/combi-demo.mp4" poster="/media/combi-thumb.jpg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      );
    case "feeder":
      return (
        <div className="mock" aria-hidden>
          <div className="win" style={{ left: 0, top: 0, width: 380, height: 520 }}>
            <Image src="/media/feeder-final.jpg" alt="" fill sizes="400px" style={{ objectFit: "cover" }} />
          </div>
          <div className="win" style={{ right: 0, top: 40, width: 200, height: 280, background: "#fff" }}>
            <Image src="/media/feeder-plan.png" alt="" fill sizes="220px" style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
        </div>
      );
  }
}
