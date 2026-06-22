import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(5,5,5,0.97)' : 'rgba(5,5,5,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,77,157,0.18)' : '1px solid rgba(255,255,255,0.05)',
          padding: scrolled ? '12px 0' : '16px 0',
        }}
      >
        <div className="container-premium" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo: "B" mark + wordmark */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLink('#home'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}
          >
            {/* B mark */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #050505 60%, #1a0a10 100%)',
              border: '1.5px solid rgba(255,77,157,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(255,77,157,0.2)',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '22px',
                fontWeight: 800,
                lineHeight: 1,
                background: 'linear-gradient(135deg, #FF4D9D, #E8B4B8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>B</span>
            </div>
            {/* Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Billionaires
              </span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#FF4D9D', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '2px', fontFamily: "'DM Sans', sans-serif" }}>
                Luxury Salon
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center" style={{ gap: 'clamp(20px, 3vw, 36px)', marginLeft: 'clamp(24px, 5vw, 80px)' }}>
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.02em',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              >
                {link.label}
                <span style={{
                  position: 'absolute',
                  bottom: '-2px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #FF4D9D, #E8B4B8)',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                }}
                  className="nav-underline"
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:inline-flex" style={{ flexShrink: 0 }}>
            <button
              onClick={() => handleLink('#booking')}
              className="btn-premium"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 48,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease'
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, 
        width: '75%', maxWidth: '320px',
        background: 'rgba(10,10,10,0.98)',
        backdropFilter: 'blur(24px)',
        zIndex: 49,
        borderLeft: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', 
        padding: '32px', gap: '32px',
        overflowY: 'auto',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: menuOpen ? 'auto' : 'none'
      }}>
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleLink(link.href)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(16px, 4vw, 22px)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              background: 'transparent', border: 'none', cursor: 'pointer',
              transition: 'color 0.3s ease, transform 0.4s ease, opacity 0.4s ease',
              transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${i * 0.05 + 0.15}s` : '0s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#FF4D9D'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => handleLink('#booking')} 
          className="btn-premium" 
          style={{ 
            marginTop: '8px',
            transition: 'all 0.4s ease',
            transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
            opacity: menuOpen ? 1 : 0,
            transitionDelay: menuOpen ? `${navLinks.length * 0.05 + 0.15}s` : '0s'
          }}
        >
          Book Appointment
        </button>
      </div>
    </>
  );
}
