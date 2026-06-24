import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const address = '1st+Floor,+Ananthammal+Complex,+No+297,+2%2F4,+Angammal+Colony,+Salem,+Tamil+Nadu+636009';
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${address}`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
  const embedSrc = `https://maps.google.com/maps?q=Billionaires%20Luxury%20Salon,%201st%20Floor,%20Ananthammal%20Complex,%20Salem&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="section" style={{
      background: 'linear-gradient(180deg, #000 0%, #050508 50%, #000 100%)',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', right: -100, top: '20%',
        width: 400, height: 400,
        background: 'rgba(255,79,163,0.05)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
      }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className={`${inView ? 'animate-fade-up' : ''}`} style={{ opacity: inView ? undefined : 0 }}>
            <div className="section-badge" style={{ margin: '0 auto 1rem' }}>✦ Find Us</div>
            <h2 className="section-title">
              Visit Our <span>Salon</span>
            </h2>
            <div className="luxury-divider" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className={`lg:col-span-3 ${inView ? 'animate-scale-in' : ''}`}
            style={{ opacity: inView ? undefined : 0 }}>
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              border: '1px solid rgba(255,79,163,0.2)',
              height: '100%', minHeight: 380,
              boxShadow: '0 20px 60px rgba(255,79,163,0.1)'
            }}>
              <iframe
                src={embedSrc}
                width="100%" height="100%"
                style={{ border: 0, minHeight: 380, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Billionaires Luxury Salon Location"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className={`lg:col-span-2 ${inView ? 'animate-fade-up delay-200' : ''}`}
            style={{ opacity: inView ? undefined : 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

            {/* Address */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,79,163,0.15)',
              borderRadius: 20, padding: '1.8rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'linear-gradient(135deg, rgba(255,79,163,0.2), rgba(232,180,184,0.1))',
                  border: '1px solid rgba(255,79,163,0.3)',
                  borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', flexShrink: 0
                }}>📍</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: '0.4rem', fontFamily: 'Playfair Display, serif' }}>
                    Our Address
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    1st Floor, Ananthammal Complex,<br />
                    No 297, 2/4, Angammal Colony,<br />
                    Salem, Tamil Nadu 636009
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,79,163,0.15)',
              borderRadius: 20, padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'linear-gradient(135deg, rgba(255,79,163,0.2), rgba(232,180,184,0.1))',
                  border: '1px solid rgba(255,79,163,0.3)',
                  borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', flexShrink: 0
                }}>📞</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', marginBottom: '0.2rem', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Phone</div>
                  <a href="tel:+916385729991" style={{ color: '#FF4FA3', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                    +91 63857 29991
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,79,163,0.15)',
              borderRadius: 20, padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 44, height: 44,
                  background: 'linear-gradient(135deg, rgba(255,79,163,0.2), rgba(232,180,184,0.1))',
                  border: '1px solid rgba(255,79,163,0.3)',
                  borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.2rem', flexShrink: 0
                }}>🕐</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '0.2rem', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Business Hours</div>
                  <div style={{ color: 'white', fontWeight: 600 }}>Daily: 10:00 AM – 10:00 PM</div>
                  <div className="hours-badge" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
                    <span className="hours-dot" />Open Now
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
