import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <div className="grid">
        <section className="tile xl span-4 auto" style={{ minHeight: 328, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 className="hero-h1"><b>여긴 아무것도 없어요.</b> 찾던 페이지가 옮겨졌거나 원래 없던 페이지예요.</h1>
          <div className="hero-actions"><Link href="/" className="btn btn-primary">작업으로 돌아가기</Link></div>
        </section>
      </div>
    </main>
  );
}
