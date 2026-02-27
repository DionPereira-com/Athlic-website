import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, XCircle, Target, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const floating = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.15 }
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Resultaat', href: '#resultaat' },
    { name: 'Aanpak', href: '#aanpak' },
    { name: 'Wat je krijgt', href: '#wat-je-krijgt' },
    { name: 'Voor wie', href: '#voor-wie' },
    { name: 'FAQ', href: '#faq' },
    { name: '', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-deep-navy text-light-gray font-sans selection:bg-coral selection:text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-wider text-light-gray">
            ATHLIC
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-medium-gray">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-light-gray transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-coral hover:bg-coral/90 text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(233,69,96,0.39)] hover:shadow-[0_6px_20px_rgba(233,69,96,0.23)]">
                Plan Een Gesprek
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-light-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-dark-navy border-t border-light-gray/10 py-4 px-6 shadow-xl">
            <ul className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block text-light-gray font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <a 
                href="#contact" 
                className="bg-coral text-white text-center font-semibold py-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Een Gesprek
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative">
        {/* Hero Section - Creative Layout */}
        <section className="pt-32 pb-20 px-6 relative min-h-[90vh] flex items-center">
       <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    src="/hero-bg2.mp4"
  />
<div className="absolute inset-0 bg-deep-navy/85" />
</div>

          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-coral mb-6 tracking-wide uppercase"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
                </span>
                Google Visibility Experts
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] text-gradient pb-2"
              >
                Een volle gym <br /> begint op Google.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-medium-gray max-w-xl mb-10 leading-relaxed"
              >
                Complete Google-systemen voor HYROX en performance gyms. Van advertenties tot geautomatiseerde opvolging.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-5"
              >
                <a href="#contact" className="group bg-coral hover:bg-coral/90 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3">
                  Plan Een Gesprek
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div 
                variants={floating}
                animate="animate"
                className="relative z-10"
              >
                {/* Creative Bento-style Hero Visual */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="glass p-6 rounded-3xl border-white/10">
                      <div className="text-3xl font-bold text-teal mb-1">HYROX</div>
                      <div className="text-xs text-medium-gray uppercase tracking-wider">Specialisatie</div>
                    </div>
                    <div className="glass p-6 rounded-3xl border-white/10 aspect-square flex flex-col justify-end">
                      <Target className="w-8 h-8 text-coral mb-4" />
                      <div className="text-lg font-bold">Lokaal <br />Bereik</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="glass p-6 rounded-3xl border-white/10 aspect-[4/5] flex flex-col justify-between">
                      <div className="flex items-end gap-1 h-16 w-full">
                        {[0.3, 0.5, 0.4, 0.7, 0.6, 0.9, 0.8, 1].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h * 100}%` }}
                            transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
                            className="flex-1 bg-coral/60 rounded-t-sm"
                          />
                        ))}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">Meetbaar</div>
                        <div className="text-xs text-medium-gray">Resultaat</div>
                      </div>
                    </div>
                    <div className="bg-coral p-6 rounded-3xl text-white">
                      <div className="text-sm font-bold">Compleet Systeem</div>
                      <div className="mt-4 relative flex items-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 }}
                          className="w-1.5 h-1.5 bg-white rounded-full shrink-0"
                        />
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1, delay: 1.2 }}
                          className="flex-1 h-[1px] bg-white origin-left"
                        />
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 2.2 }}
                          className="w-1.5 h-1.5 bg-white rounded-full shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Background decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="py-10 border-y border-white/5 overflow-hidden bg-white/[0.02]">
          <div className="animate-marquee whitespace-nowrap">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex items-center gap-12 px-6">
                <span className="text-2xl font-bold text-white/20 tracking-tighter italic uppercase">Complete systemen</span>
                <span className="text-2xl font-bold text-coral/40 tracking-tighter italic uppercase">20+ jaar Google expertise</span>
                <span className="text-2xl font-bold text-teal/20 tracking-tighter italic uppercase">Voorspelbare resultaten</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resultaat Section - Bento Grid */}
        <section id="resultaat" className="py-32 px-6 bg-light-gray text-deep-navy">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Wat je mag <br /> verwachten</h2>
                <p className="text-xl text-dark-navy/60 max-w-md">
                  Geen vage beloftes, maar een systeem gebouwd op rendement.
                </p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <a href="#contact" className="inline-flex items-center gap-2 font-bold text-coral hover:gap-4 transition-all">
                  Bekijk onze aanpak <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col justify-between min-h-[320px] group hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-coral" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Consistente Aanvragen</h3>
                  <p className="text-dark-navy/60 text-base leading-relaxed">
                    Een stabiele stroom van kwalitatieve proefles aanvragen als baseline voor jouw groei.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-dark-navy p-10 rounded-[2.5rem] text-white flex flex-col justify-between min-h-[320px] group hover:bg-deep-navy transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-7 h-7 text-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hogere Opkomst</h3>
                  <p className="text-white/60 text-base leading-relaxed">
                    Slimme opvolging zorgt dat aanvragen ook echt verschijnen.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-teal p-10 rounded-[2.5rem] text-white flex flex-col justify-between min-h-[320px] group hover:scale-[0.98] transition-all">
                <div className="text-6xl font-bold mb-4 tracking-tighter">ROI</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Meetbaar</h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    Precies inzicht in wat elke euro aan advertenties oplevert.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="md:col-span-3 bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-black/5 flex items-center justify-center">
                <p className="text-sm text-dark-navy/40 italic text-center">
                  * Resultaten verschillen per locatie en aanbod. We sturen op meetbare proefles aanvragen.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Aanpak Section */}
        <section id="aanpak" className="py-32 px-6 bg-deep-navy relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(233,69,96,0.05)_0%,transparent_70%)]"></div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <motion.div {...fadeInUp} className="lg:sticky lg:top-32 mb-12 lg:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">De Athlic aanpak</h2>
                <p className="text-xl text-medium-gray mb-12">
                  Een doordacht proces om jouw gym lokaal te domineren. Geen giswerk, maar data-gedreven stappen.
                </p>
                <p className="text-xl text-medium-gray mb-12">
  Zo gestructureerd als een race-prep schema. Zo meetbaar als je finish time.
</p>
                <div className="flex items-center gap-4 p-6 glass rounded-3xl border-white/5 max-w-sm">
                  <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight className="w-6 h-6 text-teal" />
                  </div>
                  <div className="text-sm font-medium text-light-gray">
                    Klaar om te starten? <br />
                    <a href="#contact" className="text-coral hover:underline">Plan Een Gesprek</a>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                {[
                  { number: "01", title: "Baseline & Tracking", desc: "We brengen de huidige prestaties in kaart en stellen waterdichte conversietracking in via GTM." },
                  { number: "02", title: "Live Gang", desc: "Gerichte zoekcampagnes en Google Bedrijfsprofiel optimalisatie gaan live. Inclusief het maken van een landingspagina en het opzetten van automatische leadopvolging." },
                  { number: "03", title: "Autoriteit Bouwen", desc: "We implementeren een systeem voor reviews en versterken je lokale online autoriteit." },
                  { number: "04", title: "Optimalisatie", desc: "Continu bijsturen op basis van harde data voor de hoogste kwaliteit aanvragen." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 glass rounded-[2rem] border-white/10 hover:border-coral/40 transition-all translate-x-2 hover:translate-x-4 hover:scale-[1.01]"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold text-coral/20 group-hover:text-coral transition-colors">{step.number}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-medium-gray leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wat je krijgt Section - Creative Grid */}
        <section id="wat-je-krijgt" className="py-32 px-6 bg-white text-deep-navy">
          <div className="max-w-[1200px] mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Wat we bouwen</h2>
              <p className="text-xl text-dark-navy/60 max-w-2xl mx-auto">
                Een compleet ecosysteem gericht op één doel: meer proefleden.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Zoekcampagnes", desc: "Vang de directe vraag af van mensen die nu zoeken naar een gym in jouw buurt." },
                  { title: "Google Maps SEO", desc: "Zorg dat jouw gym bovenaan verschijnt in de lokale zoekresultaten en op de kaart." },
                  { title: "Review Systeem", desc: "Automatiseer het verzamelen van positieve reviews voor maximale lokale autoriteit." },
                  { title: "Landingspagina's", desc: "Conversie-geoptimaliseerde pagina's die bezoekers direct omzetten in proefles aanvragen." }
                ].map((item, i) => (
                  <motion.div key={i} {...fadeInUp} className="p-8 bg-light-gray rounded-[2rem] border border-black/5 hover:shadow-lg transition-all">
                    <CheckCircle2 className="w-8 h-8 text-teal mb-4" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-dark-navy/60 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeInUp} className="bg-coral p-10 rounded-[2.5rem] text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Tracking & Rapportage</h3>
                  <p className="text-white/80 leading-relaxed">
                    Weet exact welke campagne zorgt voor telefoontjes en formulierinzendingen. Geen black box.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Focus</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="font-semibold">Volledige Transparantie</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Voor wie Section */}
        <section id="voor-wie" className="py-32 px-6 bg-dark-navy relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">Voor wie is <br /> dit systeem?</h2>
                <p className="text-xl text-medium-gray mb-8">
                  Wij werken exclusief voor HYROX en performance gyms die klaar zijn om hun lokale markt te domineren.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-teal">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-semibold">Premium Positionering</span>
                  </div>
                  <div className="flex items-center gap-4 text-teal">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-semibold">Duidelijke Proefles Flow</span>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-6">
                <motion.div {...fadeInUp} className="p-10 glass rounded-[2.5rem] border-teal/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal" /> Past goed als
                  </h3>
                  <ul className="space-y-4 text-medium-gray">
                    <li>• Je instroom structureel wilt maken</li>
                    <li>• Je programma premium geprijsd is</li>
                    <li>• Je minder afhankelijk wilt zijn van Instagram</li>
                  </ul>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="p-10 glass rounded-[2.5rem] border-coral/20 opacity-60">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-coral" /> Past minder als
                  </h3>
                  <ul className="space-y-4 text-medium-gray">
                    <li>• Je geen capaciteit hebt voor nieuwe leden</li>
                    <li>• Je alleen branding wilt zonder targets</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 px-6 bg-light-gray text-deep-navy">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Veelgestelde vragen</h2>
                <p className="text-dark-navy/60 mb-8">
                  Alles wat je moet weten over de samenwerking met Athlic.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 font-bold text-coral">
                  Stel een andere vraag <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              
              <div className="lg:col-span-2 space-y-4">
                <FaqItem 
                  question="Hoe snel zien we eerste aanvragen?" 
                  answer="Meestal binnen de eerste twee weken na livegang. Zodra de tracking staat en de advertenties draaien, vangen we direct de lokale zoekvraag af." 
                />
                <FaqItem 
                  question="Werkt dit als we al campagnes draaien?" 
                  answer="Ja, we auditen bestaande campagnes en optimaliseren deze. Vaak is er veel winst te behalen in accountstructuur en tracking." 
                />
                <FaqItem 
                  question="Wat hebben jullie nodig van ons?" 
                  answer="Toegang tot je website, Google accounts en input over je ideale lid en huidige aanbod." 
                />
                <FaqItem 
                  question="Moeten we onze website aanpassen?" 
                  answer="Soms bouwen we een specifieke landingspagina om de conversie te verhogen. Je hoofdwebsite kan vaak blijven zoals hij is." 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Over Athlic Section */}
        <section className="py-32 px-6 bg-deep-navy relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                <div className="w-20 h-20 bg-coral/10 rounded-3xl flex items-center justify-center mb-10">
                  <Target className="w-10 h-10 text-coral" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">Waarom Athlic?</h2>
                <div className="space-y-6 text-lg text-medium-gray leading-relaxed">
                  <p>
                    Wij zijn geen algemeen marketingbureau. Wij zijn specialisten in de <span className="text-white font-bold italic">HYROX en performance fitness niche</span>.
                  </p>
                  <p>
                    Onze focus ligt op vindbaarheid en automatisering. Geen vage branding, maar systemen die direct bijdragen aan de groei van je ledenbestand.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                className="relative"
              >
                <div className="p-12 glass rounded-[3rem] border-white/10 relative z-10">
                  <p className="text-2xl text-light-gray font-medium leading-relaxed italic mb-8">
                    "20+ jaar gecombineerde expertise in Google Ads en online vindbaarheid. We weten hoe je lokale zoekverkeer omzet in betalende leden."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral/20 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <div className="text-white font-bold"> Pereira - Oprichter</div>
                      <div className="text-medium-gray text-sm uppercase tracking-widest">Athlic Performance</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal/20 rounded-full blur-3xl -z-0"></div>
              </motion.div>
            </div>
          </div>
        </section>

{/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-light-gray text-deep-navy">
          <div className="max-w-[1200px] mx-auto">

            {/* Header */}
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">Plan de <br /> volgende stap.</h2>
              <p className="text-xl text-dark-navy/60 max-w-2xl mx-auto">
                We bespreken jouw situatie, kijken waar de kansen liggen, en of ons systeem past bij jouw gym.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

              {/* Left: Photo + Bio card */}
              <motion.div {...fadeInUp} className="w-full lg:col-span-4 flex">
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-black/5">
                  <div className="bg-gradient-to-br from-deep-navy to-dark-navy px-8 pt-8 pb-0 flex justify-center">
                    <img
                      src="https://www.dionpereira.com/wp-content/uploads/2022/04/dion-pereira.webp"
                      alt="Dion Pereira - Oprichter Athlic"
                      className="w-48 h-48 object-cover object-top"
                    />
                  </div>
                  <div className="p-8">
                    <div className="font-bold text-xl text-deep-navy">Dion Pereira</div>
                    <div className="text-coral text-sm font-semibold uppercase tracking-widest mb-4">Oprichter, Athlic</div>
                    <p className="text-dark-navy/60 text-sm leading-relaxed">
                      10+ jaar ervaring in Google Ads en online vindbaarheid. Gespecialiseerd in HYROX en performance gyms.
                    </p>
                    <div className="mt-6 pt-6 border-t border-black/5 flex items-center gap-2 text-sm text-dark-navy/50">
                      <div className="w-2 h-2 bg-teal rounded-full animate-pulse"></div>
                      Reageert binnen 1 werkdag
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Middle: What to expect */}
              <motion.div {...fadeInUp} className="w-full lg:col-span-4 flex flex-col gap-4">
                <div className="text-xs font-bold uppercase tracking-widest text-dark-navy/40 mb-2">Wat je mag verwachten</div>
                {[
                  { step: "01", title: "Gratis gesprek van 30 min", desc: "Geen verkooppraatje. We kijken samen naar jouw situatie en groeipotentie." },
                  { step: "02", title: "Kansen direct helder", desc: "Je verlaat het gesprek met concrete inzichten over jouw kansen." },
                  { step: "03", title: "Geen verplichtingen", desc: "We werken alleen samen als er een duidelijke match is. Geen druk." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl border border-black/5 shadow-sm w-full">
                    <div className="text-2xl font-bold text-coral/20 shrink-0">{item.step}</div>
                    <div>
                      <div className="font-bold text-deep-navy mb-1">{item.title}</div>
                      <div className="text-sm text-dark-navy/60 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Right: CTA */}
              <motion.div {...fadeInUp} className="w-full lg:col-span-4">
                <div className="bg-deep-navy p-8 rounded-[2.5rem] text-white flex flex-col w-full overflow-hidden">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Klaar om te starten?</div>
                  <h3 className="text-2xl font-bold mb-4">Boek een gratis kennismakingsgesprek</h3>
                  <p className="text-white/60 mb-10 leading-relaxed">
                    Kies direct een moment dat jou uitkomt. Je ontvangt een bevestiging per e-mail.
                  </p>
                  <button
                    data-cal-namespace="kennismakingsgesprek"
                    data-cal-link="athlic/kennismakingsgesprek"
                    data-cal-config='{"layout":"month_view"}'
                    className="group w-full bg-coral hover:bg-coral/90 text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                  >
                    Plan Een Gesprek
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Gratis
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      30 minuten
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Geen verplichtingen
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-deep-navy pt-20 pb-10 px-6 border-t border-white/5 relative">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-[#8B2E3E] to-[#4A2C2C]"></div>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div>
              <div className="text-3xl font-bold tracking-tighter text-white mb-4">ATHLIC.</div>
              <p className="text-medium-gray max-w-xs">
                Vindbaarheid en instroom voor de performance fitness industrie.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <div className="text-white font-bold mb-4">Navigatie</div>
                <ul className="space-y-2 text-sm text-medium-gray">
                  <li><a href="#resultaat" className="hover:text-coral transition-colors">Resultaat</a></li>
                  <li><a href="#aanpak" className="hover:text-coral transition-colors">Aanpak</a></li>
                  <li><a href="#contact" className="hover:text-coral transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <div className="text-white font-bold mb-4">Legal</div>
                <ul className="space-y-2 text-sm text-medium-gray">
                  <li><a href="#" className="hover:text-coral transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-coral transition-colors">Voorwaarden</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-medium-gray/50 uppercase tracking-widest">
            <div>© 2026 Athlic. Alle rechten voorbehouden.</div>
            <div className="flex items-center gap-4">
              <span>Google Partner</span>
              <span>Performance Gym Specialist</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-black/5 overflow-hidden transition-all">
      <button 
        className="w-full p-6 flex justify-between items-center text-left font-bold text-deep-navy hover:bg-light-gray/50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-coral border-coral' : ''}`}>
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-medium-gray'}`} />
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-dark-navy/60 leading-relaxed border-t border-black/5">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
