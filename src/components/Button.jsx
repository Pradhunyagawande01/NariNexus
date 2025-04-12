import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500'
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 text-white hover:from-pink-600 hover:via-purple-700 hover:to-orange-600 shadow-lg hover:shadow-pink-500/20',
    secondary: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20',
    outline: 'bg-transparent border border-gradient-to-r from-pink-500 to-orange-500 text-white hover:bg-white/5',
  }
  
  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
    xl: 'text-lg px-8 py-4',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
