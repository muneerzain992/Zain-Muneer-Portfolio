import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/projects.css';

const projects = [
  {
    title: 'AI Salary Prediction & Recommendation System',
    type: 'Full-Stack Machine Learning Application',
    duration: '3 Months',
    github: 'https://github.com/muneerzain992/AI-salary-prection-and-recommendation.git',
    liveLink: 'https://ai-salary-prection-and-recommendati.vercel.app/',
    image: '/projects/Salary ai prediction landing page.png',
    description: 'An enterprise-grade decoupled application engineered to estimate accurate industrial market salary ranges across 9 unique professional variables. The system incorporates an automated backend estimation worker coupled with a visual analytics dashboard.',
    outcomes: [
      'Audited and deployed an optimized Scikit-learn Linear Regression model using clean multi-variable correlation encoding and joblib serialization.',
      'Engineered a production-ready Flask REST API that supports sub-second real-time estimation runtimes under nested JSON requests.',
      'Built a highly responsive user layout using React.js, Vite, and Tailwind CSS, featuring continuous delivery hosting on Vercel and Render.',
    ],
    technologies: ['Python', 'Flask API', 'Scikit-learn', 'Pandas', 'NumPy', 'React.js', 'Vite', 'Tailwind CSS', 'Axios', 'Gunicorn', 'Vercel', 'Render', 'Git'],
  },
  {
    title: 'Myst Water E-Commerce Experience',
    type: 'Eco-Luxury Product Experience & Full-Funnel Marketing System',
    duration: '3 Months',
    liveLink: 'https://muneerzain992.github.io/MYST-WATER-/',
    image: '/projects/myst_water.jpg',
    description: 'An elite, modern digital ecosystem engineered to launch, position, and scale a premium eco-friendly water bottle brand. The architecture bridges an immersive, hyper-interactive visual user experience with a high-performance digital marketing pipeline to drive automated lead generation and optimized conversion funnels.',
    outcomes: [
      'Architected an immersive UI/UX ecosystem using React.js and advanced motion libraries to deploy an interactive, 3-dimensional product customizer featuring seamless real-time rendering of 5 signature color profiles.',
      'Engineered a multi-stage Meta Ads lead acquisition funnel, implementing precise targeting strategies and robust conversion tracking to maximize digital marketing ROI.'
    ],
    technologies: ['React.js', 'Motion Libraries', 'Meta Ads', 'UI/UX Ecosystem', 'Conversion Funnels'],
  },
  {
    title: 'Ehsas Hub – AI-Enhanced Matchmaking & Donation Portal',
    type: 'Final Year Capstone Project',
    duration: '8 Months',
    github: 'https://github.com/FaisalRehman6696/Donation-System.git',
    image: '/projects/project_ehsas.jpg',
    description: 'A secured marketplace hub conceptually designed to seamlessly bridge international philanthropic donors with verified beneficiaries, aiming to reduce manual processing friction in global distribution.',
    outcomes: [
      'Programmed an artificial intelligence matchmaking engine utilizing machine learning methodologies to supply contextually optimized material suggestions based on profile histories.',
      'Constructed a robust relational database scheme optimized to safely isolate sensitive transactions and process user lookup requests.',
      'Successfully defended and delivered the fully operational prototype architecture to the academic board.',
    ],
    technologies: ['Python', 'Machine Learning Frameworks', 'Database Management Systems', 'Frontend Web Engine', 'SQL'],
  },
];

const Projects = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container-wide">
        <div className="section-header">
          <h2 className="section-title reveal">Projects</h2>
          <div className="accent-line reveal" />
          <p className="section-subtitle reveal">Engineering solutions that solve real-world challenges</p>
        </div>
        <div className="projects__list">
          {projects.map((project, index) => (
            <div key={index} className="projects__card reveal">
              <div className="projects__card-left">
                <div className="projects__image-container">
                  <img 
                    src={import.meta.env.BASE_URL ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}` : project.image} 
                    alt={project.title} 
                    className="projects__image" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="projects__image-fallback">
                    <span>{project.title.split(' ')[0]} Hub</span>
                  </div>
                </div>
                <div className="projects__left-content">
                  <span className="projects__number">0{index + 1}</span>
                  <h3 className="projects__title">{project.title}</h3>
                  <div className="projects__meta">
                    <span className="projects__type">{project.type}</span>
                    <span className="projects__duration">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="projects__card-right">
                <p className="projects__description">{project.description}</p>
                <div className="projects__outcomes">
                  <h4 className="projects__outcomes-title">Key Outcomes</h4>
                  <div className="projects__outcomes-grid">
                    {project.outcomes.map((outcome, i) => (
                      <div key={i} className="projects__outcome-box" style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                        <span className="projects__outcome-number">{i + 1}</span>
                        <p className="projects__outcome-text">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="projects__actions">
                  <div className="projects__tech">
                    <h4 className="projects__tech-title">Technologies</h4>
                    <div className="projects__tech-pills">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="projects__tech-pill" style={{ animationDelay: `${0.5 + i * 0.05}s` }}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="projects__github-btn projects__live-btn"
                      style={{ background: 'var(--accent-gold)', color: 'var(--bg-primary)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      <span style={{ color: 'var(--bg-primary)' }}>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="projects__github-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
