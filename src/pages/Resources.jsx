import { BookOpen, FileText, Video, Download, ExternalLink, Search } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import GeometricBackground from '../components/GeometricBackground'

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: 'Leadership Development Guide',
      description: 'A comprehensive guide to developing essential leadership skills for women in various industries.',
      type: 'guide',
      icon: FileText,
      link: '#',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Entrepreneurship Toolkit',
      description: 'Everything you need to know about starting and scaling a successful business as a woman entrepreneur.',
      type: 'toolkit',
      icon: BookOpen,
      link: '#',
      gradient: 'from-purple-600 to-orange-500'
    },
    {
      id: 3,
      title: 'Tech Skills Roadmap',
      description: 'A structured learning path for women looking to develop in-demand technical skills.',
      type: 'guide',
      icon: FileText,
      link: '#',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Negotiation Masterclass',
      description: 'Learn effective negotiation strategies to advocate for yourself in professional settings.',
      type: 'video',
      icon: Video,
      link: '#',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Funding Opportunities Database',
      description: 'A curated list of grants, investments, and funding sources specifically for women-led ventures.',
      type: 'database',
      icon: BookOpen,
      link: '#',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 6,
      title: 'Mentorship Best Practices',
      description: 'Guidelines for both mentors and mentees to build effective and rewarding mentorship relationships.',
      type: 'guide',
      icon: FileText,
      link: '#',
      gradient: 'from-orange-500 to-purple-600'
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
              Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access tools, guides, and materials to support your personal and professional growth.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="w-full px-4 py-3 pl-12 bg-black/60 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Resources" 
            subtitle="Tools for Success"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${resource.gradient} text-white`}>
                  <resource.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span className="inline-block px-2 py-1 bg-white/10 rounded-full">
                    {resource.type}
                  </span>
                </div>
                
                <Button href={resource.link} variant="secondary" size="sm" className="w-full">
                  {resource.type === 'guide' || resource.type === 'toolkit' ? (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Access
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Resource Categories" 
            subtitle="Browse by Topic"
            centered={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Leadership</h3>
              <p className="text-sm text-gray-400">12 resources</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Entrepreneurship</h3>
              <p className="text-sm text-gray-400">18 resources</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Tech Skills</h3>
              <p className="text-sm text-gray-400">15 resources</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Career Growth</h3>
              <p className="text-sm text-gray-400">10 resources</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Mentorship</h3>
              <p className="text-sm text-gray-400">8 resources</p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Funding</h3>
              <p className="text-sm text-gray-400">14 resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Learning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="E-Learning Courses" 
            subtitle="Learn at Your Own Pace"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6">
                Our self-paced online courses allow you to develop essential skills on your own schedule. Each course includes video lessons, interactive exercises, and assessments to ensure you're mastering the material.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Leadership Fundamentals (8 modules)</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Business Plan Development (6 modules)</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Coding for Beginners (10 modules)</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Effective Negotiation (5 modules)</p>
                </div>
              </div>
              
              <Button to="/courses" size="lg">
                Browse Courses
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="E-Learning Courses" 
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

      {/* Resource Library */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Resource Library" 
            subtitle="Knowledge at Your Fingertips"
          />
          
          <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 divide-y divide-gray-800">
              <div className="py-6 first:pt-0">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-4/6">
                    <h3 className="text-xl font-bold mb-2">Women in Leadership: Breaking Barriers</h3>
                    <p className="text-gray-300">A research report on the challenges and opportunities for women in leadership positions.</p>
                  </div>
                  
                  <div className="md:w-1/6 flex justify-end">
                    <Button href="#" variant="secondary" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="py-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-4/6">
                    <h3 className="text-xl font-bold mb-2">Funding Your Startup: A Guide for Women Entrepreneurs</h3>
                    <p className="text-gray-300">A video series on navigating the funding landscape as a woman entrepreneur.</p>
                  </div>
                  
                  <div className="md:w-1/6 flex justify-end">
                    <Button href="#" variant="secondary" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="py-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-4/6">
                    <h3 className="text-xl font-bold mb-2">Tech Industry Salary Negotiation Toolkit</h3>
                    <p className="text-gray-300">Templates, scripts, and strategies for negotiating competitive compensation in tech.</p>
                  </div>
                  
                  <div className="md:w-1/6 flex justify-end">
                    <Button href="#" variant="secondary" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      ZIP
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="py-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-4/6">
                    <h3 className="text-xl font-bold mb-2">Mentorship Program Handbook</h3>
                    <p className="text-gray-300">A comprehensive guide for both mentors and mentees in our mentorship program.</p>
                  </div>
                  
                  <div className="md:w-1/6 flex justify-end">
                    <Button href="#" variant="secondary" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button to="/library" variant="secondary">
                View Full Library
              </Button>
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
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Contribute to Our Resources</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Have expertise to share? We welcome contributions from our community members to expand our resource library.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button to="/contribute" size="xl">
                Submit a Resource
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

export default Resources
