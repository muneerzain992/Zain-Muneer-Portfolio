import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import '../css/landing.css';

const Landing = () => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const vsSource = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `;

    const fsSource = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 mouse = u_mouse / u_resolution;
        float dist = distance(uv, mouse);
        float influence = smoothstep(0.3, 0.0, dist);
        float t = u_time * 0.3;
        vec2 distortion = vec2(
          sin(uv.y * 8.0 + t) * 0.02,
          cos(uv.x * 6.0 + t * 0.7) * 0.02
        ) * (1.0 + influence * 3.0);
        vec2 fuv = uv + distortion;
        float n = sin(fuv.x * 3.0 + t) * cos(fuv.y * 4.0 - t * 0.5) * 0.5 + 0.5;
        float glow = smoothstep(0.6, 0.0, dist) * 0.15;
        vec3 color1 = vec3(0.04, 0.04, 0.04);
        vec3 color2 = vec3(0.08, 0.06, 0.03);
        vec3 color3 = vec3(0.02, 0.06, 0.08);
        vec3 col = mix(color1, color2, n * 0.5);
        col = mix(col, color3, sin(t * 0.2 + fuv.x * 2.0) * 0.3 + 0.3);
        col += vec3(0.83, 0.66, 0.26) * glow;
        col += vec3(0.0, 0.9, 1.0) * glow * 0.3 * sin(t + fuv.y * 10.0);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');

    let mouseX = canvas.width / 2, mouseY = canvas.height / 2;
    let animId;

    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = canvas.height - e.clientY; };
    window.addEventListener('mousemove', onMouseMove);

    const startTime = performance.now();
    function render() {
      const time = (performance.now() - startTime) / 1000;
      gl.uniform1f(uTime, time);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="landing" className="landing">
      <canvas ref={canvasRef} className="landing__canvas" />
      <div className="landing__overlay" />
      <div className={`landing__content ${loaded ? 'loaded' : ''}`}>
        <div className="landing__logo-wrapper" style={{ marginBottom: 'var(--space-lg)', display: 'inline-flex' }}>
          <Logo width="160" height="65" />
        </div>
        <h1 className="landing__name">
          <span className="landing__name-glitch" data-text="Zain Muneer">Zain Muneer</span>
        </h1>
        <p className="landing__designations">
          IT Specialist <span className="landing__separator">|</span> Systems &amp; AI Operations <span className="landing__separator">|</span> Computer Science Graduate
        </p>
        <p className="landing__intro">
          As a highly motivated Computer Science graduate with hands-on experience spanning IT infrastructure support, agile system administration, and modern business operations, I bridge technical precision with operational excellence. With over two years of diverse professional experience across technical support, frontend engineering, and AI environments, I excel at diagnostics, network configuration, and workflow automation. My current focus centers on leveraging modern web frameworks and advanced Generative AI architectures to sustain high operational uptime and accelerate business metrics. My commitment lies in delivering scalable value to engineering and service operations within the expanding Saudi market. Let&apos;s connect to build smarter, resilient enterprise infrastructures.
        </p>
        <div className="landing__cta-row">
          <button className="landing__cta landing__cta--primary" onClick={() => scrollTo('about')}>
            <span>Learn More About Me</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7.8H7.8"/></svg>
          </button>
          <button className="landing__cta landing__cta--secondary" onClick={() => scrollTo('contact')}>
            <span>Get In Touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </button>
        </div>
        <div className="landing__socials">
          <a href="https://github.com/muneerzain992" target="_blank" rel="noopener noreferrer" className="landing__social-icon" style={{animationDelay: '0.8s'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/muneerzain992" target="_blank" rel="noopener noreferrer" className="landing__social-icon" style={{animationDelay: '1.0s'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:muneerzain992@gmail.com" className="landing__social-icon" style={{animationDelay: '1.2s'}}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </a>
        </div>
        <div className="landing__scroll-indicator">
          <div className="landing__scroll-mouse"><div className="landing__scroll-dot" /></div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Landing;
