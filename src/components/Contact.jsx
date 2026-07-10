import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/contact.css';

const Contact = () => {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field) => { if (!formData[field]) setFocused({ ...focused, [field]: false }); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const link = document.createElement('a');
    link.href = `mailto:muneerzain992@gmail.com?subject=${subject}&body=${body}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    { icon: 'email', label: 'Email', value: 'muneerzain992@gmail.com', href: 'mailto:muneerzain992@gmail.com' },
    { icon: 'phone', label: 'Phone', value: '+966 54 917 8948', href: 'tel:+966549178948' },
    { icon: 'location', label: 'Location', value: 'Riyadh, Saudi Arabia (Valid Iqama)', href: null },
    { icon: 'linkedin', label: 'LinkedIn', value: 'muneerzain992', href: 'https://linkedin.com/in/muneerzain992' },
    { icon: 'github', label: 'GitHub', value: 'muneerzain992', href: 'https://github.com/muneerzain992' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'email': return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
      case 'phone': return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
      case 'location': return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
      case 'linkedin': return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
      case 'github': return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
      default: return null;
    }
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">Let&apos;s Build Resilient Infrastructure Together</h2>
          <div className="accent-line reveal" />
        </div>
        <div className="contact__grid">
          <div className="contact__form-panel reveal-left">
            <h3 className="contact__form-title">Send Me a Message</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              {[
                { name: 'name', type: 'text', label: 'Full Name' },
                { name: 'email', type: 'email', label: 'Email Address' },
                { name: 'subject', type: 'text', label: 'Subject' },
              ].map((field, i) => (
                <div key={field.name} className={`contact__field ${focused[field.name] || formData[field.name] ? 'focused' : ''}`}>
                  <input type={field.type} name={field.name} id={`contact-${field.name}`} value={formData[field.name]} onChange={handleChange} onFocus={() => handleFocus(field.name)} onBlur={() => handleBlur(field.name)} className="contact__input" required />
                  <label htmlFor={`contact-${field.name}`} className="contact__label">{field.label}</label>
                  <div className="contact__underline" style={{ transitionDelay: `${i * 0.1}s` }} />
                </div>
              ))}
              <div className={`contact__field ${focused.message || formData.message ? 'focused' : ''}`}>
                <textarea name="message" id="contact-message" value={formData.message} onChange={handleChange} onFocus={() => handleFocus('message')} onBlur={() => handleBlur('message')} className="contact__input contact__textarea" rows="5" required />
                <label htmlFor="contact-message" className="contact__label">Message</label>
                <div className="contact__underline" style={{ transitionDelay: '0.3s' }} />
              </div>
              <button type="submit" className="contact__submit">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
          <div className="contact__info-panel reveal-right">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-subtitle">Feel free to reach out through any of the channels below.</p>
            <div className="contact__info-list">
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href || '#'} target={item.href && !item.href.startsWith('mailto') && !item.href.startsWith('tel') ? '_blank' : undefined} rel={item.href && !item.href.startsWith('mailto') && !item.href.startsWith('tel') ? 'noopener noreferrer' : undefined} className="contact__info-row">
                  <div className="contact__info-icon">{getIcon(item.icon)}</div>
                  <div className="contact__info-text">
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
