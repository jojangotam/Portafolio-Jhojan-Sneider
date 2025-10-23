import { motion } from 'framer-motion';
import { useState } from 'react';
import * as emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: "https://cdn.simpleicons.org/minutemailer/ffffff", // Email
      title: "Email Directo",
      value: "sneider@productions.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: "https://cdn.simpleicons.org/whatsapp/25D366", // WhatsApp
      title: "WhatsApp Business",
      value: "+57 300 123 4567",
      description: "Conversación inmediata"
    },
    {
      icon: "https://cdn.simpleicons.org/googlemaps/FF0000", // Ubicación
      title: "Ubicación",
      value: "Colombia",
      description: "Proyectos locales e internacionales"
    },
    {
      icon: "https://cdn.simpleicons.org/clockify/00A3E0", // Horario
      title: "Horario",
      value: "Lun - Vie, 9AM - 6PM",
      description: "Zona horaria colombiana (UTC-5)"
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram/ffffff", url: "https://www.instagram.com/sneider_productions/", color: "from-pink-500 to-orange-500" },
    { name: "YouTube", icon: "https://cdn.simpleicons.org/youtube/ffffff", url: "https://www.youtube.com/@ElGeCoMU", color: "from-red-500 to-red-600" },
    { name: "Behance", icon: "https://cdn.simpleicons.org/behance/ffffff", url: "https://www.behance.net/jhojanramirez", color: "from-blue-500 to-purple-500" },
    { name: "LinkedIn", icon: "https://cdn.simpleicons.org/linkedin/ffffff", url: "https://www.linkedin.com/in/jojangotam/", color: "from-blue-600 to-blue-700" },
    { name: "Vimeo", icon: "https://cdn.simpleicons.org/vimeo/ffffff", url: "https://vimeo.com/user139017180", color: "from-cyan-500 to-blue-500" }
  ];

  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    emailjs.send(
      'service_7nd4esb',
      'template_elwsrlr',
      {
        from_name: formData.name,
        from_email: formData.email,
        project: formData.project,
        message: formData.message,
      },
      'juEr3-fASgUt7g_nS'
    )
      .then(() => {
        setSuccess(true);
        setSending(false);
        setFormData({ name: '', email: '', project: '', message: '' });
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((err) => {
        setError('No se pudo enviar el mensaje. Intenta de nuevo.');
        setSending(false);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-card/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
            filter: 'blur(40px)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-primary neon-text">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Cada gran proyecto comienza con una conversación. Cuéntame tu visión 
            y trabajemos juntos para crear algo extraordinario.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Form - centered */}
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="mx-auto p-8 rounded-xl border border-border bg-card/40 relative">
              {success && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-20 rounded-xl animate-fade-in">
                  <div className="bg-primary/90 text-background px-6 py-4 rounded-lg shadow-lg text-lg font-semibold neon-text border border-primary">
                    ¡Mensaje enviado correctamente!
                  </div>
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-20 rounded-xl animate-fade-in">
                  <div className="bg-red-600 text-background px-6 py-4 rounded-lg shadow-lg text-lg font-semibold border border-red-700">
                    {error}
                  </div>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-background/70 border border-border text-foreground"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 rounded-lg bg-background/70 border border-border text-foreground"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  placeholder="Nombre del proyecto (opcional)"
                  className="w-full px-4 py-3 rounded-lg bg-background/70 border border-border text-foreground"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background/70 border border-border text-foreground"
                  required
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <motion.button
                  type="submit"
                  className="bg-primary/20 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/30 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={sending}
                >
                  {sending ? 'Enviando...' : 'Enviar Mensaje'}
                </motion.button>

                <div className="text-sm text-foreground/70">Te responderé en menos de 24 horas.</div>
              </div>
            </form>
          </motion.div>
        </div>
        {/* Social Links moved to bottom */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h4 className="text-sm text-primary mb-6">Sígueme en redes</h4>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${social.name} en nueva pestaña`}
                onClick={(e) => {
                  if (!social.url || social.url === '#') {
                    e.preventDefault();
                    return;
                  }
                  try {
                    window.open(social.url, '_blank', 'noopener');
                  } catch (err) {}
                }}
                className="p-4 rounded-lg border border-border bg-card/40 hover:border-primary/50 transition-all duration-200 flex items-center justify-center"
                style={{ pointerEvents: 'auto' }}
              >
                {social.name === 'LinkedIn' ? (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zM8 19h-3v-9h3v9zM6.5 8.7c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zM20 19h-3v-4.5c0-1.103-.897-2-2-2s-2 .897-2 2v4.5h-3v-9h3v1.2c.66-.865 1.89-1.2 2.94-1.2 2.21 0 4 1.79 4 4v4.8z" />
                  </svg>
                ) : (
                  <img src={social.icon} alt={social.name} className="w-8 h-8" />
                )}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
