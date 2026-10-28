import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { content } from "../data/content";
import profilePhoto from "/b417f46a-906e-4433-ba51-986151d61f94.jpg";

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
            {/* Photo circle */}
            <div style={{ position: "relative" }}>
              {/* Outer dashed ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-14px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(201,149,108,0.4)",
                  animation: "float 8s ease-in-out infinite",
                }}
              />
              {/* Second soft ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-28px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(201,184,232,0.3)",
                }}
              />
              {/* Rose gold glow behind photo */}
              <div
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(247,197,204,0.6), rgba(201,184,232,0.5), rgba(201,149,108,0.4))",
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Foto profil Juwita Aulia Salsabila"
                style={{
                  width: "240px",
                  height: "240px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                  border: "4px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 8px 32px rgba(201,149,108,0.25)",
                }}
              />
            </div>

            {/* Stats cards below photo */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { label: "Wakil Ketua Rayon", sub: "PMII 2026–Sekarang" },
                { label: "Wakil HMPTI", sub: "2026–Sekarang" },
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
            display: none !important;
          }
          .about-grid > div:last-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
