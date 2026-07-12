import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/achievements.css';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Certifications' },
  { value: '2', label: 'Major Projects' },
  { value: '3', label: 'Academic & Regional Special Honors' },
];

const achievements = [
  {
    category: 'Professional', year: '2026',
    title: 'SLA Target Champion',
    institution: 'Top 10 Marketing',
    description: 'Successfully maintained a flawless turnaround track record handling multi-channel high-priority corporate support requests.',
    image: '/achievements/achievements_sla.jpg',
  },
  {
    category: 'Academic', year: '2025',
    title: 'AI Recommendation Core Capstone',
    institution: 'Riphah International University',
    description: 'Designed and presented an AI-driven matchmaking logic schema for donation tracking to academic department heads.',
    image: '/achievements/achievements_capstone.jpg',
  },
];

const StatCounter = ({ value, label, delay }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`achievements__stat ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <span className="achievements__stat-value">{value}</span>
      <span className="achievements__stat-label">{label}</span>
    </div>
  );
};

const Achievements = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="achievements" className="section achievements" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">Achievements &amp; Recognition</h2>
          <div className="accent-line reveal" />
          <p className="section-subtitle reveal">A snapshot of quantitative benchmarks, continuous industry certifications, and engineering projects executed across my professional timeline.</p>
        </div>
        <div className="achievements__stats">
          {stats.map((stat, i) => (
            <StatCounter key={i} value={stat.value} label={stat.label} delay={i * 0.1} />
          ))}
        </div>
        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievements__card reveal-scale" style={{ transitionDelay: `${0.3 + index * 0.15}s` }}>
              <div className="achievements__image-wrapper">
                <img src={import.meta.env.BASE_URL ? `${import.meta.env.BASE_URL}${achievement.image.replace(/^\//, '')}` : achievement.image} alt={achievement.title} className="achievements__image" />
                <div className="achievements__image-overlay" />
              </div>
              <div className="achievements__content">
                <div className="achievements__badges">
                  <span className="achievements__category-badge">{achievement.category}</span>
                  <span className="achievements__year-badge">{achievement.year}</span>
                </div>
                <h3 className="achievements__title">{achievement.title}</h3>
                <p className="achievements__institution">{achievement.institution}</p>
                <p className="achievements__description">{achievement.description}</p>
              </div>
              <div className="achievements__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
