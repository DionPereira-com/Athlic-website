import { useState } from 'react';
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const WEB3FORMS_KEY = '08235afe-dfd2-4c61-a761-f9cc20e01b40';
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY as string;
const BREVO_LIST_ID = 3;

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
              Neem contact op
            </h1>
            <p className="text-xl text-white/60">
              Benieuwd wat we voor jouw online groei kunnen betekenen? Vul het formulier in en geef aan waar je hulp bij nodig hebt of vragen over hebt.
            </p>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white/5 rounded-2xl p-6 space-y-6">
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
                    <Phone className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Telefoon</p>
                    <a href="tel:+31162700555" className="text-white hover:text-coral transition-colors font-medium">
                      0162-700555
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
                      Athlic<br />
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
                    'Gratis gesprek van 45 min',
                    'Direct inzicht in jouw kansen',
                    'Geen verplichtingen',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <button
                  data-cal-link="athlic/kennismakingsgesprek"
                  data-cal-namespace="kennismakingsgesprek"
                  data-cal-config='{"layout":"month_view"}'
                  className="block w-full bg-coral hover:bg-coral/90 text-white font-bold py-4 px-6 rounded-2xl transition-all text-center text-sm cursor-pointer"
                >
                  Plan een gesprek
                </button>
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
          <p>© 2026 Athlic. KvK 66050936.</p>
          <div className="flex gap-6">
            <a href="/privacybeleid" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="/cookiebeleid" className="hover:text-white transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Contact form ────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ voornaam?: string; email?: string }>({});
  const [form, setForm] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    bedrijfsnaam: '',
    bericht: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.voornaam.trim()) newErrors.voornaam = 'Voornaam is verplicht';
    if (!form.email.trim()) newErrors.email = 'E-mailadres is verplicht';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Vul een geldig e-mailadres in';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus('loading');

    try {
      // 1. Web3Forms — stuurt e-mail naar hello@athlic.io
      const web3Payload = new FormData();
      web3Payload.append('access_key', WEB3FORMS_KEY);
      web3Payload.append('name', `${form.voornaam} ${form.achternaam}`.trim());
      web3Payload.append('email', form.email);
      web3Payload.append('phone', form.telefoon);
      web3Payload.append('company', form.bedrijfsnaam);
      web3Payload.append('message', form.bericht || '(geen bericht)');
      web3Payload.append('subject', `Nieuw contactformulier — ${form.voornaam} ${form.achternaam}`.trim());

      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3Payload,
      });

      // 2. Brevo — voegt contact toe aan lijst
      const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: form.email,
          attributes: {
            FIRSTNAME: form.voornaam,
            LASTNAME: form.achternaam || undefined,
            SMS: form.telefoon || undefined,
            COMPANY: form.bedrijfsnaam || undefined,
          },
          listIds: [BREVO_LIST_ID],
          updateEnabled: true,
        }),
      });

      // Succes als Web3Forms werkt (Brevo is bonus)
      if (web3Res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-7 h-7 text-coral" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Bericht ontvangen</h3>
        <p className="text-white/60 max-w-sm">
          We nemen zo snel mogelijk contact met je op – meestal binnen één werkdag.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Voornaam + Achternaam */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Voornaam *
          </label>
          <input
            name="voornaam"
            value={form.voornaam}
            onChange={handleChange}
            placeholder="Voornaam"
            className={`w-full bg-white/5 border text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:bg-white/8 transition-all ${
              errors.voornaam ? 'border-coral/60' : 'border-white/10 focus:border-coral/60'
            }`}
          />
          {errors.voornaam && (
            <p className="mt-1.5 text-xs text-coral/80">{errors.voornaam}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Achternaam
          </label>
          <input
            name="achternaam"
            value={form.achternaam}
            onChange={handleChange}
            placeholder="Achternaam"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 transition-all"
          />
        </div>
      </div>

      {/* Email */}
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
          className={`w-full bg-white/5 border text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-all ${
            errors.email ? 'border-coral/60' : 'border-white/10 focus:border-coral/60'
          }`}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-coral/80">{errors.email}</p>
        )}
      </div>

      {/* Telefoon + Bedrijfsnaam */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Telefoonnummer
          </label>
          <input
            name="telefoon"
            type="tel"
            value={form.telefoon}
            onChange={handleChange}
            placeholder="+31 6 12345678"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
            Bedrijfsnaam
          </label>
          <input
            name="bedrijfsnaam"
            value={form.bedrijfsnaam}
            onChange={handleChange}
            placeholder="Naam van je gym"
            className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-coral/60 transition-all"
          />
        </div>
      </div>

      {/* Bericht */}
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
        <p className="text-sm text-coral/80">
          Er ging iets mis. Probeer het opnieuw of mail naar{' '}
          <a href="mailto:hello@athlic.io" className="underline">hello@athlic.io</a>
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="group w-full bg-coral hover:bg-coral/90 disabled:opacity-40 text-white font-bold py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer"
      >
        {status === 'loading' ? 'Versturen...' : 'Verstuur bericht'}
        {status !== 'loading' && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </button>

      <p className="text-center text-xs text-white/25">* Verplichte velden</p>
    </div>
  );
}
