import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "../data/content";

// ── Custom SVG icons (lebih bagus dari react-icons) ──
const IconLeadership = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    <path d="M12 2 L13.5 6 L18 6 L14.5 8.5 L16 13 L12 10.5 L8 13 L9.5 8.5 L6 6 L10.5 6Z" fill="currentColor" stroke="none" opacity="0.3"/>
  </svg>
);

const IconMic = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

const IconOrg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="5" rx="1.5"/>
    <rect x="1" y="14" width="6" height="5" rx="1.5"/>
    <rect x="17" y="14" width="6" height="5" rx="1.5"/>
    <path d="M12 7v4M12 11H4v3M12 11h8v3"/>
  </svg>
);

const IconComm = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <line x1="9" y1="10" x2="15" y2="10"/>
    <line x1="9" y1="13" x2="13" y2="13"/>
  </svg>
);

const IconEvent = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
  </svg>
);

const IconProblem = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

type IconKey = "crown" | "mic" | "sitemap" | "comments" | "calendar" | "puzzle";
const iconMap: Record<IconKey, React.ReactElement> = {
  crown:    <IconLeadership />,
  mic:      <IconMic />,
  sitemap:  <IconOrg />,
  comments: <IconComm />,
  calendar: <IconEvent />,
  puzzle:   <IconProblem />,
};

const skillColors = [
  { from: "#FF2D78", to: "#ff6ba8" },
  { from: "#ff6ba8", to: "#FFB3CE" },
  { from: "#FF2D78", to: "#D4005F" },
  { from: "#ff6ba8", to: "#FF2D78" },
  { from: "#D4005F", to: "#ff6ba8" },
  { from: "#FF2D78", to: "#FFB3CE" },
];

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
  index: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon, index, isVisible }) => {
  const [barWidth, setBarWidth] = useState(0);
  const col = skillColors[index % skillColors.length];
  const iconEl = iconMap[icon as IconKey] ?? <IconLeadership />;

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setBarWidth(level), index * 110 + 280);
      return () => clearTimeout(t);
    } else {
      setBarWidth(0);
    }
  }, [isVisible, level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 14px 40px rgba(255,45,120,0.22)" }}
      className="glass-card"
      style={{ padding: "1.6rem 1.4rem", display: "flex", flexDirection: "column", gap: "1rem", cursor: "default" }}
    >
      {/* Icon + name + percent */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            background: `linear-gradient(135deg, ${col.from}20, ${col.from}38)`,
            border: `1.5px solid ${col.from}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: col.from,
            flexShrink: 0,
          }}
        >
          {iconEl}
        </div>
        <span style={{ fontWeight: 600, fontSize: "0.94rem", color: "var(--dark)", flex: 1, lineHeight: 1.3 }}>
          {name}
        </span>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: col.from }}>
          {level}%
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", height: "7px", background: "rgba(255,45,120,0.1)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${barWidth}%`,
            background: `linear-gradient(90deg, ${col.from}, ${col.to})`,
            borderRadius: "var(--radius-full)",
            transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: `0 0 8px ${col.from}55`,
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "5rem 0", background: "linear-gradient(180deg, rgba(255,45,120,0.04) 0%, var(--cream) 100%)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Keahlian &amp; Kompetensi</h2>
          <p className="section-subtitle">
            Kemampuan yang terus diasah melalui pengalaman nyata di organisasi dan berbagai kegiatan.
          </p>
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.2rem" }}
          className="skills-grid"
        >
          {content.skills.map((skill, i) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} index={i} isVisible={isInView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
