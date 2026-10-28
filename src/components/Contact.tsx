import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "../data/content";

// ── Custom SVG social icons ──
const IgIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TiktokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
  </svg>
);

const WaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.859L.054 23.854a.5.5 0 0 0 .608.608l6.063-1.495A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.98-1.355l-.357-.213-3.7.913.942-3.618-.233-.371A9.818 9.818 0 1 1 12 21.818z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

// Social media data
const socials = [
  {
    label: "Instagram",
    handle: "@juwita.aulia",
    href: "https://instagram.com/juwita.aulia",
    Icon: IgIcon,
    gradient: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    shadow: "rgba(220,39,67,0.35)",
  },
  {
    label: "TikTok",
    handle: "@juwita.aulia",
    href: "https://tiktok.com/@juwita.aulia",
    Icon: TiktokIcon,
    gradient: "linear-gradient(135deg, #010101, #2d2d2d)",
    shadow: "rgba(0,0,0,0.3)",
  },
  {
    label: "WhatsApp",
    handle: "Chat Sekarang",
    href: content.contact.whatsapp,
    Icon: WaIcon,
    gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    shadow: "rgba(37,211,102,0.35)",
  },
  {
    label: "Email",
    handle: content.contact.email,
    href: `mailto:${content.contact.email}`,
    Icon: EmailIcon,
    gradient: "linear-gradient(135deg, #FF2D78, #D4005F)",
    shadow: "rgba(255,45,120,0.35)",
  },
];

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1.1rem",
    background: "rgba(255,255,255,0.8)",
    border: "1.5px solid rgba(255,45,120,0.18)",
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
        background: "linear-gradient(135deg, rgba(255,45,120,0.06) 0%, var(--cream) 50%, rgba(255,179,206,0.1) 100%)",
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
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}
          className="contact-grid"
        >
          {/* LEFT: social + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.45rem", fontWeight: 700, color: "var(--dark)", marginBottom: "0.6rem" }}>
                Mari terhubung dan berkolaborasi!
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Saya selalu terbuka untuk peluang kepemimpinan baru, sesi public speaking, atau diskusi seputar pengembangan mahasiswa dan organisasi.
              </p>
            </div>

            {/* Social media cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Temukan Saya Di
              </p>
              {socials.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.85rem 1.1rem",
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255,45,120,0.1)",
                    color: "var(--dark)",
                    cursor: "default",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {/* Icon circle */}
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: s.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      flexShrink: 0,
                      boxShadow: `0 4px 12px ${s.shadow}`,
                    }}
                  >
                    <s.Icon />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--dark)", lineHeight: 1.2 }}>{s.label}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{s.handle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="glass-card"
            style={{ padding: "2rem" }}
          >
            <form action={`mailto:${content.contact.email}`} method="get" encType="text/plain">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>Nama Lengkap</label>
                  <input
                    id="contact-name" name="name" type="text"
                    placeholder="Masukkan nama Anda" required style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--pink)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(255,45,120,0.12)"; }}
                    onBlur={(e) =>  { (e.target as HTMLInputElement).style.borderColor = "rgba(255,45,120,0.18)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Email</label>
                  <input
                    id="contact-email" name="email" type="email"
                    placeholder="email@contoh.com" required style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--pink)"; (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(255,45,120,0.12)"; }}
                    onBlur={(e) =>  { (e.target as HTMLInputElement).style.borderColor = "rgba(255,45,120,0.18)"; (e.target as HTMLInputElement).style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Pesan</label>
                  <textarea
                    id="contact-message" name="body" rows={5}
                    placeholder="Tulis pesan Anda di sini..." required
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--pink)"; (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px rgba(255,45,120,0.12)"; }}
                    onBlur={(e) =>  { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,45,120,0.18)"; (e.target as HTMLTextAreaElement).style.boxShadow = "none"; }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Kirim Pesan ✉️
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
