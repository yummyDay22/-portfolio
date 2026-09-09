"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Img, Media } from "@/content/site";

type VideoProps = {
  src: string; poster?: string; className?: string; style?: React.CSSProperties;
  /** "hover": plays while the mouse is over the surrounding tile. "auto": plays whenever it is on screen. */
  mode?: "hover" | "auto";
};

export function AutoVideo({ src, poster, className, style, mode = "hover" }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    const pause = () => v.pause();
    /* Back to the very first screen (the poster), not just paused. load() resets the element and re-shows the poster. */
    const stop = () => { v.pause(); v.load(); };

    const hoverless = window.matchMedia("(hover: none)").matches;
    if (mode === "auto" || hoverless) {
      const io = new IntersectionObserver(([e]) => (e.isIntersecting ? play() : pause()), { threshold: 0.2 });
      io.observe(v);
      return () => io.disconnect();
    }

    /* Hover: play from the start while over the tile, rewind on leave. */
    const host = v.closest<HTMLElement>(".tile") ?? v;
    host.addEventListener("mouseenter", play);
    host.addEventListener("mouseleave", stop);
    return () => {
      host.removeEventListener("mouseenter", play);
      host.removeEventListener("mouseleave", stop);
    };
  }, [mode]);
  return (
    <video ref={ref} className={className} style={style} src={src} poster={poster} muted loop playsInline preload="auto"
      aria-label={mode === "hover" ? "제품 시연 영상 — 마우스를 올리면 재생됩니다" : "제품 시연 영상"} />
  );
}

/* Portrait phone frame — marco's bleeding-phone tile, sized by width. */
export function Phone({ children, width = 250, style, aspect = "1206 / 2136" }: { children: React.ReactNode; width?: number; style?: React.CSSProperties; aspect?: string }) {
  return (
    <div className="phone" style={{ width, aspectRatio: aspect, ...style }}>
      <div className="phone-screen" style={{ position: "relative" }}>
        <div className="notch" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 2 }} />
        {children}
      </div>
    </div>
  );
}

export function Pic({ img, className, style, sizes = "(max-width: 640px) 100vw, 700px", priority = false }: { img: Img; className?: string; style?: React.CSSProperties; sizes?: string; priority?: boolean }) {
  return <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className={className} style={{ display: "block", width: "100%", height: "auto", ...style }} sizes={sizes} priority={priority} />;
}

/* Renders any Media for a project-page tile (fills the tile). */
export function MediaBlock({ media, big = false }: { media: Media; big?: boolean }) {
  if (media.type === "video" && media.landscape) {
    return (
      <div style={{ position: "absolute", inset: 32, display: "flex", alignItems: "center" }}>
        <div className="win" style={{ width: "100%", aspectRatio: "1440 / 938", background: "#0f1117", position: "relative", overflow: "hidden" }}>
          <AutoVideo src={media.src} poster={media.poster} mode="auto" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    );
  }
  if (media.type === "video") {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 44 }}>
        <Phone width={big ? 290 : 270} style={{ maxHeight: "100%" }} aspect={media.aspect}>
          <AutoVideo src={media.src} poster={media.poster} mode="auto" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </Phone>
      </div>
    );
  }
  if (media.type === "gallery") {
    return (
      <div className="gallery">
        {media.images.map((im) => (
          <div key={im.src} className="win gallery-item">
            <Image src={im.src} alt={im.alt} width={im.w} height={im.h} sizes="560px" style={{ height: "100%", width: "auto", display: "block" }} />
          </div>
        ))}
      </div>
    );
  }
  const { img, frame = "win" } = media;
  if (frame === "phone") {
    return (
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 44 }}>
        <Phone width={270}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}><Pic img={img} sizes="300px" style={{ width: "100%" }} /></div>
        </Phone>
      </div>
    );
  }
  if (frame === "none") {
    return <div className="cover"><Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 700px" style={{ objectFit: "cover", objectPosition: img.pos ?? "center" }} /></div>;
  }
  return (
    <div style={{ position: "absolute", inset: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="win" style={{ width: "100%", maxHeight: "100%", overflow: "hidden" }}>
        <Pic img={img} sizes="(max-width: 640px) 100vw, 700px" />
      </div>
    </div>
  );
}
