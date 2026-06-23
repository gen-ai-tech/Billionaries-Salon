export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-40 md:pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[800px] h-[400px] rounded-t-full bg-[#FF4D9D] opacity-[0.02] blur-[150px] pointer-events-none"></div>
      
      <div className="container-premium relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
              {/* B mark */}
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #050505 60%, #1a0a10 100%)', border: '1.5px solid rgba(255,77,157,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(255,77,157,0.2)', flexShrink: 0 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '22px', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, #FF4D9D, #E8B4B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em' }}>B</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Billionaires</span>
                <span style={{ fontSize: '10px', fontWeight: 600, color: '#FF4D9D', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '2px' }}>Luxury Salon</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Salem's premier destination for luxury beauty transformations. Where every detail is crafted for absolute perfection.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF4D9D] hover:bg-[#FF4D9D]/10 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF4D9D] hover:bg-[#FF4D9D]/10 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-6 tracking-wide">Explore</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Home', id: '#home' },
                { label: 'About Us', id: '#about' },
                { label: 'Services', id: '#services' },
                { label: 'Gallery', id: '#gallery' },
                { label: 'Reviews', id: '#reviews' }
              ].map(link => (
                <li key={link.label}>
                  <button onClick={() => scrollTo(link.id)} className="text-white/60 hover:text-[#FF4D9D] text-sm font-medium transition-colors bg-transparent border-none cursor-pointer">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-6 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-4">
              {['Hair Styling', 'Bridal Makeup', 'Skin Care', 'Nail Art', 'Premium Spa'].map(link => (
                <li key={link} className="text-white/60 text-sm font-medium">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-white text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-white/60 text-sm leading-relaxed">
                1st Floor, Ananthammal Complex,<br/>Salem, TN 636009
              </li>
              <li>
                <a href="tel:+916385729991" className="text-[#E8B4B8] hover:text-[#FF4D9D] font-semibold text-sm transition-colors">+91 63857 29991</a>
              </li>
              <li className="text-white/40 text-xs mt-2">
                Open Daily: 10AM - 10PM
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/40 text-xs">
            © {year} Billionaires Luxury Salon. All rights reserved.
          </p>
          <div className="font-playfair italic text-[#E8B4B8]/70 text-sm">
            "Where Beauty Meets Absolute Elegance"
          </div>
        </div>

      </div>
    </footer>
  );
}
