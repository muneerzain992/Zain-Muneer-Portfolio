import { useRef, useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/certifications.css';

const certifications = [
  { 
    name: 'Networking Essentials', 
    provider: 'Cisco', 
    image: '/certificates/Networking Essentials.jpg' 
  },
  { 
    name: 'Introduction to IoT', 
    provider: 'Cisco', 
    image: '/certificates/introduction to iot.jpg' 
  },
  { 
    name: 'Linux Essentials', 
    provider: 'Cisco', 
    image: '/certificates/Linux essential.jpg' 
  },
  { 
    name: 'Python Essentials', 
    provider: 'Cisco', 
    isMulti: true, 
    images: [
      '/certificates/Python Essentials 1.jpg', 
      '/certificates/Python Essentials 2.jpg'
    ],
    names: [
      'Python Essentials 1', 
      'Python Essentials 2'
    ]
  },
];

const CertCard = ({ cert, index }) => {
  const cardRef = useRef(null);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    };
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const base = import.meta.env.BASE_URL || '/';
  const rawImage = cert.isMulti ? cert.images[activeSubIndex] : cert.image;
  const currentImage = base + rawImage.replace(/^\//, '');
  const currentName = cert.isMulti ? cert.names[activeSubIndex] : cert.name;

  const nextCert = (e) => {
    e.stopPropagation();
    setActiveSubIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const prevCert = (e) => {
    e.stopPropagation();
    setActiveSubIndex((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <div ref={cardRef} className="certifications__card reveal" style={{ '--start-rotation': `${(Math.random() * 4 - 2).toFixed(1)}deg`, transitionDelay: `${index * 0.15}s` }}>
      <div className="certifications__image-wrapper">
        <img 
          src={currentImage} 
          alt={currentName} 
          className="certifications__image" 
          key={currentImage} // Force reload animation/re-render
          onError={(e) => { 
            e.target.style.display = 'none'; 
            e.target.nextSibling.style.display = 'flex'; 
          }} 
        />
        <div className="certifications__image-fallback" style={{display:'none'}}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>
          <span>{currentName}</span>
        </div>

        {cert.isMulti && (
          <div className="certifications__slider-controls">
            <button className="certifications__slider-btn" onClick={prevCert} aria-label="Previous Certificate">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="certifications__slider-dots">
              <span className={`certifications__slider-dot ${activeSubIndex === 0 ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveSubIndex(0); }} />
              <span className={`certifications__slider-dot ${activeSubIndex === 1 ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveSubIndex(1); }} />
            </div>
            <button className="certifications__slider-btn" onClick={nextCert} aria-label="Next Certificate">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        )}
      </div>
      <div className="certifications__info">
        <h3 className="certifications__name">{currentName}</h3>
        <span className="certifications__provider-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-gold)" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          {cert.provider}
        </span>
      </div>
    </div>
  );
};

const Certifications = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="certifications" className="section certifications" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">Certifications</h2>
          <div className="accent-line reveal" />
          <p className="section-subtitle reveal">Industry-recognized credentials and qualifications</p>
        </div>
        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
