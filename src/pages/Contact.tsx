import { ArrowLeft, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-deep-navy text-light-gray font-sans">
      {/* Nav */}
      <header className="px-6 py-6 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <a href="/" className="font-bold text-2xl tracking-tight text-white">
            Athlic
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug
          </a>
        </div>
      </header>

      <main className="px-6 py-20">
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-coral mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Contact opnemen
            </h1>
            <p className="text-xl text-white/60">
              Heb je een vraag of wil je meer weten over wat we doen? Stuur ons een bericht of plan direct een gesprek.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left: info */}
            <div className="lg:col-span-4 space-y-8">

              <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">E-mail</p>
                    <a href="mailto:hello@athlic.io" className="text-white hover:text-coral transition-colors font-medium">
                      hello@athlic.io
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Adres</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Napoleonshoed 21<br />
                      4906 LC Oosterhout<br />
                      Nederland
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Liever direct een gesprek plannen?</p>
                <p className="text-white/60 text-sm mb-5">
                  In een kennismakingsgesprek bespreken we jouw situatie en kijken we of ons systeem past bij jouw gym.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Gratis â 30 minuten',
                    'Direct inzicht in jouw kansen',
                    'Geen verplichtingen',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="/#contact"
                  className="block w-full bg-coral hover:bg-coral/90 text-white font-bold py-4 px-6 rounded-2xl transition-all text-center text-sm"
                >
                  Plan een gesprek
                </a>
              </div>

            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 rounded-3xl p-8 md:p-10">
                <h2 className="text-xl font-bold text-white mb-8">Stuur een bericht</h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 mt-20">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>Â© 2026 Athlic. KvK 66050936.</p>
          <div className="flex gap-6">
            <a href="/privacybeleid" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="/cookiebeleid" className="hover:text-white transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// âââ Contact form (inline â same pattern as site's existing approach) ââââââââââ

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ naam: '', gym: '', email: '', bericht: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.naam || !form.email) return;
    setStatus('loading');
    try {
      const res = await fetch*'YOUR_FORM_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w414 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-7 h-7 text-coral" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Bericht ontvangen</h3>
        <p className="text-white/60 max-w-sm">We nemen zo snel mogelijk contact met je op â meestal binnen Ã©Ã©n werkdag.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Naam *
          </label>
          <input
            name="naam"
            value={form.naam}
            onChange={handleChange}
            placeholder="Jouw naam"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 focus:bg-white/8 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Naam van de gym
          </label>
          <input
            name="gym"
            value={form.gym}
            onChange={handleChange}
            placeholder="Naam van je gym"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
          E-mailadres *
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jouw@email.nl"
          className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
          Bericht
        </label>
        <textarea
          name="bericht"
          value={form.bericht}
          onChange={handleChange}
          rows={5}
          placeholder="Waar kan ik je mee helpen?"
          className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 transition-all resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-coral/80">Er ging iets mis. Probeer het opnieuw of mail naar hello@athlic.io</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'loading' || !form.naam || !form.email}
        className="group w-full bg-coral hover:bg-coral/90 disabled:opacity-40 text-white font-bold py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3"
      >
        {status === 'loading' ? 'Versturen...' : 'Verstuur bericht'}
        {status !== 'loading' && (
          <ArrowRight className="w5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </button>
      <p className="text-center text-xs text-white/25">* Verplichte velden</p>
    </div>
  );
}
