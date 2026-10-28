import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home",       href: "#home" },
  { label: "Tentang",    href: "#about" },
  { label: "Keahlian",   href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak",     href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [menuOpen, setMenuOpen]         = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.replace("#", ""));
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop: floating pill ── */}
      <div
        className="nav-desktop-wrap"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            gap: "0.15rem",
            padding: "0.45rem 0.6rem",
            borderRadius: "var(--radius-full)",
            background: scrolled
              ? "rgba(255,255,255,0.88)"
              : "rgba(255,255,255,0.72)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1.5px solid rgba(255,45,120,0.18)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(255,45,120,0.18)"
              : "0 4px 20px rgba(255,45,120,0.10)",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
          aria-label="Navigasi utama"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  position: "relative",
                  background: isActive ? "var(--pink)" : "transparent",
                  border: "none",
                  borderRadius: "var(--radius-full)",
                  padding: "0.42rem 1.1rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "#fff" : "var(--dark)",
                  cursor: "pointer",
                  transition: "var(--transition)",
                  letterSpacing: "0.01em",
                  boxShadow: isActive ? "0 3px 12px rgba(255,45,120,0.35)" : "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--pink)";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,45,120,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--dark)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </button>
            );
          })}
        </motion.nav>
      </div>

      {/* ── Mobile: floating hamburger button only (no header bar) ── */}
      <div
        className="nav-mobile-wrap"
        style={{
          position: "fixed",
          top: "1rem",
          right: "1.25rem",
          zIndex: 1000,
          display: "none",
        }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          style={{
            background: menuOpen ? "var(--pink-dark)" : "var(--pink)",
            border: "none",
            borderRadius: "12px",
            width: "44px",
            height: "44px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            cursor: "pointer",
            padding: "10px",
            boxShadow: "0 4px 16px rgba(255,45,120,0.45)",
            transition: "var(--transition)",
          }}
        >
          {[0,1,2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                background: "#fff",
                borderRadius: "2px",
                transition: "var(--transition)",
                transform:
                  i === 0 && menuOpen ? "rotate(45deg) translate(5px,5px)" :
                  i === 2 && menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "68px",
              left: "1rem",
              right: "1rem",
              zIndex: 999,
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1.5px solid rgba(255,45,120,0.15)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 12px 48px rgba(255,45,120,0.2)",
              padding: "0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(link.href)}
                  style={{
                    background: isActive ? "var(--pink)" : "transparent",
                    border: "none",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.7rem 1rem",
                    textAlign: "left",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.98rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#fff" : "var(--dark)",
                    cursor: "pointer",
                    transition: "var(--transition)",
                  }}
                >
                  {link.label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-wrap { display: none !important; }
          .nav-mobile-wrap  { display: flex !important; }
        }
      `}</style>    </>
  );
};

export default Navbar;
