import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { content } from "../data/content";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Organisasi", href: "#organizations" },
  { label: "Kontak", href: "#contact" },
];

const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      style={{
        background: "var(--dark)",
        color: "var(--white)",
        padding: "3.5rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "var(--rose-gold)",
                letterSpacing: "0.06em",
              }}
            >
              JAS
            </span>
            <span
              style={{
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Juwita Aulia Salsabila
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(90deg, var(--blush), var(--lavender))",
              borderRadius: "2px",
            }}
          />

          {/* Quote */}
          <div style={{ maxWidth: "540px" }}>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7,
                marginBottom: "0.5rem",
              }}
            >
              {content.footer.quote}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--rose-gold)",
                fontWeight: 500,
              }}
            >
              {content.footer.quoteAuthor}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.25rem",
                listStyle: "none",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "var(--radius-full)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.6)",
                      transition: "color 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--blush)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.85rem" }}>
            {[
              {
                href: content.contact.instagram,
                icon: <FaInstagram />,
                label: "Instagram",
              },
              {
                href: content.contact.linkedin,
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: content.contact.whatsapp,
                icon: <FaWhatsapp />,
                label: "WhatsApp",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1rem",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--rose-gold)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--rose-gold)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "none";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Thin divider */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
            }}
          />

          {/* Copyright */}
          <p
            style={{
              fontSize: "0.83rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.02em",
            }}
          >
            © 2024 Juwita Aulia Salsabila. Dibuat dengan{" "}
            <span style={{ color: "var(--blush)" }}>❤️</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
