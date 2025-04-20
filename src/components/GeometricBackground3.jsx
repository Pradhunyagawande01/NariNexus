const GeometricBackground = ({ className, rotation = 45 }) => {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Top Left Triangles */}
        <div className={`absolute -top-16 -left-16 w-48 h-48 bg-purple-600/20 rotate-${rotation}`}></div>
        <div className={`absolute top-12 left-24 w-24 h-24 bg-pink-500/30 rotate-${rotation + 10}`}></div>
        
        {/* Bottom Right Triangles */}
        <div className={`absolute -bottom-16 -right-16 w-64 h-64 bg-orange-500/20 rotate-${rotation}`}></div>
        <div className={`absolute bottom-24 right-24 w-32 h-32 bg-pink-600/30 -rotate-${rotation + 12}`}></div>
        
        {/* Scattered Small Triangles */}
        <div className={`absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rotate-${rotation + 20}`}></div>
        <div className={`absolute top-1/3 right-1/3 w-12 h-12 bg-orange-500/20 rotate-${rotation + 5}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-500/20 -rotate-${rotation + 15}`}></div>
        
        {/* Network lines - subtle connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.5" />
          <line x1="25%" y1="0" x2="75%" y2="100%" stroke="white" strokeWidth="0.5" />
          <line x1="75%" y1="0" x2="25%" y2="100%" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
    );
  };
  
  export default GeometricBackground;
  