import Link from "next/link";
import type { Project } from "@/content/site";
import CardVisual from "./CardVisual";
import { ArrowUpRight } from "./Icons";

/* danielsun card: visual fills the tile, title + tag chips bottom-left, arrow bottom-right. */
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/work/${p.slug}`} className="tile xl span-2 rows-2 tile-link" aria-label={`${p.title} — ${p.tagline}`}>
      <CardVisual p={p} />
      <div className="tile-foot">
        <div className="chips">
          <span className="chip title">{p.title}</span>
          {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <span className="circle-btn" aria-hidden><ArrowUpRight /></span>
      </div>
    </Link>
  );
}
