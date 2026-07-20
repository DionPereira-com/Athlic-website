import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-white/10 px-6 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex flex-col items-start mb-3">
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: '22px',
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                }}
              >
                <span style={{ color: '#E94560' }}>A</span>
                <span className="text-white">THLIC</span>
              </span>
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  background: '#16C79A',
                  width: '100%',
                  marginTop: '4px',
                }}
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Voorspelbare instroom van proefleden voor HYROX en performance gyms. Van klik tot lid.
            </p>
            <div className="flex flex-col items-start gap-2 mt-4">
              <a href="tel:+31782049511" className="text-white/40 hover:text-white text-sm transition-colors">
                +31 (0)78 2049511
              </a>
              <a href="mailto:hello@athlic.io" className="text-white/40 hover:text-white text-sm transition-colors">
                hello@athlic.io
              </a>
              <a
                href="https://www.linkedin.com/company/athlic-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Athlic op LinkedIn"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Navigatie</p>
              <ul className="space-y-3">
                <li><a href="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</a></li>
                <li><a href="/aanpak" className="text-sm text-white/60 hover:text-white transition-colors">Aanpak</a></li>
                <li><a href="/aanpak" className="text-sm text-white/60 hover:text-white transition-colors">Ons aanbod</a></li>
                <li>
                  <a href="/#contact" data-cal-namespace="kennismakingsgesprek" data-cal-link="athlic/kennismakingsgesprek" data-cal-config='{"layout":"month_view"}' className="text-sm text-white/60 hover:text-white transition-colors">
                    Plan een gesprek
                  </a>
                </li>
                <li><a href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact opnemen</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Legal</p>
              <ul className="space-y-3">
                <li><a href="/privacybeleid" className="text-sm text-white/60 hover:text-white transition-colors">Privacybeleid</a></li>
                <li><a href="/cookiebeleid" className="text-sm text-white/60 hover:text-white transition-colors">Cookiebeleid</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Tools</p>
              <ul className="space-y-3">
                <li><a href="/athlic-calculator.html" className="text-sm text-white/60 hover:text-white transition-colors">Rendementscalculator</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© 2026 Athlic. KvK 66050936.</p>
        </div>
      </div>
    </footer>
  );
}
