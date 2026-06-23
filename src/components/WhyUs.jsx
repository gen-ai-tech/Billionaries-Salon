import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Gem, GraduationCap, Leaf, Droplet, Sparkles } from 'lucide-react';

const features = [
  { Icon: Gem, title: 'Luxury Ambience', desc: 'Step into an atmosphere of pure elegance, designed for your ultimate relaxation and comfort.' },
  { Icon: GraduationCap, title: 'Master Stylists', desc: 'Our team comprises highly trained professionals with years of specialized luxury beauty experience.' },
  { Icon: Leaf, title: 'Premium Products', desc: 'We exclusively use top-tier international brands to ensure the health and radiance of your hair and skin.' },
  { Icon: Droplet, title: 'Absolute Hygiene', desc: 'We maintain the highest standards of cleanliness and sanitization for every client, every time.' },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="why-us" className="section-premium bg-[#0a0a0a] relative overflow-hidden">
      <div className="container-premium relative z-10">

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center' }}>

          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="luxury-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={14} /> The Billionaires Difference
              </div>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
                Why Discerning Clients<br />
                Choose <span className="text-gradient">Us</span>
              </h2>
            </div>

            <p className={`${inView ? 'animate-fade-up delay-100' : 'opacity-0'}`}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(14px, 1.5vw, 17px)', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
              We don't just offer beauty services; we provide an elite experience. Our commitment to excellence is reflected in every detail, from our plush interiors to our bespoke treatments.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`premium-card ${inView ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ padding: '16px 20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', animationDelay: `${i * 0.1 + 0.2}s` }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)', flexShrink: 0 }}>
                    <f.Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '4px' }}>{f.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Instagram Video Panel */}
          <div className={`${inView ? 'animate-fade-up delay-400' : 'opacity-0'}`}
            style={{ position: 'relative', width: '100%', borderRadius: '28px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: '#0d0d0d', minHeight: '520px', display: 'flex', flexDirection: 'column' }}>

            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-woman-having-her-hair-styled-41221-large.mp4" type="video/mp4" />
            </video>
            {/* Dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }}></div>

            {/* Content overlay */}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(32px, 5vw, 56px)', textAlign: 'center', flex: 1 }}>

              {/* Instagram icon badge */}
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 8px 32px rgba(220,39,67,0.35)',
              }}>
                {/* Instagram SVG icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>

              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 3vw, 38px)', color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '12px' }}>
                Salem's <span className="text-gradient">Top Rated</span><br />Beauty Destination
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(13px, 1.4vw, 16px)', lineHeight: 1.65, maxWidth: '340px', marginBottom: '28px' }}>
                Experience the standard of beauty that has earned us a flawless reputation. Watch our transformations on Instagram.
              </p>

              {/* Watch on Instagram CTA */}
              <a
                href="https://www.instagram.com/billionaires_unisex_saloon/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  padding: '14px 28px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366)',
                  color: '#fff',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(220,39,67,0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  marginBottom: '16px',
                  width: '100%',
                  maxWidth: '280px',
                  justifyContent: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(220,39,67,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(220,39,67,0.3)'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Watch on Instagram
              </a>

              {/* Handle tag */}
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', letterSpacing: '0.05em' }}>
                @billionaires_unisex_saloon
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
