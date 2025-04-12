import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    // { name: 'Events', path: '/events' },
    // { name: 'Resources', path: '/resources' },
    // { name: 'Success Stories', path: '/stories' },
    // { name: 'Our Team', path: '/team' },
    // { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
  <img src="/img/logo.png" alt="Nari-Nexus Logo" className="h-10 w-auto" />
  
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 mx-auto">
    {navLinks.map((link) => (
      <Link
        key={link.name}
        to={link.path}
        className={`text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-colors ${
          location.pathname === link.path
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500'
            : 'text-white'
        }`}
      >
        {link.name}
      </Link>
    ))}
  </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-500 transition-colors ${
                    location.pathname === link.path
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500'
                      : 'text-white'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
