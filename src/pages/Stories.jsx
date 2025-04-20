import { Quote, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import GeometricBackground from '../components/GeometricBackground'

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Tech Entrepreneur',
      image: '/placeholder.svg?height=300&width=300',
      quote: 'Nari-Nexus transformed my career trajectory. The leadership program gave me the confidence to pursue my goals and the network to make them happen.',
      story: 'After 10 years in corporate tech, I knew I wanted to start my own company but lacked the confidence and connections. The Nari-Nexus leadership program connected me with mentors who had walked this path before and provided a structured framework for developing my business idea. Today, my company employs 15 people and serves clients globally.',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      name: 'Aisha Johnson',
      role: 'Software Engineer',
      image: '/placeholder.svg?height=300&width=300',
      quote: 'The mentorship I received through Nari-Nexus was invaluable. My mentor helped me navigate challenges and seize opportunities I never thought possible.',
      story: 'I was working in customer service but had always been interested in coding. Through the Nari-Nexus tech skills program, I completed a web development bootcamp and was paired with a mentor who guided me through my job search. Within six months, I landed my first role as a junior developer, and three years later, I\'m now a senior software engineer leading a team.',
      gradient: 'from-purple-600 to-orange-500'
    },
    {
      id: 3,
      name: 'Maya Patel',
      role: 'Founder & CEO',
      image: '/placeholder.svg?height=300&width=300',
      quote: 'From a small idea to a thriving business, Nari-Nexus supported me every step of the way with resources, connections, and encouragement.',
      story: 'I had a passion for sustainable fashion but no business background. The Nari-Nexus entrepreneurship program helped me develop a business plan, secure seed funding, and connect with manufacturers who shared my values. Today, my company is not only profitable but has also been recognized for its environmental and social impact.',
      gradient: 'from-orange-500 to-pink-500'
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real women, real transformations. Discover how Nari-Nexus has empowered women to achieve their goals and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Stories" 
            subtitle="Inspiring Journeys"
            centered={true}
          />
          
          <div className="space-y-20 mt-12">
            {stories.map((story, index) => (
              <div key={story.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-medium mb-4">
                    Success Story
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{story.name}</h3>
                  <p className="text-purple-400 mb-6">{story.role}</p>
                  
                  <div className="relative mb-6 pl-6 border-l-2 border-purple-500">
                    <Quote className="text-purple-500 w-8 h-8 absolute -left-4 -top-4" />
                    <p className="text-xl italic text-gray-300">{story.quote}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-8">
                    {story.story}
                  </p>
                  
                  <Button to={`/stories/${story.id}`} size="lg">
                    Read Full Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative">
                    <div className={`aspect-square max-w-md mx-auto bg-gradient-to-br ${story.gradient} rounded-2xl p-1`}>
                      <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                        <img 
                          src={story.image || "/placeholder.svg"} 
                          alt={story.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-xl rotate-12"></div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500/30 rounded-xl -rotate-12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Stories */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="More Success Stories" 
            subtitle="Voices of Empowerment"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative group hover:border-white/20 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500"></div>
                
                <Quote className="text-purple-500/30 w-12 h-12 absolute top-4 right-4" />
                
                <div className="pt-6">
                  <p className="text-gray-300 italic mb-6">
                    "The community I found through Nari-Nexus has been life-changing. I've made connections that have turned into collaborations, friendships, and opportunities I never imagined possible."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                      <img src="/placeholder.svg?height=100&width=100" alt="Testimonial" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">Sarah Williams</h4>
                      <p className="text-sm text-gray-400">Digital Marketing Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/stories/all" variant="secondary" size="lg">
              View All Stories
            </Button>
          </div>
        </div>
      </section> */}

      {/* Video Stories */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Video Stories" 
            subtitle="Watch & Be Inspired"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="/placeholder.svg?height=300&width=500" 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">From Corporate to Startup: My Journey</h3>
                  <p className="text-gray-300 mb-4">
                    Lisa Chen shares how she transitioned from a corporate career to founding her own tech startup with support from Nari-Nexus.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>5:42</span>
                    <span className="mx-2">•</span>
                    <span>1.2K views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/stories/videos" variant="secondary" size="lg">
              Watch More Videos
            </Button>
          </div>
        </div>
      </section> */}

      {/* Share Your Story */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Share Your Story" 
                subtitle="Be an Inspiration"
                titleGradient="from-pink-500 to-orange-500"
              />
              
              <p className="text-gray-300 mb-6">
                Has Nari-Nexus made a difference in your life? We'd love to hear about your journey and share it with our community to inspire others.
              </p>
              
              <p className="text-gray-300 mb-8">
                Whether you've participated in our programs, attended our events, or utilized our resources, your story matters and can motivate other women to take the next step in their own journeys.
              </p>
              
              <Button to="/share-story" size="lg">
                Submit Your Story
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Share your story" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500/30 rounded-xl -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Impact" 
            subtitle="By the Numbers"
            centered={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">10,000+</h3>
              <p className="text-gray-300">Women Empowered</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 mb-2">500+</h3>
              <p className="text-gray-300">Successful Startups</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">85%</h3>
              <p className="text-gray-300">Career Advancement</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-2">30+</h3>
              <p className="text-gray-300">Global Chapters</p>
            </div>
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
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Start Your Own Success Story</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Join our community today and take the first step toward writing your own success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button to="/programs" size="xl">
                Explore Programs
              </Button>
              <Button to="/contact" variant="secondary" size="xl">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stories
