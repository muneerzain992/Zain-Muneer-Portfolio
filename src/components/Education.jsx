import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/education.css';

const Education = () => {
  const base = import.meta.env.BASE_URL || '/';
  const sectionRef = useScrollReveal();
  const highlights = [
    'Core Academic Domains: Operating Systems, Computer Networks & Architecture, and Information Security.',
    'Advanced Theoretical Foundations: Database Systems, Software Engineering, and Project Management.',
    'Specialized Work: Artificial Intelligence core methodologies and advanced full-stack application logic.',
  ];

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <div className="education__bg-watermark" style={{ backgroundImage: `url('${base}education/Bachelors Picture.jfif')` }} />
      <div className="container education__relative">
        <div className="section-header">
          <h2 className="section-title reveal">Education</h2>
          <div className="accent-line reveal" />
          <p className="section-subtitle reveal">Academic foundation and specialized knowledge</p>
        </div>
        <div className="education__card reveal">
          <div className="education__vertical-layout">
            <div className="education__img-wrapper-centered">
              <img 
                src={`${base}education/Bachelors Picture.jfif`} 
                alt="BSCS Graduation Portrait" 
                className="education__certificate-img"
              />
            </div>
            
            <div className="education__content-centered">
              <div className="education__header-centered">
                <h3 className="education__qualification">Bachelor of Science in Computer Science (BSCS)</h3>
                <span className="education__mode-badge">Full-time</span>
              </div>
              <p className="education__institution">Riphah International University</p>
              <p className="education__duration">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Graduation: 2025
              </p>

              <a 
                href={`${base}education/Degree certificate Bachelors.jpg`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="education__degree-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <span>View Degree Certificate</span>
              </a>

              <div className="education__highlights">
                <h4 className="education__highlights-title">Key Highlights</h4>
                <ul className="education__highlights-list">
                  {highlights.map((item, i) => (
                    <li key={i} className="education__highlight-item" style={{ animationDelay: `${0.3 + i * 0.2}s` }}>
                      <span className="education__highlight-marker" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="education__card-border" />
        </div>
      </div>
    </section>
  );
};

export default Education;
