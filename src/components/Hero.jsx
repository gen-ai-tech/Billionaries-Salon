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
    <section id="home" className="relative min-h-[100dvh] lg:min-h-screen overflow-hidden bg-[#050505] flex flex-col justify-start lg:justify-center pt-44 lg:pt-0 pb-12 lg:py-0">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#FF4D9D] opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E8B4B8] opacity-5 blur-[120px]"></div>
      </div>

      <div className="container-premium relative z-10 w-full flex-grow flex flex-col justify-start lg:justify-center mt-12 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
            {/* Badge */}
            <div className={`luxury-badge ${visible ? 'animate-fade-up' : 'opacity-0'} max-w-full whitespace-nowrap overflow-hidden text-ellipsis`}>
              ✦ Salem's Premium Luxury Salon
            </div>

            {/* Heading */}
            <h1
              className={`${visible ? 'animate-fade-up delay-100' : 'opacity-0'} font-bold text-white leading-[1.05] tracking-tight`}
              style={{ fontSize: 'clamp(44px, 10vw, 72px)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Billionaires<br />
              <span className="text-gradient">Luxury Salon</span>
            </h1>

            {/* Tagline */}
            <div className={`flex flex-col gap-3 ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              <p className="font-sans text-[#E8B4B8] font-medium m-0" style={{ fontSize: 'clamp(16px, 3vw, 20px)' }}>
                "Where Beauty Meets Absolute Elegance"
              </p>
              <p className="text-white/70 leading-relaxed max-w-[480px] m-0 mx-auto lg:mx-0" style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}>
                Experience world-class beauty transformations. Precision styling, premium products, and an atmosphere crafted for royalty.
              </p>
            </div>
          </div>

          {/* Right: Salon Image */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center ${visible ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] mx-auto mt-4 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                alt="Billionaires Luxury Salon Interior"
                className="w-full h-full object-cover object-center block"
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
