import { Reveal } from "@/components/ui/Reveal";
import { socials, contactEmail } from "@/lib/data";
import type { Social } from "@/lib/data";
import { SiGithub, SiZenn } from "react-icons/si";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: Social["icon"] }) {
  if (icon === "x")      return <XIcon />;
  if (icon === "github") return <SiGithub className="w-5 h-5" aria-hidden />;
  if (icon === "zenn")   return <SiZenn   className="w-5 h-5" aria-hidden />;
  return null;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-[160px] px-6 text-center bg-[var(--bg)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-content mx-auto">
        <Reveal>
          <span className="block text-[var(--accent-coral)] text-[12px] tracking-[.25em] uppercase font-semibold mb-4">
            — 04 —
          </span>
          <h2
            id="contact-heading"
            className="text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] tracking-[-0.03em] mb-8"
          >
            Contact
          </h2>
          <p className="text-[var(--text-mute)] text-[16px] max-w-[480px] mx-auto mb-12">
            お仕事のご相談・雑談、なんでもお気軽にどうぞ。
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-[10px] px-6 md:px-9 py-[18px] bg-[var(--text)] text-[var(--bg)] rounded-full font-semibold text-[13px] md:text-[15px] mb-10 md:mb-14 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg break-all"
          >
            ✉ {contactEmail}
          </a>

          {/* Socials */}
          <div className="flex gap-4 justify-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-[52px] h-[52px] rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-mute)] transition-all duration-[250ms] hover:bg-[var(--text)] hover:text-[var(--bg)] hover:border-[var(--text)] hover:-translate-y-[3px]"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
