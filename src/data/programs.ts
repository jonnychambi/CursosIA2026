import type { Program } from '../types';

export const programs: Program[] = [
  {
    id: 'data-analytics-bootcamp',
    title: 'Bootcamp de Data Analytics',
    institution: 'Andes Tech Institute',
    country: 'Colombia',
    category: 'Data',
    modality: 'Online en vivo',
    durationWeeks: 16,
    priceUsd: 1250,
    level: 'Introductorio',
    teachers: ['Ana Pérez (ex-Mercado Libre)', 'Carlos Ríos (ex-Rappi)'],
    syllabusHighlights: ['SQL y modelado de datos', 'Power BI y storytelling', 'Proyecto capstone empresarial'],
    outcome: 'Portafolio con dashboard ejecutivos y preparación para rol junior.'
  },
  {
    id: 'fullstack-engineering-latam',
    title: 'Ingeniería Fullstack LATAM',
    institution: 'Núcleo Digital Academy',
    country: 'México',
    category: 'Software',
    modality: 'Híbrido',
    durationWeeks: 24,
    priceUsd: 2100,
    level: 'Intermedio',
    teachers: ['María Gómez (Staff Engineer)', 'Diego Lora (Tech Lead fintech)'],
    syllabusHighlights: ['React + TypeScript', 'Node.js y arquitectura API', 'Deploy cloud y CI/CD'],
    outcome: 'Base sólida para construir productos SaaS escalables.'
  },
  {
    id: 'ai-product-manager',
    title: 'AI Product Manager',
    institution: 'Pacifico School of Tech',
    country: 'Perú',
    category: 'Producto',
    modality: 'Online asincrónico',
    durationWeeks: 12,
    priceUsd: 980,
    level: 'Intermedio',
    teachers: ['Lucía Torres (PM IA)', 'Jorge Salas (Data Strategist)'],
    syllabusHighlights: ['Roadmaps con IA', 'Experimentación y métricas', 'Gobierno de datos y ética'],
    outcome: 'Framework para liderar productos data-driven con IA generativa.'
  },
  {
    id: 'cybersecurity-pro',
    title: 'Cybersecurity Pro LATAM',
    institution: 'Santiago Cyber Hub',
    country: 'Chile',
    category: 'Seguridad',
    modality: 'Online en vivo',
    durationWeeks: 20,
    priceUsd: 1700,
    level: 'Avanzado',
    teachers: ['Fernanda Ruiz (CISO advisor)', 'Martín Vidal (Pentester senior)'],
    syllabusHighlights: ['Threat modeling', 'Pentesting práctico', 'Diseño de SOC moderno'],
    outcome: 'Preparación para roles de analista y especialista de ciberseguridad.'
  }
];

export const institutions = [
  'Andes Tech Institute',
  'Núcleo Digital Academy',
  'Pacifico School of Tech',
  'Santiago Cyber Hub',
  'Río Labs University',
  'Caribe Coding School'
];
