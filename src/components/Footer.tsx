import { motion } from "framer-motion";
import { content } from "../data/content";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Tentang",    href: "#about" },
  { label: "Keahlian",   href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak",     href: "#contact" },
];


const Footer: React.FC = () => {
  const go = (href: string) =>
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #1a0010 0%, #2d0020 40%, #1a0010 100%)" }}>

      {/* ── Background glow blobs ── */}
      <div aria-hidden="true" style={{ position:"absolute", top:"-60px", left:"50%", transform:"translateX(-50%)", width:"700px", height:"320px", background:"radial-gradient(ellipse, rgba(255,45,120,0.35) 0%, transparent 68%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"0", left:"-60px", width:"420px", height:"300px", background:"radial-gradient(ellipse, rgba(255,45,120,0.18) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div aria-hidden="true" style={{ position:"absolute", bottom:"0", right:"-60px", width:"400px", height:"280px", background:"radial-gradient(ellipse, rgba(212,0,95,0.18) 0%, transparent 70%)", pointerEvents:"none" }} />
      {/* Subtle grid texture */}
      <div aria-hidden="true" style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,45,120,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.04) 1px, transparent 1px)", backgroundSize:"40px 40px", pointerEvents:"none" }} />

      {/* ── Top wave divider ── */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"60px" }} aria-hidden="true">
        <path d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z" fill="var(--cream)" />
      </svg>

      <div className="container" style={{ paddingTop:"3rem", paddingBottom:"2.5rem", position:"relative", zIndex:1 }}>

        {/* ── Top section: 3 columns ── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto 1fr", gap:"3rem", alignItems:"start", marginBottom:"3rem" }} className="footer-top">

          {/* Col 1 — about blurb */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6 }}
            style={{ display:"flex", flexDirection:"column", gap:"1rem" }}
          >
            <h4 style={{ fontFamily:"'Playfair Display', serif", fontSize:"1rem", fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
              Tentang
            </h4>
            <p style={{ fontSize:"0.88rem", color:"rgba(255,255,255,0.45)", lineHeight:1.8 }}>
              Mahasiswi yang berdedikasi dalam kepemimpinan, public speaking, dan pengembangan organisasi bersama PMII.
            </p>
          </motion.div>

          {/* Col 2 — center brand */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6, delay:0.1 }}
            style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.75rem", textAlign:"center" }}
          >
            {/* Pink monogram circle */}
            <div
              style={{
                width:"72px", height:"72px", borderRadius:"50%",
                background:"linear-gradient(135deg, #FF2D78, #D4005F)",
                display:"flex", alignItems:"center", justifyContent:"center",
                boxShadow:"0 0 32px rgba(255,45,120,0.5), 0 8px 24px rgba(255,45,120,0.3)",
                marginBottom:"0.25rem",
              }}
            >
              <span style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.6rem", fontWeight:700, color:"#fff", letterSpacing:"0.04em" }}>JAS</span>
            </div>
            <span style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.1rem", fontWeight:700, color:"#fff", letterSpacing:"0.05em" }}>
              Juwita Aulia Salsabila
            </span>
            <span
              style={{
                display:"inline-flex", alignItems:"center", gap:"0.35rem",
                padding:"0.22rem 0.85rem",
                borderRadius:"var(--radius-full)",
                background:"rgba(255,45,120,0.15)",
                border:"1px solid rgba(255,45,120,0.25)",
                fontSize:"0.72rem", fontWeight:700,
                color:"var(--pink)", letterSpacing:"0.06em", textTransform:"uppercase",
              }}
            >
              ✦ Leader · Speaker
            </span>

            {/* Quote */}
            <blockquote style={{ marginTop:"0.5rem", maxWidth:"280px" }}>
              <p style={{ fontFamily:"'Playfair Display', serif", fontStyle:"italic", fontSize:"0.88rem", color:"rgba(255,255,255,0.5)", lineHeight:1.7 }}>
                {content.footer.quote}
              </p>
            </blockquote>
          </motion.div>

          {/* Col 3 — nav links */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.6, delay:0.2 }}
            style={{ display:"flex", flexDirection:"column", gap:"1rem", alignItems:"flex-end" }}
          >
            <h4 style={{ fontFamily:"'Playfair Display', serif", fontSize:"1rem", fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"0.1em", textTransform:"uppercase" }}>
              Navigasi
            </h4>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.35rem", alignItems:"flex-end" }}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity:0, x:16 }}
                    whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true }}
                    transition={{ delay:0.25 + i * 0.06 }}
                  >
                    <button
                      onClick={() => go(link.href)}
                      style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"'Inter', sans-serif", fontSize:"0.88rem", color:"rgba(255,255,255,0.45)", transition:"color 0.2s ease, transform 0.2s ease", padding:"0.2rem 0", display:"block" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--pink)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateX(-4px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLButtonElement).style.transform = "none"; }}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height:"1px",
            background:"linear-gradient(90deg, transparent, rgba(255,45,120,0.3), rgba(255,45,120,0.5), rgba(255,45,120,0.3), transparent)",
            marginBottom:"2rem",
          }}
        />

        {/* ── Bottom bar ── */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }} className="footer-bottom">
          <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.25)" }}>
            © 2026 Juwita Aulia Salsabila. All rights reserved.
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
            <span style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.25)" }}>Dibuat dengan</span>
            <span style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.25)" }}>semangat memimpin</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
          }
          .footer-top > div:last-child {
            align-items: center !important;
          }
          .footer-top > div:last-child ul {
            align-items: center !important;
          }
          .footer-bottom {
            justify-content: center !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
