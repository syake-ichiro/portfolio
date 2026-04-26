import Image from "next/image";

export default function Hero() {
  return (
    <header
      className="relative min-h-screen text-[#F5EDE0] overflow-hidden isolate"
      aria-label="ヒーローセクション"
    >
      {/* 1) Photo — Ken Burns */}
      <div className="absolute inset-0 z-0 animate-hero-zoom">
        <Image
          src="/hero-desk.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "saturate(.85) contrast(1.1) brightness(.78)" }}
        />
      </div>

      {/* 2) Vertical gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,12,20,.55) 0%, rgba(8,12,20,.10) 30%, rgba(8,12,20,.35) 70%, rgba(8,12,20,.85) 100%)",
        }}
        aria-hidden
      />

      {/* 3) Vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.55) 100%)",
        }}
        aria-hidden
      />

      {/* 4) Color grade */}
      <div
        className="absolute inset-0 z-[3] mix-blend-overlay pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(72,86,120,.18) 0%, rgba(180,140,90,.12) 100%)",
        }}
        aria-hidden
      />

      {/* 5) Film grain */}
      <div
        className="absolute inset-0 z-[4] opacity-[.12] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/></svg>\")",
        }}
        aria-hidden
      />

      {/* 6) Film bars */}
      <div
        className="absolute top-0 left-0 right-0 h-9 bg-[#050810] z-[5] max-md:hidden"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-9 bg-[#050810] z-[5] max-md:hidden"
        aria-hidden
      />

      {/* 7) Text content */}
      <div className="relative z-10 max-w-content mx-auto px-6 min-h-screen flex flex-col justify-center pt-[140px] pb-[120px]">
        <span className="inline-flex items-center gap-[10px] text-[12px] tracking-[.3em] uppercase text-[rgba(245,237,224,.75)] mb-6 font-medium">
          <span
            className="inline-block w-8 h-px bg-[rgba(245,237,224,.5)]"
            aria-hidden
          />
          PORTFOLIO &mdash; 2026
        </span>

        <h1 className="text-[clamp(56px,9vw,120px)] leading-[1.0] tracking-[-0.03em] font-bold mb-6">
          syake-ichiro
          <span className="block text-[clamp(20px,2.4vw,28px)] font-normal text-[rgba(245,237,224,.8)] tracking-[.02em] mt-4">
            Web Engineer — building thoughtful things on the web.
          </span>
        </h1>

        <p className="text-[clamp(15px,1.6vw,17px)] text-[rgba(245,237,224,.72)] max-w-[520px] mb-12 leading-[1.8]">
          ものづくりが好きな Web エンジニアです。
          <br />
          フロントエンドからバックエンドまで、丁寧に一つずつ。
        </p>

        <div className="flex gap-[14px] flex-wrap items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full font-semibold text-[14px] bg-[#F5EDE0] text-[#1a1612] transition-transform duration-200 hover:-translate-y-0.5"
          >
            See my projects →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-[14px] rounded-full font-semibold text-[14px] bg-transparent text-[#F5EDE0] border border-[rgba(245,237,224,.4)] hover:bg-[rgba(245,237,224,.1)] transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute right-6 bottom-[60px] z-10 flex items-center gap-3 text-[11px] tracking-[.25em] uppercase text-[rgba(245,237,224,.6)]"
        aria-hidden
      >
        SCROLL
        <span
          className="inline-block w-px h-10 animate-dropline"
          style={{
            background:
              "linear-gradient(180deg, rgba(245,237,224,.5), transparent)",
          }}
        />
      </div>
    </header>
  );
}
