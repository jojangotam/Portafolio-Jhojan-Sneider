import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const skills = ["Efectos visuales", "Modelado 3D", "Ilustracion"];
  const [sloganSize, setSloganSize] = useState<string>("1.25rem");

  // Precargar imagen inmediatamente para móviles
  useEffect(() => {
    const img = new Image();
    img.src = "/logooptimizado.png";
  }, []);

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w >= 1280) setSloganSize("2.4rem"); // lg+
      else if (w >= 768) setSloganSize("1.8rem"); // md
      else if (w >= 640) setSloganSize("1.4rem"); // sm
      else setSloganSize("1.25rem"); // xs
    }

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      {/* Imagen de fondo */}
      <img
        src="/444321.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'left', objectFit: 'cover' }}
        onError={(e) => {
          console.error("Error loading background image:", "/444321.png");
          e.currentTarget.style.display = 'none';
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido principal */}
      <div className="text-center z-10 px-4 sm:px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo - simplificado */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src="/logooptimizado.png"
              alt="Sneider Productions Logo"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              style={{
                filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.4))",
              }}
              whileHover={{ scale: 1.05 }}
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>

          {/* Slogan - simplificado */}
          <motion.p
            className="mb-6 sm:mb-8 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: sloganSize,
              color: '#00ffff',
              textShadow: '0 0 10px rgba(0,255,255,0.5)',
              lineHeight: 1.05,
            }}
          >
            combinando complejidad y simplicidad
          </motion.p>

          {/* Skills */}
          <motion.div
            className="space-y-3 sm:space-y-4 text-sm mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 border rounded text-xs bg-white/10 border-white/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <motion.p
              className="text-xs text-white/80 mt-2 sm:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              After Effects • Blender • Illustrator y Photoshop
            </motion.p>
          </motion.div>

          {/* Botones */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById("proyectos");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span
                className="border px-6 py-2 rounded-lg relative text-sm bg-white/20 border-white/50 text-white shadow-md block"
                style={{ textDecoration: "none" }}
              >
                Ver Proyectos
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - simplificado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
