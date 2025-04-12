import { Linkedin, Twitter, Mail, Users, Heart, Globe, Target, TrendingUp, Shield } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import GeometricBackground from '../components/GeometricBackground'

const Team = () => {
  const leadershipTeam = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Co-Founder & CEO',
      bio: 'With over 15 years of experience in technology and leadership, Sarah is passionate about creating opportunities for women in tech and business.',
      image: '/placeholder.svg?height=300&width=300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@narinexus.org'
      }
    },
    {
      id: 2,
      name: 'Maya Patel',
      role: 'Co-Founder & COO',
      bio: 'Maya brings her expertise in operations and community building to ensure Nari-Nexus programs deliver maximum impact for participants.',
      image: '/placeholder.svg?height=300&width=300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maya@narinexus.org'
      }
    },
    {
      id: 3,
      name: 'Aisha Rodriguez',
      role: 'Chief Program Officer',
      bio: 'Aisha oversees all educational and development programs, bringing her background in curriculum design and adult learning.',
      image: '/placeholder.svg?height=300&width=300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'aisha@narinexus.org'
      }
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      bio: 'Priya leads our technology initiatives and digital transformation efforts, with a focus on making tech skills accessible to all women.',
      image: '/placeholder.svg?height=300&width=300',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya@narinexus.org'
      }
    }
  ]
  
  const teamMembers = [
    {
      id: 1,
      name: 'Jennifer Lee',
      role: 'Program Director',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 2,
      name: 'Sophia Chen',
      role: 'Community Manager',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 3,
      name: 'Olivia Wilson',
      role: 'Events Coordinator',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 4,
      name: 'Emma Davis',
      role: 'Marketing Specialist',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 5,
      name: 'Zoe Martinez',
      role: 'Curriculum Developer',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 6,
      name: 'Leila Patel',
      role: 'Partnerships Manager',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 7,
      name: 'Amara Johnson',
      role: 'Finance Director',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      id: 8,
      name: 'Tara Williams',
      role: 'Research Analyst',
      image: '/placeholder.svg?height=300&width=300'
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
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Leadership Team" 
            subtitle="Guiding Our Vision"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {leadershipTeam.map((member) => (
              <div key={member.id} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-white transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Our Values" 
            subtitle="What Drives Us"
            centered={true}
            titleGradient="from-orange-500 to-pink-500"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Empathy</h3>
              <p className="text-gray-300">We lead with compassion and understanding, recognizing the diverse experiences and challenges of women everywhere.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusion</h3>
              <p className="text-gray-300">We celebrate diversity and create spaces where all women feel welcome, valued, and empowered to contribute.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-300">We believe in the power of connection and collective action to drive meaningful change in society.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-300">We strive for the highest standards in all our programs and initiatives, empowering women to reach their full potential.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">We embrace creativity and forward-thinking approaches to address complex challenges facing women today.</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-300">We operate with transparency, accountability, and a deep commitment to ethical practices in all our endeavors.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Team" 
            subtitle="The People Behind Nari-Nexus"
            centered={true}
          />
          
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
                  <p className="text-purple-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Join Our Team" 
                subtitle="Work With Purpose"
                titleGradient="from-pink-500 to-purple-600"
              />
              
              <p className="text-gray-300 mb-6">
                We're always looking for passionate individuals who share our vision of empowering women and creating positive change in the world.
              </p>
              
              <p className="text-gray-300 mb-6">
                Working at Nari-Nexus means being part of a dynamic, diverse team dedicated to making a difference in the lives of women globally.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Meaningful work with real impact</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Collaborative, inclusive culture</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Opportunities for growth and development</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Flexible work arrangements</p>
                </div>
              </div>
              
              <Button to="/careers" size="lg">
                View Open Positions
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Join our team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
               
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500/30 rounded-xl -rotate-12"></div>
              
            </div>
          </div>
        </div>
      </section> */}

      {/* Advisors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Advisors" 
            subtitle="Expert Guidance"
            centered={true}
            titleGradient="from-purple-600 to-orange-500"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                    <img 
                      src="/placeholder.svg?height=100&width=100" 
                      alt="Advisor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Rebecca Chen</h3>
                    <p className="text-purple-400">Technology Innovation Expert</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  With over 20 years of experience in technology innovation and leadership, Dr. Chen provides strategic guidance on our tech education initiatives.
                </p>
                
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-12 text-center relative overflow-hidden">
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rotate-45"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rotate-12"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Connect With Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Have questions or want to learn more about our work? We'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button to="/contact" size="xl">
                Contact Us
              </Button>
              <Button to="/events" variant="secondary" size="xl">
                Attend an Event
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
