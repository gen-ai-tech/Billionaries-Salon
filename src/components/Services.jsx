import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Scissors, Sparkles, Heart, Crown, Droplets, User } from 'lucide-react';

const serviceCategories = [
  {
    id: 'hair',
    Icon: Scissors,
    title: 'Hair Services',
    desc: 'Precision cuts, coloring, and treatments for flawless hair.',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    services: ['Hair Cut', 'Hair Styling', 'Hair Spa', 'Coloring', 'Keratin'],
  },
  {
    id: 'skin',
    Icon: Sparkles,
    title: 'Skin Care',
    desc: 'Rejuvenating facials and treatments for a radiant glow.',
    img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
    services: ['Facial Treatments', 'Skin Polishing', 'Cleanup', 'Glow Therapy'],
  },
  {
    id: 'bridal',
    Icon: Crown,
    title: 'Bridal Makeovers',
    desc: 'Complete bridal transformations for your special day.',
    img: 'https://images.unsplash.com/photo-1684868268327-7e5590bcfbd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJpZGFsJTIwbWFrZXVwfGVufDB8fDB8fHww',
    services: ['Bridal Makeup', 'Reception', 'Engagement', 'Pre-Bridal'],
  },
  {
    id: 'beauty',
    Icon: Heart,
    title: 'Beauty Services',
    desc: 'Essential grooming and detailed beauty enhancements.',
    img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    services: ['Threading', 'Waxing', 'Manicure', 'Pedicure', 'Nail Art'],
  },
  {
    id: 'spa',
    Icon: Droplets,
    title: 'Relaxation Spa',
    desc: 'Melt away stress with our premium spa therapies.',
    img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
    services: ['Body Massage', 'Aromatherapy', 'Deep Tissue', 'Reflexology'],
  },
  {
    id: 'men',
    Icon: User,
    title: "Men's Grooming",
    desc: 'Refined styling and grooming for the modern gentleman.',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    services: ['Haircut', 'Beard Styling', 'Hair Spa', 'Detan'],
  }
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section id="services" className="section-premium bg-[#050505] relative overflow-hidden">
      <div className="container-premium relative z-10 mx-auto max-w-[1400px]">

        {/* Header */}
        <div ref={ref} className="w-full flex flex-col items-center justify-center mb-12 lg:mb-16 text-center">
          <div className={`${inView ? 'animate-fade-up' : 'opacity-0'} flex flex-col items-center justify-center w-full`}>
            <div className="luxury-badge mb-6">✦ Our Services</div>
            <h2 className="font-playfair" style={{ fontWeight: 800, fontSize: 'clamp(32px, 4vw, 42px)', color: '#fff', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>
              The Art of <span className="text-gradient">Perfection</span>
            </h2>
            <p className="text-white/70 text-center mx-auto max-w-[700px] text-lg leading-relaxed">
              Explore our comprehensive range of luxury beauty treatments, designed to elevate your style and rejuvenate your spirit.
            </p>
          </div>
        </div>

        {/* Compact Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((cat, i) => {
            const isActive = activeCard === cat.id;
            
            return (
            <div
              key={cat.id}
              onClick={() => toggleCard(cat.id)}
              className={`relative flex flex-col w-full ${isActive ? 'h-auto min-h-[380px]' : 'h-[100px]'} md:h-auto md:min-h-[420px] rounded-[16px] md:rounded-[24px] bg-[#0d0d0d] border border-white/5 overflow-hidden group transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-[0_12px_40px_rgba(255,77,157,0.12)] md:hover:border-[#FF4D9D]/30 ${inView ? 'animate-fade-up' : 'opacity-0'} cursor-pointer md:cursor-default`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full z-0 bg-[#0a0a0a]">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className={`w-full h-full object-cover transition-all duration-700 md:group-hover:scale-110 ${isActive ? 'opacity-20 md:opacity-100' : 'opacity-50 md:opacity-100'}`}
                />
                <div className={`${isActive ? 'block' : 'hidden'} md:block absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent opacity-90 md:opacity-70 md:group-hover:opacity-95 transition-opacity duration-500`}></div>
              </div>

              {/* Flexbox Container for ALL Content (Enforces Padding and Alignment) */}
              <div className="relative z-10 flex flex-col justify-center md:justify-end w-full h-full p-6 pl-10 md:pl-6 lg:p-8">

                {/* Default State: Always visible at bottom-left */}
                <div className={`md:absolute md:bottom-6 lg:bottom-8 md:left-6 lg:left-8 md:right-6 lg:right-8 flex items-center gap-4 transition-all duration-500 md:group-hover:opacity-0 md:group-hover:-translate-y-4 ${isActive ? 'hidden md:flex' : 'flex'}`}>
                  <div className="hidden md:flex w-12 h-12 rounded-[12px] bg-[#111] border border-white/10 items-center justify-center text-[#FF4D9D] shadow-lg shrink-0">
                    <cat.Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-sans md:font-playfair text-[22px] font-bold text-white tracking-wide leading-tight">
                    {cat.title}
                  </h3>
                </div>

                {/* Hover Content: Slides up */}
                <div className={`${isActive ? 'flex opacity-100 translate-y-0 pointer-events-auto' : 'hidden md:flex md:opacity-0 md:translate-y-8 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto'} flex-col gap-[14px] w-full transition-all duration-500`}>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-[#111] border border-white/10 flex items-center justify-center text-[#FF4D9D] shadow-lg shrink-0">
                      <cat.Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-playfair text-[22px] font-bold text-[#FF4D9D] tracking-wide leading-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-[14px] leading-relaxed mb-1">
                    {cat.desc}
                  </p>

                  {/* Service List */}
                  <ul className="flex flex-col gap-[8px] border-t border-white/10 pt-[12px]">
                    {cat.services.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-[12px] text-[14px] text-white/90">
                        <span className="text-[#FF4D9D] text-[11px] mt-[1px]">✦</span> 
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          )})}
        </div>

      </div>
    </section>
  );
}
