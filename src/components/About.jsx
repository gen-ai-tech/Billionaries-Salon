import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="about" className="section-premium bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF4D9D] opacity-[0.02] blur-[120px] pointer-events-none"></div>
      
      <div className="container-premium">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Visual: Premium Image Placeholder */}
          <div className={`relative ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden premium-card">
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1974&auto=format&fit=crop" 
                alt="Luxury Salon Treatment"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent"></div>
            </div>

            {/* Experience Counter Overlay */}
            <div className="absolute -bottom-6 right-2 sm:-right-6 lg:-right-12 glass-subtle p-6 lg:p-8 rounded-2xl shadow-2xl border border-white/10 animate-float" style={{ animationDelay: '1s' }}>
               <div className="flex items-center gap-4 lg:gap-6">
                 <div className="font-playfair text-5xl lg:text-7xl font-bold text-gradient">10+</div>
                 <div>
                   <div className="text-white font-semibold text-base lg:text-lg">Years of</div>
                   <div className="text-[#E8B4B8] tracking-widest uppercase text-xs lg:text-sm">Excellence</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 mt-12 lg:mt-0">
            <div className={`${inView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
              <div className="luxury-badge mb-6">✦ Our Story</div>
              <h2 className="section-title">
                Redefining Luxury Beauty in <span className="text-gradient">Salem</span>
              </h2>
            </div>

            <p className={`section-subtitle ${inView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              Billionaires Luxury Salon was born from a passion to bring world-class beauty experiences to our discerning clients. We believe every person deserves to feel like royalty, and we deliver nothing less than perfection.
            </p>

            <p className={`section-subtitle ${inView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
              From precision hair artistry to transformative bridal makeovers, our certified professionals use only the finest premium international products to craft your perfect look with meticulous care, creativity, and absolute hygiene.
            </p>

            {/* Premium Features List */}
            <div className={`flex flex-col gap-5 mt-4 w-full ${inView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
              {[
                { title: 'Certified Professionals', desc: 'Expert stylists with international training.' },
                { title: 'Premium Products', desc: 'Only the finest luxury beauty brands used.' },
                { title: 'Hygienic Environment', desc: 'Strict sanitization for your absolute safety.' },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 text-[#FF4D9D] shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{f.title}</h4>
                    <p className="text-white/60 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-6 ${inView ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
               <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-premium">
                 Explore Our Services
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
