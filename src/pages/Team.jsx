import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Contact from "./Contact";
import GeometricBackground from "../components/GeometricBackground";

// Simplified RippleEffect that doesn't rely on GSAP
const RippleEffect = ({ color = "rgba(169, 31, 176, 0.3)" }) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Add a new ripple
      const newRipple = {
        id: Date.now(),
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove the ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 4000);
    }, 1000);
    
    // Create initial ripples
    for (let i = 0; i < 3; i++) {
      const initialRipple = {
        id: Date.now() + i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setRipples(prev => [...prev, initialRipple]);
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-full pointer-events-none z-0">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full animate-ripple"
          style={{
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

const Team = () => {
  // No ScrollTrigger dependency, just use React's built-in mechanisms
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simple visibility effect on component mount
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Kritika",
      // role: 'CEO',
      image: "/img/Kritika.jpg",
      socials: {
        instagram: "https://instagram.com/kritika",
        linkedin:
          "https://www.linkedin.com/in/kritika-rukhiyana-65a28a307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        // github: 'https://github.com/kritika',
        x: "https://x.com/Kritika8924?t=6tOtPfq0k3Oek4jRnHd7lA&s=09",
      },
    },
    {
      id: 2,
      name: "Sujal",
      // role: 'Community Manager',
      image: "/img/Sujal.jpg",
      socials: {
        // instagram: 'https://instagram.com/kritika',
        linkedin: "https://www.linkedin.com/in/sujal-khade-2823a32a6/",
        github: "https://github.com/codetechie43",
        x: "https://x.com/CodeTechie43?t=s9J0-cmid0UXHVk0lMSx7w&s=09",
      },
    },
    {
      id: 3,
      name: "Sunidhi",
      // role: 'Events Coordinator',
      image: "/img/Sunidhi.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/sunidhi_vj?igsh=MWs1NHY1N3F6bXRibg==",
        linkedin:
          "https://www.linkedin.com/in/sunidhi-haware-797a97323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Sunidhi369",
        x: "https://x.com/Sunidhi_vj?t=2MmYce2G-HyQkYoK8JsySA&s=09",
      },
    },
    {
      id: 4,
      name: "Pradhumnya",
      // role: 'Marketing Specialist',
      image: "/img/Pradhumnya.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/pradhyumnya_patil?igsh=bDZycHdvaDA3cW5y",
        linkedin:
          "https://www.linkedin.com/in/pradhunya-gawande?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Pradhunyagawande01",
        x: "https://x.com/pradhunya_patil?t=L4Hdd1swX6FwBKRjeXijFA&s=09",
      },
    },
    {
      id: 5,
      name: "Rishu",
      // role: 'Curriculum Developer',
      image: "/img/Rishu.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/rishukr.singh?igsh=Z3R1YTdrMmpkY2Vn",
        linkedin:
          "https://www.linkedin.com/in/rishukrsingh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        // github: 'https://github.com/kritika',
        x: "https://x.com/rishuksingh?t=FRpP6_CCCchZrxGNPCvNFw&s=09",
      },
    },
    {
      id: 6,
      name: "Pranav",
      // role: 'Partnerships Manager',
      image: "/img/Pranav.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/prana_v.18_?igsh=MTlxeG82b3d3Y2p1dw==",
        linkedin:
          "https://www.linkedin.com/in/pranav-tekade-57b5a2320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Praanav-cpu",
        x: "https://x.com/prana_v_18?t=ma7bF2zY4xCl5AZkK7S0Ow&s=09",
      },
    },
    {
      id: 7,
      name: "Ayush",
      // role: 'Finance Director',
      image: "/img/Bawli.jpg",
      socials: {
        instagram:
          "https://www.instagram.com/ayushthakre__?igsh=cGduOGl2eW1va21x",
        linkedin:
          "https://www.linkedin.com/in/ayush-thakre-096558294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/ThakreAyush",
        x: "https://x.com/ayushthakre__?t=MNVpG2thzv5Y0u7JFzFZNQ&s=09",
      },
    },
    {
      id: 8,
      name: "Akshay",
      // role: 'Research Analyst',
      image: "/img/Akshay.jpg",
      socials: {
        instagram: "https://www.instagram.com/its_gangasagar05",
        linkedin: "https://www.linkedin.com/in/akshay-gangasagar-67b25b305/",
        github: "https://github.com/Akkhi05",
        // x: "https://twitter.com/kritika",
      },
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section id="team" className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Our Team
            </h1>
            <p
              className={`text-xl text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              Meet the passionate individuals behind Nari-Nexus who are
              dedicated to empowering women and creating positive change.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div
            className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`relative bg-transparent backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_25px_rgba(169,31,176,0.5)] hover:border-pink-500/50 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex flex-col items-center p-8 relative z-10">
                  {/* Circle frame with ripple effect */}
                  <div className="relative w-48 h-48 rounded-full bg-[#a91fb04d] flex items-center justify-center mb-8 shadow-lg overflow-hidden">
                    <RippleEffect color="rgba(169, 31, 176, 0.3)" />
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-44 h-44 rounded-full object-cover relative z-10"
                    />
                  </div>

                  {/* Member Name & Role */}
                  <h3 className="text-2xl font-bold text-center text-white group-hover:text-pink-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-md text-center text-gray-200 mt-2">
                    {member.role}
                  </p>

                  {/* Socials */}
                  <div className="flex justify-center gap-5 mt-5 text-white text-2xl">
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-125 transition-transform duration-300"
                      >
                        <FaInstagram className="hover:text-pink-500 transition" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-125 transition-transform duration-300"
                      >
                        <FaLinkedin className="hover:text-blue-400 transition" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-125 transition-transform duration-300"
                      >
                        <FaGithub className="hover:text-gray-400 transition" />
                      </a>
                    )}
                    {member.socials.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-125 transition-transform duration-300"
                      >
                        <FaXTwitter className="hover:text-blue-300 transition" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        .animate-ripple {
          animation: ripple 4s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Team;