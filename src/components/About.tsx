import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section
      id="sobre-mi"
      className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6 relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(255, 153, 51, 0.28) 40%, rgba(10, 10, 10, 0.9) 100%)",
      }}
    >
      {/* Fondo decorativo simplificado */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-32 h-32 opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(255, 153, 51, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(25px)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Título */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl mb-8 sm:mb-12 lg:mb-16 text-center neon-text"
          style={{
            color: "#00ffff",
            textShadow:
              "0 0 10px #00ffff, 0 0 20px rgba(255, 153, 51, 0.4), 0 0 30px #00ffff",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mí
        </motion.h2>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Texto (ocupa dos columnas en escritorio) */}
          <motion.div
            className="lg:col-span-1 max-w-3xl mx-auto text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6 text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed lg:columns-2">
              <p>
                Soy un{" "}
                <span className="text-primary font-semibold">
                  Estudiante en Gestión de la Comunicación Multimedia
                </span>{" "}
                y Técnico en Elaboración de Audiovisuales con más de 3 años de
                experiencia creando contenido visual impactante para
                instituciones y de manera freelance en Colombia y Estados
                Unidos.
              </p>

              <p>
                Nacido en Bogotá y proveniente de una familia paisa, desde
                temprana edad me he apasionado por explorar y aprovechar al
                máximo las posibilidades que ofrece el{" "}
                <span style={{ color: "#ff9933", fontStyle: "italic" }}>
                  Mundo Digital
                </span>
                . Me considero una persona honesta, comprometida y con un
                profundo amor por lo que hace.
              </p>
            </div>
          </motion.div>

          {/* Foto a la derecha */}
          <motion.div
            className="flex justify-center order-last lg:order-none"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="relative w-64 h-80 sm:w-72 sm:h-[26rem] lg:w-[18rem] lg:h-[26rem] rounded-xl border-2 overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, rgba(42, 42, 42, 0.8) 0%, rgba(255, 153, 51, 0.25) 50%, rgba(42, 42, 42, 0.8) 100%)",
                borderColor: "rgba(255, 153, 51, 0.4)",
              }}
            >
              <img
                src="/profile.png"
                alt="Jhojan Sneider - Motion Graphics Specialist y Técnico en Audiovisuales"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                onLoad={() => console.log("✅ Imagen cargada exitosamente: /profile.png")}
                onError={(e) => {
                  console.error("❌ Error cargando imagen: /profile.png");
                  // Fallback en caso de error
                  const target = e.target as HTMLImageElement;
                  target.src = "/444321.png";
                  console.log("🔄 Usando imagen fallback: /444321.png");
                }}
              />
              {/* Overlay simplificado */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: "repeating-linear-gradient(45deg, transparent 0px, transparent 20px, rgba(255, 153, 51, 0.1) 20px, rgba(255, 153, 51, 0.1) 21px)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Línea de tiempo profesional */}
        <motion.div
          className="container mx-auto max-w-6xl mt-16 sm:mt-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 
            className="text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-12 text-center"
            style={{ 
              color: '#ff9933',
              textShadow: '0 0 10px rgba(255, 153, 51, 0.5)'
            }}
          >
            Línea de Tiempo Profesional
          </h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div 
              className="absolute top-8 left-0 right-0 h-0.5 hidden lg:block"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 153, 51, 0.4) 0%, rgba(0, 255, 255, 0.3) 50%, rgba(255, 153, 51, 0.4) 100%)'
              }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {[
                {
                  period: "2020 - 2022",
                  role: "Estudiante en Elaboración de Audiovisuales",
                  company: "SENA",
                  desc: "Manejo de planos, ángulos de cámara, secuencias e iluminación",
                },
                {
                  period: "2023 - 2025",
                  role: "Estudiante en Gestión de la Comunicación Multimedia",
                  company: "Escuela Colombiana de Rehabilitación",
                  desc: "Elaboración visual, comunicación y marketing digital",
                },
                {
                  period: "2024 - 2025",
                  role: "Video Editor, Animator e Ilustrador",
                  company: "Del Cerro S.A.S.",
                  desc: "Especialización en contenido para la distribuidora empresarial y empleados internos",
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className="relative text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="relative mx-auto lg:mx-0 w-5 h-5 rounded-full mb-4 lg:mb-6 z-10"
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ff9933' : '#00ffff',
                      boxShadow: index % 2 === 0 
                        ? '0 0 15px rgba(255, 153, 51, 0.7), 0 0 25px rgba(255, 153, 51, 0.4)' 
                        : '0 0 15px rgba(0, 255, 255, 0.7), 0 0 25px rgba(0, 255, 255, 0.4)',
                      border: `2px solid ${index % 2 === 0 ? 'rgba(255, 153, 51, 0.8)' : 'rgba(0, 255, 255, 0.8)'}`
                    }}
                  >
                    {/* Inner glow */}
                    <div 
                      className="absolute inset-1 rounded-full"
                      style={{
                        background: index % 2 === 0 ? '#ff9933' : '#00ffff',
                        opacity: 0.6
                      }}
                    />
                  </div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="p-4 sm:p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
                    style={{
                      background: index % 2 === 0 
                        ? 'linear-gradient(135deg, rgba(42, 42, 42, 0.8) 0%, rgba(255, 153, 51, 0.25) 40%, rgba(42, 42, 42, 0.8) 100%)'
                        : 'linear-gradient(135deg, rgba(42, 42, 42, 0.8) 0%, rgba(0, 255, 255, 0.20) 40%, rgba(42, 42, 42, 0.8) 100%)',
                      borderColor: index % 2 === 0 ? 'rgba(255, 153, 51, 0.4)' : 'rgba(0, 255, 255, 0.3)',
                      borderWidth: '1px',
                    }}
                    whileHover={{
                      boxShadow: index % 2 === 0 
                        ? '0 8px 32px rgba(255, 153, 51, 0.2), 0 0 0 1px rgba(255, 153, 51, 0.3)'
                        : '0 8px 32px rgba(0, 255, 255, 0.2), 0 0 0 1px rgba(0, 255, 255, 0.3)'
                    }}
                  >
                    {/* Decorative background pattern */}
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                    />
                    
                    <div className="relative z-10">
                      <div 
                        className="text-xs sm:text-sm mb-3 uppercase tracking-wider"
                        style={{ 
                          color: index % 2 === 0 ? '#ff9933' : '#00ffff',
                          textShadow: `0 0 8px ${index % 2 === 0 ? 'rgba(255, 153, 51, 0.5)' : 'rgba(0, 255, 255, 0.5)'}`
                        }}
                      >
                        {job.period}
                      </div>
                      <h4 className="text-sm sm:text-base lg:text-lg text-foreground mb-2 leading-tight">
                        {job.role}
                      </h4>
                      <div className="text-xs sm:text-sm text-foreground/80 mb-3">
                        {job.company}
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {job.desc}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
