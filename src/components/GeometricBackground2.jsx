const GeometricBackground = ({ className }) => {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className} transform scale-y-[-1]`}>
        {/* Top right triangles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rotate-45"></div>
        <div className="absolute top-20 right-32 w-20 h-20 bg-pink-500/30 rotate-12"></div>
        
        {/* Bottom left triangles */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/20 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-pink-600/30 -rotate-12"></div>
        
        {/* Scattered small triangles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-orange-500/20 rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-500/20 -rotate-12"></div>
        
        {/* Network lines - these are subtle lines connecting the shapes */}
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
  