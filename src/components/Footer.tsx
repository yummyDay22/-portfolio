import { site } from "@/content/site";
import { socialIcon } from "./Icons";
import CopyEmail from "./CopyEmail";

/* danielsun's footer: "지금 협업 제안을 받고 있어요" + email, "소셜에서 만나요" + icons — as two wide tiles. */
export default function Footer() {
  return (
    <>
      <div className="tile span-2" style={{ minHeight: 220 }}>
        <p className="tile-p" style={{ color: "var(--faint)" }}>지금 협업 제안을 받고 있어요</p>
        <div className="email-row">
          <a className="email" href={`mailto:${site.email}`}>{site.email}</a>
          <CopyEmail email={site.email} />
        </div>
        <p className="tile-p" style={{ marginTop: 20, fontSize: 14, lineHeight: "20px" }}>
          {site.location}에 있습니다. 어디 있는 팀이든 환영해요.
        </p>
      </div>
      <div className="tile span-2" style={{ minHeight: 220 }}>
        <p className="tile-p" style={{ color: "var(--faint)" }}>소셜에서 만나요</p>
        <div className="socials" style={{ marginTop: 14 }}>
          {site.socials.map((s) => {
            const Icon = socialIcon[s.id];
            return (
              <a key={s.id} className="circle-btn" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                <Icon />
              </a>
            );
          })}
        </div>
        <p className="tile-p" style={{ marginTop: 20, fontSize: 14, lineHeight: "20px" }}>
          {site.fullName} — {site.role}
        </p>
      </div>
    </>
  );
}
