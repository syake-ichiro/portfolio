import type { IconType } from "react-icons";
import {
  SiHtml5, SiJavascript, SiTypescript, SiAngular, SiNextdotjs,
  SiPython, SiNodedotjs,
  SiPostgresql, SiDocker, SiLinux,
  SiGit, SiFigma, SiSlack, SiNotion, SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

const techIcons: Record<string, { Icon: IconType; color: string }> = {
  "HTML / CSS":      { Icon: SiHtml5,      color: "#E34F26" },
  "JavaScript":      { Icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript":      { Icon: SiTypescript, color: "#3178C6" },
  "Angular":         { Icon: SiAngular,    color: "#DD0031" },
  "Next.js":         { Icon: SiNextdotjs,  color: "#000000" },
  "Python / Django": { Icon: SiPython,     color: "#3776AB" },
  "Java":            { Icon: FaJava,       color: "#007396" },
  "Node.js":         { Icon: SiNodedotjs,  color: "#339933" },
  "PostgreSQL":      { Icon: SiPostgresql, color: "#4169E1" },
  "Docker":          { Icon: SiDocker,     color: "#2496ED" },
  "Linux":           { Icon: SiLinux,      color: "#FCC624" },
  "Git / GitHub":    { Icon: SiGit,        color: "#F05032" },
  "Figma":           { Icon: SiFigma,      color: "#F24E1E" },
  "Slack":           { Icon: SiSlack,      color: "#4A154B" },
  "Notion":          { Icon: SiNotion,     color: "#000000" },
  "Postman":         { Icon: SiPostman,    color: "#FF6C37" },
};

const iconColors = [
  "bg-[var(--accent-coral)] text-white",
  "bg-[var(--accent-sage)] text-white",
  "bg-[var(--accent-sky)] text-white",
  "bg-[var(--accent-butter)] text-[var(--text)]",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-[120px] px-6 bg-[var(--bg)]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <Reveal className="text-center mb-20">
          <span className="block text-[var(--accent-coral)] text-[12px] tracking-[.25em] uppercase font-semibold mb-3">
            — 02 —
          </span>
          <h2
            id="skills-heading"
            className="text-[clamp(32px,4.5vw,48px)] font-bold tracking-[-0.02em] leading-[1.2]"
          >
            Skills
          </h2>
          <p className="text-[var(--text-mute)] mt-4 text-[15px]">
            What I work with — 普段使っている技術スタックをカテゴリ別に。
          </p>
        </Reveal>

        {/* 2×2 grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, i) => (
            <div
              key={category.title}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-11 h-11 rounded-[12px] flex items-center justify-center text-[18px] flex-shrink-0 ${iconColors[i % iconColors.length]}`}
                  aria-hidden
                >
                  {category.icon}
                </div>
                <h3 className="text-[20px] font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const tech = techIcons[skill.name];
                  return (
                    <span
                      key={skill.name}
                      className="skill-tag inline-flex items-center gap-[6px] px-[14px] py-2 bg-[var(--bg)] border border-[var(--border)] rounded-full text-[13px] text-[var(--text)] font-medium"
                    >
                      {tech && (
                        <tech.Icon
                          style={{ color: tech.color }}
                          className="w-[14px] h-[14px] flex-shrink-0"
                          aria-hidden
                        />
                      )}
                      {skill.name}
                      {skill.level && (
                        <span className="text-[11px] text-[var(--text-soft)]">
                          / {skill.level}
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
