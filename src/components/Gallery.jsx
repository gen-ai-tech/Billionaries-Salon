import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const galleryItems = [
  {
    id: 1,
    type: 'Female Transformation',
    label: 'Precision Hair Styling',
    img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1969&auto=format&fit=crop',
  },
  {
    id: 2,
    type: 'Male Transformation',
    label: "Classic Men's Grooming",
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1988&auto=format&fit=crop',
  }
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="gallery" className="section-premium bg-[#050505] relative">
      <div className="container-premium relative z-10">

        {/* Header */}
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '56px', width: '100%' }}>
          <div className={`${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '700px', margin: '0 auto' }}>
            <div className="luxury-badge" style={{ marginBottom: '20px' }}>✦ Portfolio</div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, textAlign: 'center', color: '#fff', fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '16px' }}>
              Our Masterpieces of <span className="text-gradient">Beauty</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.65 }}>
              A curated selection of our finest transformations, showcasing the artistry and dedication of our luxury styling team.
            </p>
          </div>
        </div>

        {/* 2-Card Grid — NO click/lightbox */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 3vw, 40px)', maxWidth: '1000px', margin: '0 auto' }}>
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                height: 'clamp(280px, 35vw, 420px)',
                animationDelay: `${i * 0.15}s`,
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Image — no zoom on hover */}
              <img
                src={item.img}
                alt={item.label}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />

              {/* Gradient overlay — always visible at bottom */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, transparent 100%)' }}></div>

              {/* Text — fixed at bottom, no overlap */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(20px, 3vw, 32px)' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '5px 14px',
                  background: 'rgba(255,77,157,0.85)',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '10px',
                }}>
                  {item.type}
                </span>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#fff', margin: 0, lineHeight: 1.2 }}>
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
