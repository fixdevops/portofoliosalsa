import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "../data/content";

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  index: number;
  isLeft: boolean;
  isVisible: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  organization,
  description,
  index,
  isLeft,
  isVisible,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 40px 1fr",
        gap: "0",
        alignItems: "start",
        marginBottom: "2.5rem",
      }}
      className="timeline-row"
    >
      {/* Left content */}
      <div style={{ paddingRight: "2rem" }}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className="glass-card timeline-card"
            style={{ padding: "1.5rem" }}
          >
            <TimelineCard
              year={year}
              title={title}
              organization={organization}
              description={description}
            />
          </motion.div>
        )}
      </div>

      {/* Central dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "1.2rem",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1, type: "spring" }}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "var(--rose-gold)",
            border: "3px solid var(--cream)",
            boxShadow: "0 0 0 3px rgba(201,149,108,0.35)",
            zIndex: 2,
            position: "relative",
          }}
        />
      </div>

      {/* Right content */}
      <div style={{ paddingLeft: "2rem" }}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className="glass-card timeline-card"
            style={{ padding: "1.5rem" }}
          >
            <TimelineCard
              year={year}
              title={title}
              organization={organization}
              description={description}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const TimelineCard: React.FC<{
  year: string;
  title: string;
  organization: string;
  description: string;
}> = ({ year, title, organization, description }) => (
  <>
    <span
      style={{
        display: "inline-block",
        padding: "0.25rem 0.85rem",
        background: "rgba(201,149,108,0.12)",
        border: "1px solid rgba(201,149,108,0.3)",
        borderRadius: "var(--radius-full)",
        fontSize: "0.78rem",
        fontWeight: 600,
        color: "var(--rose-gold)",
        letterSpacing: "0.04em",
        marginBottom: "0.75rem",
      }}
    >
      {year}
    </span>
    <h3
      style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.1rem",
        fontWeight: 600,
        color: "var(--dark)",
        marginBottom: "0.3rem",
        lineHeight: 1.3,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: "0.85rem",
        fontWeight: 600,
        color: "#9b85d0",
        letterSpacing: "0.02em",
        marginBottom: "0.6rem",
      }}
    >
      {organization}
    </p>
    <p
      style={{
        fontSize: "0.9rem",
        color: "var(--text-muted)",
        lineHeight: 1.7,
      }}
    >
      {description}
    </p>
  </>
);

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        padding: "5rem 0",
        background: "var(--cream)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Pengalaman &amp; Pencapaian</h2>
          <p className="section-subtitle">
            Perjalanan kepemimpinan dan kontribusi dalam berbagai kegiatan organisasi dan publik.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div
          style={{
            position: "relative",
            marginTop: "1rem",
          }}
          className="timeline-wrapper"
        >
          {/* Central line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "0",
              bottom: "0",
              width: "2px",
              background:
                "linear-gradient(180deg, transparent 0%, var(--rose-gold) 8%, var(--lavender) 92%, transparent 100%)",
            }}
            className="timeline-line"
          />

          {content.experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              year={exp.year}
              title={exp.title}
              organization={exp.organization}
              description={exp.description}
              index={i}
              isLeft={i % 2 === 0}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-wrapper .timeline-row {
            grid-template-columns: 24px 1fr !important;
            gap: 0 !important;
          }
          .timeline-wrapper .timeline-row > div:first-child {
            display: none !important;
          }
          .timeline-wrapper .timeline-row > div:nth-child(2) {
            padding-top: 1.2rem !important;
          }
          .timeline-wrapper .timeline-row > div:nth-child(3) {
            padding-left: 1rem !important;
            padding-right: 0 !important;
            display: block !important;
          }
          .timeline-line {
            left: 11px !important;
            transform: none !important;
          }
          .timeline-card {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
