import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section
      id="profile"
      className="py-16 md:py-[120px] px-6 bg-[var(--surface)]"
      aria-labelledby="profile-heading"
    >
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <Reveal className="text-center mb-12 md:mb-20">
          <span className="block text-[var(--accent-coral)] text-[12px] tracking-[.25em] uppercase font-semibold mb-3">
            — 01 —
          </span>
          <h2
            id="profile-heading"
            className="text-[clamp(32px,4.5vw,48px)] font-bold tracking-[-0.02em] leading-[1.2]"
          >
            Profile
          </h2>
          <p className="text-[var(--text-mute)] mt-4 text-[15px]">
            A little about me.
          </p>
        </Reveal>

        {/* Grid */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-center max-lg:gap-10">
          {/* Avatar */}
          <div className="relative mx-auto max-w-[340px] w-full">
            {/* Outer decorative ring — outside the overflow:hidden circle */}
            <span
              className="absolute pointer-events-none rounded-full border border-[var(--border)] z-10"
              style={{ inset: "-8px" }}
              aria-hidden
            />
            {/* Circle with gradient bg + image */}
            <div
              className="relative w-full aspect-square rounded-full overflow-hidden shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-coral) 0%, var(--accent-butter) 50%, var(--accent-sage) 100%)",
              }}
            >
              {/* Inner ring overlay */}
              <span
                className="absolute pointer-events-none rounded-full z-[2] border border-[rgba(255,255,255,0.45)]"
                style={{ inset: "10px" }}
                aria-hidden
              />
              <Image
                src="/avatar.png"
                alt="syake-ichiro のプロフィール写真"
                fill
                className="object-cover z-[1]"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] text-[var(--text-soft)] uppercase tracking-[.2em] mb-3">
              {profile.meta}
            </p>
            <h3 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">
              {profile.name}
            </h3>
            <p className="text-[var(--text-mute)] text-[15px] leading-[1.9] mb-8">
              {profile.bio}
            </p>

            {/* Facts */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-[var(--border)]">
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="block text-[32px] font-bold text-[var(--text)] leading-none">
                    {fact.num}
                  </span>
                  <div className="text-[12px] text-[var(--text-mute)] mt-1">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
