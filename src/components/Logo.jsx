const Logo = ({ className }) => {
    return (
      <div className={`relative ${className || 'h-12 w-12'}`}>
        <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
          <svg viewBox="0 0 100 120" className="h-3/4 w-3/4">
            <path
              d="M30 20 L30 100 L45 85 L45 35 Z"
              className="fill-orange-500"
            />
            <path
              d="M70 20 L70 100 L55 85 L55 35 Z"
              className="fill-purple-600"
            />
            <path
              d="M45 35 L55 35 L70 20 L30 20 Z"
              className="fill-pink-500"
            />
            <path
              d="M45 85 L55 85 L70 100 L30 100 Z"
              className="fill-pink-500"
            />
          </svg>
        </div>
      </div>
    )
  }
  
  export default Logo
  