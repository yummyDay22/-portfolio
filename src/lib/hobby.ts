import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

export const categories = [
  { id: "startup", name: "STARTUP IDEAS", ko: "창업 아이디어", blurb: "기회를 감지하고, 작게 시행하고, 맞으면 키우는 이야기" },
  { id: "math", name: "MATH", ko: "수학", blurb: "입시 수학, 해석학, 선형대수학, 조합론, 그리고 AI로 풀어보는 미해결 문제" },
  { id: "travel", name: "TRAVEL", ko: "여행", blurb: "낯선 곳에서 본 것, 생각한 것" },
  { id: "robot", name: "ROBOT", ko: "로봇", blurb: "모터, 센서, 릴레이 — 소프트웨어의 한계 돌파, 생각을 실제 세계로" },
  { id: "branding", name: "BRANDING", ko: "브랜딩", blurb: "이름, 포스터, 톤 — 거시세계 사람들 이해해보기" },
  { id: "etc", name: "ETC", ko: "기타", blurb: "분류가 애매한 나머지 전부" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type Post = { category: CategoryId; slug: string; title: string; date: string; summary: string; body: string };

const ROOT = path.join(process.cwd(), "src", "content", "hobby");

/* Tiny front-matter parser: a `---` block of `key: value` lines at the top of the file. */
function parse(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { meta, body: m[2] };
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function listPosts(category: CategoryId): Post[] {
  const dir = path.join(ROOT, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => {
      const { meta, body } = parse(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        category,
        slug: f.replace(/\.md$/, ""),
        title: meta.title ?? f.replace(/\.md$/, ""),
        date: meta.date ?? "",
        summary: meta.summary ?? "",
        body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(category: CategoryId, slug: string): Post | undefined {
  return listPosts(category).find((p) => p.slug === slug);
}

export function renderMarkdown(md: string): string {
  return marked.parse(md, { gfm: true, breaks: false }) as string;
}

export function countPosts(): Record<CategoryId, number> {
  return Object.fromEntries(categories.map((c) => [c.id, listPosts(c.id).length])) as Record<CategoryId, number>;
}
