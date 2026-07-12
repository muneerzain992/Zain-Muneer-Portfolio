const Logo = ({ width = "120", height = "50", ...props }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
      style={{ display: 'block', overflow: 'visible', ...props.style }}
      {...props}
    >
      <defs>
        <linearGradient id="gold-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdfaf1" />
          <stop offset="25%" stopColor="#e5c173" />
          <stop offset="50%" stopColor="#c59837" />
          <stop offset="75%" stopColor="#e5c173" />
          <stop offset="100%" stopColor="#a37c27" />
        </linearGradient>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Z Letter (Large) */}
      <text 
        x="60" 
        y="42" 
        textAnchor="middle"
        fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif" 
        fontSize="54" 
        fontWeight="900" 
        fill="url(#gold-logo-grad)"
        style={{ letterSpacing: '0px', filter: 'url(#logo-glow)' }}
      >
        Z
      </text>
      
      {/* M Letter (Smaller, overlapping Z) */}
      <text 
        x="60" 
        y="30" 
        textAnchor="middle"
        fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif" 
        fontSize="24" 
        fontWeight="800" 
        fill="url(#gold-logo-grad)"
        stroke="#0a0a0a" /* Matches the very dark background */
        strokeWidth="3.5"
        paintOrder="stroke"
        style={{ letterSpacing: '2px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.8))' }}
      >
        M
      </text>
    </svg>
  );
};

export default Logo;
