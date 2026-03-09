import { ArrowLeft } from 'lucide-react';

export default function CookiebeleidPage() {
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
              Cookiebeleid
            </h1>
            <p className="text-white/40 text-sm">Versie 1.0 maart 2026</p>
          </div>

          {/* Body */}
          <div className="space-y-12">

            <Section title="1. Wat zijn cookies">
              <p>Cookies zijn kleine tekstbestanden die worden opgeslagen op jouw apparaat wanneer je onze website bezoekt. Ze helpen ons de website goed te laten functioneren, het gebruik te analyseren en relevante advertenties te tonen.</p>
            </Section>

            <Section title="2. Welke cookies gebruiken wij">

              <CookieCard
                label="Functioneel"
                badge="Altijd actief"
                badgeColor="bg-teal/20 text-teal"
                desc="Functionele cookies zijn noodzakelijk voor de werking van de website en vereisen geen toestemming."
                items={[
                  { name: 'Cookiebanner-voorkeur', desc: 'Onthoudt jouw keuze in de cookiebanner.' },
                  { name: 'Sessiebeheer', desc: 'Zorgt voor een veilige en soepele sessie op de website.' },
                ]}
              />

              <CookieCard
                label="Analytisch"
                badge="Met toestemming"
                badgeColor="bg-coral/20 text-coral"
                desc="Wij gebruiken Google Analytics om te meten hoe bezoekers onze website gebruiken. De gegevens worden geanonimiseerd en gebruikt voor websiteverbeteringen."
                items={[
                  { name: 'Aanbieder', desc: 'Google LLC' },
                  { name: 'Bewaartermijn', desc: 'Maximaal 14 maanden' },
                  { name: 'Gegevens', desc: 'Paginabezoeken, klikgedrag, verblijfsduur, locatie op stadsniveau' },
                ]}
              />

              <CookieCard
                label="Marketing & tracking"
                badge="Met toestemming"
                badgeColor="bg-coral/20 text-coral"
                desc="Wij gebruiken cookies voor advertentiedoeleinden via Google Ads en LinkedIn Ads. Deze cookies helpen ons advertenties te tonen aan mensen die eerder onze website hebben bezocht en de prestaties van campagnes te meten."
                items={[
                  { name: 'Google Ads', desc: 'Conversietracking en remarketing (Google LLC)' },
                  { name: 'LinkedIn Insight Tag', desc: 'Campagnemeting en remarketing (LinkedIn Ireland Unlimited Company)' },
                ]}
              />

              <CookieCard
                label="LeadInfo"
                badge="Gerechtvaardigd belang"
                badgeColor="bg-white/10 text-white/60"
                desc="Wij gebruiken LeadInfo om bedrijfsbezoeken aan onze website te identificeren op basis van IP-adressen. LeadInfo verwerkt geen persoonsgegevens van individuele bezoekers."
                items={[
                  { name: 'Aanbieder', desc: 'LeadInfo B.V. (Nederland)' },
                  { name: 'Opt-out', desc: 'Mogelijk via leadinfo.com/en/opt-out' },
                ]}
              />

            </Section>

            <Section title="3. Toestemming en beheer">
              <p>Bij jouw eerste bezoek aan athlic.io tonen wij een cookiebanner waarmee je toestemming kunt geven voor analytische cookies en marketingcookies. Functionele cookies worden altijd geplaatst en vereisen geen toestemming.</p>
              <p>Je kunt jouw voorkeur op elk moment wijzigen via de cookiebanner in de footer van de website.</p>
              <p>Daarnaast kun je cookies verwijderen en beheren via de instellingen van jouw browser. Het uitschakelen van bepaalde cookies kan de werking van de website beÃ¯nvloeden.</p>
            </Section>

            <Section title="4. Cookies beheren via jouw browser">
              <p>Via de instellingen van jouw browser kun je cookies weigeren, verwijderen of meldingen ontvangen:</p>
              <ul className="mt-4">
                <li><span className="text-white/80">Google Chrome:</span> Instellingen &rsaquo; Privacy en beveiliging &rsaquo; Cookies</li>
                <li><span className="text-white/80">Mozilla Firefox:</span> Opties &rsaquo; Privacy en beveiliging &rsaquo; Cookies en sitegegevens</li>
                <li><span className="text-white/80">Safari:</span> Voorkeuren &rsaquo; Privacy &rsaquo; Cookies en websitegegevens</li>
                <li><span className="text-white/80">Microsoft Edge:</span> Instellingen &rsaquo; Cookies en sitemachtigingen</li>
              </ul>
            </Section>

            <Section title="5. Cookies van derde partijen">
              <p>Sommige cookies worden geplaatst door derde partijen. Athlic heeft geen directe controle over deze cookies. Raadpleeg hun privacyverklaringen:</p>
              <div className="mt-4 space-y-2">
                {[
                  { name: 'Google', url: 'policies.google.com/privacy' },
                  { name: 'LinkedIn', url: 'linkedin.com/legal/privacy-policy' },
                  { name: 'LeadInfo', url: 'leadinfo.com/privacy' },
                ].map((p) => (
                  <p key={p.name}>
                    <span className="text-white/80">{p.name}:</span>{' '}
                    <a href={`https://${p.url}`} className="text-coral hover:underline" target="_blank" rel="noopener noreferrer">{p.url}</a>
                  </p>
                ))}
              </div>
            </Section>

            <Section title="6. Wijzigingen in dit beleid">
              <p>Athlic kan dit cookiebeleid aanpassen bij nieuwe diensten of gewijzigde wetgeving. De actuele versie is altijd te vinden op athlic.io.</p>
            </Section>

            <Section title="7. Vragen">
              <p>Heb je vragen over ons cookiebeleid? Neem contact op via <a href="mailto:hello@athlic.io" className="text-coral hover:underline">hello@athlic.io</a> of schrijf naar Athlic, Napoleonshoed 21, 4906 LC Oosterhout.</p>
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

function CookieCard({
  label, badge, badgeColor, desc, items
}: {
  label: string;
  badge: string;
  badgeColor: string;
  desc: string;
  items: { name: string; desc: string }[];
}) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 mt-6">
      <div className="flex items-center justify-between gap-4 mb-3">
        <h3 className="font-semibold text-white">{label}</h3>
        <span className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${badgeColor}`}>{badge}</span>
      </div>
      <p className="text-white/60 text-sm mb-4">{desc}</p>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.name} className="flex gap-3 text-sm">
            <span className="text-white/40 shrink-0">{item.name}:</span>
            <span className="text-white/70">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
