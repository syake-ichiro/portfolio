import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects, archiveProjects } from "@/lib/data";

const featuredThumbColors = [
  "linear-gradient(135deg, var(--accent-sky), var(--accent-sage))",
  "linear-gradient(135deg, var(--accent-coral), var(--accent-butter))",
];

export default function Works() {
  return (
    <section
      id="projects"
      className="py-[120px] px-6 bg-[var(--surface)]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <Reveal className="text-center mb-20">
          <span className="block text-[var(--accent-coral)] text-[12px] tracking-[.25em] uppercase font-semibold mb-3">
            — 03 —
          </span>
          <h2
            id="projects-heading"
            className="text-[clamp(32px,4.5vw,48px)] font-bold tracking-[-0.02em] leading-[1.2]"
          >
            Projects
          </h2>
          <p className="text-[var(--text-mute)] mt-4 text-[15px]">
            Selected works — これまでに関わった/個人で作ったもの。
          </p>
        </Reveal>

        {/* Featured: 2 large cards */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[100px]">
          {featuredProjects.map((project, i) => (
            <article
              key={project.title}
              className="rounded-3xl overflow-hidden bg-[var(--bg)] border border-[var(--border)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[6px] hover:shadow-lg cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className="aspect-[16/10] flex items-center justify-center text-[22px] font-bold text-[rgba(255,255,255,0.95)] tracking-[.02em]"
                style={{ background: featuredThumbColors[i % featuredThumbColors.length] }}
                aria-hidden
              >
                Project 0{i + 1}
              </div>
              {/* Body */}
              <div className="px-7 pt-6 pb-7">
                <div className="flex gap-2 text-[11px] text-[var(--text-mute)] mb-3 uppercase tracking-[.15em]">
                  <span>{project.year}</span>
                  <span>·</span>
                  <span>{project.category}</span>
                </div>
                <h3 className="text-[22px] font-bold mb-2 tracking-[-0.01em]">
                  {project.title}
                </h3>
                <p className="text-[var(--text-mute)] text-[14px] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-[10px] py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--text-mute)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-[6px] text-[var(--accent-coral)] font-semibold text-[13px] mt-4"
                  >
                    View project ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </Reveal>

        {/* Archive header */}
        <Reveal className="flex items-baseline justify-between pb-5 border-b border-[var(--border)]">
          <h3 className="text-[13px] font-bold tracking-[.2em] uppercase text-[var(--text)]">
            All projects
          </h3>
          <span className="text-[12px] text-[var(--text-mute)] tracking-[.1em] uppercase">
            {archiveProjects.length} projects
          </span>
        </Reveal>

        {/* Archive list */}
        <Reveal>
          <ul className="list-none p-0 m-0">
            {archiveProjects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.link ?? "#"}
                  className="archive-row group grid items-center border-b border-[var(--border)] py-[22px] px-3 no-underline text-inherit max-md:grid-cols-[60px_1fr_36px] max-md:gap-x-4 max-md:gap-y-2"
                  style={{
                    gridTemplateColumns: "72px 1fr auto 36px",
                    gap: "24px",
                  }}
                >
                  <span className="text-[13px] text-[var(--text-mute)] tabular-nums tracking-[.05em]">
                    {project.year}
                  </span>
                  <div>
                    <h4 className="text-[17px] font-bold text-[var(--text)] mb-1 tracking-[-0.01em]">
                      {project.name}
                    </h4>
                    <p className="text-[13px] text-[var(--text-mute)] leading-[1.5]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-[6px] flex-wrap justify-end max-md:col-start-2 max-md:col-end-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-[10px] py-1 bg-[var(--bg)] border border-[var(--border)] rounded-full text-[var(--text-mute)] transition-all duration-200 group-hover:bg-[var(--surface)] group-hover:border-[var(--text-soft)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] text-[var(--text-mute)] text-[14px] font-semibold transition-all duration-[250ms] group-hover:bg-[var(--accent-coral)] group-hover:border-[var(--accent-coral)] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-md:row-span-2">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* More link */}
        <Reveal className="text-center mt-10">
          <a
            href="https://github.com/syake-ichiro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--text-mute)] px-6 py-3 border border-[var(--border)] rounded-full transition-all duration-200 hover:text-[var(--text)] hover:border-[var(--text)]"
          >
            View all on GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
