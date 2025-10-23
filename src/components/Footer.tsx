import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Motion Graphics",
    "Animación 3D",
    "Efectos Visuales",
    "Logo Animado",
    "Video Explicativo",
    "Identidad Visual",
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Behance", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="py-12 px-6 border-t bg-neutral-950">
      <div className="container mx-auto max-w-7xl">
        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 text-sm text-neutral-400">
          {/* Marca */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-base font-medium text-neutral-200">
              Sneider Productions
            </p>
            <p>
              Practicante y estudiante en motion graphics y efectos visuales con más de 3
              años de experiencia creando contenido visual impactante para
              clientes en Colombia y América.
            </p>
            <div className="space-y-1">
              <p>Colombia</p>
              <p>jhojan.ramirez@ecr.edu.co</p>
              <p>Atención vía WhatsApp</p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-neutral-300 mb-3 font-medium">Servicios</p>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-neutral-200 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-neutral-300 mb-3 font-medium">Navegación</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-neutral-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Redes */}
            <div className="mt-6">
              <p className="text-neutral-300 mb-3 font-medium">Sígueme</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-neutral-400 hover:text-neutral-200 transition-colors text-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-neutral-800 mb-6" />

        {/* Parte inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} Sneider Productions. Motion Graphics & Visual
              Effects.
            </p>
            <p className="mt-1">
              Hecho en Colombia • Proyectos en toda Latinoamérica
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Términos de Servicio
            </a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
