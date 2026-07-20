import { ArrowRight, CheckCircle2, Target, XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.15 }
};

export default function AanpakPage() {
  return (
    <div className="min-h-screen bg-deep-navy text-light-gray font-sans">
      <Header />

      <main>
        {/* Intro */}
        <div className="px-6 pt-32 pb-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-coral mb-4">Aanpak</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Hoe werkt het Athlic-systeem
              </h1>
            </div>
          </div>
        </div>

        {/* Wat je krijgt Section */}
        <section id="aanbod" className="py-32 px-6 bg-white text-deep-navy">
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

        {/* Aanpak Section */}
        <section id="aanpak" className="py-32 px-6 bg-deep-navy relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/aanpak-bg.webp" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-deep-navy/90" />
          </div>  
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(233,69,96,0.05)_0%,transparent_70%)]"></div>
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <motion.div {...fadeInUp} className="lg:sticky lg:top-32 mb-12 lg:mb-0">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">De Athlic aanpak</h2>
                <p className="text-xl text-medium-gray mb-6">
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
                    <a href="/contact" className="text-coral hover:underline">Plan Een Gesprek</a>
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

        {/* Resultaat Section */}
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
                <a href="#aanpak" className="inline-flex items-center gap-2 font-bold text-coral hover:gap-4 transition-all">
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

        {/* Voor wie Section */}
<section id="voor-wie" className="py-32 px-6 bg-dark-navy relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img src="/voor-wie-bg3.webp" className="w-full h-full object-cover object-center" />
    <div className="absolute inset-0 bg-dark-navy/95" />
  </div>
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

      </main>

      <Footer />
    </div>
  );
}
