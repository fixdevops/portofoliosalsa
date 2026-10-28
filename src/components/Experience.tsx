import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { content } from "../data/content";

// ── Icon per tipe pengalaman ──
const IconCrown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2 19l2-9 4.5 4L12 5l3.5 9L20 10l2 9H2z" opacity="0.85"/>
  </svg>
);
const IconMic = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
    <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
    <line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="9" y1="22" x2="15" y2="22"/>
  </svg>
);
const IconOrg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <rect x="9" y="2" width="6" height="4" rx="1"/>
    <rect x="1" y="15" width="6" height="4" rx="1"/>
    <rect x="17" y="15" width="6" height="4" rx="1"/>
    <path d="M12 6v4M12 10H4v5M12 10h8v5"/>
  </svg>
);
const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
);

const expIcons = [IconCrown, IconOrg, IconMic, IconMic, IconStar, IconOrg];

interface CardProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  index: number;
  isLeft: boolean;
  isVisible: boolean;
}

const TimelineCard: React.FC<CardProps> = ({ year, title, organization, description, index, isLeft, isVisible }) => {
  const Icon = expIcons[index % expIcons.length];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr",
        alignItems: "start",
        marginBottom: "2.25rem",
      }}
      className="tl-row"
    >
      {/* LEFT slot */}
      <div className="tl-slot-left" style={{ paddingRight: "1.75rem" }}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -56, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, boxShadow: "0 14px 40px rgba(255,45,120,0.2)" }}
            className="glass-card tl-card"
            style={{ padding: "1.4rem 1.5rem", position: "relative", overflow: "hidden" }}
          >
            <CardContent year={year} title={title} organization={organization} description={description} Icon={Icon} />
          </motion.div>
        )}
      </div>

      {/* CENTER dot */}
      <div className="tl-slot-dot" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "1.1rem" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.14 + 0.1, type: "spring", stiffness: 200 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          {/* Pulse ring */}
          <motion.div
            animate={isVisible ? { scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2.2, delay: index * 0.14 + 0.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: "-6px",
              borderRadius: "50%",
              background: "rgba(255,45,120,0.3)",
              pointerEvents: "none",
            }}
          />
          {/* Dot */}
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF2D78, #ff6ba8)",
              border: "3px solid var(--cream)",
              boxShadow: "0 0 0 2px rgba(255,45,120,0.4), 0 4px 12px rgba(255,45,120,0.3)",
            }}
          />
        </motion.div>
      </div>

      {/* RIGHT slot — di mobile selalu tampil (semua card) */}
      <div className="tl-slot-right" style={{ paddingLeft: "1.75rem" }}>
        {/* Desktop: hanya card kanan (isLeft=false). Mobile: semua card tampil lewat CSS */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -56 : 56, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5, boxShadow: "0 14px 40px rgba(255,45,120,0.2)" }}
          className="glass-card tl-card"
          style={{
            padding: "1.4rem 1.5rem",
            position: "relative",
            overflow: "hidden",
            // Desktop: sembunyikan card kiri di slot kanan
            display: !isLeft ? undefined : "none",
          }}
        >
          <CardContent year={year} title={title} organization={organization} description={description} Icon={Icon} />
        </motion.div>
        {/* Mobile clone untuk card isLeft — hanya muncul di mobile via CSS */}
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card tl-card tl-mobile-only"
            style={{ padding: "1.4rem 1.5rem", position: "relative", overflow: "hidden" }}
          >
            <CardContent year={year} title={title} organization={organization} description={description} Icon={Icon} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const CardContent: React.FC<{
  year: string; title: string; organization: string;
  description: string; Icon: React.FC;
}> = ({ year, title, organization, description, Icon }) => (
  <>
    {/* Pink left accent bar */}
    <div
      style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0,
        width: "3.5px",
        background: "linear-gradient(180deg, #FF2D78, #FFB3CE)",
        borderRadius: "4px 0 0 4px",
      }}
    />

    {/* Year badge */}
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.22rem 0.8rem",
        background: "rgba(255,45,120,0.1)",
        border: "1px solid rgba(255,45,120,0.22)",
        borderRadius: "var(--radius-full)",
        fontSize: "0.75rem",
        fontWeight: 700,
        color: "var(--pink)",
        letterSpacing: "0.04em",
        marginBottom: "0.75rem",
      }}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      {year}
    </span>

    {/* Icon + Title */}
    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.3rem" }}>
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, rgba(255,45,120,0.15), rgba(255,107,168,0.15))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--pink)",
          flexShrink: 0,
          marginTop: "2px",
        }}
      >
        <Icon />
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "var(--dark)",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
    </div>

    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--pink)", marginBottom: "0.55rem", paddingLeft: "2.5rem" }}>
      {organization}
    </p>
    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.72, paddingLeft: "0.1rem" }}>
      {description}
    </p>
  </>
);

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Scroll-driven line growth
  const tlRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: tlRef,
    offset: ["start 85%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "5rem 0", background: "var(--cream)" }}
    >
      <div className="container">
        {/* Header with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          <h2 className="section-title">Pengalaman &amp; Pencapaian</h2>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{
              height: "3px",
              width: "80px",
              background: "linear-gradient(90deg, #FF2D78, #FFB3CE)",
              borderRadius: "var(--radius-full)",
              margin: "0 auto 0.75rem",
              transformOrigin: "left",
            }}
          />
          <p className="section-subtitle" style={{ margin: "0 auto 3rem" }}>
            Perjalanan kepemimpinan dan kontribusi dalam berbagai kegiatan organisasi dan publik.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }} className="tl-wrapper" ref={tlRef}>
          {/* Scroll-driven growing line */}
          {/* Track (background) */}
          <div
            className="tl-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "rgba(255,45,120,0.12)",
            }}
          />
          {/* Active fill — grows with scroll */}
          <motion.div
            className="tl-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              width: "2px",
              height: lineHeight,
              background: "linear-gradient(180deg, #FF2D78 0%, #ff6ba8 60%, #FFB3CE 100%)",
              boxShadow: "0 0 8px rgba(255,45,120,0.5)",
              originY: 0,
            }}
          />

          {content.experiences.map((exp, i) => (
            <TimelineCard
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
        /* Desktop: sembunyikan mobile-only clone */
        .tl-mobile-only { display: none !important; }

        @media (max-width: 768px) {
          /* Tampilkan mobile-only clone, sembunyikan slot-kiri */
          .tl-mobile-only { display: block !important; }

          /* Garis pindah ke kiri */
          .tl-wrapper .tl-line {
            left: 14px !important;
            transform: none !important;
          }

          /* Row: dot tipis | konten */
          .tl-wrapper .tl-row {
            grid-template-columns: 32px 1fr !important;
            grid-template-rows: auto !important;
            margin-bottom: 1.75rem !important;
          }

          /* Sembunyikan slot kiri */
          .tl-wrapper .tl-row > .tl-slot-left {
            display: none !important;
          }

          /* Dot → kolom 1 */
          .tl-wrapper .tl-row > .tl-slot-dot {
            grid-column: 1 !important;
            grid-row: 1 !important;
            padding-top: 1rem !important;
          }

          /* Konten → kolom 2 */
          .tl-wrapper .tl-row > .tl-slot-right {
            grid-column: 2 !important;
            grid-row: 1 !important;
            padding-left: 0.85rem !important;
            padding-right: 0 !important;
            display: block !important;
          }

          /* Sembunyikan card desktop (isLeft yang ada di slot kanan) */
          .tl-slot-right > div.tl-card:not(.tl-mobile-only) {
            display: none !important;
          }

          /* Ukuran card mobile */
          .tl-card {
            padding: 1rem 1.1rem !important;
          }
          .tl-card h3 {
            font-size: 0.92rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
