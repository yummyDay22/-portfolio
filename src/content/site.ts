export const site = {
  name: "호성",
  fullName: "이호성",
  role: "AI Product Builder",
  email: "hosung3849@naver.com",
  location: "Seoul, KR",
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/yummyDay22" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/ho_se0ng/" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
    { id: "readcv", label: "Read.cv", href: "https://read.cv/" },
  ],
  cv: "/resume-hoseong.pdf",
};

export type Img = { src: string; alt: string; w: number; h: number; pos?: string };
export type Media =
  | { type: "video"; src: string; poster?: string; landscape?: boolean; aspect?: string }
  | { type: "image"; frame?: "win" | "phone" | "none"; img: Img }
  | { type: "gallery"; images: Img[] };

export type Section = { title: string; blurb: string; body?: string[]; bullets?: string[]; media?: Media };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  card: "hhi" | "jeonse" | "stockchat" | "ax" | "surinet" | "combi" | "feeder";
  role: string;
  timeline: string;
  intro: string;
  stats: { v: string; k: string }[];
  story: string[];
  services: string[];
  tools: string[];
  links?: { label: string; href: string }[];
  hero: Media;
  sections: Section[];
};

const slides: Img[] = Array.from({ length: 11 }, (_, i) => ({
  src: `/media/slides/jeonse-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `발표 슬라이드 ${i + 1}/11`,
  w: 1152,
  h: 648,
}));

export const projects: Project[] = [
  {
    slug: "surinet",
    title: "수리넷 — AI 수리논술 첨삭 플랫폼",
    tagline: "지원자는 많지만 대비하는 학생은 극소수인 시장을 AI로 메우는 1인 창업. 기획·개발·마케팅·법률까지",
    tags: ["창업", "에듀테크", "풀스택"],
    card: "surinet",
    role: "1인 창업 · 기획 · 디자인 · 개발 · 마케팅 · 법률",
    timeline: "2026 · 베타 1기 모집 5.9 – 5.20 · surinet.net 운영 중",
    intro:
      "수리논술은 대다수에게 정시의 '예비 카드'라 큰 투자를 하기 어렵고, 전문 학원은 수도권에 집중돼 있으며, 1대1 과외는 회당 8~15만 원입니다. 결국 지원은 했는데 아무 대비 없이 시험장에 들어가는 학생이 시장의 다수입니다. 손으로 푼 답안을 사진 한 장으로 받아 풀이의 어느 분기에서 사고가 막혔는지 짚어주는 서비스로 그 간극을 노렸습니다.",
    stats: [
      { v: "14개 대학", k: "기출 첨삭 · 모의응시 · 지원 통계" },
      { v: "62명 · 36건", k: "베타 가입 · 첨삭" },
      { v: "0건 / 36", k: "컨셉 매핑 신규 환각" },
      { v: "7건", k: "출시 직전 장애 진단·해결" },
    ],
    story: [
      "한 번에 대박을 노리기보다 반복 가능한 사이클을 갖추는 데 집중했습니다. 기회 감지 → 현장 시장 조사 → AI로 풀 지점 설계 → MVP → 작게 시행 → 가설이 맞으면 확대. 도메인을 바꿔 가며 여러 번 돌렸고, 가장 멀리 끌고 간 케이스가 수리넷입니다. 기존 옵션은 정밀도와 단가 중 하나를 포기합니다. '정밀하면서 싼' 사분면이 비어 있었고, 회당 1~3만 원을 목표로 그 빈 칸을 노렸습니다.",
      "핵심 차별화는 컨셉 매핑 알고리즘입니다. \"이 학생은 이 문제를 어떤 접근법으로 풀었는가\"를 소문항 단위로 판정하고, 그 컨셉의 정석 풀이·감점 포인트를 근거로 첨삭합니다. 단순 LLM 호출이 아니라 라벨 정규화 → 후보 검색 → 결정론적 5-키 스코어링 → LLM 분류(confidence 필수) → 사후 정합화 → 4중 가드로만 지식베이스 갱신의 6단계 구조입니다. 정석 풀이는 AI가 새로 쓰지 않고 입학처 해설지 원문을 그대로 발췌합니다. AI 창작 풀이가 채점 기준이 되는 것을 구조적으로 차단한 것입니다.",
      "가장 중요한 의사결정 중 하나는 학원 B2B를 후순위로 돌린 것이었습니다. '베타 첨삭권 30장 무료' 제안을 준비하다가, 학원 입장에서 우리는 핵심 매출을 무료로 대체하는 존재라 거부가 합리적이라는 걸 컨택 전에 계산했습니다. 학원장 개인 자문위원 위촉, 1인 강사 개인 컨택, 학부모·학생 직접 채널로 무게중심을 옮겼습니다. 광고는 수만휘 배너 월 1,200만 원 대신 인스타 Meta 셀프광고(일 25,000원, 18~24세)와 오르비 칼럼·수만휘 게시판 같은 0원 채널 조합으로 설계했고, KPI는 가입 1명 ≈ 800 노출로 역산했습니다.",
    ],
    services: ["시장 조사·문제 정의", "서비스 기획", "브랜드·포스터 디자인", "풀스택 개발", "컨셉 매핑 알고리즘", "강사 파트너십", "퍼포먼스 마케팅", "SEO", "법률·컴플라이언스"],
    tools: ["python 3.9", "fastapi", "sqlmodel", "postgresql", "supabase", "gemini", "pymupdf", "next.js 14", "tailwind", "vercel", "railway", "cloudflare", "sentry", "meta ads"],
    links: [{ label: "surinet.net", href: "https://www.surinet.net" }],
    hero: { type: "image", frame: "win", img: { src: "/media/surinet-home.png", alt: "수리넷 홈페이지", w: 2846, h: 1750 } },
    sections: [
      {
        title: "컨셉 매핑 — LLM을 결정론적 레일 위에 올리기",
        blurb: "36개 소문항 전수 매핑, 신규 컨셉 환각 0건. 명백 오답 3/32 vs 정상 답안 32/32로 채점 정확도를 통제 실험으로 입증했습니다.",
        bullets: [
          "1-1, (1-1), 1-1번, 1‑1(유니코드 대시), 1-1-a — 소문항 라벨 정규화 + 동치 라벨 집합 생성",
          "(exact_match, grouped_parent, official, quality, updated_ts) 5-키 정렬로 LLM 없이 공식 컨셉 우선 선택",
          "LLM 분류에 confidence 밴드 명세 + 신규 컨셉 생성 기준 명문화로 무분별한 증식 방지",
          "채점 후 증거 누적, 3건 이상·3의 배수·confidence ≥ 0.9·최대 2필드만 갱신하는 보수적 재학습",
        ],
        media: { type: "image", frame: "win", img: { src: "/media/surinet-compare.png", alt: "수리넷 vs 대형 첨삭 학원 비교 섹션", w: 1440, h: 900 } },
      },
      {
        title: "베타 출시 직전 — 장애 7건, 마이그레이션, 감사",
        blurb: "인수인계 받은 백엔드·프론트를 안정화하고 production DB를 무중단으로 바꿨습니다.",
        bullets: [
          "채점 LLM 회귀 의심 → 15개 대학 답안 PDF 생성기 + 통제 실험 + 5개 축 평가 보고서 3개 버전 (★4.4/5)",
          "메타 주석 단서 누설 버그 — 답안 속 자기-변호 주석 15건을 PyMuPDF redaction으로 일괄 제거",
          "user_id varchar → uuid 마이그레이션 (31건, 손실 0) + 호출 사이트 5개 수정",
          "Railway trial 만료 · Cloudflare 526 · Vercel build fail · CORS 400 · 잘못된 모델 ID 등 7건을 5~15분 내 해결",
        ],
        media: { type: "image", frame: "win", img: { src: "/media/surinet-features.png", alt: "수리넷 — 단순한 AI 첨삭이 아닙니다 섹션", w: 1440, h: 900 } },
      },
      {
        title: "마케팅과 법률 — 예산 0원이어도 채널은 만들 수 있다",
        blurb: "카페 광고(표시광고법), 대량 메일(정보통신망법), 학생 답안(미성년자 동의)까지 처음부터 준수 방식으로만 설계했습니다.",
        bullets: [
          "베타 1기 패키지: AI 첨삭권 2장 · 실전 모의논술 1회 · 합격 예측 리포트 · 우수 활동자 LITE 패키지",
          "게시 타이밍 — 수험생 활성 시간대 분석 후 모집 시작일 오전 9시 게시",
          "강사 3옵션 계약(출제 자문 / 분석 체계 자문 / 데이터 자문위원), 저작권 100% 강사 귀속·경업금지 없음",
          "Google Search Console · 네이버 서치어드바이저 · OG 메타 · 보도자료 매체 리스트업",
          "외부 컨설팅 보고서(UTS) 수령 — 정책 정비 · 강사 계약 체계 · 환불 로직 · 미성년자 동의를 30-60-90일 로드맵으로",
        ],
        media: { type: "image", frame: "win", img: { src: "/media/surinet-report-cover.png", alt: "수리넷 창업 컨설팅 보고서 표지", w: 857, h: 1109 } },
      },
    ],
  },
  {
    slug: "ax-talent-war",
    title: "AX 인재전쟁 본선 — Trusted CEO Agent",
    tagline: "지원 5,300명 중 본선 60명. 3시간 안에 만든 '믿고 결재할 수 있는' CEO 의사결정 에이전트",
    tags: ["AI 에이전트", "문제 정의", "상위 1%"],
    card: "ax",
    role: "기획·분석·구현·발표 1인 전 과정",
    timeline: "2026.07 · OpenAI × 조코딩 AX 파트너스 · 삼일PwC",
    intro:
      "\"AX 인재는 무엇일까?\" 회사도, 청년들도 이 질문에 답을 찾기 어렵습니다. 수요는 있는데 공급이 제대로 이뤄지지 않고, 그 병목은 \"AX·AI가 중요한 건 알겠어. 근데 어떤 게 AX를 잘하는 건데?\"라는, 정량적이지 않은 평가에 모두가 혼란에 빠진 데 있습니다. OpenAI × 조코딩 파트너스 AX 인재전쟁은 이 해답을 함께 고민하려는 자리였습니다.",
    stats: [
      { v: "상위 1%", k: "5,300명 → 본선 60명" },
      { v: "3시간", k: "본선 제한시간" },
      { v: "1.27 → −0.20", k: "보고 ROAS → 실질 ROAS" },
      { v: "연 28억", k: "5일 뒤 자동 갱신될 계약" },
    ],
    story: [
      "5,300명의 지원자와 카카오·무신사·삼일PwC 등 대기업 C레벨 심사위원이 모여 해커톤을 진행했습니다. 예선조차 문제가 주어지지 않았습니다. 언급된 회사 중 한 곳을 골라 스스로 문제를 정의하고 AI로 해결하는 것이 과제였고, 저는 삼일PwC를 골라 '회계·자문 업무에서 AI 산출물의 검증 비용이 오히려 늘어나는 문제'를 정의해 검증 게이트가 달린 Codex 플러그인을 만들었습니다. 60명 안에 들어 본선에 진출했고, 본선은 3시간 안에 가상 지주사 CEO를 위한 의사결정 에이전트를 설계·구현해 채용 결정권자 앞에서 1:1 시연하는 것이었습니다. 프롬프트 로그는 전량 제출, 가공 시 실격이었습니다.",
      "4개사 60여 개 파일의 데이터룸을 전수 분석해 이슈 10건을 뽑고, 개별 심각도가 아니라 유형으로 묶었습니다. 가장 빈번한 패턴은 '부서가 보고하는 지표와 결정에 필요한 지표가 다르다'였습니다. 마케팅이 ROAS 1.27로 보고한 인플루언서 계약은 공헌이익 기준 −0.20이었고, 아무도 그 계산을 하지 않은 채 닷새 뒤 연 28억이 자동 갱신될 상황이었습니다. 전환율은 최고였지만 반품률 13.1%·쿠폰중복 36%·재구매율 8.5%를 보면 문제는 인플루언서가 아니라 계약·프로모션 구조였기에, 해지 대신 조건부 재협상을 권고했습니다.",
      "에이전트는 LLM을 입구(자연어 해석)와 출구(서술)에만 두고 계산은 전부 결정적 코드로 분리했습니다. 재실행하면 같은 값이 나오니 수치 창작이 구조적으로 막힙니다. 모든 수치에 검증·원본·추론·미확인의 신뢰등급을 자동 부여해 등급이 곧 '누가 검토해야 하는가'의 라우팅이 되게 했고, 근거 그래프에는 채택한 가설뿐 아니라 데이터가 기각한 가설까지 남겼습니다.",
      "본선에서 탈락했습니다. \"데이터를 어떻게 분류했고 그래프 노드에 무엇이 들어가는가\"라는 질문에 답하지 못했기 때문입니다. 답은 제출한 설계 문서 안에 있었지만, 구현을 AI에 위임한 뒤 제 것으로 소화하지 않았습니다. 심사평은 \"비즈니스는 훌륭하나 기술이 부족하다\". 이후 격주로 기업 하나를 분석해 프로토타입까지 만드는 훈련 체계를 운영 중이고, AI 산출물을 노트 없이 30초 안에 설명하지 못하면 다음 단계로 넘어가지 않는 '회수' 절차를 넣었습니다. 무엇보다 대기업들이 지금 고민하고 있는 것, 시대가 무엇을 원하는지 알게 된 계기였습니다.",
    ],
    services: ["문제 정의", "데이터룸 분석", "에이전트 설계", "결정적 분석 엔진", "근거 그래프 UI", "1:1 시연"],
    tools: ["python", "pandas", "http api", "cytoscape.js", "llm orchestration", "codex plugin"],
    hero: { type: "image", frame: "none", img: { src: "/media/ax-judges.jpg", alt: "AX 인재전쟁 본선 현장 — 삼일회계법인 파트너 심사", w: 1500, h: 882, pos: "left center" } },
    sections: [
      {
        title: "예선 — 검증 가능한 AI 산출물",
        blurb: "회계·자문 업무에서 AI 산출물의 신뢰 검증 비용이 오히려 늘어나는 문제를 정의했습니다.",
        bullets: [
          "AI의 모든 주장을 조서(workpaper)로 남기고, 인용·수치 자동 검증 게이트를 통과해야 산출물이 확정",
          "허위 인용 · 데이터 변조 · 원천 누락 · API 장애 등 실패 시나리오 6종 테스트 픽스처",
          "\"실패해야 할 때 실패하는지\"를 검증하는 Codex 플러그인",
        ],
        media: { type: "image", frame: "none", img: { src: "/media/ax-poster.png", alt: "OpenAI × 조코딩 AX 파트너스 인재전쟁 포스터", w: 960, h: 960 } },
      },
      {
        title: "본선 — 3시간, 1인, 오프라인 시연",
        blurb: "외부 의존성 0으로 시연 안정성을 확보했습니다.",
        bullets: [
          "Python 분석 엔진 — 주최 제공 산식만 사용, 결정적 재현 보장",
          "로컬 API 서버 + 단일 HTML 프런트 (Cytoscape 근거 그래프)",
          "기한 감시 · 부작위 방지 — 무대응 시 조건변경 통보 상신 자동 대기",
          "자연어 입력 → LLM 해석(사람 확인) → 결정적 재계산 → 이전 판단과 diff",
        ],
      },
      {
        title: "AX에 대해 깨달은 것",
        blurb: "주최사의 AI 제품 9종을 문제 정의 → 기획 → 구현의 역순으로 되짚으며 얻은 결론.",
        bullets: [
          "기업은 \"AI가 다 해준다\"를 팔지 않는다 — 팔리는 것은 사람이 이해하며 통제하는 자동화",
          "경영진용 AI가 CFO부터 시작된 이유는 신뢰 — AI 도입의 병목은 성능이 아니라 검증 가능성",
          "AX의 승부처는 모델이 아니라 문제 정의 → 기획 → 구현의 정합성. 의사결정 구조를 다시 설계하는 프로젝트",
        ],
      },
    ],
  },
  {
    slug: "hhi-hr-rag",
    title: "HD현대중공업 HR RAG 챗봇",
    tagline: "사규 문서로 답하는 사내 HR 챗봇을 3주 만에 단독 구축·배포 (마이메타 협업 데모)",
    tags: ["RAG", "보안", "풀스택", "협업"],
    card: "hhi",
    role: "기획 참여 · 백엔드/프론트/인프라 단독 구현",
    timeline: "2026.05 – 06 · 약 3주",
    intro:
      "마이메타와 협업해 HD현대중공업 사규 기반 한국어 RAG 챗봇을 만들었습니다. FastAPI + ChromaDB + Next.js로 3주 만에 배포했고, 사규를 외부로 내보낼 수 없다는 본사업 제약을 데모 단계에서 아키텍처로 먼저 풀었습니다.",
    stats: [
      { v: "3주", k: "기획 → 배포" },
      { v: "8,520줄", k: "Python · TypeScript" },
      { v: "38건", k: "pytest 전부 통과" },
      { v: "4×4", k: "역할 × 민감도 RBAC" },
    ],
    story: [
      "기획안은 명확했지만 실제 사내 데이터 없이 RAG 성능을 검증해야 했습니다. 검색 품질은 정성 평가로 판단이 어려워서, AI로 시드 쿼리 30종을 만들고 기대 키워드 포함·금지어 미포함·기대 출처 인용·기대 컬렉션 히트 네 가지 기준으로 자동 채점하는 회귀 테스트 구조를 만들어 해결했습니다.",
      "또 하나의 제약은 '사규는 외부로 나갈 수 없다'였습니다. 데모는 외부 LLM API(Gemini)로 시연하되, 본사업에서는 사내 GPU의 자체 LLM으로 데이터 송신 없이 전환해야 했습니다. 그래서 LLMProvider 추상화 레이어를 두고 \"백엔드 어디서도 SDK를 직접 호출하지 말 것\"을 코드 가드레일로 못박았습니다. 환경변수 하나로 구현체가 바뀌고, vLLM 전환은 파일 1개 추가로 끝납니다.",
      "권한은 LLM에게 맡기지 않았습니다. retriever 단계에서 user_clearance보다 높은 민감도의 청크를 잘라내므로, 권한 밖 정보는 프롬프트에 아예 들어가지 않습니다. 검색 결과가 있어도 거리 임계값을 넘으면 \"규정에서 확인되지 않습니다\"로 분기해 얼버무리는 답변을 원천 차단했습니다.",
    ],
    services: ["기획 참여", "RAG 파이프라인 설계", "LLM 추상화 레이어", "RBAC 설계", "SSE 스트리밍 UI", "회귀 테스트셋", "배포·인프라"],
    tools: ["python 3.12", "fastapi", "chromadb", "gemini", "presidio", "next.js 14", "tailwind", "docker", "railway", "vercel", "cloudflare"],
    links: [{ label: "데모 사이트", href: "https://hhi-demo.surinet.net" }],
    hero: { type: "video", src: "/media/hhi-demo.mp4", poster: "/media/hhi-demo-poster.jpg" },
    sections: [
      {
        title: "RAG 파이프라인 8단계",
        blurb: "PDF에서 벡터 인덱스까지, 민감도 분류와 암호화를 통과해야 검색 대상이 됩니다.",
        bullets: [
          "PyMuPDF 텍스트 추출 → Gemini Vision OCR 폴백 (tesseract 의존성 0)",
          "Presidio PII 마스킹 → 청킹 800자 / 120 overlap",
          "LLM 민감도 자동 분류 (public · internal · confidential · secret)",
          "임베딩 3072차원 → Fernet 암호화 저장 → Chroma 인덱싱",
          "실 사규 형식 PDF 7종 · 5개 컬렉션 · 58청크 인덱싱",
        ],
      },
      {
        title: "권한 밖 정보는 LLM에 도달하지 않는다",
        blurb: "4역할 × 4민감도 매트릭스를 config.yaml에 선언하고, retriever가 먼저 걸러냅니다.",
        bullets: [
          "임직원 / HR담당 / HR임원 / Admin × public / internal / confidential / secret",
          "프롬프트 조립 전에 청크가 사라지므로 프롬프트 인젝션으로도 우회 불가",
          "top-1 cosine distance > 0.5 → no_context 분기, 환각 대신 \"확인되지 않습니다\"",
          "JWT + bcrypt, rate limit, WebSocket 30초 단명 티켓, 감사 로그(질의·인용·IP)",
        ],
      },
      {
        title: "스트리밍, Diff, 출처 인용",
        blurb: "답변이 어디서 왔는지 항상 보이도록 만든 사용자 경험.",
        bullets: [
          "SSE 토큰 스트리밍 + 12ms/글자 적응형 타자기 (자체 ReadableStream 파서)",
          "\"달라/변경/차이\" 의도 감지 → 동일 문서 두 버전 diff + LLM 의미 요약",
          "출처 칩(문서명·조항·페이지·distance) 백엔드 자동 부착",
          "domains/{id}/config.yaml + prompts/system.md — 다른 회사 도메인 추가 시 코드 무변경",
        ],
        media: { type: "image", frame: "win", img: { src: "/media/hhi-demo-home.png", alt: "HD현대중공업 HR 비서 데모 로그인 화면", w: 1440, h: 900 } },
      },
      {
        title: "트러블슈팅과 배운 점",
        blurb: "RAG의 품질은 프롬프트가 아니라 retrieval 설계에서 결정된다는 걸 체감했습니다.",
        bullets: [
          "Docker 한글 파일명 ASCII codec 에러 → LANG / LC_ALL=C.UTF-8",
          "재배포 시 Chroma 인덱스 소실 → /app/data 볼륨 마운트. \"상태가 있는 서비스는 저장 위치부터 설계\"",
          "LLM 민감도 분류 비결정성 → sensitivity_override로 중요 문서는 운영자가 고정",
          "본사업 로드맵: PADO 사내 검색 hybrid retrieval, vLLM 전환으로 데이터 외부 송신 0건",
        ],
      },
    ],
  },
  {
    slug: "evolve-search",
    title: "LLM 유도 진화 탐색 엔진",
    tagline: "FunSearch·AlphaEvolve 방식을 로컬에서 재구현해 조합론 미해결 문제에 적용한 개인 연구 프로젝트",
    tags: ["연구", "진화 알고리즘", "로컬 LLM"],
    card: "combi",
    role: "1인 개발",
    timeline: "2026.08.07 – 08.20",
    intro:
      "순수수학에 관심이 있어 시작했습니다. 로컬 LLM(Ollama, Qwen2.5-Coder)을 변이 연산자로, 코드 실행 기반 자동 채점기를 적합도 함수로 쓰는 진화 루프를 처음부터 설계·구현했습니다. LLM이 후보 함수를 생성하고, 채점기가 실행·점수화하고, 우수 함수를 프롬프트에 되먹여 사람이 못 짠 해를 자동으로 찾습니다.",
    stats: [
      { v: "40 · 81", k: "cap set n=5 · n=6 자동 발견" },
      { v: "0", k: "엔진 코어 외부 의존성" },
      { v: "1파일", k: "새 문제 추가 시 필요한 코드" },
      { v: "1초", k: "대시보드 폴링 주기" },
    ],
    story: [
      "핵심 설계는 채점기(Scorer)를 추상 인터페이스로 분리해 엔진과 문제를 완전히 디커플링한 것입니다. 엔진 코드에는 특정 문제 지식이 전혀 없고, problems/ 폴더에 클래스 파일 하나만 추가하면 레지스트리가 자동 등록합니다. 엔진·UI·CLI를 수정하지 않고 새 조합론 문제로 확장되는 플러그인 아키텍처입니다.",
      "LLM이 만든 코드는 신뢰할 수 없으므로 서브프로세스 + 타임아웃으로 샌드박스에 격리했습니다. 무한루프·크래시·예외가 나도 엔진은 죽지 않고 {valid: False}로 처리합니다. 세대별 상태는 JSON 체크포인트로 저장돼 Ctrl-C 후 재실행해도 집단·이력·최고해가 이어집니다.",
      "cap set 벤치마크로 엔진을 검증한 뒤(진화적 개선 확인, n=5 → 40개, n=6 → 81개) 조합 설계(Florentine Rectangle) 미해결 인스턴스로 확장했습니다. 다양성 붕괴(국소최적 수렴)는 temperature 조정과 다양성 주입으로 완화했고, 엔진 로직은 LLM 없이 도는 유닛/통합 테스트로 검증합니다.",
    ],
    services: ["문제 정의", "진화 루프 설계", "채점기 추상화", "샌드박스 격리", "체크포인트", "실시간 대시보드", "테스트"],
    tools: ["python", "ollama", "qwen2.5-coder", "fastapi", "진화 알고리즘", "pytest"],
    hero: { type: "video", src: "/media/combi-demo.mp4", poster: "/media/combi-demo-poster.jpg", landscape: true },
    sections: [
      {
        title: "진화 루프 — LLM은 변이 연산자, 채점기는 적합도",
        blurb: "DeepMind FunSearch / AlphaEvolve 계열 방법론을 로컬 환경에서 재구현했습니다.",
        bullets: [
          "로컬 LLM이 후보 함수 생성 → 채점기가 실행·점수화 → 우수 함수를 프롬프트에 되먹임",
          "Scorer = ABC + registry. 엔진에는 문제 지식 0, problems/에 파일 하나 추가로 확장",
          "다양성 붕괴 대응 — temperature 조정 · 다양성 주입",
          "세대별 JSON 체크포인트로 중단·재개",
        ],
        media: { type: "image", frame: "win", img: { src: "/media/combi-demo-poster.jpg", alt: "실시간 진화 대시보드 — 세대별 최고 점수, 유효율, LLM 시도 목록", w: 1440, h: 938 } },
      },
      {
        title: "실시간 대시보드",
        blurb: "백엔드는 엔진을 구동만 하는 얇은 레이어. 1초 폴링으로 탐색 과정을 봅니다.",
        bullets: [
          "누적 최고 / 세대별 후보 / 유효율 3개 라인, 신기록 갱신 순간 강조",
          "이번 세대 LLM 시도 목록 — 무효·새 함수·점수를 한 줄씩",
          "현재 최고 함수 코드와 최근 50줄 로그",
          "신뢰할 수 없는 코드는 서브프로세스 + 타임아웃 — 크래시가 나도 엔진은 산다",
        ],
      },
    ],
  },
  {
    slug: "jeonse-hackathon",
    title: "서울 전세 보증금 예측",
    tagline: "130만 건 거래 데이터로 회귀 모델을 만들어 교내 데이터 사이언스 해커톤 우승",
    tags: ["ML", "해커톤 우승", "발표"],
    card: "jeonse",
    role: "디자인 · 발표 · 개발",
    timeline: "2026.05 – 06",
    intro:
      "\"숙달된 데이터 사이언스 학과 학생들을 상대로 AI를 활용해 이길 수 있는가?\" 도메인 지식이 전무한 상태에서 참가해, CV RMSE·발표·인사이트 세 축 모두에서 좋은 평가를 받고 우승했습니다.",
    stats: [
      { v: "6,768만원", k: "CV RMSE (log 0.5782)" },
      { v: "1.34M", k: "train rows · 12년" },
      { v: "35개", k: "신규 변수 (5-Fold OOF)" },
      { v: "< 1%", k: "5-Fold 변동" },
    ],
    story: [
      "저에게 이 대회는 '처음 마주친 도메인을 나만의 프로세스로 이해할 수 있는가'의 시험대였습니다. 문제 정의 → 기획 → 구현의 순서를 지켰습니다. 주최 측 데이터와 문제를 전부 AI에 넣고 정리한 md를 두세 번 읽어 마스터 문제와 파생 문제를 잡고, 어떤 모델·몇 fold·어떤 변수가 중요한지 AI와 발산·수렴을 반복해 계획을 하나로 모은 뒤, 구현은 AI가 만들고 제가 검토했습니다.",
      "차별점은 데이터를 오래 들여다본 데서 나왔습니다. train Y의 99.5% 분위가 정확히 58,000만원, area 99.7% 분위가 test의 max와 소수점까지 일치했습니다. 운영진이 넣은 노이즈 패턴이었고, 분위수 기준으로 정밀 절단해 97.3%를 보존했습니다. 같은 동 안에서도 도로명별 분산이 동 전체 분산의 71%라는 것도 발견해, Bayesian smoothing을 건 road_mean_Y_smooth가 Feature Importance 1위가 됐습니다.",
      "누수는 원천 차단했습니다. 모든 target encoding은 5-Fold OOF, 시계열 변수는 shift(1) 후 rolling, unseen 카테고리는 global mean fallback. LightGBM·XGBoost·CatBoost를 로그 공간에서 0.55 / 0.30 / 0.15로 가중 앙상블해 단독 최고 모델 대비 개선했고, 폴드 간 변동은 1% 이내였습니다.",
    ],
    services: ["문제 정의", "EDA·정제", "feature engineering", "모델링·앙상블", "인사이트 50개", "발표 자료 디자인", "발표"],
    tools: ["python", "pandas", "lightgbm", "xgboost", "catboost", "scikit-learn", "matplotlib", "parquet"],
    hero: { type: "image", frame: "none", img: { src: "/media/jeonse-talk-1.jpg", alt: "해커톤 발표 장면 — Feature Engineering 슬라이드", w: 1200, h: 1600 } },
    sections: [
      {
        title: "발표 슬라이드 11장",
        blurb: "정제 · 도로명 · 교호작용 · OOF — 네 기둥의 설계.",
        media: { type: "gallery", images: slides },
      },
      {
        title: "인사이트 8가지",
        blurb: "50개 인사이트를 명제 + 정량 근거 형식으로 정리했고, 그중 발표에 올린 것들입니다.",
        bullets: [
          "노이즈는 분위수 절단선에 있었다 — Y 99.5% / area 99.7%",
          "가격은 동이 아니라 도로명에서 결정된다 — 분산의 71%",
          "강남 프리미엄은 1.13배에 불과 (5.8억 캡 후)",
          "작은 평수가 ㎡당 1.54배 비싸다 — 역원룸 효과",
          "역세권 임계점은 500m, 300m 이내는 소음 디스카운트",
          "연립다세대가 금리에 가장 민감 — 1%p당 −23%",
          "마포 스타벅스 역설 — 많을수록 가격이 낮다, 서울 평균과 반대",
        ],
        media: { type: "image", frame: "none", img: { src: "/media/jeonse-talk-2.jpg", alt: "해커톤 발표 장면 — 전처리 과정 슬라이드", w: 1200, h: 1600 } },
      },
      {
        title: "카테고리별로 가격을 만드는 변수가 다르다",
        blurb: "아파트·오피스텔·연립다세대의 결정 메커니즘을 교호작용 변수 5개로 차등 학습했습니다.",
        bullets: [
          "아파트 — 면적·Y 상관 0.541, 금리 1%p 영향 −13.1%",
          "오피스텔 — 0.479, −16.3%, 신축 여부",
          "연립다세대 — 0.287, −23.1%, 건물나이·동 위치",
          "age_x_type, floor_x_type, station_prox_x_type 등 교호작용 5개",
        ],
      },
    ],
  },
  {
    slug: "stockchat",
    title: "스톡챗 — 토스증권 API AI 거래 앱",
    tagline: "자연어로 시세·자산을 조회하고 매매를 제안받는 챗 기반 증권 앱, 규칙 기반 자동매매까지",
    tags: ["핀테크", "AI 에이전트", "모바일"],
    card: "stockchat",
    role: "1인 개발",
    timeline: "2026.07.07 – 07.23",
    intro:
      "토스·카카오페이가 증권 앱 시장을 양분한 이유는 '간소화'였습니다. 그 다음은 챗이라고 봤습니다. 토스증권 Open API로 실계좌를 연결해, 대화로 조회하고 제안받고, 자연어로 등록한 전략을 스케줄러가 실행하는 앱을 17일 동안 혼자 만들었습니다.",
    stats: [
      { v: "13,757줄", k: "TS 파일 162개" },
      { v: "37개", k: "REST 엔드포인트" },
      { v: "14개", k: "백엔드 모듈" },
      { v: "10개", k: "AI 함수 도구" },
    ],
    story: [
      "\"삼성전자 10주 사줘\", \"내 포트폴리오 분석해줘\" 같은 말에 GPT가 function calling으로 시세 조회·종목 검색·포트폴리오 집계 같은 실제 도구를 실행해 답합니다. 추측이 아니라 실데이터로 답하는 구조입니다. 다만 AI는 주문을 절대 직접 체결하지 않습니다. propose_order로 제안만 하고, 5분 TTL의 1회용 proposalId를 발급해 사용자가 확인 버튼을 눌러야 실제 주문이 나갑니다. 환각 한 번이 금전 사고가 되는 구조를 처음부터 막았습니다.",
      "돈은 float으로 계산하지 않았습니다. 전 구간에서 금액을 문자열 decimal로 주고받고 연산은 decimal.js로만. 원화·달러는 통화별로 분리 보관하고 총자산 표시처럼 환산이 필요한 지점에서만 환율을 적용합니다.",
      "토스 OAuth는 클라이언트당 유효 토큰이 1개라 재발급이 겹치면 서로의 토큰을 죽입니다. Redis 공유 캐싱 + 분산락으로 재발급 구간만 직렬화했고, Redis Lua 토큰 버킷으로 API 그룹별 레이트리밋을 걸었습니다. 자동매매의 리스크 게이트(일손실·유니버스·주문·포지션·예산 상한)는 IO 없는 순수 함수로 떼어내 단위 테스트로 검증했습니다.",
    ],
    services: ["제품 컨셉", "백엔드 설계", "AI 함수 호출 설계", "자동매매 엔진", "모바일 앱", "보안·인증"],
    tools: ["nestjs", "typescript", "postgresql", "prisma", "redis", "bullmq", "decimal.js", "zod", "openai", "react native", "expo", "tanstack query", "vitest"],
    hero: { type: "video", src: "/media/stockchat-demo.mp4", poster: "/media/stockchat-demo-poster.jpg", aspect: "626 / 1080" },
    sections: [
      {
        title: "AI 챗 — 제안은 하되 체결은 하지 않는다",
        blurb: "도구 10종을 정의하고 GPT가 직접 호출합니다. 토큰과 도구 실행 상태는 SSE로 실시간 스트리밍.",
        bullets: [
          "시세·차트·종목 검색·포트폴리오 집계·주문 미리보기 등 함수 도구 10종",
          "propose_order → 5분 TTL · 1회용 proposalId → 사용자 확인 시에만 체결",
          "성공·실패 모두 감사 로그 기록",
          "zod 스키마를 packages/shared에 두어 프론트·백 타입의 단일 진실 공급원",
        ],
      },
      {
        title: "자동매매 엔진과 리스크 게이트",
        blurb: "\"낙폭 과대 2차전지를 분할 매수\" 같은 전략을 등록하면 BullMQ가 주기 실행합니다.",
        bullets: [
          "interval / cron 전략을 BullMQ repeatable job으로 스케줄링",
          "실행 전 리스크 게이트: 일손실 한도 · 종목별 상한 · 1회 주문 상한 · 예산 한도",
          "리스크 판정은 순수 함수로 분리해 단위 테스트",
          "API 시크릿 AES 암호화, JWT 액세스·리프레시 회전, 리프레시 토큰은 해시 저장",
        ],
      },
      {
        title: "트러블슈팅",
        blurb: "로그에 아무것도 안 남는 문제들이 가장 오래 걸렸습니다.",
        bullets: [
          "자산이 0원으로 표시 — 같은 응답 안에서 필드마다 구조가 달랐음 ({krw,usd} vs {amount:{krw,usd}}). 두 형태 모두 수용",
          "iOS에서만 즉시 종료 — UI 스레드 워클릿 완료 콜백이 JS 함수를 재귀 호출. New Architecture에서 크래시 → 표준 반복 API로 교체",
          "세션을 찾을 수 없음 — 서버 {sessionId} vs 공유 타입 {id}. 서버 응답을 공유 스키마에 맞춤",
        ],
      },
    ],
  },
  {
    slug: "feeder",
    title: "〈Feeder〉 — 미대 협업 인터랙티브 설치",
    tagline: "하드웨어를 한 번도 만져본 적 없는 CS 전공자가 AI와의 대화만으로 기구·전자·제어를 끝까지 만든 기록",
    tags: ["임베디드", "아트 협업", "AI 페어"],
    card: "feeder",
    role: "기계·전자·제어 전체 설계 및 구현 (미대생 파트너: 컨셉·조형)",
    timeline: "2026.05 – 진행 중",
    intro:
      "관객이 매트 위에 누워 위를 바라보면, 장치 하단의 적외선 센서 4개가 얼굴이 어느 방향에 가장 가까운지 감지하고 해당 방향의 노즐에서만 우유가 토출되는 자동 수유 기계입니다. 돌봄·의료·의례의 경계라는 파트너의 컨셉을 실제로 작동하는 물리 장치로 옮겼습니다.",
    stats: [
      { v: "5건", k: "기록한 실패 · 전부 원인 규명" },
      { v: "v1 → v6", k: "설계 문서 개정" },
      { v: "−55%", k: "부품 소싱 비용 (국내 유통 대비)" },
      { v: "4 × 4", k: "적외선 센서 × 다이어프램 펌프" },
    ],
    story: [
      "하드웨어 지식이 0이었기 때문에 AI를 '질문 문턱이 없는 튜터'로 썼습니다. “브레드보드 +/- 레일이 뭔데?”, “체크밸브는 왜 필요해?” 같은, 사람에게 묻기엔 너무 기초적인 질문을 끝까지 파고들 수 있었습니다. GND가 전압이 아니라 0V 기준점이라는 걸 이해한 순간 배선 문제 절반이 풀렸습니다.",
      "기구 설계는 버전 관리하듯 v1부터 v6까지 개정했습니다. 가장 중요한 결정은 v5에서 '작동 검증'과 '외장 제작'을 분리한 것 — 회로가 불안정한 상태에서 아크릴을 발주하는 사고를 막았습니다. 부품 소싱은 상품 페이지를 캡처해 사양을 교차 검증했고, 에어펌프로 잘못 고른 펌프, 안 맞는 체크밸브 사이즈, 5V 릴레이에 12V를 물리려던 실수를 사전에 걸렀습니다.",
      "가장 오래 걸린 문제는 모터 역기전력이었습니다. 며칠간 코드를 고쳤지만 필요했던 건 개당 50원짜리 플라이백 다이오드 4개였습니다. 물리 세계의 문제는 물리 부품으로 푼다는 것, 그리고 AI도 틀리므로(릴레이 코일 12V 안내) 데이터시트와 인쇄 표기가 최종 권위라는 것을 배웠습니다.",
    ],
    services: ["기구 설계 (v1–v6)", "BOM · 부품 소싱", "회로 구성", "Arduino 펌웨어", "디버깅", "아크릴 발주 도면", "시연 리스크 계층화"],
    tools: ["arduino uno", "c++", "sharp gp2y0a41", "r385 펌프", "4ch 릴레이", "1n4007", "python · matplotlib", "claude"],
    hero: { type: "image", frame: "none", img: { src: "/media/feeder-final.jpg", alt: "〈Feeder〉 완성품 — 아크릴 실린더와 알루미늄 프레임 위의 펌프 4개", w: 1066, h: 1600, pos: "center 40%" } },
    sections: [
      {
        title: "실패 기록 — 이게 진짜 내용이다",
        blurb: "다섯 번 실패했고, 다섯 번 다 원인을 찾았습니다.",
        bullets: [
          "센서 2개 간섭 — GND 기준점 흔들림 + 적외선 크로스토크 → 전원 레일 통합, 물리 간격 확보",
          "아두이노 소손 — Vin 12V 자체는 규격 내, GND 미연결/극성 반전 추정 → 연결 전 배선 사진 검토 프로토콜",
          "릴레이 작동 시 리셋 — 로그가 되감기는 패턴 = 브라운아웃 → 릴레이 코일 전원 분리(5V 5A)",
          "모터 역기전력 — 펌프가 무작위로 켜짐 → 플라이백 다이오드 1N4007 4개 병렬",
          "릴레이 접점 융착 — LED OFF인데 펌프 회전 → 채널 격리, 12V 직결 4방향 동시 분사로 전환",
        ],
        media: { type: "image", frame: "none", img: { src: "/media/feeder-making.jpg", alt: "브레드보드, 아두이노, 4채널 릴레이, 적외선 센서 4개 배선 과정", w: 1210, h: 1600, pos: "center" } },
      },
      {
        title: "도안에서 완성까지",
        blurb: "파트너의 스케치 → AI로 뽑은 형태 탐색 → 발주 도면 → 완성품.",
        media: { type: "gallery", images: [
          { src: "/media/feeder-plan.png", alt: "파트너의 초기 스케치 — 누운 관객 위의 장치", w: 1136, h: 1600 },
          { src: "/media/feeder-ai.jpg", alt: "AI로 탐색한 형태 이미지", w: 1176, h: 1600 },
          { src: "/media/feeder-plan2.png", alt: "기구 도안 — 실린더, 원판, 다리", w: 1153, h: 1600 },
          { src: "/media/feeder-final.jpg", alt: "완성품", w: 1066, h: 1600 },
        ] },
      },
      {
        title: "펌웨어 — 순간값이 아니라 지속성으로 판단",
        blurb: "노이즈가 심한 아날로그 센서 환경을 전제하고, 시간 축에서 검증하도록 설계했습니다.",
        bullets: [
          "센서당 20회 샘플링 평균으로 개별 측정 노이즈 제거, 거리 변환 12.08 · v^-1.058",
          "같은 센서가 3초 연속 잡혀야 '진짜 머리'로 확정 — 튀는 값은 streak 리셋으로 걸러짐",
          "시연 리스크 계층화: 우유 4방향 분사(12V만) / 센서 감지(아두이노만) / 자동 연동 — 통합 실패해도 모듈별 작동은 증명",
          "다음엔: 유도성 부하엔 무조건 플라이백 다이오드, 로직·액추에이터 전원 분리, 배선 전 회로도",
        ],
      },
    ],
  },
];

export const services = [
  { id: "define", title: "문제 정의", body: "주어진 질문을 데이터가 말하는 질문으로 다시 씁니다. \"갱신할 것인가\"가 아니라 \"검토 없이 자동 확정되는 구조를 어떻게 끊을 것인가\"처럼요.", icon: "target", color: "#111111" },
  { id: "prototype", title: "프로토타입", body: "덱이 아니라 배포된 제품으로 말합니다. RAG 챗봇 3주, 증권 AI 앱 17일, 본선 에이전트 3시간.", icon: "bolt", color: "#6366f1" },
  { id: "agents", title: "에이전트 설계", body: "LLM은 입구와 출구에만, 계산은 결정적 코드로. 권한은 retriever에서 먼저 자르고, 주문은 사람이 확인해야 나갑니다.", icon: "agent", color: "#0a84ff" },
  { id: "evals", title: "검증과 평가", body: "AI 생성 시드 쿼리 회귀 테스트, 명백 오답 통제 실험, 5-Fold OOF. 숫자로 증명되지 않으면 안 된 겁니다.", icon: "chart", color: "#17803d" },
];

export const companies = [
  "마이메타", "HD현대중공업", "삼일PwC", "OpenAI × 조코딩", "토스증권 API", "수리넷", "UTS 컨설팅", "데이터사이언스 동아리",
];

export const explorations = [
  { id: "playground", title: "프롬프트 플레이그라운드", note: "모델 나란히 비교" },
  { id: "trace", title: "에이전트 트레이스", note: "툴 호출 하나하나 펼쳐보기" },
  { id: "eval", title: "평가 대시보드", note: "버전별 통과율" },
  { id: "voice", title: "보이스 스케치", note: "첫 오디오까지 700ms" },
  { id: "cmd", title: "커맨드 바", note: "앱에게 뭐든 물어보기" },
  { id: "diff", title: "프롬프트 diff", note: "무엇이, 왜 바뀌었나" },
];

export const story = {
  heroLead: "도전하는 삶",
  heroRest: "AI라는 새로운 시대의 선두에 서기. 문제를 사랑하기(Problem Lover). 호기심과 책임감을 잃지 않기.",
  howIGotHere: [
    "2023년 OpenAI의 ChatGPT 출범 이후 세상은 완전히 달라졌고, 개인에게 이전과는 다른 것을 요구하기 시작했습니다. 2002년생인 저에게 세상은 \"앞서 잘된 사람들의 답지가 지금은 통하지 않는다\"고 말하는 것 같았습니다. 제가 해석한, 지금 2002년생이 가져야 할 능력은 두 가지입니다.",
  ],
  abilities: [
    {
      k: "호기심과 취미",
      v: "지식의 가치가 폭락한 지금, 폭등하는 가치는 호기심입니다. 무엇이든 물어볼 수 있는 시대에 차이를 만드는 건 '무엇을 궁금해하느냐'이고, 취미는 그 호기심이 어디를 향하는지 보여주는 가장 정직한 증거입니다. 창업 아이디어, 수학, 여행, 로봇, 브랜딩에 대한 글을 아래 Hobby에 블로그처럼 모아두는 이유입니다.",
    },
    {
      k: "인성",
      v: "앞으로 중요한 건 천재가 아니라 협업입니다. 전에도 중요했지만, AI가 개인의 생산성을 끌어올린 지금은 수용력·이해력·매력 같은 '사람 자체'가 팀의 결과를 가릅니다. 미대생과 함께 만든 설치 작품, 마이메타와의 데모, 강사 파트너십에서 배운 건 결국 기술이 아니라 사람과 일하는 법이었습니다.",
    },
  ],
  whereIStand: [
    "\"AX 인재는 무엇일까?\" 회사도, 청년들도 이 질문에 답을 찾기 어렵습니다. 수요는 있는데 공급이 제대로 이뤄지지 않고 있고, 그 병목은 \"AX·AI가 중요한 건 알겠어. 근데 어떤 게 AX를 잘하는 건데?\"라는, 정량적이지 않은 평가에 모두가 혼란에 빠진 데 있습니다. OpenAI × 조코딩 파트너스 AX 인재전쟁은 이 해답을 함께 고민하려는 자리였습니다.",
    "5,300명의 지원자와 카카오·무신사·삼일PwC 등 대기업 C레벨 심사위원이 모여 해커톤을 진행했습니다. 예선조차 문제가 주어지지 않았습니다. 언급된 회사 중 한 곳을 골라 스스로 문제를 정의하고 AI로 해결하는 것이 과제였고, 60명 안에 들어 본선에 진출했습니다. 본선에서는 가상 지주사의 데이터룸을 놓고 'CEO가 믿고 결재할 수 있는 판단'을 3시간 안에 만들어 채용 결정권자 앞에서 시연했습니다.",
    "거기서 본 것은 기술이 아니라 방향이었습니다. 기업이 AI에 기대하는 것은 '자동화'가 아니라 '검증 가능한 판단 보조'로 옮겨가고 있었고, 경영진용 AI가 CEO가 아니라 CFO부터 시작되는 이유는 신뢰였습니다. AI 도입의 병목은 성능이 아니라 검증 가능성이고, AX의 승부처는 모델이 아니라 문제 정의 → 기획 → 구현의 정합성이라는 것. 대기업들이 지금 고민하고 있는 것과 시대가 무엇을 원하는지 알게 된 계기였습니다.",
  ],
  experience: [
    { role: "1인 창업 · 수리넷", at: "AI 수리논술 첨삭 플랫폼, 베타 운영", when: "2026 – Now" },
    { role: "AX 인재전쟁 본선 (상위 1%)", at: "OpenAI × 조코딩 AX 파트너스 · 삼일PwC", when: "2026.07" },
    { role: "스톡챗 1인 개발", at: "토스증권 Open API AI 거래 앱", when: "2026.07" },
    { role: "HR RAG 챗봇 단독 구축", at: "마이메타 협업 · HD현대중공업 데모", when: "2026.05 – 06" },
    { role: "데이터 사이언스 해커톤 우승", at: "교내 데이터 사이언스 동아리", when: "2026.05" },
  ],
  now: [
    { k: "운영 중", v: "격주 기업 분석 → 프로토타입 훈련 체계" },
    { k: "만드는 중", v: "수리넷 베타 → 정식 런칭" },
    { k: "믿는 것", v: "AI 기능은 챗 박스가 아니라 리뷰 큐" },
  ],
};
