import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["home", "about", "skills", "experience", "organizations", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? "rgba(255, 248, 245, 0.88)"
          : "rgba(255, 248, 245, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(247, 197, 204, 0.35)" : "1px solid transparent",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        boxShadow: scrolled ? "0 2px 20px rgba(201,149,108,0.10)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: 0,
          }}
          aria-label="Kembali ke beranda"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.7rem",
              fontWeight: 700,
              color: "var(--rose-gold)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            JAS
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--blush)",
              display: "inline-block",
              marginBottom: "2px",
            }}
          />
        </button>

        {/* Desktop nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.45rem 0.9rem",
                    borderRadius: "var(--radius-full)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--rose-gold)" : "var(--dark)",
                    backgroundColor: isActive
                      ? "rgba(201,149,108,0.1)"
                      : "transparent",
                    transition: "var(--transition)",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "var(--rose-gold)";
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "rgba(201,149,108,0.07)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "var(--dark)";
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "transparent";
                    }
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button for mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "40px",
            height: "40px",
            borderRadius: "var(--radius-sm)",
            padding: "6px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--rose-gold)",
              borderRadius: "2px",
              transition: "var(--transition)",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--rose-gold)",
              borderRadius: "2px",
              transition: "var(--transition)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--rose-gold)",
              borderRadius: "2px",
              transition: "var(--transition)",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "rgba(255,248,245,0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(247,197,204,0.3)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: "0.75rem 1.5rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                      padding: "0.65rem 1rem",
                      borderRadius: "var(--radius-sm)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1rem",
                      fontWeight:
                        activeSection === link.href.replace("#", "") ? 600 : 400,
                      color:
                        activeSection === link.href.replace("#", "")
                          ? "var(--rose-gold)"
                          : "var(--dark)",
                      backgroundColor:
                        activeSection === link.href.replace("#", "")
                          ? "rgba(201,149,108,0.1)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
