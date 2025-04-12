import { useState } from 'react'
import { Calendar, Users, Lightbulb, Award, MapPin, Clock } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import GeometricBackground from '../components/GeometricBackground'

const Events = () => {
  const [filter, setFilter] = useState('all')
  
  const events = [
    {
      id: 1,
      title: 'Women in Tech Summit',
      date: 'May 15, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Innovation Center, New York',
      category: 'conference',
      image: '/placeholder.svg?height=400&width=600',
      description: 'Join industry leaders for a day of inspiration, learning, and networking focused on advancing women in technology.',
      gradient: 'from-pink-500 to-purple-600',
      icon: Lightbulb
    },
    {
      id: 2,
      title: 'Entrepreneurship Workshop',
      date: 'June 8, 2023',
      time: '6:00 PM - 8:30 PM',
      location: 'Business Hub, San Francisco',
      category: 'workshop',
      image: '/placeholder.svg?height=400&width=600',
      description: 'A hands-on workshop covering business planning, funding strategies, and marketing for women entrepreneurs.',
      gradient: 'from-purple-600 to-orange-500',
      icon: Award
    },
    {
      id: 3,
      title: 'Leadership Masterclass',
      date: 'July 12, 2023',
      time: '9:00 AM - 12:00 PM',
      location: 'Executive Center, Chicago',
      category: 'workshop',
      image: '/placeholder.svg?height=400&width=600',
      description: 'Develop essential leadership skills in this intensive masterclass led by renowned women leaders.',
      gradient: 'from-orange-500 to-pink-500',
      icon: Award
    },
    {
      id: 4,
      title: 'Mentorship Matchmaking',
      date: 'July 22, 2023',
      time: '1:00 PM - 5:00 PM',
      location: 'Community Center, Boston',
      category: 'networking',
      image: '/placeholder.svg?height=400&width=600',
      description: 'Connect with potential mentors and mentees in this structured networking event designed to foster meaningful relationships.',
      gradient: 'from-pink-500 to-orange-500',
      icon: Users
    },
    {
      id: 5,
      title: 'Tech Skills Bootcamp',
      date: 'August 5-7, 2023',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Campus, Seattle',
      category: 'workshop',
      image: '/placeholder.svg?height=400&width=600',
      description: 'An intensive three-day bootcamp covering web development, data analysis, and digital marketing fundamentals.',
      gradient: 'from-purple-600 to-pink-500',
      icon: Lightbulb
    },
    {
      id: 6,
      title: 'Global Leadership Conference',
      date: 'September 18-20, 2023',
      time: 'All Day',
      location: 'Grand Convention Center, Los Angeles',
      category: 'conference',
      image: '/placeholder.svg?height=400&width=600',
      description: 'Our flagship annual conference bringing together women leaders from around the world to share insights and inspire change.',
      gradient: 'from-orange-500 to-purple-600',
      icon: Calendar
    },
  ]
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              Events & Gatherings
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect, learn, and grow with our community through a variety of events designed to inspire and empower.
            </p>
          </div>
        </div>
      </section>

      {/* Events Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={filter === 'all' ? 'primary' : 'secondary'} 
              onClick={() => setFilter('all')}
            >
              All Events
            </Button>
            <Button 
              variant={filter === 'conference' ? 'primary' : 'secondary'} 
              onClick={() => setFilter('conference')}
            >
              Conferences
            </Button>
            <Button 
              variant={filter === 'workshop' ? 'primary' : 'secondary'} 
              onClick={() => setFilter('workshop')}
            >
              Workshops
            </Button>
            <Button 
              variant={filter === 'networking' ? 'primary' : 'secondary'} 
              onClick={() => setFilter('networking')}
            >
              Networking
            </Button>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={event.image || "/placeholder.svg"} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-pink-500" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${event.gradient} text-white`}>
                    <event.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2 text-purple-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <Button to={`/events/${event.id}`} variant="secondary" size="sm" className="w-full">
                    Event Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No events found in this category. Please check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Featured Event" 
            subtitle="Don't Miss Out"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-medium mb-4">
                September 18-20, 2023
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Global Leadership Conference</h3>
              
              <p className="text-gray-300 mb-6">
                Our flagship annual conference brings together women leaders from around the world to share insights, build connections, and inspire change. With keynote speakers, panel discussions, workshops, and networking opportunities, this three-day event is the highlight of our calendar.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">20+ inspiring speakers from diverse industries</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Hands-on workshops and skill-building sessions</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Structured networking opportunities</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300">Exclusive access to industry leaders</p>
                </div>
              </div>
              
              <Button to="/events/6" size="lg">
                Register Now
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg?height=400&width=600" 
                    alt="Global Leadership Conference" 
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

      {/* Host an Event */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl p-1">
                  <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg?height=400&width=600" 
                      alt="Host an event" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/30 rounded-xl rotate-12"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-xl -rotate-12"></div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Host an Event" 
                subtitle="Partner With Us"
                titleGradient="from-orange-500 to-pink-500"
              />
              
              <p className="text-gray-300 mb-6">
                Interested in hosting a Nari-Nexus event at your organization or in your community? We collaborate with companies, educational institutions, and community groups to bring our programs to diverse audiences.
              </p>
              
              <p className="text-gray-300 mb-6">
                Our team will work with you to customize an event that meets your specific needs and objectives, whether it's a workshop, panel discussion, or networking gathering.
              </p>
              
              <Button to="/contact" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Event Calendar" 
            subtitle="Plan Ahead"
            centered={true}
          />
          
          <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 divide-y divide-gray-800">
              {events.map((event) => (
                <div key={event.id} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4">
                      <div className="bg-black/60 border border-white/10 rounded-lg p-4 text-center">
                        <div className="text-sm text-gray-400">
                          {event.date.split(' ')[0]}
                        </div>
                        <div className="text-2xl font-bold">
                          {event.date.split(' ')[1].replace(',', '')}
                        </div>
                        <div className="text-sm text-gray-400">
                          {event.date.split(' ')[2]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/4">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <Clock className="w-4 h-4 mr-2 text-purple-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/4 flex justify-end">
                      <Button to={`/events/${event.id}`} variant="secondary" size="sm">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button href="/calendar.ics" variant="secondary" size="lg">
              Download Calendar
            </Button>
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
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Subscribe to our newsletter to receive updates on upcoming events and opportunities.
            </p>
            
            <div className="max-w-md mx-auto relative z-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 bg-black/60 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <Button size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
