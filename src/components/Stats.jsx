import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Star, Gem, Award, Users } from 'lucide-react';

const statsData = [
  { value: '3417+', label: 'Reviews', Icon: Star },
  { value: '4.9', label: 'Rating', Icon: Gem },
  { value: '10+', label: 'Years', Icon: Award },
  { value: '5000+', label: 'Happy Clients', Icon: Users }
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="bg-[#050505] pt-20 pb-16 lg:py-24 border-t border-b border-white/5 relative z-20">
      <div className="container-premium">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className={`premium-card p-3 sm:p-4 lg:p-8 flex flex-col items-center justify-center text-center animate-fade-up`}
              style={{ 
                opacity: inView ? 1 : 0, 
                animationDelay: `${i * 0.15}s`,
                animationPlayState: inView ? 'running' : 'paused' 
              }}
            >
              <div className="mb-4 text-[#FF4D9D]">
                <stat.Icon size={32} strokeWidth={1.5} />
              </div>
              <div className="font-playfair text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#FF4D9D] text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
