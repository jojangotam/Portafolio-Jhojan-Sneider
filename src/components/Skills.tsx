import { motion } from 'framer-motion';
import { useState } from 'react';

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: "After Effects", level: 95, description: "Animación, Efectos visuales, composición compleja", specialties: ["Animación vectorial", "Rotoscopia"] },
    { name: "Blender", level: 88, description: "Modelado 3D, animación, rendering", specialties: ["Cycles/Eevee", "Shading", "Rigging", "Uv editing", "Fisicas"] },
    { name: "Premiere Pro", level: 92, description: "Edición profesional, manejo de color, composición de audio", specialties: ["Lumetri", "Audio mastering", "Layers"] },
    { name: "OpenToonz", level: 78, description: "Animación fotograma a fotograma", specialties: ["character design", "high framerate"] },
    { name: "Ilustrator", level: 82, description: "Vectorización, diseño gráfico", specialties: ["Identificadores gráficos", "Diseño de personajes"] },
    { name: "Photoshop", level: 85, description: "Retoque digital, composición, corrección de color avanzada", specialties: ["Camera Raw", "Digital art", "Restauración de fotos antiguas"] }
  ];

  return (
    <section id="habilidades" className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(255, 153, 51, 0.08) 25%, rgba(10, 10, 10, 0.95) 50%, rgba(255, 153, 51, 0.12) 75%, rgba(10, 10, 10, 0.95) 100%)'
      }}
    >
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 153, 51, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 153, 51, 0.12) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h2 
          className="text-3xl md:text-5xl mb-4 text-center text-primary neon-text"
          style={{
            textShadow: '0 0 10px #ff9933, 0 0 20px rgba(255, 153, 51, 0.4), 0 0 30px #ff9933'
          }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Habilidades Técnicas
        </motion.h2>
        
        <motion.p 
          className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Dominio avanzado en las herramientas más poderosas del motion graphics y efectos visuales
        </motion.p>

        {/* Grid responsiva */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm rounded-xl border transition-all duration-300 relative overflow-hidden group
                         h-28 sm:h-auto p-3 sm:p-6 flex items-center justify-center sm:block"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.7) 0%, rgba(255, 153, 51, 0.25) 50%, rgba(26, 26, 26, 0.7) 100%)',
                borderColor: 'rgba(255, 153, 51, 0.3)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.03 }}
            >
              {/* Vista móvil: solo icono + nivel */}
              <div className="flex flex-col items-center justify-center sm:hidden text-center">
                <span className="mb-1">
                  {skill.name === "After Effects" && (
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" alt="After Effects" className="w-8 h-8" />
                  )}
                  {skill.name === "Blender" && (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" alt="Blender" className="w-8 h-8" />
                  )}
                  {skill.name === "Premiere Pro" && (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" alt="Premiere Pro" className="w-8 h-8" />
                  )}
                  {skill.name === "OpenToonz" && (
                    <img src="https://i.postimg.cc/m2SFh287/Opentoonz-1.png" alt="OpenToonz" className="w-8 h-8" />
                  )}
                  {skill.name === "Ilustrator" && (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" className="w-8 h-8" />
                  )}
                  {skill.name === "Photoshop" && (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="w-8 h-8" />
                  )}
                </span>
                <span className="text-xs text-primary">{skill.level}%</span>
              </div>

              {/* Vista escritorio: tarjeta completa */}
              <div className="hidden sm:block relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-lg" style={{ color: '#ff9933' }}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative mb-4">
                  <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className="h-2 rounded-full relative"
                      style={{
                        background: 'linear-gradient(90deg, #ff9933 0%, #ffcc55 100%)'
                      }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4">{skill.description}</p>

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#ff9933' }}>
                    Especialidades:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="text-xs px-2 py-1 rounded border"
                        style={{
                          background: 'rgba(255, 153, 51, 0.15)',
                          color: '#ff9933',
                          borderColor: 'rgba(255, 153, 51, 0.3)'
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
