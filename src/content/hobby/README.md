# Hobby 글 쓰는 법

`src/content/hobby/<카테고리>/<슬러그>.md` 로 파일을 하나 만들면 사이트에 자동으로 뜹니다.

카테고리 폴더: `startup`(STARTUP IDEAS) · `math`(MATH) · `travel`(TRAVEL) · `robot`(ROBOT) · `branding`(BRANDING) · `etc`(ETC)

파일 형식:

```md
---
title: 글 제목
date: 2026-09-09
summary: 목록에 보일 한 줄 요약
---

본문은 마크다운으로. 제목(##), 목록, 굵게, 링크, 코드블록 전부 됩니다.
```

- 파일명이 주소가 됩니다 (`my-first-idea.md` → `/hobby/startup/my-first-idea`). 영문·숫자·하이픈 권장.
- `_`로 시작하는 파일은 초안으로 취급되어 안 보입니다.
- 저장하고 `git push` 하면 자동 배포.
