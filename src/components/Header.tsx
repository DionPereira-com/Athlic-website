import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Aanpak', href: '/aanpak' },
  { name: 'Over ons', href: '/over-ons' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-navy/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col items-start group">
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: '28px',
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                }}
              >
                <span style={{ color: '#E94560' }}>A</span>
                <span className="text-light-gray">THLIC</span>
              </span>
              <span
                style={{
                  display: 'block',
                  height: '3px',
                  background: '#16C79A',
                  width: '100%',
                  marginTop: '4px',
                }}
              />
            </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-medium-gray">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="hover:text-light-gray transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a href="#contact" className="bg-coral hover:bg-coral/90 text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(233,69,96,0.39)] hover:shadow-[0_6px_20px_rgba(233,69,96,0.23)]">
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
                <Link
                  to={link.href}
                  className="block text-light-gray font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
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
  );
}
