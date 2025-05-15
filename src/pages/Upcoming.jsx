import React, { useEffect, useRef, useState } from "react";
import { Calendar, Lightbulb, Target, Sparkles, BookOpen, Globe, MapPin, Clock, User, ChevronRight } from "lucide-react";

// Component for section titles (using inline definition since the import isn't available in this context)
const SectionTitle = ({ title, centered }) => (
  <h2 className={`text-4xl font-bold ${centered ? "text-center" : ""}`}>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
      {title}
    </span>
  </h2>
);

const Upcoming = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // This would be the GSAP animation logic in a real implementation
    // For this example, we're focusing on the component structure
  }, []);

  const events = [
    {
      id: 1,
      title: "Pixel Art Contest",
      date: "16th May 2025",
      // time: "6:00 PM - 9:00 PM",
      location: "Virtual Event",
      desc: "Show off your pixel art skills and compete for prizes in this fun community contest.",
      icon: <Calendar className="w-8 h-8" />,
      colors: "from-pink-500 to-purple-600",
      // capacity: "120/150 Registered",
      tags: ["Design", "Competition", "Community"],
      registerLink: "https://lu.ma/zhk2e7ps"
    },
    {
      id: 2,
      title: "Idea to MVP Workshop",
      date: "17th May 2025",
      // time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      desc: "Learn how to transform your ideas into viable products with expert guidance.",
      icon: <Lightbulb className="w-8 h-8" />,
      colors: "from-purple-600 to-blue-500",
      // capacity: "45/50 Registered",
      tags: ["Workshop", "Startup", "Business"],
      registerLink: "https://lu.ma/jkovsn5c"
    },
    {
      id: 3,
      title: "Skribbl Game Night",
      date: "23rd May 2025",
      // time: "7:00 PM - 10:00 PM",
      location: "Virtual Event",
      desc: "Join our multiplayer drawing and guessing game for a fun-filled evening.",
      icon: <Target className="w-8 h-8" />,
      colors: "from-orange-500 to-pink-500",
      // capacity: "78/100 Registered",
      tags: ["Gaming", "Social", "Fun"],
      registerLink: "https://lu.ma/8cai0u6z"
    },
    {
      id: 4,
      title: "Kick-Off (Hack4Brahma)",
      date: "25th May 2025",
      // time: "9:00 AM - 11:00 AM",
      location: "Virtual Event",
      desc: "Launch of our annual hackathon with exciting challenges and prizes.",
      icon: <Sparkles className="w-8 h-8" />,
      colors: "from-blue-500 to-cyan-400",
      // capacity: "156/200 Registered",
      tags: ["Hackathon", "Coding", "Innovation"],
      registerLink: ""
    },
    {
      id: 5,
      title: "Women Who Code, Lead & Inspire",
      date: "7th June 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Coming Soon",
      desc: "A networking and mentorship event celebrating women in technology.",
      icon: <BookOpen className="w-8 h-8" />,
      colors: "from-purple-600 to-pink-500",
      // capacity: "85/100 Registered",
      tags: ["Diversity", "Networking", "Career"],
      registerLink: ""
    },
    {
      id: 6,
      title: "Free Fire Tournament",
      date: "13th June 2025",
      time: "6:00 PM - 9:00 PM",
      location: "eSports Arena",
      desc: "Compete in teams of four in our exciting Free Fire mobile game tournament.",
      icon: <Globe className="w-8 h-8" />,
      colors: "from-gray-700 to-gray-900",
      // capacity: "64/80 Registered",
      tags: ["Gaming", "Tournament", "Team"],
      registerLink: ""
    },
  ];

  const handleRegister = (eventId, registerLink) => {
    // This would handle the registration process
    console.log(`Redirecting to registration page for event ${eventId}: ${registerLink}`);
    // In a real implementation, this would navigate to the registration URL
    window.location.href = registerLink;
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Abstract Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-60 h-60 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      {/* Section content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="animate-title mb-4">
            <SectionTitle title="Upcoming Events" centered={true} />
          </div>
          <p className="animate-title text-xl text-gray-300 mt-4 bg-white/5 p-6 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
            Discover exciting opportunities to learn, network, and grow with our community events. 
            <span className="block mt-2 text-purple-300">Register now as spots are limited!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-card relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden group border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Event header with gradient */}
              <div className={`h-3 bg-gradient-to-r ${event.colors}`}></div>
              
              <div className="p-6">
                {/* Top info area */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${event.colors} text-white`}>
                    {event.icon}
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                      {event.capacity}
                    </span>
                  </div>
                </div>
                
                {/* Event content */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {event.desc}
                </p>
                
                {/* Event details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  {/* <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div> */}
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
              
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-xs py-1 px-2 bg-white/5 rounded-md border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              
                <button 
                  onClick={() => handleRegister(event.id, event.registerLink)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${event.colors} opacity-90 hover:opacity-100 transform hover:translate-y-[-2px] hover:shadow-lg`}
                >
                  <User className="w-4 h-4" />
                  <span>Register Now</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === event.id ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;