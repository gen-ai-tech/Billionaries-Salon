import { useState } from 'react';
import { Phone, MapPin, Calendar, X, ArrowUp } from 'lucide-react';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    setIsOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* DESKTOP: Floating Action Menu */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-[999] flex-col items-center gap-3">
        {/* Menu Items (Expand upwards) */}
        <div 
          className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-8 pointer-events-none'
          }`}
        >
          {/* Book Appointment */}
          <button
            onClick={() => handleScroll('#booking')}
            className="w-12 h-12 rounded-full bg-[#0a0a0a] text-[#FF4D9D] flex items-center justify-center shadow-[0_4px_20px_rgba(255,77,157,0.2)] border border-[#FF4D9D]/30 hover:bg-[#FF4D9D] hover:text-[#0a0a0a] transition-all duration-300 hover:scale-110"
            aria-label="Book Appointment"
            title="Book Appointment"
          >
            <Calendar size={20} />
          </button>

          {/* Location */}
          <button
            onClick={() => handleScroll('#contact')}
            className="w-12 h-12 rounded-full bg-[#0a0a0a] text-[#FF4D9D] flex items-center justify-center shadow-[0_4px_20px_rgba(255,77,157,0.2)] border border-[#FF4D9D]/30 hover:bg-[#FF4D9D] hover:text-[#0a0a0a] transition-all duration-300 hover:scale-110"
            aria-label="Location"
            title="Location"
          >
            <MapPin size={20} />
          </button>

          {/* Call */}
          <a
            href="tel:+916385729991"
            className="w-12 h-12 rounded-full bg-[#0a0a0a] text-[#FF4D9D] flex items-center justify-center shadow-[0_4px_20px_rgba(255,77,157,0.2)] border border-[#FF4D9D]/30 hover:bg-[#FF4D9D] hover:text-[#0a0a0a] transition-all duration-300 hover:scale-110"
            aria-label="Call Us"
            title="Call Us"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(255,77,157,0.3)] transition-all duration-300 hover:scale-105 z-10 border ${
            isOpen ? 'bg-[#0a0a0a] text-[#FF4D9D] border-[#FF4D9D]/50' : 'bg-[#FF4D9D] text-[#0a0a0a] border-transparent'
          }`}
          aria-label="Toggle Contact Menu"
        >
          {isOpen ? <X size={28} /> : <ArrowUp size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* MOBILE: Fixed Bottom Navigation Bar */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-[#050505] border-t border-white/10 px-2 pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
        style={{ paddingBottom: 'calc(8px + env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          {/* Book Appointment */}
          <button
            onClick={() => handleScroll('#booking')}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#FF4D9D] text-[#0a0a0a] font-semibold text-[13.5px] tracking-wide active:scale-95 transition-transform"
          >
            <Calendar size={16} strokeWidth={2.5} />
            <span>Book</span>
          </button>

          {/* Location */}
          <button
            onClick={() => handleScroll('#contact')}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#111] text-[#FF4D9D] border border-white/5 font-semibold text-[13.5px] tracking-wide active:scale-95 transition-transform"
          >
            <MapPin size={16} strokeWidth={2.5} />
            <span>Location</span>
          </button>

          {/* Call */}
          <a
            href="tel:+916385729991"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#111] text-[#FF4D9D] border border-white/5 font-semibold text-[13.5px] tracking-wide active:scale-95 transition-transform no-underline"
          >
            <Phone size={16} strokeWidth={2.5} />
            <span>Call</span>
          </a>
        </div>
      </div>
    </>
  );
}
