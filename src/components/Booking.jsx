import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { MessageCircle, Sparkles } from 'lucide-react';

const services = [
  'Hair Cut & Styling', 'Hair Color & Highlights', 'Hair Spa & Keratin',
  'Luxury Glow Facial', 'Skin Polishing & Cleanup',
  'Bridal Makeup', 'Party Makeover',
  'Manicure & Pedicure', 'Nail Extensions'
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [form, setForm] = useState({ name: '', mobile: '', service: '', date: '', timeHour: '', timeMin: '00', ampm: 'AM', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleBook = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.service) {
      alert("Please fill in all required fields (Name, Mobile, Service).");
      return;
    }
    let formattedTime = 'Flexible';
    if (form.timeHour) {
      formattedTime = `${form.timeHour}:${form.timeMin} ${form.ampm}`;
    }
    const msg = `Hello! I want to book an appointment.\n\nName: ${form.name}\nMobile: ${form.mobile}\nService: ${form.service}\nDate: ${form.date || 'Flexible'}\nTime: ${formattedTime}${form.message ? '\nMessage: ' + form.message : ''}`;
    window.open(`https://wa.me/916385729991?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-[#050505]" style={{ paddingTop: '120px', paddingBottom: '40px' }}>
      {/* Background glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FF4D9D] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      {/* Section wrapper */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>

        {/* Header */}
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '48px' }}>
          <div className={`${inView ? 'animate-fade-up' : 'opacity-0'}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '700px', margin: '0 auto' }}>
            <div className="luxury-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Sparkles size={16} /> Book Appointment
            </div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', marginBottom: '16px', textAlign: 'center' }}>
              Book Your <span className="text-gradient">Experience</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              Secure your appointment today and let us treat you to the luxury you deserve.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div
            className={`${inView ? 'animate-fade-up delay-200' : 'opacity-0'}`}
            style={{
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              borderRadius: '24px',
              background: 'rgba(10,10,10,0.8)',
              border: '1px solid rgba(255,77,157,0.15)',
              backdropFilter: 'blur(12px)',
              padding: 'clamp(24px, 4vw, 48px)',
            }}
          >
            <form onSubmit={handleBook} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

              {/* Row 1: Full Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,77,157,0.15)',
                    padding: '0 20px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Row 1: Mobile Number */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit number"
                  required
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,77,157,0.15)',
                    padding: '0 20px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Row 2: Service Dropdown (Full Width) */}
              <div className="md:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>
                  Select Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,77,157,0.15)',
                    padding: '0 20px',
                    color: form.service ? '#fff' : 'rgba(255,255,255,0.3)',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    appearance: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="" disabled>Choose a service...</option>
                  {services.map(s => <option key={s} value={s} style={{ background: '#0a0a0a', color: '#fff' }}>{s}</option>)}
                </select>
              </div>

              {/* Row 3: Date */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,77,157,0.15)',
                    padding: '0 20px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    colorScheme: 'dark',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Row 3: Time */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>
                  Preferred Time
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    name="timeHour"
                    value={form.timeHour}
                    onChange={handleChange}
                    style={{
                      flex: 1,
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,77,157,0.15)',
                      padding: '0 12px',
                      color: form.timeHour ? '#fff' : 'rgba(255,255,255,0.3)',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                      appearance: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option value="" disabled>Hr</option>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(t => <option key={t} value={t} style={{ background: '#0a0a0a', color: '#fff' }}>{t}</option>)}
                  </select>

                  <select
                    name="timeMin"
                    value={form.timeMin}
                    onChange={handleChange}
                    style={{
                      flex: 1,
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,77,157,0.15)',
                      padding: '0 12px',
                      color: '#fff',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                      appearance: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                  >
                    {['00', '15', '30', '45'].map(t => <option key={t} value={t} style={{ background: '#0a0a0a', color: '#fff' }}>{t}</option>)}
                  </select>
                  
                  <select
                    name="ampm"
                    value={form.ampm}
                    onChange={handleChange}
                    style={{
                      flex: 1,
                      height: '56px',
                      borderRadius: '14px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,77,157,0.15)',
                      padding: '0 12px',
                      color: '#fff',
                      fontSize: '14px',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                      appearance: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                  >
                    <option value="AM" style={{ background: '#0a0a0a', color: '#fff' }}>AM</option>
                    <option value="PM" style={{ background: '#0a0a0a', color: '#fff' }}>PM</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message (Full Width) */}
              <div className="md:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any special requests or preferences..."
                  rows={3}
                  style={{
                    width: '100%',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,77,157,0.15)',
                    padding: '16px 20px',
                    color: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#FF4D9D'; e.target.style.boxShadow = '0 0 0 3px rgba(255,77,157,0.1)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,77,157,0.15)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              {/* Row 5: Centered Button */}
              <div className="md:col-span-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
                <button
                  type="submit"
                  className="btn-premium"
                  style={{
                    background: '#25D366',
                    padding: '16px 40px',
                    fontSize: '16px',
                    borderRadius: '14px',
                    width: 'fit-content',
                    margin: '0 auto',
                    boxShadow: '0 8px 32px rgba(37,211,102,0.15)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={e => { e.target.style.background = '#128C7E'; e.target.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.target.style.background = '#25D366'; e.target.style.transform = 'translateY(0)'; }}
                >
                  <MessageCircle size={20} /> Book via WhatsApp
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
