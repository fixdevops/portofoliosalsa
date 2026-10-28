import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "../data/content";

const Organizations: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="organizations"
      ref={ref}
      style={{
        padding: "5rem 0",
        background:
          "linear-gradient(135deg, rgba(247,197,204,0.18) 0%, rgba(255,248,245,1) 50%, rgba(247,197,204,0.12) 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Organisasi</h2>
          <p className="section-subtitle">
            Aktif bergerak dalam organisasi mahasiswa untuk memberikan dampak positif bagi sesama.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
          className="org-grid"
        >
          {content.organizations.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.18, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0 16px 48px rgba(201,149,108,0.2)" }}
              className="glass-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background accent */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: org.color,
                  opacity: 0.07,
                  pointerEvents: "none",
                }}
              />

              {/* Large initial */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "var(--radius-md)",
                    background: `linear-gradient(135deg, ${org.color}25, ${org.color}45)`,
                    border: `2px solid ${org.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: org.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {org.name}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: "0.2rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {org.fullName}
                  </h3>

                  {/* Role + separator */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: org.color,
                      }}
                    >
                      {org.role}
                    </span>
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--text-muted)",
                        display: "inline-block",
                      }}
                    />
                    {/* Period badge */}
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.18rem 0.7rem",
                        background: "rgba(201,184,232,0.2)",
                        border: "1px solid rgba(201,184,232,0.4)",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        color: "#8b72c0",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {org.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${org.color}30, transparent)`,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                }}
              >
                {org.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .org-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Organizations;
