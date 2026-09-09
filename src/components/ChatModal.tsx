"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { ArrowUpRight, CloseIcon, InstagramLogo, LinkedInLogo, MailIcon } from "./Icons";

export default function ChatModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const ig = site.socials.find((s) => s.id === "instagram")?.href ?? "#";
  const li = site.socials.find((s) => s.id === "linkedin")?.href ?? "#";

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="chat-title">
        <div className="dialog-head">
          <div className="avatar" aria-hidden>{site.name[0]}</div>
          <div>
            <div id="chat-title" style={{ fontWeight: 500, color: "var(--ink)", fontSize: 15 }}>{site.name}</div>
            <div style={{ fontSize: 12, color: "var(--faint)" }}>보통 하루 안에 답장해요</div>
          </div>
          <button ref={closeRef} type="button" className="dialog-close" onClick={onClose} aria-label="Close">
            <CloseIcon width={16} height={16} />
          </button>
        </div>

        <div className="thread">
          <div className="bubble them">같이 만들고 싶은 게 있나요? 아니면 그냥 얘기라도? 아래에서 채널 하나 골라요 (진짜로요)</div>
          <div className="bubble me">좋아요 🙏</div>
          <div className="delivered">전송됨</div>
        </div>

        <div className="dialog-actions">
          <a className="btn btn-primary wide" href={`mailto:${site.email}`}>
            <MailIcon width={16} height={16} /> 이메일 보내기 <ArrowUpRight className="arrow" />
          </a>
          <a className="btn btn-outline on-white" href={x} target="_blank" rel="noreferrer">
            <InstagramLogo width={15} height={15} /> Instagram
          </a>
          <a className="btn btn-outline on-white" href={li} target="_blank" rel="noreferrer">
            <LinkedInLogo width={14} height={14} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
