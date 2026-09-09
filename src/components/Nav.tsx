"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, GridIcon, UserIcon } from "./Icons";
import ChatModal from "./ChatModal";

const tabs = [
  { href: "/", label: "Works", Icon: GridIcon },
  { href: "/about", label: "Story", Icon: UserIcon },
];

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [chatOpen, setChatOpen] = useState(false);
  const isProject = pathname.startsWith("/work/");
  const isHobby = pathname.startsWith("/hobby/");
  const isSub = isProject || isHobby;

  return (
    <>
      <nav className="nav" aria-label="Primary">
        {isSub ? (
          <div className="pill">
            <Link href={isHobby ? "/about" : "/"} className="pill-item">
              <ArrowLeft />
              Back
            </Link>
            <button type="button" className="pill-item cta" onClick={() => setChatOpen(true)}>
              <span className="dot" aria-hidden />
              Let&apos;s chat
            </button>
          </div>
        ) : (
          <Tabs pathname={pathname} />
        )}

        {!isSub && (
          <div className="pill">
            <button type="button" className="pill-item cta" onClick={() => setChatOpen(true)}>
              <span className="dot" aria-hidden />
              Let&apos;s chat
            </button>
          </div>
        )}
      </nav>
      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}
    </>
  );
}

/* Segmented Works / Story pill with a sliding indicator (marco's floating-indicator). */
function Tabs({ pathname }: { pathname: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const ind = useRef<HTMLSpanElement>(null);
  const active = pathname === "/about" ? "/about" : "/";

  const moveTo = useCallback((href: string) => {
    const el = wrap.current?.querySelector<HTMLElement>(`[data-href="${href}"]`);
    const bar = ind.current;
    if (!el || !bar) return;
    bar.style.width = `${el.offsetWidth}px`;
    bar.style.transform = `translateX(${el.offsetLeft}px)`;
  }, []);

  /* Position before first paint without animating, then enable transitions for later moves. */
  useLayoutEffect(() => {
    moveTo(active);
    const bar = ind.current;
    if (bar && !bar.classList.contains("ready")) {
      void bar.offsetWidth;
      bar.classList.add("ready");
    }
  }, [active, moveTo]);

  /* Hover/focus previews the target; leaving snaps back to the active tab. Native listeners keep it cheap. */
  useEffect(() => {
    const root = wrap.current;
    if (!root) return;
    const links = [...root.querySelectorAll<HTMLElement>("[data-href]")];
    const offs = links.flatMap((el) => {
      const go = () => moveTo(el.dataset.href!);
      el.addEventListener("mouseenter", go);
      el.addEventListener("focus", go);
      return [() => el.removeEventListener("mouseenter", go), () => el.removeEventListener("focus", go)];
    });
    const back = () => moveTo(active);
    root.addEventListener("mouseleave", back);
    root.addEventListener("focusout", back);
    const ro = new ResizeObserver(back);
    ro.observe(root);
    return () => {
      offs.forEach((f) => f());
      root.removeEventListener("mouseleave", back);
      root.removeEventListener("focusout", back);
      ro.disconnect();
    };
  }, [active, moveTo]);

  return (
    <div className="pill" ref={wrap}>
      <span ref={ind} className="indicator" aria-hidden />
      {tabs.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          data-href={href}
          className="pill-item"
          aria-current={active === href ? "page" : undefined}
        >
          <Icon />
          {label}
        </Link>
      ))}
    </div>
  );
}
