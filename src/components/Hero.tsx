import { motion, type Variants } from "framer-motion";
import { content } from "../data/content";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      {/* Decorative background blobs */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "-12%",
          width: "55vw",
          maxWidth: "600px",
          opacity: 0.18,
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="300" cy="300" rx="280" ry="260" fill="#F7C5CC" />
      </svg>

      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-8%",
          right: "-10%",
          width: "50vw",
          maxWidth: "540px",
          opacity: 0.2,
          animation: "float 10s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
        viewBox="0 0 540 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="270" cy="270" rx="250" ry="230" fill="#C9B8E8" />
      </svg>

      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          right: "5%",
          width: "20vw",
          maxWidth: "220px",
          opacity: 0.15,
          animation: "float 7s ease-in-out infinite 2s",
          pointerEvents: "none",
        }}
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="110" cy="110" r="100" fill="#C9956C" />
      </svg>

      {/* Floral / leaf decorative SVG */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          right: "15%",
          width: "120px",
          opacity: 0.22,
          animation: "float 9s ease-in-out infinite 1s",
          pointerEvents: "none",
        }}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 10 C60 10 90 30 90 60 C90 85 75 105 60 110 C45 105 30 85 30 60 C30 30 60 10 60 10Z"
          fill="#C9956C"
          opacity="0.6"
        />
        <path
          d="M60 110 L60 40"
          stroke="#C9956C"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M60 80 C60 80 50 70 42 62"
          stroke="#C9956C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M60 65 C60 65 70 55 78 48"
          stroke="#C9956C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Small scattered dots decoration */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "18%",
          left: "8%",
          width: "80px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
        viewBox="0 0 80 80"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <circle
            key={i}
            cx={10 + (i % 3) * 30}
            cy={10 + Math.floor(i / 3) * 30}
            r="4"
            fill="#C9956C"
          />
        ))}
      </svg>

      {/* Main content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingTop: "7rem",
          paddingBottom: "5rem",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1.2rem",
                border: "1.5px solid var(--rose-gold)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "var(--rose-gold)",
                letterSpacing: "0.05em",
                background: "rgba(201,149,108,0.07)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              Mahasiswi &amp; Pemimpin Muda
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              background:
                "linear-gradient(135deg, #C9956C 0%, #b87ecf 50%, #F7C5CC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              maxWidth: "820px",
            }}
          >
            {content.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "var(--text-muted)",
              letterSpacing: "0.03em",
            }}
          >
            {content.title}
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "1.5px",
                background: "var(--blush)",
              }}
            />
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--rose-gold)",
              }}
            />
            <div
              style={{
                width: "48px",
                height: "1.5px",
                background: "var(--blush)",
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#5a5a5a",
              maxWidth: "560px",
              lineHeight: 1.8,
            }}
          >
            {content.subtitle}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <button
              className="btn-primary"
              onClick={() => handleScroll("#about")}
            >
              Kenali Saya
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleScroll("#contact")}
            >
              Hubungi Saya
            </button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
          >
            {[
              { number: "3+", label: "Tahun Aktif di PMII" },
              { number: "200+", label: "Anggota Dibina" },
              { number: "10+", label: "Kegiatan Dipimpin" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  textAlign: "center",
                  padding: "0.75rem 1.5rem",
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(247,197,204,0.4)",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "var(--rose-gold)",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginTop: "0.3rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
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
        <span
          style={{
            fontSize: "0.7rem",
            color: "var(--rose-gold)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--rose-gold)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
