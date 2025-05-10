import { useEffect, useRef } from 'react';
import { Award, Lightbulb, Users, Sparkles, Calendar, BookOpen, Target, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import TestimonialCard from '../components/TestimonialCard';
import GeometricBackground from '../components/GeometricBackground';
import GeometricBackground2 from '../components/GeometricBackground2';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // X icon
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  // Create refs for animated sections
  const heroRef = useRef(null);
  const kickoffRef = useRef(null);
  const leadersRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const eventCardsRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    // Initialize all animations
    const initAnimations = () => {
      // Hero section fade in
      gsap.from(heroRef.current.querySelectorAll('.animate-hero'), {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "center 70%",
          toggleActions: "play none none reset"
        }
      });

      // Kick-off section animation
      gsap.from(kickoffRef.current.querySelectorAll('.animate-title'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: kickoffRef.current,
          start: "top 75%",
          toggleActions: "play none none reset"
        }
      });

      // Leaders profile animations with circular reveal
      const leaders = leadersRef.current.querySelectorAll('.leader-profile');
      leaders.forEach((leader, index) => {
        // Profile picture animation
        gsap.from(leader.querySelector('.profile-pic'), {
          scale: 0.5,
          opacity: 0,
          rotation: index % 2 === 0 ? -10 : 10,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: leader,
            start: "top 80%",
            toggleActions: "play none none reset"
          }
        });

        // Leader details animation
        gsap.from(leader.querySelectorAll('.leader-details'), {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leader,
            start: "top 80%",
            toggleActions: "play none none reset"
          }
        });

        // Social icons animation
        gsap.from(leader.querySelectorAll('.social-icon'), {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          delay: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: leader,
            start: "top 80%",
            toggleActions: "play none none reset"
          }
        });
      });

      // Description paragraph animation
      gsap.from(leadersRef.current.querySelector('.description'), {
        x: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leadersRef.current,
          start: "top 70%",
          toggleActions: "play none none reset"
        }
      });

      // Upcoming events title animation
      gsap.from(upcomingEventsRef.current.querySelector('.animate-title'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: upcomingEventsRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });

      // Event cards animation with staggered effect
      const eventCards = eventCardsRef.current.querySelectorAll('.event-card');
      gsap.from(eventCards, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eventCardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reset"
        }
      });

      // Event cards hover effect
      eventCards.forEach(card => {
        // Animated gradient background on hover
        card.addEventListener('mouseenter', () => {
          gsap.to(card.querySelector('.h-48'), {
            backgroundPosition: '100% 50%',
            duration: 1
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.h-48'), {
            backgroundPosition: '0% 50%',
            duration: 1
          });
        });
      });

      // Testimonial section animation
      gsap.from(testimonialRef.current.querySelector('.animate-title'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });

      // Testimonial cards animation
      gsap.from(testimonialRef.current.querySelectorAll('.testimonial-item'), {
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialRef.current.querySelector('.testimonial-container'),
          start: "top 75%",
          toggleActions: "play none none reset"
        }
      });

      // Create floating animation for decorative elements
      const floatingAnimation = (target, amplitude) => {
        gsap.to(target, {
          y: amplitude,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random()
        });
      };

      // Apply floating animation to geometric backgrounds
      document.querySelectorAll('.geometric-float').forEach(element => {
        floatingAnimation(element, 15);
      });
    };

    // Initialize animations with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-16">
        <GeometricBackground className="opacity-30 geometric-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-hero">
              <SectionTitle title="Our Programs" centered={true} />
            </div>
            <p className="animate-hero text-xl text-gray-300 mb-8 bg-black/30 p-4 backdrop-blur-sm rounded-lg">
              Comprehensive initiatives designed to empower women at every stage of their personal and professional journey.
            </p>
          </div>
        </div>

        {/* Leadership Programs */}
        <div ref={kickoffRef} className="container mx-auto px-4 text-center mt-16">
          <GeometricBackground2 className="opacity-40 geometric-float" />
          <div className="animate-title">
            <SectionTitle 
              title="Hack4Maha KickOff Session" 
              subtitle="Building Tomorrow's Leaders"
              titleGradient="from-pink-500 to-purple-600"
            />
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 mb-12 bg-black/30 p-4 backdrop-blur-sm rounded-lg">
            Our programs empower women to become confident, inclusive, and visionary leaders through mentorship, hands-on training, and strategic development.
          </p>

          <div ref={leadersRef} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
            {/* Left Leader Profile - Updated with container */}
            <div className="leader-profile flex flex-col items-center max-w-xs">
              <div className="relative group">
                <img 
                  src="/img/Swati.jpeg" 
                  alt="Leader" 
                  className="profile-pic w-56 h-56 rounded-full object-cover border-4 border-purple-600 shadow-lg"
                />
                <div className="absolute -bottom-2 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 mt-4 w-full">
                <h3 className="leader-details text-white text-xl font-semibold">Swati Awasthi</h3>
                <p className="leader-details text-gray-300 text-sm">Founder, Women in Product India</p>

                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://www.instagram.com/awasthiswati/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                    <FaInstagram className="social-icon text-white text-xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/swati-awasthi" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                    <FaLinkedin className="social-icon text-white text-xl" />
                  </a>
                  <a href="https://x.com/swatiawasthi08" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                    <SiX className="social-icon text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Paragraph Content - With container box */}
            <div className="description text-gray-300 max-w-lg">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
                <p className="leading-relaxed">
                  Our leadership development initiatives focus on creating a supportive environment where women can learn from each other and gain the skills to lead effectively. These programs are designed to foster a community of strong, confident leaders who can excel in both personal and professional spheres.
                </p>
              </div>
            </div>

            {/* Right Leader Profile - Updated with container */}
            <div className="leader-profile flex flex-col items-center max-w-xs">
              <div className="relative group">
                <img 
                  src="/img/Amrit.png" 
                  alt="Leader 2" 
                  className="profile-pic w-56 h-56 rounded-full object-cover border-4 border-purple-600 shadow-lg"
                />
                <div className="absolute -bottom-2 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 mt-4 w-full">
                <h3 className="leader-details text-white text-xl font-semibold">Amrit Raj</h3>
                <p className="leader-details text-gray-300 text-sm">Cofounder- Sheleads technologies</p>

                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://www.instagram.com/amrit_rj/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                    <FaInstagram className="social-icon text-white text-xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/amritraj02" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                    <FaLinkedin className="social-icon text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Testimonials */}
       {/* <section ref={testimonialRef} className="py-20">   
        <div className="container mx-auto px-4">
          <div className="animate-title">
            <SectionTitle
              title="Testimonials"
              subtitle="Voices of Empowerment"
              centered={true}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 testimonial-container mt-12">
            <div className="testimonial-item">
              <TestimonialCard
                quote="Nari-Nexus transformed my career trajectory. The leadership program gave me the confidence to pursue my goals and the network to make them happen."
                author="Priya Sharma"
                role="Tech Entrepreneur"
                image="/placeholder.svg?height=200&width=200"
              />
            </div>

            <div className="testimonial-item">
              <TestimonialCard
                quote="The mentorship I received through Nari-Nexus was invaluable. My mentor helped me navigate challenges and seize opportunities I never thought possible."
                author="Aisha Johnson"
                role="Software Engineer"
                image="/placeholder.svg?height=200&width=200"
              />
            </div>

            <div className="testimonial-item">
              <TestimonialCard
                quote="From a small idea to a thriving business, Nari-Nexus supported me every step of the way with resources, connections, and encouragement."
                author="Maya Patel"
                role="Founder & CEO"
                image="/placeholder.svg?height=200&width=200"
              />
            </div>
          </div>
        </div>  
      </section> */}
    </div>
  );
};

export default Programs;