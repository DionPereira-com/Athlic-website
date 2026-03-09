import { ArrowLeft } from 'lucide-react';

export default function PrivacybeleidPage() {
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

      {/* Content */}
      <main className="px-6 py-20">
        <div className="max-w-[760px] mx-auto">

          {/* Header */}
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-coral mb-4">Juridisch</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Privacybeleid
            </h1>
            <p className="text-white/40 text-sm">Versie 1.0 maart 2026</p>
          </div>

          {/* Body */}
          <div className="prose-athlic space-y-12">

            <Section title="1. Introductie">
              <p>Athlic hecht veel waarde aan de bescherming van jouw persoonsgegevens. In dit privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom wij dat doen, hoe lang wij ze bewaren en welke rechten jij hebt.</p>
              <p>Dit beleid is van toepassing op alle persoonsgegevens die worden verwerkt via de website athlic.io, via onze contactformulieren en boekingssystemen.</p>
            </Section>

            <Section title="2. Wie zijn wij">
              <p>Wij zijn de verwerkingsverantwoordelijke voor jouw persoonsgegevens:</p>
              <div className="bg-white/5 rounded-2xl p-6 mt-4 space-y-1 text-white/70">
                <p className="font-semibold text-white">Athlic</p>
                <p>Napoleonshoed 21</p>
                <p>4906 LC Oosterhout</p>
                <p>Nederland</p>
                <p className="pt-2">KvK-nummer: 66050936</p>
                <p>E-mail: <a href="mailto:hello@athlic.io" className="text-coral hover:underline">hello@athlic.io</a></p>
                <p>Website: <a href="https://athlic.io" className="text-coral hover:underline">athlic.io</a></p>
              </div>
            </Section>

            <Section title="3. Welke persoonsgegevens verzamelen wij">
              <SubSection title="3.1 Via het contactformulier">
                <ul>
                  <li>Naam</li>
                  <li>E-mailadres</li>
                  <li>Naam van de gym</li>
                  <li>Eventuele informatie die je zelf invult in het berichtveld</li>
                </ul>
              </SubSection>
              <SubSection title="3.2 Via het boekingssysteem (Cal.com)">
                <ul>
                  <li>Naam</li>
                  <li>E-mailadres</li>
                  <li>Datum en tijdstip van het geplande gesprek</li>
                </ul>
              </SubSection>
              <SubSection title="3.3 Via tracking en analytische tools">
                <ul>
                  <li>IP-adressen (geanonimiseerd waar mogelijk)</li>
                  <li>Browsertype en besturingssysteem</li>
                  <li>Bezochte pagina's en klikgedrag op de website</li>
                  <li>Locatiegegevens op stadsniveau</li>
                  <li>Advertentie-interacties via Google Ads en LinkedIn Ads</li>
                  <li>Bezoekersidentificatie via LeadInfo (op bedrijfsniveau)</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="4. Waarom verwerken wij jouw gegevens">
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-white">Afhandeling van contactverzoeken</dt>
                  <dd className="text-white/60 mt-1">Om te reageren op vragen die je via het contactformulier instuurt.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Inplannen van gesprekken</dt>
                  <dd className="text-white/60 mt-1">Om kennismakingsgesprekken te plannen en bevestigingsmails te sturen via Cal.com.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Websiteoptimalisatie</dt>
                  <dd className="text-white/60 mt-1">Om inzicht te krijgen in het gebruik van onze website via Google Analytics.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Advertentiebeheer</dt>
                  <dd className="text-white/60 mt-1">Om advertenties in te zetten en te optimaliseren via Google Ads en LinkedIn Ads.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Leadidentificatie</dt>
                  <dd className="text-white/60 mt-1">Om bedrijven te identificeren die onze website bezoeken via LeadInfo.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">E-mailcommunicatie</dt>
                  <dd className="text-white/60 mt-1">Om relevante informatie te sturen aan geÃ¯nteresseerden die zich hebben aangemeld via onze e-mailmarketingtool.</dd>
                </div>
              </dl>
            </Section>

            <Section title="5. Juridische grondslagen">
              <p>Wij verwerken jouw persoonsgegevens op basis van de volgende grondslagen onder de Algemene Verordening Gegevensbescherming (AVG):</p>
              <dl className="space-y-4 mt-4">
                <div>
                  <dt className="font-semibold text-white">Toestemming</dt>
                  <dd className="text-white/60 mt-1">Voor het plaatsen van analytische en marketingcookies â je geeft toestemming via de cookiebanner.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Uitvoering van een overeenkomst</dt>
                  <dd className="text-white/60 mt-1">Voor de verwerking van contactgegevens bij het inplannen van een gesprek of het uitvoeren van een opdracht.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Gerechtvaardigd belang</dt>
                  <dd className="text-white/60 mt-1">Voor LeadInfo (identificatie van bedrijfsbezoeken) en interne analyses ten behoeve van bedrijfsvoering.</dd>
                </div>
              </dl>
            </Section>

            <Section title="6. Delen van gegevens met derden">
              <p>Athlic deelt persoonsgegevens uitsluitend met derden voor zover noodzakelijk voor de doeleinden in dit beleid. Wij verkopen nooit persoonsgegevens.</p>
              <p className="mt-4">De volgende verwerkers verwerken gegevens namens Athlic:</p>
              <div className="mt-4 space-y-3">
                {[
                  { name: 'Cal.com', desc: 'Boekingssysteem voor gesprekken.', url: 'cal.com/privacy' },
                  { name: 'Google LLC', desc: 'Google Ads en Google Analytics. Google is aangesloten bij het EU-VS maar aangesloten bij het EU-VS Data Privacy Framework.', url: 'policies.google.com/privacy' },
                  { name: 'LinkedIn Ireland Unlimited Company', desc: 'LinkedIn Ads.', url: 'linkedin.com/legal/privacy-policy' },
                  { name: 'LeadInfo B.V.', desc: 'Identificatie van bedrijfsbezoeken op basis van IP-adres.', url: 'leadinfo.com/privacy' },
                  { name: 'E-mailmarketingtool', desc: 'Voor het versturen van e-mailcommunicatie aan aangemelde contacten.', url: null },
                  { name: 'CRM-s-systeem', desc: 'Voor het beheren van klant- en prospectinformatie.', url: null },
                ].map((p) => (
                  <div key={p.name} className="bg-white/5 rounded-xl p-4">
                    <p className="font-semibold text-white text-sm">{p.name}</p>
                    <p className="text-white/60 text-sm mt-1">{p.desc}{p.url && <> Privacy: <a href={`https://${p.url}`} className="text-coral hover:underline" target="_blank" rel="noopener noreferrer">{p.url}</a></>}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">Met alle verwerkers zijn, waar vereist, verwerkersovereenkomsten gesloten.</p>
            </Section>

            <Section title="7. Bewaartermijnen">
              <ul>
                <li>Contactformulieren en boekingsgegevens: maximaal 2 jaar na laatste contact</li>
                <li>Klantgegevens (bij opdrachten): 7 jaar na afloop van de overeenkomst (wettelijke bewaarplicht)</li>
                <li>Analytische gegevens via Google Analytics: 14 maanden</li>
                <li>LeadInfo-gegevens: maximaal 12 maanden</li>
                <li>E-maillijst: totdat je je afmeldt of ons verzoekt de gegevens te verwijderen</li>
              </ul>
            </Section>

            <Section title="8. Jouw rechten">
              <p>Op grond van de AVG heb je de volgende rechten met betrekking tot jouw persoonsgegevens:</p>
              <ul>
                <li>Recht op inzage</li>
                <li>Recht op rectificatie</li>
                <li>Recht op verwijdering</li>
                <li>Recht op beperking van verwerking</li>
                <li>Recht op overdraagbaarheid</li>
                <li>Recht van bezwaar</li>
                <li>Recht op intrekking van toestemming</li>
              </ul>
              <p className="mt-4">Om gebruik te maken van deze rechten, neem je contact op via <a href="mailto:hello@athlic.io" className="text-coral hover:underline">hello@athlic.io</a>. Wij reageren binnen 4 weken.</p>
              <p className="mt-4">Heb je een klacht? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens via <a href="https://autoriteitpersoonsgegevens.nl" className="text-coral hover:underline" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.</p>
            </Section>

            <Section title="9. Beveiliging">
              <p>Athlic neemt passende technische en organisatorische maatregelen om jouw persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of misbruik. Dit omvat onder meer het gebruik van HTTPS, toegangsbeheer en het beperken van toegang tot gegevens tot medewerkers die dit nodig hebben.</p>
            </Section>

            <Section title="10. Wijzigingen in dit beleid">
              <p>Athlic kan dit privacybeleid van tijd tot tijd aanpassen. De meest actuele versie is altijd beschikbaar op athlic.io. Bij ingrijpende wijzigingen informeren wij bestaande relaties per e-mail.</p>
            </Section>

            <Section title="11. Contact">
              <p>Heb je vragen over dit privacybeleid? Neem contact op via:</p>
              <div className="bg-white/5 rounded-2xl p-6 mt-4 space-y-1 text-white/70">
                <p><span className="text-white font-medium">E-mail:</span> <a href="mailto:hello@athlic.io" className="text-coral hover:underline">hello@athlic.io</a></p>
                <p><span className="text-white font-medium">Post:</span> Athlic, Napoleonshoed 21, 4906 LC Oosterhout</p>
              </div>
            </Section>

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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/10 pt-10">
      <h2 className="text-xl font-bold text-white mb-5">{title}</h2>
      <div className="text-white/60 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-white/80 mb-3">{title}</h3>
      <div className="text-white/60">{children}</div>
    </div>
  );
}
