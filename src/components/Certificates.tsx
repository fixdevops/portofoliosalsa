import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string; // path ke file di /public/certificates/
}

// Tambahkan foto sertifikat di folder public/certificates/
// Ganti nilai image dengan nama file yang sesuai
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Sertifikat MAPABA PMII",
    issuer: "PMII Rayon Hasyim Asy'ari",
    year: "2024",
    image: "/certificates/sertifikat-1.jpg",
  },
  {
    id: 2,
    title: "Pelatihan Kader Dasar (PKD)",
    issuer: "PMII Rayon Hasyim Asy'ari",
    year: "2025",
    image: "/certificates/sertifikat-2.jpg",
  },
  {
    id: 3,
    title: "Sertifikat Kepemimpinan Mahasiswa HMPTI",
    issuer: "Himpunan Mahasiswa Informatika",
    year: "2026",
    image: "/certificates/sertifikat-3.jpg",
  },
];

// Placeholder SVG saat foto belum dimasukkan
const PlaceholderImg: React.FC<{ title: string }> = ({ title }) => (
  <div
    style={{
      width: "100%",
      aspectRatio: "4/3",
      background: "linear-gradient(135deg, rgba(247,197,204,0.35), rgba(201,184,232,0.35))",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
    }}
  >
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(201,149,108,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 12l2 2 4-4" />
      <path d="M3 9h18" />
    </svg>
    <span style={{ fontSize: "0.75rem", color: "rgba(201,149,108,0.7)", textAlign: "center", padding: "0 1rem", fontFamily: "'Inter', sans-serif" }}>
      {title}
    </span>
  </div>
);

const Certificates: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const handleImgError = (id: number) => {
    setImgError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="certificates"
      ref={ref}
      style={{
        padding: "5rem 0",
        background:
          "linear-gradient(135deg, rgba(201,184,232,0.12) 0%, rgba(255,248,245,1) 50%, rgba(247,197,204,0.12) 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Sertifikat</h2>
          <p className="section-subtitle">
            Bukti nyata dari perjalanan belajar, berlatih, dan berkembang dalam kepemimpinan dan
            komunikasi.
          </p>
        </motion.div>

        {/* Grid foto sertifikat */}
        <div
          className="cert-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.09, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              onClick={() => setSelected(cert)}
              className="glass-card"
              style={{
                overflow: "hidden",
                cursor: "pointer",
                padding: 0,
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Foto / placeholder */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                {imgError[cert.id] ? (
                  <PlaceholderImg title={cert.title} />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    onError={() => handleImgError(cert.id)}
                    style={{
                      width: "100%",
                      aspectRatio: "4/3",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                    }}
                  />
                )}

                {/* Overlay zoom hint */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(45,30,50,0)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s ease",
                  }}
                  className="cert-overlay"
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.92)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transform: "scale(0.8)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                    className="cert-zoom-icon"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9956C" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info bawah */}
              <div style={{ padding: "1rem 1.25rem" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--dark)",
                    marginBottom: "0.25rem",
                    lineHeight: 1.35,
                  }}
                >
                  {cert.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--rose-gold)",
                      fontWeight: 500,
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      padding: "0.1rem 0.55rem",
                      background: "rgba(201,149,108,0.08)",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid rgba(201,149,108,0.15)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(20,10,25,0.82)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "rgba(255,248,245,0.97)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                maxWidth: "760px",
                width: "100%",
                boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
              }}
            >
              {/* Close button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderBottom: "1px solid rgba(247,197,204,0.3)",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--dark)",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {selected.title}
                  </h3>
                  <span style={{ fontSize: "0.82rem", color: "var(--rose-gold)", fontWeight: 500 }}>
                    {selected.issuer} · {selected.year}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Tutup"
                  style={{
                    background: "rgba(247,197,204,0.2)",
                    border: "1px solid rgba(201,149,108,0.2)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--rose-gold)" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Full image */}
              {imgError[selected.id] ? (
                <PlaceholderImg title={selected.title} />
              ) : (
                <img
                  src={selected.image}
                  alt={selected.title}
                  onError={() => handleImgError(selected.id)}
                  style={{
                    width: "100%",
                    maxHeight: "520px",
                    objectFit: "contain",
                    display: "block",
                    background: "#f9f0f2",
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .cert-grid > div:hover .cert-overlay {
          background: rgba(45,30,50,0.28) !important;
        }
        .cert-grid > div:hover .cert-zoom-icon {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certificates;
