import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/about.css';

const About = () => {
  const [imgSrc, setImgSrc] = useState('/Profile picture.PNG');
  const [fallbackIndex, setFallbackIndex] = useState(0);
  const sectionRef = useScrollReveal();

  const fallbacks = [
    '/Profile picture.PNG',
    '/profile_photo.PNG',
    '/profile_photo.png',
    '/profile_photo.jpg',
    '/profile_photo.jpeg'
  ];

  const handleImgError = () => {
    if (fallbackIndex < fallbacks.length - 1) {
      setImgSrc(fallbacks[fallbackIndex + 1]);
      setFallbackIndex(fallbackIndex + 1);
    } else {
      setImgSrc(null);
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navButtons = [
    { label: 'Work Experience', target: 'experience' },
    { label: 'Education', target: 'education' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Certifications', target: 'certifications' },
  ];

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">About Me</h2>
          <div className="accent-line reveal" />
        </div>
        <div className="about__grid">
          <div className="about__photo-col reveal-left">
            <div className="about__photo-wrapper">
              {imgSrc ? (
                <img 
                  src={imgSrc} 
                  alt="Zain Muneer" 
                  className="about__photo" 
                  onError={handleImgError} 
                />
              ) : (
                <div className="about__photo-fallback">ZM</div>
              )}
              <div className="about__photo-border" />
            </div>
            <div className="about__nav-buttons">
              {navButtons.map((btn, i) => (
                <button key={btn.target} className="about__nav-btn reveal" style={{ transitionDelay: `${0.6 + i * 0.1}s` }} onClick={() => scrollTo(btn.target)}>
                  <span>{btn.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              ))}
            </div>
          </div>
          <div className="about__text-col">
            <p className="about__summary reveal-right">
              I am an adaptable IT Specialist and Computer Science graduate who thrives at the intersection of infrastructure reliability, software development, and AI engineering. Across roles at Cloudtek and Eziline Software House, I have specialized in provisioning virtualization environments, optimizing client-side browser performance, and managing robust system documentation. I master an agile toolkit featuring Python, JavaScript (ES6), React.js, Flask, and core enterprise networking configurations (TCP/IP, DNS, VPN). Backed by an academic foundation from Riphah International University and a suite of Cisco credentials, my technical edge is supercharged by expert prompt engineering to streamline office work and troubleshoot IT complications with agility. What truly separates me is my rare blend of deep technical core competency with strong client-facing administrative proficiency that safeguards SLA targets and enhances end-user satisfaction.
            </p>
            <div className="about__cards">
              <div className="about__card about__card--mission reveal-scale" style={{ transitionDelay: '0.3s' }}>
                <div className="about__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                </div>
                <h3 className="about__card-title">Mission</h3>
                <p className="about__card-text">To seamlessly optimize corporate infrastructure, scale software ecosystems, and leverage intelligent systems to minimize runtime friction and secure exceptional service level agreement metrics.</p>
              </div>
              <div className="about__card about__card--vision reveal-scale" style={{ transitionDelay: '0.5s' }}>
                <div className="about__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-neon)" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="about__card-title">Vision</h3>
                <p className="about__card-text">To evolve into a leading systems architect in the Saudi tech space, pioneering automated infrastructure workflows and user-centric operations that ensure continuous business reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
