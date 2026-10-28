import { motion, type Variants } from "framer-motion";
import { content } from "../data/content";
import profilePhoto from "/b417f46a-906e-4433-ba51-986151d61f94.jpg";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, x: 40 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

/* ── sparkle dots ── */
const sparkles = [
  { top: "8%",  left: "6%",  size: 10, delay: "0s",   color: "#FF2D78" },
  { top: "18%", left: "88%", size: 8,  delay: "0.6s",  color: "#FF6BA8" },
  { top: "72%", left: "4%",  size: 7,  delay: "1.1s",  color: "#FFB3CE" },
  { top: "80%", left: "90%", size: 9,  delay: "0.3s",  color: "#FF2D78" },
  { top: "45%", left: "2%",  size: 6,  delay: "1.5s",  color: "#FF6BA8" },
  { top: "60%", left: "94%", size: 7,  delay: "0.8s",  color: "#FFB3CE" },
];

const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--cream)",
      }}
    >
      {/* ── Big pink blob background ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "60vw",
          maxWidth: "700px",
          aspectRatio: "1",
          background: "linear-gradient(135deg, #FF2D78 0%, #ff6ba8 60%, #FFB3CE 100%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "blob-move 10s ease-in-out infinite, float 12s ease-in-out infinite",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-8%",
          width: "50vw",
          maxWidth: "580px",
          aspectRatio: "1",
          background: "linear-gradient(135deg, #FFB3CE 0%, #FF6BA8 100%)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          animation: "blob-move 14s ease-in-out infinite reverse, floatReverse 10s ease-in-out infinite",
          opacity: 0.1,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Sparkle dots ── */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            zIndex: 0,
            pointerEvents: "none",
            animation: `sparkle 3s ease-in-out ${s.delay} infinite`,
          }}
        >
          <svg viewBox="0 0 20 20" fill={s.color}>
            <path d="M10 0 L11.8 8.2 L20 10 L11.8 11.8 L10 20 L8.2 11.8 L0 10 L8.2 8.2Z" />
          </svg>
        </div>
      ))}

      {/* ── Floating ring decoration ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "12%",
          left: "38%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1.5px dashed rgba(255,45,120,0.2)",
          animation: "spin-slow 20s linear infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "8%",
          left: "42%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          border: "1px solid rgba(255,107,168,0.15)",
          animation: "spin-slow 30s linear infinite reverse",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Main 2-column layout ── */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "7rem",
          paddingBottom: "5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* LEFT — text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.4rem 1.1rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--white)",
                letterSpacing: "0.06em",
                background: "var(--pink)",
                boxShadow: "0 4px 14px rgba(255,45,120,0.4)",
                textTransform: "uppercase",
              }}
            >
              ✦ Agent of Change
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--dark)",
            }}
          >
            Juwita{" "}
            <span
              style={{
                background: "var(--gradient-pink)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Aulia
            </span>
            <br />
            Salsabila
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              color: "var(--pink)",
              fontWeight: 600,
            }}
          >
            {content.title}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "0.98rem",
              color: "var(--text-muted)",
              lineHeight: 1.85,
              maxWidth: "440px",
            }}
          >
            {content.subtitle}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}
          >
            <button className="btn-primary" onClick={() => handleScroll("#about")}>
              Kenali Saya
            </button>
            <button className="btn-secondary" onClick={() => handleScroll("#contact")}>
              Hubungi Saya
            </button>
          </motion.div>


        </motion.div>

        {/* RIGHT — photo card */}
        <motion.div
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          className="hero-photo-col"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Outer spinning ring */}
          <div
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "2px dashed rgba(255,45,120,0.3)",
              animation: "spin-slow 18s linear infinite",
            }}
          />
          {/* Inner ring */}
          <div
            style={{
              position: "absolute",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              border: "1.5px solid rgba(255,107,168,0.2)",
              animation: "spin-slow 25s linear infinite reverse",
            }}
          />

          {/* Glow circle behind photo */}
          <div
            style={{
              position: "absolute",
              width: "290px",
              height: "290px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,45,120,0.22) 0%, rgba(255,179,206,0.08) 70%, transparent 100%)",
              filter: "blur(18px)",
            }}
          />

          {/* Photo frame */}
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              padding: "5px",
              background: "linear-gradient(135deg, #FF2D78, #FFB3CE, #FF6BA8)",
              boxShadow: "0 12px 48px rgba(255,45,120,0.4)",
              zIndex: 1,
            }}
          >
            {/* White inner border */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                padding: "4px",
                background: "#fff",
                overflow: "hidden",
              }}
            >
              <img
                src={profilePhoto}
                alt="Juwita Aulia Salsabila"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Floating cute badges */}
          {/* Badge: PMII */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "6%",
              right: "2%",
              background: "#fff",
              border: "2px solid rgba(255,45,120,0.2)",
              borderRadius: "var(--radius-md)",
              padding: "0.5rem 0.9rem",
              boxShadow: "0 6px 20px rgba(255,45,120,0.18)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              whiteSpace: "nowrap",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🌟</span>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--pink)", lineHeight: 1.2 }}>Wakil Ketua Rayon</div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>PMII 2026</div>
            </div>
          </motion.div>

          {/* Badge: Public Speaker */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0%",
              background: "var(--pink)",
              borderRadius: "var(--radius-md)",
              padding: "0.5rem 0.9rem",
              boxShadow: "0 6px 20px rgba(255,45,120,0.35)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              whiteSpace: "nowrap",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "1rem" }}>🎤</span>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Public Speaker</div>
              <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.8)" }}>& Leader</div>
            </div>
          </motion.div>

          {/* Badge: HMPTI */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: "absolute",
              bottom: "28%",
              right: "-2%",
              background: "#fff",
              border: "2px solid rgba(255,45,120,0.2)",
              borderRadius: "var(--radius-md)",
              padding: "0.5rem 0.9rem",
              boxShadow: "0 6px 20px rgba(255,45,120,0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              whiteSpace: "nowrap",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "1rem" }}>💼</span>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--pink)", lineHeight: 1.2 }}>Wakil HMPTI</div>
              <div style={{ fontSize: "0.62rem", color: "var(--text-muted)" }}>2026</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
          animation: "scrollBounce 2s ease-in-out infinite",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={() => handleScroll("#about")}
        role="button"
        aria-label="Scroll ke bawah"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleScroll("#about")}
      >
        <span style={{ fontSize: "0.65rem", color: "var(--pink)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
          Scroll
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #home > .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #home > .container > div:first-child {
            align-items: center;
          }
          #home > .container > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
