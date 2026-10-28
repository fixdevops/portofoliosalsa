import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { content } from "../data/content";

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1.1rem",
    background: "rgba(255,255,255,0.75)",
    border: "1.5px solid rgba(247,197,204,0.45)",
    borderRadius: "var(--radius-md)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.95rem",
    color: "var(--dark)",
    outline: "none",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--dark)",
    marginBottom: "0.4rem",
    letterSpacing: "0.02em",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "5rem 0",
        background:
          "linear-gradient(135deg, rgba(201,184,232,0.25) 0%, rgba(247,197,204,0.2) 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Hubungi Saya</h2>
          <p className="section-subtitle">
            Tertarik untuk berkolaborasi atau sekadar berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--dark)",
                  marginBottom: "0.6rem",
                }}
              >
                Mari terhubung dan berkolaborasi!
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                }}
              >
                Saya selalu terbuka untuk peluang kepemimpinan baru, sesi public speaking, atau diskusi seputar pengembangan mahasiswa dan organisasi.
              </p>
            </div>

            {/* Contact links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a
                href={`mailto:${content.contact.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  padding: "0.85rem 1.2rem",
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(247,197,204,0.35)",
                  textDecoration: "none",
                  color: "var(--dark)",
                  transition: "var(--transition)",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--rose-gold)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(201,149,108,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(247,197,204,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <FaEnvelope
                  style={{ color: "var(--rose-gold)", fontSize: "1.2rem", flexShrink: 0 }}
                />
                {content.contact.email}
              </a>

              <a
                href={content.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  padding: "0.85rem 1.2rem",
                  background: "rgba(37,211,102,0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(37,211,102,0.25)",
                  textDecoration: "none",
                  color: "var(--dark)",
                  transition: "var(--transition)",
                  fontSize: "0.92rem",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(37,211,102,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,211,102,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                <FaWhatsapp
                  style={{ color: "#25D366", fontSize: "1.25rem", flexShrink: 0 }}
                />
                Chat di WhatsApp
              </a>
            </div>

            {/* Social media */}
            <div>
              <p
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.85rem",
                }}
              >
                Temukan Saya Di
              </p>
              <div style={{ display: "flex", gap: "0.85rem" }}>
                <a
                  href={content.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "46px",
                    height: "46px",
                    borderRadius: "var(--radius-md)",
                    background: "linear-gradient(135deg, rgba(247,197,204,0.4), rgba(201,184,232,0.4))",
                    border: "1px solid rgba(247,197,204,0.4)",
                    color: "var(--rose-gold)",
                    fontSize: "1.2rem",
                    transition: "var(--transition)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--rose-gold)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, rgba(247,197,204,0.4), rgba(201,184,232,0.4))";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--rose-gold)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  }}
                >
                  <FaInstagram />
                </a>
                <a
                  href={content.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "46px",
                    height: "46px",
                    borderRadius: "var(--radius-md)",
                    background: "linear-gradient(135deg, rgba(247,197,204,0.4), rgba(201,184,232,0.4))",
                    border: "1px solid rgba(247,197,204,0.4)",
                    color: "var(--rose-gold)",
                    fontSize: "1.2rem",
                    transition: "var(--transition)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--rose-gold)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, rgba(247,197,204,0.4), rgba(201,184,232,0.4))";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--rose-gold)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                  }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="glass-card"
            style={{ padding: "2rem" }}
          >
            <form
              action={`mailto:${content.contact.email}`}
              method="get"
              encType="text/plain"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                }}
              >
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "var(--rose-gold)";
                      (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(201,149,108,0.15)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(247,197,204,0.45)";
                      (e.target as HTMLInputElement).style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={labelStyle}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="email@contoh.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "var(--rose-gold)";
                      (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(201,149,108,0.15)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(247,197,204,0.45)";
                      (e.target as HTMLInputElement).style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    name="body"
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "var(--rose-gold)";
                      (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(201,149,108,0.15)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "rgba(247,197,204,0.45)";
                      (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", marginTop: "0.25rem" }}
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
