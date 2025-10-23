import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

export function TextureOverlay() {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const [revealed, setRevealed] = useState(false);
  const [dissolving, setDissolving] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const frameRef = useRef<number | null>(null);

  // Seguimiento del cursor optimizado
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() =>
      setMouse({ x: e.clientX, y: e.clientY })
    );
  }, []);

  useEffect(() => {
    if (!revealed && !isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [revealed, handleMouseMove, isMobile]);

  // Click → disolver
  const handleClick = useCallback(() => {
    if (!dissolving) {
      setDissolving(true);
      setTimeout(() => setRevealed(true), 1000);
    }
  }, [dissolving]);

  if (isMobile || revealed) return null;

  return (
    <AnimatePresence>
      {!revealed && (
        <motion.div
          key="texture-overlay"
          className="fixed inset-0 z-50 cursor-pointer overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: dissolving ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          onClick={handleClick}
          style={{
            background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)`,
            WebkitMaskImage: !dissolving
              ? `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, transparent 40%, black 70%)`
              : undefined,
            maskImage: !dissolving
              ? `radial-gradient(circle 180px at ${mouse.x}px ${mouse.y}px, transparent 40%, black 70%)`
              : undefined,
          }}
        >
          {/* Simplified Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Glow Effect around cursor */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: mouse.x - 100,
              top: mouse.y - 100,
              width: 200,
              height: 200,
              background: `radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%)`,
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Mensaje central */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: dissolving ? 0 : 1, 
              y: dissolving ? -20 : 0
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #00ffff 0%, #ff9933 50%, #00ffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              }}
            >
              JHOJAN SNEIDER
            </motion.h2>
            
            <motion.p 
              className="text-sm md:text-lg mb-8 text-cyan-300/90 italic"
            >
              combinando complejidad y simplicidad
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-2 text-white/80"
            >
              <span className="text-xs md:text-sm">Haz clic para entrar</span>
              <motion.div
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Efecto de disolución simplificado */}
      {dissolving && !revealed && (
        <motion.div
          key="dissolve-effect"
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle 300px at ${mouse.x}px ${mouse.y}px, rgba(0, 255, 255, 0.2) 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
      )}
    </AnimatePresence>
  );
}