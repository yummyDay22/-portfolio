import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowLeft = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
);
export const GridIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></svg>
);
export const UserIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
);
export const CopyIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></svg>
);
export const CheckIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="m5 12 5 5L20 7" /></svg>
);
export const CloseIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const MailIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 8 9 6 9-6" /></svg>
);
export const TargetIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
);
export const BoltIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);
export const AgentIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="4" y="7" width="16" height="12" rx="4" /><path d="M12 3v4M9 13h.01M15 13h.01M2 12h2M20 12h2" /></svg>
);
export const ChartIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>
);
export const MicIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
);
export const SparkIcon = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>
);

/* brand marks — simplified, filled */
const fill = { fill: "currentColor", stroke: "none" } as const;
export const XLogo = (p: P) => (
  <svg viewBox="0 0 24 24" {...fill} {...p}><path d="M17.5 3h3l-7.1 8.1L21.5 21h-6.2l-4.6-6-5.3 6h-3l7.6-8.7L2.5 3h6.3l4.2 5.5L17.5 3Zm-1.1 16.2h1.7L7.6 4.7H5.8l10.6 14.5Z" /></svg>
);
export const LinkedInLogo = (p: P) => (
  <svg viewBox="0 0 24 24" {...fill} {...p}><path d="M6.4 8.6H3V21h3.4V8.6ZM4.7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 13.4c0-3.6-2-5.1-4.4-5.1-1.9 0-2.9 1-3.4 1.8V8.6H9.9V21h3.4v-6.3c0-1.7.4-3.2 2.4-3.2 1.9 0 2 1.7 2 3.3V21H21v-7.6Z" /></svg>
);
export const GitHubLogo = (p: P) => (
  <svg viewBox="0 0 24 24" {...fill} {...p}><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7 1 .7 1.9v2.9c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg>
);
export const ThreadsLogo = (p: P) => (
  <svg viewBox="0 0 24 24" {...fill} {...p}><path d="M12.2 22c-3.1 0-5.5-1-7-3.1C3.9 17 3.2 14.6 3.2 12c0-2.7.7-5.1 2-6.9C6.7 3 9.1 2 12.2 2c2.5 0 4.6.7 6.1 2.1 1.1 1 1.9 2.3 2.3 3.9l-2.2.6c-.6-2.5-2.6-4.3-6.2-4.3-2.3 0-4 .7-5.1 2.2-1 1.3-1.5 3.2-1.5 5.5s.5 4.2 1.5 5.5c1.1 1.5 2.8 2.2 5.1 2.2 2.1 0 3.6-.5 4.5-1.6.7-.8.9-1.8.8-2.6-.1-.6-.4-1.1-.9-1.5-.1 1.2-.5 2.1-1.2 2.8-.9.9-2.1 1.3-3.5 1.2-1.1-.1-2-.4-2.7-1-.8-.7-1.2-1.6-1.1-2.6.1-1.9 1.6-3.2 3.9-3.4.9-.1 1.8 0 2.6.2 0-.7-.3-1.2-.7-1.5-.5-.4-1.2-.6-2-.6-1.1 0-2 .4-2.5 1.2l-1.8-1.2c.9-1.4 2.4-2.2 4.3-2.2 1.4 0 2.6.4 3.5 1.2.9.8 1.4 1.9 1.5 3.4v.2c1.5.7 2.4 1.9 2.7 3.4.3 1.6-.1 3.3-1.4 4.7-1.4 1.6-3.5 2.4-6.2 2.4Zm.6-8.9h-.5c-1.2.1-1.8.6-1.8 1.4 0 .3.1.6.4.9.3.3.8.4 1.3.5.8.1 1.4-.1 1.9-.5.4-.4.6-1.1.7-2-.6-.2-1.3-.3-2-.3Z" /></svg>
);
export const YouTubeLogo = (p: P) => (
  <svg viewBox="0 0 24 24" {...fill} {...p}><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" /></svg>
);
export const ReadCvLogo = (p: P) => (
  <svg viewBox="0 0 24 24" {...fill} {...p}><path d="M7 3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm1 5v2h8V8H8Zm0 4v2h8v-2H8Zm0 4v2h5v-2H8Z" /></svg>
);

export const socialIcon: Record<string, (p: P) => React.JSX.Element> = {
  x: XLogo, linkedin: LinkedInLogo, github: GitHubLogo, threads: ThreadsLogo, youtube: YouTubeLogo, readcv: ReadCvLogo,
};
export const serviceIcon: Record<string, (p: P) => React.JSX.Element> = {
  target: TargetIcon, bolt: BoltIcon, agent: AgentIcon, chart: ChartIcon,
};
