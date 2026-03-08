export type Modality = 'Online en vivo' | 'Online asincrónico' | 'Híbrido';

export interface Program {
  id: string;
  title: string;
  institution: string;
  country: string;
  category: string;
  modality: Modality;
  durationWeeks: number;
  priceUsd: number;
  level: 'Introductorio' | 'Intermedio' | 'Avanzado';
  teachers: string[];
  syllabusHighlights: string[];
  outcome: string;
}

export type LeadTiming = 'Próximo mes' | '1 a 3 meses' | 'Más de 3 meses' | 'Explorando';

export interface Lead {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  country: string;
  phone?: string;
  programInterest: string;
  timing: LeadTiming;
  score: number;
}
