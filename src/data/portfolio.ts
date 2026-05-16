import { Atom, Bot, Code2, Database, GitBranch, Mail, MessageCircle, Phone, Rocket, ShieldCheck, Workflow } from "lucide-react";

export const profile = {
  name: "Alejandro Lozano Restrepo",
  handle: "AlejoDEV17",
  role: "Backend & Automation Developer",
  location: "Cali, Valle del Cauca, Colombia",
  email: "calivallelozano@gmail.com",
  phone: "3145726541",
  phoneIntl: "573145726541",
  github: "https://github.com/AlejoDEV17",
  linkedin: "https://www.linkedin.com/in/alejandro-lozano-restrepo-44631a230",
  site: "https://alejodev17.github.io/Mi_portafolio_web/",
  summary:
    "Backend & Automation Developer con experiencia en Python, APIs, bases de datos y automatizacion de procesos empresariales. Enfocado en desarrollar soluciones escalables que optimizan flujos de trabajo, mejoran la productividad y resuelven problemas reales de negocio."
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" }
];

export const stats = [
  { value: "5+", label: "Automatizaciones privadas" },
  { value: "100%", label: "Orientado a procesos reales" },
  { value: "24/7", label: "Mentalidad de mejora continua" }
];

export const skills = [
  {
    icon: Code2,
    title: "Backend Engineering",
    text: "Python, Node.js, Express, Flask, servicios backend, logica de negocio e integraciones entre plataformas."
  },
  {
    icon: Bot,
    title: "Automation & RPA",
    text: "Bots RPA, UiPath, n8n, Selenium y automatizacion de flujos operativos de alto impacto."
  },
  {
    icon: Database,
    title: "Data & Tooling",
    text: "MongoDB, PostgreSQL, MySQL, Git, GitHub, Linux, Docker, Postman, Bash y Zoho Deluge."
  }
];

export const experience = [
  {
    company: "ValleSalud",
    role: "Analista de Desarrollo de Software",
    text: "Desarrollo de soluciones backend, integraciones mediante APIs REST, bots RPA, automatizaciones con UiPath, n8n y Python, mantenimiento de servicios y gestion de entornos Linux.",
    icon: Rocket
  },
  {
    company: "CODESA S.A.S",
    role: "QA Analyst",
    text: "Validacion funcional de software, reporte y seguimiento de errores, optimizacion de procesos QA, validacion de integraciones, Jira y bases de datos.",
    icon: ShieldCheck
  }
];

export const education = [
  {
    institution: "SENA",
    program: "Tecnico en Programacion de Software",
    text: "Bases en desarrollo, logica de programacion, estructura de proyectos y construccion de soluciones tecnologicas."
  },
  {
    institution: "Institucion Universitaria Antonio Jose Camacho",
    program: "Ingenieria de Sistemas",
    text: "Actualmente fortaleciendo conocimientos en desarrollo backend, arquitectura de software, automatizacion y soluciones empresariales."
  }
];

export const projects = [
  {
    name: "Rpa-Ingresos",
    tags: ["Python", "RPA", "Caso empresarial privado"],
    text: "Automatizacion para apoyar la actualizacion puntual de datos RIPS en sistemas internos.",
    impact: ["Procesamiento de archivos Excel", "Actualizacion de datos operativos", "Mayor consistencia administrativa"]
  },
  {
    name: "Centro de llamadas RPA",
    tags: ["RPA", "Operaciones", "Caso empresarial privado"],
    text: "Solucion RPA para procesos de centro de llamadas, orientada a disminuir tareas manuales y mejorar productividad operativa.",
    impact: ["Automatizacion de pasos repetitivos", "Soporte a operaciones internas", "Mejor trazabilidad del flujo"]
  },
  {
    name: "RPA_FECHA_EGRESOV2",
    tags: ["Python", "Fechas", "Caso empresarial privado"],
    text: "Automatizacion para gestionar y validar fechas de egreso dentro de procesos internos.",
    impact: ["Validacion de informacion sensible", "Reduccion de revision manual", "Datos mas consistentes"]
  },
  {
    name: "RPA_Punto7",
    tags: ["Python", "RPA", "Caso empresarial privado"],
    text: "Bot de automatizacion para tareas especificas de flujo interno, enfocado en velocidad y consistencia.",
    impact: ["Ejecucion asistida", "Menor dependencia manual", "Soporte a procesos privados"]
  },
  {
    name: "RPA_Casos_Cerrados",
    tags: ["Python", "Costos", "Caso empresarial privado"],
    text: "Automatizacion para apoyar el cierre de casos de costos y mantener mayor control del avance del proceso.",
    impact: ["Cierre asistido de casos", "Automatizacion con Python", "Mayor trazabilidad operativa"]
  }
];

export const stackOrbit = ["Python", "RPA", "APIs", "PostgreSQL", "MongoDB", "Docker", "n8n", "UiPath"];

export const contactChannels = [
  {
    label: "Correo",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Mail
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phoneIntl}?text=Hola%20Alejandro%2C%20vi%20tu%20portafolio%20y%20me%20gustaria%20contactarte.`,
    icon: MessageCircle
  },
  {
    label: "Llamar",
    href: `tel:+${profile.phoneIntl}`,
    icon: Phone
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GitBranch
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Atom
  }
];

export const heroHighlights = [
  {
    label: "Enfoque",
    value: "Backend y automatizacion"
  },
  {
    label: "Stack principal",
    value: "Python, APIs y bases de datos"
  },
  {
    label: "Impacto",
    value: "Menos tareas manuales, mas eficiencia"
  },
  {
    label: "Tipo de soluciones",
    value: "Herramientas internas escalables"
  }
];
