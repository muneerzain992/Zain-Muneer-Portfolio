import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/skills.css';

const skillCategories = [
  {
    title: 'IT & Infrastructure Support', icon: '🖥️',
    skills: [
      { name: 'Technical Troubleshooting', value: 92 },
      { name: 'Hardware/Software Installation', value: 90 },
      { name: 'Windows & Linux OS Administration', value: 88 },
      { name: 'Enterprise Networking (TCP/IP, DNS, DHCP, VPN)', value: 85 },
      { name: 'Enterprise Email Troubleshooting & MS Outlook', value: 90 },
    ],
  },
  {
    title: 'Productivity Cloud & Operations', icon: '☁️',
    skills: [
      { name: 'Microsoft Office 365 Environment', value: 92 },
      { name: 'Advanced Excel (Data Analytics & Reporting)', value: 88 },
      { name: 'Documentation Management & SLA Frameworks', value: 85 },
      { name: 'Service Desk Workflows & CRM Administration', value: 87 },
    ],
  },
  {
    title: 'Software Engineering & DevOps', icon: '⚙️',
    skills: [
      { name: 'Python Programming & Automation Scripting', value: 86 },
      { name: 'Web Technologies (HTML5, CSS3, JavaScript ES6)', value: 88 },
      { name: 'React.js & Frontend Tooling (Vite, Tailwind)', value: 83 },
      { name: 'Version Control (Git/GitHub)', value: 85 },
      { name: 'Cybersecurity Frameworks & Access Control', value: 80 },
    ],
  },
  {
    title: 'Generative AI & Architecture', icon: '🤖',
    skills: [
      { name: 'Prompt Engineering (ChatGPT, Claude, Gemini)', value: 95 },
      { name: 'AI-Driven Technical Document Generation', value: 92 },
      { name: 'Automated IT Diagnostic Workflows', value: 90 },
    ],
  },
];

const SkillBar = ({ name, value, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1000;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const timer = setTimeout(() => requestAnimationFrame(animate), delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div className="skills__bar-wrapper">
      <div className="skills__bar-header">
        <span className="skills__bar-name">{name}</span>
        <span className="skills__bar-value">{count}%</span>
      </div>
      <div className="skills__bar-track">
        <div className="skills__bar-fill" style={{ width: isVisible ? `${value}%` : '0%', transitionDelay: `${delay}ms` }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useScrollReveal();
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title reveal">Skills</h2>
          <div className="accent-line reveal" />
          <p className="section-subtitle reveal">Technical proficiencies and operational capabilities</p>
        </div>
        <div className="skills__grid" ref={gridRef}>
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skills__category reveal-scale" style={{ transitionDelay: `${catIndex * 0.15}s` }}>
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__bars">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} value={skill.value} isVisible={isVisible} delay={catIndex * 200 + skillIndex * 100} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
