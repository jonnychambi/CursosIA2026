import type { Program } from '../types';

const PEN_TO_USD = 1 / 3.75;

const modalityMap = (value?: string) => {
  const v = (value || '').toLowerCase().trim();
  if (v.includes('sicrona') || v.includes('sincrona') || v.includes('síncrona')) return 'Online en vivo';
  if (v.includes('asincron')) return 'Online asincrónico';
  if (v.includes('mixto') || v.includes('hibr')) return 'Híbrido';
  return 'Online';
};

const toCategory = (title: string, profiles?: string) => {
  const text = `${title} ${profiles || ''}`.toLowerCase();

  if (text.includes('data engineer') || text.includes('databricks') || text.includes('spark')) return 'Data Engineering';
  if (text.includes('data analyst') || text.includes('power bi') || text.includes('analytics')) return 'Data Analytics';
  if (text.includes('machine learning') || text.includes('ia ') || text.includes('inteligencia artificial') || text.includes('ai ')) return 'IA';
  if (text.includes('cloud') || text.includes('aws') || text.includes('azure') || text.includes('google cloud')) return 'Cloud';
  if (text.includes('power apps') || text.includes('power automate')) return 'Automatización';
  if (text.includes('ciberseguridad') || text.includes('cybersecurity')) return 'Seguridad';
  if (text.includes('sql')) return 'Data';
  return 'Tecnología';
};

const estimateWeeks = (hours?: number, sessions?: number) => {
  if (sessions && sessions > 0) return sessions;
  if (!hours || hours <= 0) return 8;
  return Math.max(4, Math.round(hours / 6));
};

export const programs: Program[] = [
  {
    id: 'especializacion-automatizacion-inteligente-power-apps-power-automate',
    title: 'Especialización Automatización Inteligente con Power Apps & Power Automate',
    institution: 'datapath.ai',
    country: 'LatAm',
    category: 'Automatización',
    modality: 'Online en vivo',
    durationWeeks: 10,
    priceUsd: Number((331.65 * PEN_TO_USD).toFixed(0)),
    level: 'Intermedio',
    teachers: ['Alejandro Rueda Zapata'],
    syllabusHighlights: [
      'Diseño de aplicaciones con Power Apps',
      'Automatización con Power Automate',
      'Integración de datos con Dataverse y conectores'
    ],
    outcome: 'Formación aplicada para automatizar procesos de negocio y construir soluciones low-code con IA.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((1340 * PEN_TO_USD).toFixed(0)),
    durationHours: 27,
    score: 1,
    profiles: ['Data Analyst'],
    url: 'https://cursos.datapath.ai/cursos/especializacion-ia-aplicada-con-microsoft-power-platform',
    finalDeliverable: 'Casos prácticos',
    certificationSupport: false,
    sessions: 10,
    discountPct: 75.25
  },
  {
    id: 'especializacion-ia-generativa-aws',
    title: 'Especialización en IA Generativa en AWS',
    institution: 'datapath.ai',
    country: 'LatAm',
    category: 'IA',
    modality: 'Online en vivo',
    durationWeeks: 10,
    priceUsd: Number((938 * PEN_TO_USD).toFixed(0)),
    level: 'Intermedio',
    teachers: ['Alejandro Solaque'],
    syllabusHighlights: [
      'Fundamentos de IA Generativa y LLMs en AWS',
      'Amazon SageMaker y Kendra',
      'Arquitectura de soluciones y estrategia para certificación'
    ],
    outcome: 'Ruta especializada para diseñar e implementar soluciones de IA generativa sobre el ecosistema AWS.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((1340 * PEN_TO_USD).toFixed(0)),
    durationHours: 27,
    score: 4,
    profiles: ['AI Engineer', 'Data Scientist', 'Data Engineer'],
    url: 'https://cursos.datapath.ai/cursos/especializacion-en-ia-generativa-en-aws',
    finalDeliverable: 'Casos prácticos',
    certificationSupport: false,
    sessions: 10,
    discountPct: 30
  },
  {
    id: 'especializacion-data-stewardship',
    title: 'Especialización en Data Stewardship',
    institution: 'DMC',
    country: 'Perú',
    category: 'Data',
    modality: 'Online en vivo',
    durationWeeks: 8,
    priceUsd: Number((1040 * PEN_TO_USD).toFixed(0)),
    level: 'Intermedio',
    teachers: ['Docente DMC'],
    syllabusHighlights: [
      'Gobierno de datos y stewardship',
      'Calidad, ownership y políticas',
      'Aplicación empresarial'
    ],
    outcome: 'Base sólida para liderar prácticas de gobierno y calidad de datos en organizaciones.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((1040 * PEN_TO_USD).toFixed(0)),
    durationHours: 48,
    score: 4,
    profiles: ['Data Steward', 'Data Analyst', 'BI Analyst'],
    finalDeliverable: 'Proyecto aplicado',
    certificationSupport: false
  },
  {
    id: 'especializacion-power-apps-power-automate-dmc',
    title: 'Especialización Power Apps y Power Automate',
    institution: 'DMC',
    country: 'Perú',
    category: 'Automatización',
    modality: 'Online en vivo',
    durationWeeks: 8,
    priceUsd: Number((1040 * PEN_TO_USD).toFixed(0)),
    level: 'Intermedio',
    teachers: ['Docente DMC'],
    syllabusHighlights: [
      'Automatización de flujos',
      'Apps empresariales low-code',
      'Integración con ecosistema Microsoft'
    ],
    outcome: 'Capacidad para automatizar procesos internos y acelerar productividad con herramientas low-code.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((1040 * PEN_TO_USD).toFixed(0)),
    durationHours: 48,
    score: 4,
    profiles: ['Analista de Procesos', 'Data Analyst', 'Productivity Specialist'],
    finalDeliverable: 'Proyecto aplicado',
    certificationSupport: false
  },
  {
    id: 'ingenieria-datos-ia-databricks',
    title: 'Ingeniería de Datos e IA con Databricks',
    institution: 'SmartData',
    country: 'LatAm',
    category: 'Data Engineering',
    modality: 'Online en vivo',
    durationWeeks: 10,
    priceUsd: Number((1259 * PEN_TO_USD).toFixed(0)),
    level: 'Avanzado',
    teachers: ['Docente SmartData'],
    syllabusHighlights: [
      'Databricks y arquitectura lakehouse',
      'Pipelines de datos',
      'IA aplicada en entorno de datos'
    ],
    outcome: 'Programa para construir pipelines modernos y habilitar casos avanzados de analítica e IA.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((2599 * PEN_TO_USD).toFixed(0)),
    durationHours: 60,
    score: 4,
    profiles: ['Data Engineer', 'ML Engineer'],
    finalDeliverable: 'Proyecto aplicado',
    certificationSupport: true
  },
  {
    id: 'ciberseguridad-azure',
    title: 'Ciberseguridad en Azure',
    institution: 'SmartData',
    country: 'LatAm',
    category: 'Seguridad',
    modality: 'Online en vivo',
    durationWeeks: 10,
    priceUsd: Number((1259 * PEN_TO_USD).toFixed(0)),
    level: 'Intermedio',
    teachers: ['Docente SmartData'],
    syllabusHighlights: [
      'Seguridad cloud en Azure',
      'Gobierno y compliance',
      'Arquitectura segura'
    ],
    outcome: 'Preparación funcional para diseñar y operar entornos cloud más seguros.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((2599 * PEN_TO_USD).toFixed(0)),
    durationHours: 60,
    score: 4,
    profiles: ['Cloud Engineer', 'Security Analyst'],
    finalDeliverable: 'Proyecto aplicado',
    certificationSupport: true
  },
  {
    id: 'arquitecto-soluciones-aws',
    title: 'Arquitecto de Soluciones en AWS',
    institution: 'SmartData',
    country: 'LatAm',
    category: 'Cloud',
    modality: 'Online en vivo',
    durationWeeks: 10,
    priceUsd: Number((1259 * PEN_TO_USD).toFixed(0)),
    level: 'Intermedio',
    teachers: ['Docente SmartData'],
    syllabusHighlights: [
      'Diseño de arquitecturas en AWS',
      'Buenas prácticas cloud',
      'Preparación para certificación'
    ],
    outcome: 'Ruta estructurada para diseñar soluciones cloud robustas y escalables en AWS.',
    typeCourse: 'Especialización',
    priceOriginalUsd: Number((2599 * PEN_TO_USD).toFixed(0)),
    durationHours: 60,
    score: 4,
    profiles: ['Solutions Architect', 'Cloud Engineer'],
    finalDeliverable: 'Proyecto aplicado',
    certificationSupport: true
  }
];

export const institutions = [
  'DMC',
  'datapath.ai',
  'SmartData',
  'datascience'
];
