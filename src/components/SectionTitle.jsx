const SectionTitle = ({ 
    title, 
    subtitle, 
    centered = false,
    titleGradient = 'from-pink-500 via-purple-600 to-orange-500',
    className = '' 
  }) => {
    return (
      <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
        {subtitle && (
          <p className="text-sm uppercase tracking-wider text-gray-400 ">
            {subtitle}
          </p>
        )}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold  text-transparent bg-clip-text bg-gradient-to-r ${titleGradient}`}>
          {title}
        </h2>
      </div>
    )
  }
  
  export default SectionTitle
  