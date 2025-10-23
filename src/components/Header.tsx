import { motion } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 153, 51, 0.3)",
        background: "linear-gradient(90deg, rgba(10, 10, 10, 0.85) 0%, rgba(255, 153, 51, 0.12) 30%, rgba(10, 10, 10, 0.85) 70%, rgba(255, 119, 0, 0.08) 100%)"
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 24px" }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <motion.div 
            style={{ 
              fontSize: "1.25rem",
              color: "#00ffff",
              textShadow: "0 0 10px #00ffff, 0 0 20px rgba(255, 153, 51, 0.4), 0 0 30px #00ffff"
            }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 15px #00ffff, 0 0 25px rgba(255, 119, 0, 0.6), 0 0 35px #00ffff"
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="audiowide" style={{ display: "block" }}>JHOJAN SNEIDER</span>
          </motion.div>

          {/* Mobile hamburger - visible only on small screens */}
          <button
              onClick={() => setOpen((v: boolean) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            style={{
                border: "none",
              color: "white",
              cursor: "pointer",
              padding: 8,
              marginLeft: 8
            }}
            className="mobile-hamburger"
          >
            {/* simple three-line icon */}
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", margin: "4px 0" }} />
            <span style={{ display: "block", width: 16, height: 2, background: "#fff", margin: "4px 0" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", margin: "4px 0" }} />
          </button>

          <div style={{ display: "flex", gap: "24px" }} className="desktop-links">
            {[
              { href: "#inicio", text: "Inicio" },
              { href: "#sobre-mi", text: "Sobre Mí" },
              { href: "#habilidades", text: "Habilidades" },
              { href: "#proyectos", text: "Proyectos" },
              { href: "#contacto", text: "Contacto" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.8)",
                  position: "relative",
                  textDecoration: "none",
                  filter: index === 1 || index === 3 
                    ? "drop-shadow(0 0 3px rgba(255, 153, 51, 0.3))" 
                    : "none"
                }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ 
                  y: -2,
                  color: index === 1 || index === 3 ? "#ff9933" : "#00ffff",
                  filter: "drop-shadow(0 0 8px rgba(255, 153, 51, 0.5))"
                }}
              >
                {item.text}
                <span 
                  style={{
                    content: "''",
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    height: "2px",
                    width: "0",
                    background: index === 1 || index === 3 
                      ? "linear-gradient(90deg, #00ffff 0%, #ff9933 50%, #00ffff 100%)"
                      : "#00ffff",
                    transition: "width 0.3s ease"
                  }}
                  className="underline-hover"
                />
              </motion.a>
            ))}
          </div>
        </nav>
        {/* embedded CSS so only Header is modified and desktop layout stays the same */}
        <style>{`
          .mobile-hamburger { display: none; }
          .mobile-dropdown { display: none; }
          @media (max-width: 768px) {
            .desktop-links { display: none !important; }
            .mobile-hamburger { display: block !important; }
            /* allow inline style to control open/close, but ensure block context on small screens */
            .mobile-dropdown { display: block; }
          }
        `}</style>
        {/* Mobile dropdown panel (only rendered on small screens) */}
        <div
          style={{
            display: open ? 'block' : 'none',
            padding: '8px 24px 16px 24px',
            borderTop: '1px solid rgba(255,255,255,0.04)'
          }}
          className="mobile-dropdown"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {["#inicio", "#sobre-mi", "#habilidades", "#proyectos", "#contacto"].map(href => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  padding: '8px 0',
                  fontSize: '1rem'
                }}
              >
                {href.replace('#', '').replace('-', ' ')}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
