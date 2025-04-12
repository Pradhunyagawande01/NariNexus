import { useState, useEffect } from 'react'
import { ArrowRight, Users, Lightbulb, Award, Sparkles, Calendar, BookOpen } from 'lucide-react'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import TestimonialCard from '../components/TestimonialCard'
import GeometricBackground from '../components/GeometricBackground'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <GeometricBackground className="opacity-50" />
        
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
                  Empowering Women,
                </span>
                <br />
                Inspiring Futures
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Sanyoge Shaktih Navonnati Margah<br />
                In Connection, There Is Strength<br />
                In Innovation, There Is Progress.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button to="/programs" size="lg">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button to="/about" variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-white flex items-center justify-center">
  <img src="/img/logo.png" alt="Centered Image" className="  object-contain rounded-full" />
</div>

                {/* <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center w-full">
                  <p className="text-lg font-semibold">Together We Rise</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
          <p className="text-sm text-gray-400 mt-2">Scroll Down</p>
        </div> */}
      </section>

      {/* Mission Section */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Mission" 
            subtitle="Why We Exist"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Nari-Nexus is dedicated to empowering women through education, community, and innovation. 
              We create spaces where women can connect, learn, and grow together, breaking barriers and 
              building a more equitable future for all.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-300">Building strong networks of support and collaboration</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-300">Fostering creative solutions to complex challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Leadership</h3>
                <p className="text-gray-300">Developing the next generation of visionary leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      {/* <section className="py-20 relative bg-gradient-to-b from-black to-purple-900/20">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Our Programs" 
            subtitle="How We Empower"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Leadership Development" 
              description="Comprehensive training programs designed to nurture leadership skills and confidence in women across various sectors."
              icon={Award}
              gradient="from-pink-500 to-purple-600"
            />
            
            <Card 
              title="Entrepreneurship" 
              description="Resources, mentorship, and funding opportunities for women entrepreneurs to launch and scale their businesses."
              icon={Sparkles}
              gradient="from-purple-600 to-orange-500"
            />
            
            <Card 
              title="Tech Skills Training" 
              description="Hands-on workshops and courses in coding, digital marketing, and other in-demand tech skills."
              icon={Lightbulb}
              gradient="from-orange-500 to-pink-500"
            />
            
            <Card 
              title="Mentorship Program" 
              description="Connecting experienced professionals with emerging talents for personalized guidance and support."
              icon={Users}
              gradient="from-pink-500 to-orange-500"
            />
            
            <Card 
              title="Networking Events" 
              description="Regular gatherings that facilitate meaningful connections and collaborative opportunities."
              icon={Calendar}
              gradient="from-purple-600 to-pink-500"
            />
            
            <Card 
              title="Educational Resources" 
              description="Access to a wealth of learning materials, research, and tools for continuous personal and professional growth."
              icon={BookOpen}
              gradient="from-orange-500 to-purple-600"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button to="/" size="lg">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Success Stories" 
            subtitle="Voices of Empowerment"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Nari-Nexus transformed my career trajectory. The leadership program gave me the confidence to pursue my goals and the network to make them happen."
              author="Priya Sharma"
              role="Tech Entrepreneur"
              image="/placeholder.svg?height=200&width=200"
            />
            
            <TestimonialCard 
              quote="The mentorship I received through Nari-Nexus was invaluable. My mentor helped me navigate challenges and seize opportunities I never thought possible."
              author="Aisha Johnson"
              role="Software Engineer"
              image="/placeholder.svg?height=200&width=200"
            />
            
            <TestimonialCard 
              quote="From a small idea to a thriving business, Nari-Nexus supported me every step of the way with resources, connections, and encouragement."
              author="Maya Patel"
              role="Founder & CEO"
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button to="/" variant="secondary" size="lg">
              Read More Stories
            </Button>
          </div>
        </div>
      </section> */}  

      {/* Events Section */}
      {/* <section className="py-20 relative bg-gradient-to-b from-black to-purple-900/20">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Join Us"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                  <p className="text-sm font-medium">May 15, 2023 • 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Women in Tech Summit</h3>
                <p className="text-gray-300 mb-4">Join industry leaders for a day of inspiration, learning, and networking focused on advancing women in technology.</p>
                <Button to="/events" variant="secondary" size="sm">Learn More</Button>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-orange-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lightbulb className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                  <p className="text-sm font-medium">June 8, 2023 • 6:00 PM - 8:30 PM</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Entrepreneurship Workshop</h3>
                <p className="text-gray-300 mb-4">A hands-on workshop covering business planning, funding strategies, and marketing for women entrepreneurs.</p>
                <Button to="/events" variant="secondary" size="sm">Learn More</Button>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                  <p className="text-sm font-medium">July 22, 2023 • 1:00 PM - 5:00 PM</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mentorship Matchmaking</h3>
                <p className="text-gray-300 mb-4">Connect with potential mentors and mentees in this structured networking event designed to foster meaningful relationships.</p>
                <Button to="/events" variant="secondary" size="sm">Learn More</Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button to="/" size="lg">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-12 text-center relative overflow-hidden">
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rotate-45"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rotate-12"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Join Our Community Today</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Connect with like-minded women, access exclusive resources, and be part of a movement that's changing the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button to="/" size="xl">
                Get Started
              </Button>
              <Button to="/" variant="secondary" size="xl">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
