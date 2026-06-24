export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[1000px] h-[500px] rounded-full bg-[#FF4D9D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="container-premium relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Top CTA */}
        <div className="flex flex-col items-center justify-center text-center gap-6 pb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white tracking-wide">
            Ready for your <span className="text-gradient">transformation?</span>
          </h2>
          <button 
            onClick={() => scrollTo('#booking')}
            className="mt-4 rounded-full bg-gradient-to-r from-[#FF4D9D] to-[#cc005f] text-white font-bold tracking-wide transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
            style={{ padding: '16px 40px', fontSize: '16px', minHeight: '56px', minWidth: '240px', boxShadow: '0 8px 30px rgba(255, 77, 157, 0.3)' }}
          >
            Book an Appointment
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 pb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex items-center gap-3 mb-12" style={{ textDecoration: 'none' }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#050505] to-[#1a0a10] border-2 border-[#FF4D9D]/40 flex items-center justify-center shadow-[0_4px_20px_rgba(255,77,157,0.2)] shrink-0">
                <span className="font-dm text-2xl font-black leading-none bg-gradient-to-br from-[#FF4D9D] to-[#E8B4B8] text-transparent bg-clip-text tracking-tighter" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-dm text-xl font-bold text-white tracking-tight leading-tight">Billionaires</span>
                <span className="text-[10px] font-bold text-[#FF4D9D] uppercase tracking-[0.25em] mt-1.5">Luxury Salon</span>
              </div>
            </a>
            <p className="text-white/50 text-[15px] leading-relaxed mt-12 mb-12 max-w-sm">
              Salem's premier destination for luxury beauty transformations. Where every detail is crafted for absolute perfection and unparalleled elegance.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF4D9D] hover:bg-[#FF4D9D]/10 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/916385729991" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF4D9D] hover:bg-[#FF4D9D]/10 transition-all duration-300">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 columns inside) */}
          <div>
            <h4 className="font-playfair font-bold text-white text-xl mb-12 tracking-wide">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {[
                { label: 'Home', id: '#home' },
                { label: 'About Us', id: '#about' },
                { label: 'Services', id: '#services' },
                { label: 'Gallery', id: '#gallery' },
                { label: 'Reviews', id: '#reviews' },
                { label: 'Contact', id: '#contact' },
                { label: 'Bridal', id: '#services' },
                { label: 'Spa', id: '#services' }
              ].map(link => (
                <a 
                  key={link.label}
                  href={link.id} 
                  onClick={(e) => { e.preventDefault(); scrollTo(link.id); }} 
                  className="text-white/60 hover:text-[#FF4D9D] text-[15px] font-medium transition-all hover:translate-x-1 block w-fit"
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Visit Us */}
          <div>
            <h4 className="font-playfair font-bold text-white text-xl mb-12 tracking-wide">Visit Us</h4>
            <ul className="flex flex-col gap-6 list-none p-0 m-0">
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#FF4D9D]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span className="text-white/60 text-[15px] leading-relaxed">
                  1st Floor, Ananthammal Complex,<br/>No 297, 2/4, Angammal Colony,<br/>Salem, TN 636009
                </span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#FF4D9D]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <a href="tel:+916385729991" className="text-white/60 hover:text-[#FF4D9D] font-medium text-[15px] transition-colors" style={{ textDecoration: 'none' }}>
                  +91 63857 29991
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 shrink-0 text-[#FF4D9D]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <span className="text-white/60 text-[15px]">
                  Open Daily: 10:00 AM - 10:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="relative pt-12 flex flex-col items-center">


          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/40 text-sm font-medium">
              © {year} Billionaires Luxury Salon. All rights reserved.
            </p>
            <div className="font-playfair italic text-[#FF4D9D]/80 text-lg">
              "Where Beauty Meets Absolute Elegance"
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
