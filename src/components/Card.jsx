const Card = ({ 
    title, 
    description, 
    icon: Icon, 
    gradient = 'from-pink-500 to-purple-600',
    className = '' 
  }) => {
    return (
      <div className={`relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 overflow-hidden group hover:border-white/20 transition-all duration-300 ${className}`}>
        {/* Gradient hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Icon with gradient background */}
        {Icon && (
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${gradient} text-white`}>
            <Icon size={24} />
          </div>
        )}
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    )
  }
  
  export default Card
  