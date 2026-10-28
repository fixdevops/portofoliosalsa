import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { content } from "../data/content";

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.15 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "5rem 0",
        background: "var(--cream)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Avatar column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {/* Decorative avatar circle */}
            <div style={{ position: "relative" }}>
              {/* Outer ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-14px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(201,149,108,0.35)",
                  animation: "float 8s ease-in-out infinite",
                }}
              />
              {/* Second ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-28px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(201,184,232,0.25)",
                }}
              />
              {/* Main circle */}
              <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
                aria-label="Foto profil Juwita Aulia Salsabila"
                role="img"
              >
                <defs>
                  <radialGradient id="avatarBg" cx="50%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#F7C5CC" />
                    <stop offset="60%" stopColor="#C9B8E8" />
                    <stop offset="100%" stopColor="#C9956C" stopOpacity="0.6" />
                  </radialGradient>
                  <clipPath id="circleClip">
                    <circle cx="120" cy="120" r="115" />
                  </clipPath>
                </defs>

                {/* Background circle */}
                <circle cx="120" cy="120" r="115" fill="url(#avatarBg)" />

                {/* Stylized female silhouette */}
                {/* Head */}
                <circle cx="120" cy="88" r="30" fill="rgba(255,255,255,0.85)" />
                {/* Neck */}
                <rect x="113" y="116" width="14" height="16" rx="4" fill="rgba(255,255,255,0.85)" />
                {/* Shoulders & body */}
                <path
                  d="M72 168 C72 140 90 132 120 132 C150 132 168 140 168 168 L168 200 L72 200 Z"
                  fill="rgba(255,255,255,0.85)"
                  clipPath="url(#circleClip)"
                />
                {/* Hair decorative element */}
                <ellipse cx="120" cy="68" rx="33" ry="18" fill="rgba(201,149,108,0.55)" />
                <path
                  d="M87 68 C87 52 95 46 120 46 C145 46 153 52 153 68"
                  fill="rgba(201,149,108,0.55)"
                />

                {/* Decorative floral border elements */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 108;
                  const cx2 = 120 + r * Math.cos(rad);
                  const cy2 = 120 + r * Math.sin(rad);
                  return (
                    <circle
                      key={i}
                      cx={cx2}
                      cy={cy2}
                      r="4"
                      fill={i % 2 === 0 ? "rgba(247,197,204,0.8)" : "rgba(201,184,232,0.8)"}
                    />
                  );
                })}

                {/* Initials overlay */}
                <text
                  x="120"
                  y="230"
                  textAnchor="middle"
                  fontFamily="'Playfair Display', serif"
                  fontSize="11"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.9)"
                  letterSpacing="2"
                >
                  JAS
                </text>
              </svg>
            </div>

            {/* Stats cards below avatar */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { label: "Wakil Ketua Rayon", sub: "PMII 2023–Sekarang" },
                { label: "Mahasiswi Aktif", sub: "Kepemimpinan" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    padding: "0.85rem 1.25rem",
                    textAlign: "center",
                    minWidth: "130px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.92rem",
                      fontWeight: 600,
                      color: "var(--rose-gold)",
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
            }}
          >
            {/* Title */}
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: "0.5rem",
                }}
              >
                Tentang{" "}
                <span style={{ color: "var(--rose-gold)" }}>Saya</span>
              </h2>
              {/* Decorative underline */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "3px",
                    background: "var(--rose-gold)",
                    borderRadius: "2px",
                  }}
                />
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid var(--blush)",
                  }}
                />
                <div
                  style={{
                    width: "24px",
                    height: "3px",
                    background: "var(--lavender)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#4a4a4a",
                lineHeight: 1.85,
              }}
            >
              {content.about.bio}
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#4a4a4a",
                lineHeight: 1.85,
              }}
            >
              {content.about.bio2}
            </p>

            {/* Stylized blockquote */}
            <blockquote
              style={{
                position: "relative",
                padding: "1.25rem 1.5rem 1.25rem 2rem",
                background:
                  "linear-gradient(135deg, rgba(247,197,204,0.15), rgba(201,184,232,0.15))",
                borderLeft: "3.5px solid var(--rose-gold)",
                borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                margin: "0.5rem 0",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "1rem",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "4rem",
                  color: "var(--rose-gold)",
                  lineHeight: 1,
                  opacity: 0.4,
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                "
              </span>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "var(--dark)",
                  lineHeight: 1.7,
                  paddingTop: "0.5rem",
                }}
              >
                {content.about.quote}
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-grid > div:first-child {
            order: 1;
          }
          .about-grid > div:last-child {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
