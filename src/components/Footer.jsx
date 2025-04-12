import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Geometric shapes decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden z-0 opacity-30">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-600 rotate-45"></div>
        <div className="absolute -bottom-5 left-1/4 w-20 h-20 bg-orange-500 rotate-12"></div>
        <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-purple-600 -rotate-12"></div>
        <div className="absolute -bottom-10 right-10 w-36 h-36 bg-pink-500 rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">Nari-Nexus</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sanyoge Shaktih Navonnati Margah<br />
              In Connection, There Is Strength<br />
              In Innovation, There Is Progress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/program" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              {/* <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Events</Link></li> */}
              {/* <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li> */}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Leadership Development</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Entrepreneurship</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Tech Skills Training</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Mentorship</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Community Outreach</Link></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Contact Us</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-pink-500" />
                <span className="text-gray-300">123 Empowerment Street, Innovation City, 10001</span>
              </li> */}
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-500" />
                <span className="text-gray-300">+91 7776955168</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-500" />
                <span className="text-gray-300">narinexusofficial@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nari-Nexus. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
