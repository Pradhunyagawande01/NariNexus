import { Linkedin, Twitter, Mail } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import GeometricBackground from '../components/GeometricBackground'

const Team = () => {
   
  const teamMembers = [
    {
      id: 1,
      name: 'Kritika',
      role: 'CEO',
      image: '/img/Kritika.jpg',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 2,
      name: 'Sujal',
      role: 'Community Manager',
      image: '/img/Sujal.jpg',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 3,
      name: 'Sunidhi',
      role: 'Events Coordinator',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 4,
      name: 'Pradhumnya',
      role: 'Marketing Specialist',
      image: '/img/Pradhumnya.jpg',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 5,
      name: 'Rishu',
      role: 'Curriculum Developer',
      image: '/img/Rishu.jpg',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 6,
      name: 'Pranav',
      role: 'Partnerships Manager',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 7,
      name: 'Ayush',
      role: 'Finance Director',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      id: 8,
      name: 'Akshay',
      role: 'Research Analyst',
      image: '/placeholder.svg?height=300&width=300',
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Meet the passionate individuals behind Nari-Nexus who are dedicated to empowering women and creating positive change.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-4">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 text-gray-400">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5 hover:text-white transition-colors" />
                    </a>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-5 h-5 hover:text-white transition-colors" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
