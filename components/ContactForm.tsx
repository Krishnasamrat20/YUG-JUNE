'use client';
import { useState } from 'react';

const inp: React.CSSProperties = {
  width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)',
  borderRadius:8, padding:'0.75rem 1rem', color:'var(--head)', fontSize:'0.9rem', outline:'none',
  transition:'border-color 0.2s',
};

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', email:'', company:'', message:'' });
  const [status, setStatus] = useState<'idle'|'sending'|'ok'|'err'>('idle');
  const set = (k:string) => (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  async function submit(e:React.FormEvent) {
    e.preventDefault(); setStatus('sending');
    try {
      const r = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
      setStatus(r.ok ? 'ok' : 'err');
    } catch { setStatus('err'); }
  }

  if (status === 'ok') return (
    <div style={{ textAlign:'center', padding:'2.5rem 0' }}>
      <div style={{ fontSize:'2rem', color:'var(--gold)', marginBottom:'1rem' }}>✦</div>
      <p style={{ fontWeight:700, fontSize:'1.05rem', color:'var(--head)', marginBottom:'0.5rem' }}>Message received.</p>
      <p style={{ color:'var(--muted)', fontSize:'0.9rem' }}>We'll get back to you within 24 hours.</p>
    </div>
  );

  const lbl: React.CSSProperties = { fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--muted)', display:'block', marginBottom:'0.4rem' };
  const focus = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; };
  const blur  = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; };

  return (
    <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.85rem' }}>
        <div><label style={lbl}>Name</label><input required value={form.name} onChange={set('name')} placeholder="Your name" style={inp} onFocus={focus} onBlur={blur} /></div>
        <div><label style={lbl}>Company</label><input value={form.company} onChange={set('company')} placeholder="Company name" style={inp} onFocus={focus} onBlur={blur} /></div>
      </div>
      <div><label style={lbl}>Email</label><input required type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" style={inp} onFocus={focus} onBlur={blur} /></div>
      <div><label style={lbl}>Message</label>
        <textarea required rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about your project — data type, volume, timeline, and quality goals." style={{ ...inp, resize:'vertical', lineHeight:1.65 }} onFocus={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }} />
      </div>
      {status === 'err' && <p style={{ fontSize:'0.85rem', color:'#f87171' }}>Something went wrong. Email us directly at hello@yugai.live</p>}
      <button type="submit" disabled={status==='sending'} className="btn-gold" style={{ justifyContent:'center', padding:'0.8rem', fontSize:'0.95rem', opacity:status==='sending'?0.7:1 }}>
        {status === 'sending' ? 'Sending…' : 'Send Message →'}
      </button>
      <p style={{ fontSize:'0.78rem', color:'var(--muted)', textAlign:'center' }}>We typically respond within 24 hours.</p>
    </form>
  );
}
