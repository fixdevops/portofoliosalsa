import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCrown,
  FaMicrophone,
  FaSitemap,
  FaComments,
  FaCalendarAlt,
  FaPuzzlePiece,
} from "react-icons/fa";
import { content } from "../data/content";

type IconKey = "crown" | "mic" | "sitemap" | "comments" | "calendar" | "puzzle";

const iconMap: Record<IconKey, React.ReactElement> = {
  crown: <FaCrown />,
  mic: <FaMicrophone />,
  sitemap: <FaSitemap />,
  comments: <FaComments />,
  calendar: <FaCalendarAlt />,
  puzzle: <FaPuzzlePiece />,
};

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
  index: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon, index, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(level), index * 120 + 300);
      return () => clearTimeout(timer);
    } else {
      setWidth(0);
    }
  }, [isVisible, level, index]);

  const iconEl = iconMap[icon as IconKey] ?? <FaCrown />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(201,149,108,0.22)" }}
      className="glass-card"
      style={{
        padding: "1.75rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        cursor: "default",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Icon + name row */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-sm)",
            background: "linear-gradient(135deg, rgba(247,197,204,0.5), rgba(201,184,232,0.5))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.25rem",
            color: "var(--rose-gold)",
            flexShrink: 0,
          }}
        >
          {iconEl}
        </div>
        <div>
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "var(--dark)",
              lineHeight: 1.3,
            }}
          >
            {name}
          </div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--rose-gold)",
          }}
        >
          {level}%
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "100%",
          height: "7px",
          background: "rgba(247,197,204,0.3)",
          borderRadius: "var(--radius-full)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: "linear-gradient(90deg, var(--blush), var(--rose-gold))",
            borderRadius: "var(--radius-full)",
            transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
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
      style={{
        padding: "5rem 0",
        background:
          "linear-gradient(180deg, rgba(201,184,232,0.12) 0%, rgba(255,248,245,1) 100%)",
      }}
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
          className="skills-grid"
        >
          {content.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              index={i}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
