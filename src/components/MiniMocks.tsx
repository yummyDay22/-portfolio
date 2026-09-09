import { SparkIcon } from "./Icons";

/* Small placeholder cards for the explorations marquee (mock content until real side projects come in). */
export function MiniMock({ id }: { id: string }) {
  const bars = [8, 14, 20, 26, 18, 24, 12, 22];
  return (
    <div className="win mini" aria-hidden style={{ padding: 12, position: "relative" }}>
      {id === "playground" && (<>
        <div className="m-tiny">PLAYGROUND</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
          {["claude-opus-5", "gemini-3-flash"].map((m) => (
            <div key={m} className="card" style={{ padding: 8 }}><div className="m-tiny">{m}</div><div className="bar w4" style={{ marginTop: 6 }} /><div className="bar w2" style={{ marginTop: 4 }} /><div className="bar w3" style={{ marginTop: 4 }} /></div>
          ))}
        </div>
      </>)}
      {id === "trace" && (<>
        <div className="m-tiny">AGENT TRACE</div>
        {["search(docs)", "read(page 3)", "draft(answer)", "verify(claims)"].map((t, i) => (
          <div key={t} className="m-row" style={{ padding: "6px 0" }}><span className={`m-tag ${i < 3 ? "ok" : "run"}`}>{i < 3 ? "✓" : "…"}</span><span className="m-text mono" style={{ fontSize: 12 }}>{t}</span></div>
        ))}
      </>)}
      {id === "eval" && (<>
        <div className="m-tiny">PASS RATE BY VERSION</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 90, marginTop: 14 }}>
          {[42, 55, 61, 58, 72, 79, 88].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 4, background: i === 6 ? "var(--accent)" : "var(--fill)" }} />)}
        </div>
        <div className="m-tiny" style={{ marginTop: 8 }}>v1 → v7 · 88%</div>
      </>)}
      {id === "voice" && (<>
        <div className="m-tiny">VOICE</div>
        <div className="wave" style={{ marginTop: 22, justifyContent: "center", height: 50 }}>{bars.map((h, i) => <i key={i} style={{ height: h + 10, animationDelay: `${i * 0.09}s` }} />)}</div>
        <div className="m-text" style={{ textAlign: "center", marginTop: 14 }}>&ldquo;10분 타이머 맞춰줘&rdquo;</div>
      </>)}
      {id === "cmd" && (<>
        <div className="card" style={{ padding: "8px 10px", display: "flex", alignItems: "center", gap: 8 }}><SparkIcon width={14} height={14} style={{ color: "var(--accent)" }} /><span className="m-text">지난 분기 거래 csv로 내보내<span className="caret" /></span></div>
        {["Q2 거래 내보내기", "내보내기 폴더 열기", "매주 자동 내보내기"].map((t, i) => (
          <div key={t} className="m-text" style={{ padding: "7px 10px", borderRadius: 8, background: i === 0 ? "var(--tile)" : "transparent", marginTop: i === 0 ? 8 : 0, color: i === 0 ? "var(--ink)" : undefined }}>{t}</div>
        ))}
      </>)}
      {id === "diff" && (<>
        <div className="m-tiny">PROMPT DIFF · v6 → v7</div>
        <div className="diff mono" style={{ marginTop: 8, fontSize: 11, lineHeight: "17px" }}>
          <span className="ctx">당신은 지원 상담 에이전트입니다.</span>
          <span className="del">- 항상 먼저 사과하세요.</span>
          <span className="add">+ 무엇을 했는지 확인하고,</span>
          <span className="add">+ 다음에 무슨 일이 생기는지 말하세요.</span>
          <span className="ctx">답변은 60단어 이내.</span>
        </div>
      </>)}
    </div>
  );
}
