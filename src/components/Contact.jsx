import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const address = '1st Floor, Ananthammal Complex, No 297, 2/4, Angammal Colony, Salem, Tamil Nadu 636009';
  const embedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.7!2d78.1460!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBillionaires+Luxury+Salon+Salem!5e0!3m2!1sen!2sin!4v1700000000000`;

  return (
    <section id="contact" className="section-premium bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="container-premium">
        
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className={`${inView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="luxury-badge mb-6">✦ Contact Us</div>
            <h2 className="section-title">
              Visit Our <span className="text-gradient">Sanctuary</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Map */}
          <div className={`w-full h-[400px] lg:h-auto rounded-3xl overflow-hidden premium-card p-2 ${inView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
             <iframe
                src={embedSrc}
                width="100%" height="100%"
                style={{ border: 0, borderRadius: '20px', filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Billionaires Salon Map"
              />
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            
            <div className={`premium-card p-8 flex items-start gap-6 ${inView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF4D9D] shrink-0">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-white text-xl mb-2">Our Location</h4>
                <p className="text-white/60 text-sm leading-relaxed">{address}</p>
              </div>
            </div>

            <div className={`premium-card p-8 flex items-start gap-6 ${inView ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF4D9D] shrink-0">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-white text-xl mb-2">Contact Info</h4>
                <a href="tel:+916385729991" className="block text-white/80 hover:text-white text-lg mb-1 transition-colors">+91 63857 29991</a>
              </div>
            </div>

            <div className={`premium-card p-8 flex items-start gap-6 ${inView ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF4D9D] shrink-0">
                <Clock size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-white text-xl mb-2">Business Hours</h4>
                <p className="text-white/80 text-sm mb-1 font-medium">Monday - Sunday</p>
                <p className="text-[#E8B4B8] text-sm font-semibold">10:00 AM – 10:00 PM</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
