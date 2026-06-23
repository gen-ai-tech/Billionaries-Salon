import { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Priya Sundar', role: 'Bridal Client', text: 'The bridal makeup made me feel like royalty. The attention to detail and luxury service is unmatched in Salem.', rating: 5, initial: 'P' },
  { name: 'Kavitha Raj', role: 'Regular Client', text: 'The most premium hair spa experience I have ever had. The ambience is incredibly soothing and the team is so professional.', rating: 5, initial: 'K' },
  { name: 'Meena Devi', role: 'Skin Care Client', text: 'Their luxury glow facial uses the finest international products. My skin has never looked so radiant. Worth every penny.', rating: 5, initial: 'M' },
  { name: 'Roshini Meena', role: 'Regular Client', text: 'I travel across town just for their keratin treatments. Flawless execution every single time. The salon feels like a boutique in Paris.', rating: 5, initial: 'R' },
  { name: 'Lakshmi P', role: 'Hair Care Client', text: 'Incredible service from start to finish. The stylists truly listen and the results are always beyond expectations.', rating: 5, initial: 'L' },
  { name: 'Aarthi S', role: 'Nail Art Client', text: 'The nail art they create is absolutely stunning. Creative designs, premium products, and a relaxing atmosphere.', rating: 5, initial: 'A' },
];

export default function Reviews() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const inView = useInView(ref);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId;
    let scrollPos = 0;
    const scroll = () => {
      if (!isPaused) {
        scrollPos += 0.6;
        if (scrollPos >= track.scrollWidth / 2) scrollPos = 0;
        track.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const displayReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="section-premium bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#FF4D9D] opacity-[0.025] blur-[120px] pointer-events-none"></div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '64px', width: '100%' }}>
          <div className={`${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '700px', margin: '0 auto' }}>
            <div className="luxury-badge" style={{ marginBottom: '4px' }}>✦ Testimonials</div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', marginBottom: '8px', textAlign: 'center' }}>
              Loved by Salem's <span className="text-gradient">Elite</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              Read authentic experiences from our valued clients who have made us their exclusive beauty destination.
            </p>
          </div>
        </div>
      </div>

      {/* Scrolling Carousel — Full Width */}
      <div className={`relative w-full ${inView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-hidden py-4 px-8 hide-scrollbar"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {displayReviews.map((r, i) => (
            <div
              key={i}
              style={{
                minWidth: 'clamp(280px, 85vw, 360px)',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: '28px 28px 24px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,77,157,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              {/* Top row: Quote icon left + Stars right */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ color: '#FF4D9D', opacity: 0.7 }}>
                  <Quote size={32} fill="currentColor" stroke="none" />
                </div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={15} fill="#FFD700" stroke="none" />)}
                </div>
              </div>

              {/* Review Text */}
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '14px', lineHeight: 1.75, marginBottom: '24px', flexGrow: 1 }}>
                {r.text}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF4D9D, #E8B4B8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: '#fff', fontSize: '15px', flexShrink: 0,
                }}>
                  {r.initial}
                </div>
                <div>
                  <div className="font-playfair" style={{ fontWeight: 700, color: '#fff', fontSize: '15px', lineHeight: 1.3 }}>{r.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '2px' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
