import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden', background: '#050505', display: 'flex', alignItems: 'center' }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', borderRadius: '50%', background: '#FF4D9D', opacity: 0.03, filter: 'blur(100px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50vw', height: '50vw', borderRadius: '50%', background: '#E8B4B8', opacity: 0.02, filter: 'blur(120px)' }}></div>
      </div>

      <div className="container-premium" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="mobile-hero-padding flex flex-col lg:flex-row items-center justify-between w-full min-h-[100dvh] lg:min-h-[auto] pt-24 lg:pt-0 pb-16 lg:pb-0" style={{ gap: 'clamp(32px, 6vw, 80px)' }}>

          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Badge */}
            <div className={`luxury-badge ${visible ? 'animate-fade-up' : 'opacity-0'} max-w-full`} style={{ display: 'inline-flex', width: 'fit-content', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              ✦ Salem's Premium Luxury Salon
            </div>

            {/* Heading */}
            <h1
              className={`${visible ? 'animate-fade-up delay-100' : 'opacity-0'}`}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, color: '#fff', lineHeight: 1.05, fontSize: 'clamp(32px, 8vw, 72px)', margin: 0, letterSpacing: '-0.03em', wordWrap: 'break-word' }}
            >
              Billionaires<br />
              <span className="text-gradient">Luxury Salon</span>
            </h1>

            {/* Tagline */}
            <div className={`${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(16px, 2vw, 20px)', color: '#E8B4B8', margin: 0, fontWeight: 400 }}>
                "Where Beauty Meets Absolute Elegance"
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
                Experience world-class beauty transformations. Precision styling, premium products, and an atmosphere crafted for royalty.
              </p>
            </div>


          </div>

          {/* Right: Salon Image */}
          <div className={`${visible ? 'animate-fade-up delay-300' : 'opacity-0'}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'clamp(280px, 35vw, 420px)',
              aspectRatio: '3/4',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
              margin: '0 auto',
            }}>
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                alt="Billionaires Luxury Salon Interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)' }}></div>
              {/* Bottom label on image */}
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,77,157,0.9)', borderRadius: '100px', padding: '6px 16px' }}>
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Premium Experience</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
