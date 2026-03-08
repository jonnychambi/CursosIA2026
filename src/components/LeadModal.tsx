import { type FormEvent, useState } from 'react';
import type { Lead, LeadTiming } from '../types';
import { saveLead, timingScoreMap } from '../utils/leads';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

const initialState = {
  name: '',
  email: '',
  country: '',
  phone: '',
  programInterest: '',
  timing: 'Explorando' as LeadTiming
};

export const LeadModal = ({ isOpen, onClose, preselectedProgram }: LeadModalProps) => {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const lead: Lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name: form.name,
      email: form.email,
      country: form.country,
      phone: form.phone,
      programInterest: form.programInterest || preselectedProgram || 'General',
      timing: form.timing,
      score: timingScoreMap[form.timing]
    };

    saveLead(lead);
    setMessage(`Lead guardado con score ${lead.score}.`);
    setForm(initialState);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-premium">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Solicita más información</h2>
          <button className="text-slate-500 hover:text-slate-900" onClick={onClose} type="button">Cerrar</button>
        </div>

        <form className="grid gap-3" onSubmit={onSubmit}>
          <input required className="rounded-xl border border-brand-gray px-4 py-2" placeholder="Nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" className="rounded-xl border border-brand-gray px-4 py-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input required className="rounded-xl border border-brand-gray px-4 py-2" placeholder="País" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
          <input className="rounded-xl border border-brand-gray px-4 py-2" placeholder="Teléfono (opcional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input
            className="rounded-xl border border-brand-gray px-4 py-2"
            placeholder="Programa de interés"
            value={form.programInterest || preselectedProgram || ''}
            onChange={(e) => setForm({ ...form, programInterest: e.target.value })}
          />
          <label className="text-sm font-medium text-slate-600">
            ¿Cuándo planeas iniciar este programa?
            <select
              className="mt-1 w-full rounded-xl border border-brand-gray px-4 py-2"
              value={form.timing}
              onChange={(e) => setForm({ ...form, timing: e.target.value as LeadTiming })}
            >
              {Object.keys(timingScoreMap).map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <button className="mt-2 rounded-xl bg-brand-mint px-4 py-2 font-semibold text-brand-slate" type="submit">
            Guardar lead
          </button>
        </form>

        {message ? <p className="mt-3 text-sm font-medium text-brand-blue">{message}</p> : null}
      </div>
    </div>
  );
};
