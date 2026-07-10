const Logo = ({ width = "150", height = "60" }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 160 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="gold-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdfaf1" />
          <stop offset="25%" stopColor="#e5c173" />
          <stop offset="50%" stopColor="#c59837" />
          <stop offset="75%" stopColor="#e5c173" />
          <stop offset="100%" stopColor="#a37c27" />
        </linearGradient>
        <filter id="logo-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Z Letter */}
      <text 
        x="15" 
        y="46" 
        fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif" 
        fontSize="48" 
        fontWeight="800" 
        fill="url(#gold-logo-grad)"
        style={{ letterSpacing: '4px' }}
      >
        Z
      </text>
      
      {/* M Letter */}
      <text 
        x="80" 
        y="46" 
        fontFamily="'Cinzel', 'Playfair Display', 'Georgia', serif" 
        fontSize="48" 
        fontWeight="800" 
        fill="url(#gold-logo-grad)"
        style={{ letterSpacing: '4px' }}
      >
        M
      </text>
      
      {/* Curved Swash bridging the letters */}
      <path 
        d="M 6 40 C 45 14, 110 14, 148 44 C 110 22, 45 22, 6 40 Z" 
        fill="url(#gold-logo-grad)"
        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }}
      />
    </svg>
  );
};

export default Logo;
