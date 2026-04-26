import { Reveal } from "@/components/ui/Reveal";
import { socials, contactEmail } from "@/lib/data";
import type { Social } from "@/lib/data";

function SocialIcon({ icon }: { icon: Social["icon"] }) {
  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (icon === "note") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M3 3h6.5l8 11.5V3H21v18h-6L7 9.5V21H3V3z" />
      </svg>
    );
  }
  return null;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[160px] px-6 text-center bg-[var(--bg)]"
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
            Let&apos;s{" "}
            <em className="not-italic text-[var(--accent-coral)]">talk</em>
          </h2>
          <p className="text-[var(--text-mute)] text-[16px] max-w-[480px] mx-auto mb-12">
            お仕事のご相談・雑談、なんでもお気軽にどうぞ。
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-[10px] px-9 py-[18px] bg-[var(--text)] text-[var(--bg)] rounded-full font-semibold text-[15px] mb-14 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            ✉ {contactEmail}
          </a>

          {/* Socials */}
          <div className="flex gap-4 justify-center">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
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
