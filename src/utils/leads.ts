import type { Lead } from '../types';

const STORAGE_KEY = 'studia_leads';

export const timingScoreMap: Record<Lead['timing'], number> = {
  'Próximo mes': 100,
  '1 a 3 meses': 70,
  'Más de 3 meses': 40,
  Explorando: 10
};

export const getStoredLeads = (): Lead[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveLead = (lead: Lead) => {
  const current = getStoredLeads();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([lead, ...current]));
};

export const exportLeadsCsv = () => {
  const leads = getStoredLeads();
  if (leads.length === 0) {
    return false;
  }

  const headers = ['id', 'fecha', 'nombre', 'email', 'pais', 'telefono', 'programa', 'timing', 'score'];
  const rows = leads.map((lead) => [
    lead.id,
    lead.createdAt,
    lead.name,
    lead.email,
    lead.country,
    lead.phone ?? '',
    lead.programInterest,
    lead.timing,
    String(lead.score)
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = `studia-leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);

  return true;
};
