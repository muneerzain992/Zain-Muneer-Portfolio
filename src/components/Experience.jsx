import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/experience.css';

const experiences = [
  {
    designation: 'Administrative & Sales Support Executive',
    company: 'Top 10 Marketing',
    type: 'Full-time (On-site)',
    location: 'Islamabad, Pakistan',
    duration: 'Jul 2025 – Apr 2026',
    letter: '/experience/Top 10 Marketing Letter.jpg',
    responsibilities: [
      'Acted as the core technical and administrative channel for enterprise customer lifecycle accounts via digital platforms, phone, and corporate email.',
      'Systematically managed, categorized, and maintained precise SLA document registries, data pipelines, and performance reports.',
      'Coordinated with deep-tier technical and IT departments to isolate, map, and rapidly resolve complex end-user system infrastructure bugs.',
      'Supervised and streamlined team calendar synchronization pipelines, task record archives, and operational workflows.',
    ],
    achievements: [
      'Monitored high-priority enterprise customer demands, consistently maintaining a 100% adherence rate to strict target turnaround times and service level metrics.',
      'Redesigned digital record tracking workflows across client service portals, saving hours of manual lookup times per business unit.',
    ],
  },
  {
    designation: 'AI Developer Intern',
    company: 'Cloudtek',
    type: 'Internship (On-site)',
    location: 'Islamabad, Pakistan',
    duration: 'Jul 2025 – Nov 2025',
    letter: '/experience/Cloud tek Experience.jpeg',
    responsibilities: [
      'Configured, provisioned, and tested full-stack development and containerized virtualization environments for multi-disciplinary software teams.',
      'Tracked, diagnosed, and resolved active environment mismatch errors, dependency package conflicts, and access control credential issues.',
      'Authored highly structured infrastructure runtime documentations, systemic onboarding guides, and standard operational manuals.',
    ],
    achievements: [
      'Accelerated cross-functional onboarding runtimes by delivering clear configuration blueprints that reduced environment mismatch issues.',
      'Supported agile sprints across continuous integration channels, assisting in the zero-downtime delivery of cloud-hosted microservices.',
    ],
  },
  {
    designation: 'Marketing & Client Relations Manager',
    company: 'Nexus Reach Pvt Ltd',
    type: 'Full-time (On-site)',
    location: 'Islamabad, Pakistan',
    duration: 'Jul 2024 – May 2025',
    letter: '/experience/Nexus Reach Pvt ltd.jpeg',
    responsibilities: [
      'Supervised multi-channel user engagement initiatives to scale digital platform discovery footprints and optimize experience metrics.',
      'Performed thorough data analytics evaluations on dynamic market trends to create structured consumer insight summaries.',
      'Managed support systems, resolved escalated complaints, and stood as the primary interface for key high-value international accounts.',
    ],
    achievements: [
      'Streamlined communication pipelines across internal departments, which boosted client retention rates over a multi-month period.',
      'Managed 100% of high-tier customer portal escalations within defined timelines, boosting customer service level scores.',
    ],
  },
  {
    designation: 'Frontend Developer Intern',
    company: 'Eziline Software House',
    type: 'Internship (On-site)',
    location: 'Rawalpindi, Pakistan',
    duration: 'Jun 2024 – Sep 2024',
    letter: '/experience/Eziline software House letter.jpeg',
    responsibilities: [
      'Architected responsive graphical interfaces and resolved complex browser-rendering or performance degradation issues using modern web stacks.',
      'Maintained local runtime staging stacks, configured software test instances, and verified production-ready states.',
      'Logged client-side bugs and maintained central code configuration repositories using central wiki frameworks.',
    ],
    achievements: [
      'Refactored legacy UI components across web portals, accelerating client-side rendering speeds.',
      'Leveraged Git/GitHub version control workflows to successfully coordinate seamless code merges with zero main branch breakage.',
    ],
  },
];

const Experience = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">Work Experience</h2>
          <div className="accent-line reveal" />
          <p className="section-subtitle reveal">A timeline of professional roles and key contributions</p>
        </div>
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience__card ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${index * 0.15}s` }}>
              <div className="experience__card-left">
                <span className="experience__company">{exp.company}</span>
                <span className="experience__duration">{exp.duration}</span>
                <span className="experience__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {exp.location}
                </span>
                
                {exp.letter && (
                  <a 
                    href={exp.letter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="experience__letter-link"
                    title="View Experience Certificate / Letter"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                    <span>Experience Letter</span>
                  </a>
                )}
              </div>
              <div className="experience__card-right">
                <div className="experience__card-header">
                  <h3 className="experience__designation">{exp.designation}</h3>
                  <span className="experience__type-badge">{exp.type}</span>
                </div>
                <div className="experience__section">
                  <h4 className="experience__section-title">Key Responsibilities</h4>
                  <ul className="experience__list">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="experience__list-item"><span className="experience__bullet" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience__section">
                  <h4 className="experience__section-title experience__section-title--achievement">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-gold)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Key Achievements
                  </h4>
                  <ul className="experience__list experience__list--achievements">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="experience__list-item experience__list-item--achievement"><span className="experience__bullet experience__bullet--gold" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
