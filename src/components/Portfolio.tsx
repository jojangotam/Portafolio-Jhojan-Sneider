import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [preloadedGifs, setPreloadedGifs] = useState<Set<string>>(new Set());

  // Preload GIF cuando se hace hover
  const preloadGif = (gifUrl: string) => {
    if (!preloadedGifs.has(gifUrl)) {
      const img = new Image();
      img.src = gifUrl;
      setPreloadedGifs(prev => new Set([...prev, gifUrl]));
    }
  };

  const categories = ["Todos", "Motion Graphics", "3D Animation", "VFX", "Brand Identity"] as const;

  type Category = typeof categories[number] | string; // keep flexible
  type Project = {
    title: string;
    category: Category | Category[];
    description: string;
    image: string;
    hoverGif?: string; // can be configured inline or via hoverGifs map
    tools: string[];
    duration: string;
    client: string;
    videoUrl: string;
  };

  // Centralized mapping: project title -> GIF URL
  const hoverGifs: Record<string, string> = {
    "Productos Del Cerro S.A.S.": "https://i.postimg.cc/7Pn0p618/memito.gif",
    "Animación Pixelados 2025": "https://i.postimg.cc/wBGK0gvn/2025-10-08-00-27-52-2.gif",
    "Escudo animado - San José": "https://i.postimg.cc/0NgXQjb3/2025-10-08-00-27-52-3.gif",
    "Animaciones proyectos escolares": "https://i.postimg.cc/V6K3d1yV/2025-10-08-00-27-52-4.gif",
    "VideoClip Unal": "https://i.postimg.cc/fT8jpLcX/2025-10-08-00-27-52-5.gif"
    // Agrega más títulos aquí: "Título del proyecto": "https://url-tu-gif.gif"
  };

  const projects: Project[] = [
    {
      title: "Productos Del Cerro S.A.S.",
      category: "3D Animation",
      description: "Modelado de productos en 3D y animación de cajas",
  image: "https://i.postimg.cc/cCtmjggL/doypack-cerro-high-contrast.png",
      tools: ["Blender", "Photoshop"],
      duration: "+20 imagenes",
      client: "Del Cerro S.A.S.",
      videoUrl: "https://ecrcampus-my.sharepoint.com/:f:/g/personal/jhojan_ramirez_ecr_edu_co/EpCMs7gWfkFAjc4CsJoEC5YBtMvr-kAUNrmBq2D0XQ7KLQ?e=kJ4Tok"
    },
    {
      title: "Animación Pixelados 2025",
      category: "Motion Graphics",
      description: "Animación sobre la pelea de unas amigas sobre un mal entendido presentado en pixelados",
  image: "https://i.postimg.cc/HxrMBqR4/Captura-de-pantalla-2025-10-03-112658.png",
      tools: ["Adobe Animate", "Adobe After Effects"],
      duration: "2 minutos",
      client: "Pixelados 2025",
      videoUrl: "https://youtu.be/3asYZrO_P48"
    },
    {
      title: "Imagen de marca - Octopus",
      category: "Brand Identity",
      description: "Creación de baners, iconos y version ilustrada de productos para pagina web",
      image: "https://i.postimg.cc/6qSYMVMW/Banner-2.png",
      tools: ["Blender", "Photoshop"],
      duration: "+20 imagenes",
      client: "Octopus",
      videoUrl: "https://youtu.be/ejemplo"
    },
    {
      title: "Escudo animado - San José",
      category: ["Brand Identity", "3D Animation"],
      description: "Animacion del escudo del colegio San José que es usado hasta la actualidad",
      image: "https://i.postimg.cc/2SqVpQTJ/Escudo-San-Jose.png",
      tools: ["Blender", "Filmora"],
      duration: "5 segundos",
      client: "San José Kennedy",
      videoUrl: "https://youtu.be/RsZ6hYcVwSg"
    },
    {
      title: "Animaciones proyectos escolares",
      category: "Motion Graphics",
      description: "Animaciones 3D y 2D para proyectos escolares de diferentes áreas",
      image: "https://i.postimg.cc/qBS8NvYm/Animaciones-colegio.png",
      tools: ["OpenToonz", "Blender"],
      duration: "+20 imagenes",
      client: "San José Kennedy",
      videoUrl: "https://www.youtube.com/@jojangotam/videos"
    },
    {
      title: "VideoClip Unal",
      category: "VFX",
      description: "Un video clip sobre el proceso de preparación para entrar a la universidad Nacional",
      image: "https://i.postimg.cc/Nf01MPQn/maxresdefault.png",
      tools: ["After Effects", "Photoshop", "Premiere Pro"],
      duration: "3 minutos",
      client: "ECR",
      videoUrl: "https://youtu.be/PzGpjx-tIi8?si=KqhrlSCjptXaB3IX"
    }
  ];

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => Array.isArray(project.category)
        ? project.category.includes(activeCategory)
        : project.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects - Estático para mejor rendimiento */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-primary neon-text">
            Portafolio de Proyectos
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Una selección de trabajos que demuestran mi experiencia en motion graphics, 
            animación 3D y efectos visuales para clientes en Colombia y Latinoamérica
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm ${
                activeCategory === category
                  ? 'bg-primary/20 border-primary text-primary neon-glow'
                  : 'border-border text-foreground/70 hover:border-primary/50 hover:text-primary/80'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.03 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects (Carrusel en móvil / Grid en desktop) */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[80%] md:min-w-0 snap-center rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 relative orange-hover-glow"
              style={{
                background: index % 4 === 2 
                  ? 'linear-gradient(45deg, rgba(26, 26, 26, 0.6) 0%, rgba(255, 170, 68, 0.1) 30%, rgba(26, 26, 26, 0.6) 100%)'
                  : 'rgba(26, 26, 26, 0.4)',
                willChange: 'transform'
              }}
              onMouseEnter={() => {
                setHoveredProject(index);
                const gifUrl = hoverGifs[project.title] || (project as any).hoverGif;
                if (gifUrl) preloadGif(gifUrl);
              }}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  {hoveredProject === index && (hoverGifs[project.title] || (project as any).hoverGif) ? (
                    <img
                      src={hoverGifs[project.title] || (project as any).hoverGif}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-background px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                    {Array.isArray(project.category) ? project.category.join(' • ') : project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-background/80 text-foreground px-2 py-1 rounded text-xs">
                    {project.duration}
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <div className="text-xs text-primary/80 mb-2">
                  Cliente: {project.client}
                </div>
                <p className="text-sm text-foreground/80 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={tool}
                      className={`text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30 transition-opacity duration-200 ${
                        hoveredProject === index ? 'opacity-100' : 'opacity-70'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-2 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <span className="flex-1 bg-primary/20 border border-primary text-primary py-2 rounded-lg text-sm flex items-center justify-center select-none cursor-pointer opacity-70">
                    Ver Proyecto
                  </span>
                  <button className="px-4 py-2 border border-border text-foreground/70 rounded-lg text-sm hover:border-primary/50 hover:text-primary transition-colors" onClick={e => e.preventDefault()}>
                    Info
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA removed */}
      </div>
    </section>
  );
}
