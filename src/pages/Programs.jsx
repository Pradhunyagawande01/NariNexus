import { useEffect, useRef } from "react";
import {
  Award,
  Lightbulb,
  Users,
  Sparkles,
  Calendar,
  BookOpen,
  Target,
  Globe,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground2 from "../components/GeometricBackground2";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X icon
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  // Create refs for animated sections
  const heroRef = useRef(null);
  const previousEventRef = useRef(null);
  const leadersRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const eventCardsRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    // Initialize all animations
    const initAnimations = () => {
      // Hero section fade in
      gsap.from(heroRef.current.querySelectorAll(".animate-hero"), {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "center 70%",
          toggleActions: "play none none reset",
        },
      });

      // Previous Event section animation
      gsap.from(previousEventRef.current.querySelectorAll(".animate-title"), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: previousEventRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
        },
      });

      // Leaders profile animations with circular reveal
      const leaders = leadersRef.current.querySelectorAll(".leader-profile");
      leaders.forEach((leader, index) => {
        // Profile picture animation
        gsap.from(leader.querySelector(".profile-pic"), {
          scale: 0.5,
          opacity: 0,
          rotation: index % 2 === 0 ? -10 : 10,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: leader,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });

        // Leader details animation
        gsap.from(leader.querySelectorAll(".leader-details"), {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leader,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });

        // Social icons animation
        gsap.from(leader.querySelectorAll(".social-icon"), {
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          delay: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: leader,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });

      // Description paragraph animation
      gsap.from(leadersRef.current.querySelector(".description"), {
        x: 0,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leadersRef.current,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });

      // Upcoming events title animation
      if (upcomingEventsRef.current) {
        gsap.from(upcomingEventsRef.current.querySelector(".animate-title"), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: upcomingEventsRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      }

      // Event cards animation with staggered effect
      if (eventCardsRef.current) {
        const eventCards =
          eventCardsRef.current.querySelectorAll(".event-card");
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
            toggleActions: "play none none reset",
          },
        });

        // Event cards hover effect
        eventCards.forEach((card) => {
          // Animated gradient background on hover
          card.addEventListener("mouseenter", () => {
            gsap.to(card.querySelector(".h-48"), {
              backgroundPosition: "100% 50%",
              duration: 1,
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card.querySelector(".h-48"), {
              backgroundPosition: "0% 50%",
              duration: 1,
            });
          });
        });
      }

      // Testimonial section animation
      if (testimonialRef.current) {
        gsap.from(testimonialRef.current.querySelector(".animate-title"), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });

        // Testimonial cards animation
        gsap.from(
          testimonialRef.current.querySelectorAll(".testimonial-item"),
          {
            y: 50,
            opacity: 0,
            scale: 0.9,
            stagger: 0.15,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: testimonialRef.current.querySelector(
                ".testimonial-container"
              ),
              start: "top 75%",
              toggleActions: "play none none reset",
            },
          }
        );
      }

      // Create floating animation for decorative elements
      const floatingAnimation = (target, amplitude) => {
        gsap.to(target, {
          y: amplitude,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random(),
        });
      };

      // Apply floating animation to geometric backgrounds
      document.querySelectorAll(".geometric-float").forEach((element) => {
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-12">
        <GeometricBackground className="opacity-30 geometric-float" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-hero">
              <SectionTitle title="Upcoming Events" centered={true} />
            </div>
            {/* <p className="animate-hero text-lg text-gray-300 mb-8 bg-black/30 p-3 backdrop-blur-sm rounded-lg">
                  Let's Talk Open Source And Communities 
            </p> */}
          </div>
        </div>

        {/* Previous Event Cards Section */}
        <div ref={previousEventRef} className="container mx-auto px-4 mt-10">
          {/* <div className="animate-title mb-10 text-center">
            <div className="inline-block relative">
              <SectionTitle 
                title="Past Events" 
                subtitle="Our Success Stories"
                titleGradient="from-pink-500 to-purple-600"
                centered={true}
              />
            </div>
          </div> */}

          {/* Event Card */}
          <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 mb-16">
            {/* Header */}
            <div className="relative h-60 bg-gradient-to-r from-purple-600 to-pink-500 p-8 flex items-end">
              <h3 className="text-3xl font-extrabold text-white">
                Let's Talk Open Source And Communities
              </h3>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Date */}
              <div className="flex flex-wrap items-center text-sm text-gray-400 gap-6">
                <span className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  June 28, 2025
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                Join us for an inspiring double session with Patel Sir and Ali
                Musthafa Sir exploring open source contribution, community, and
                the power of social growth.
              </p>

              {/* Speakers */}
              {/* Speakers */}
              <div ref={leadersRef}>
                <h4 className="text-white text-xl font-semibold mb-6 text-center">
                  Our Speakers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                  {/* Speaker 1 */}
                  <div className="bg-black/30 rounded-xl p-6 text-center flex flex-col items-center w-full max-w-xs">
                    <img
                      src="/img/Ali.jpg"
                      alt="Ali Musthafa"
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-purple-600 shadow-lg mb-4"
                    />
                    <h5 className="text-white text-lg font-semibold">
                      Ali Musthafa
                    </h5>
                    <p className="text-gray-400 text-sm mb-2">
                      Senior Dev Advocate At Pieces
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ialimustufa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-xl mt-2"
                    >
                      <FaLinkedin />
                    </a>
                  </div>

                  {/* Speaker 2 */}
                  <div className="bg-black/30 rounded-xl p-6 text-center flex flex-col items-center w-full max-w-xs">
                    <img
                      src="/img/Patel.jpg"
                      alt="Patel Muhammad"
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-purple-600 shadow-lg mb-4"
                    />
                    <h5 className="text-white text-lg font-semibold">
                      Patel Muhammad
                    </h5>
                    <p className="text-gray-400 text-sm mb-2">
                      GSoC @2023, Fellowship @Keploy
                    </p>
                    <a
                      href="https://www.linkedin.com/in/patel-muhammad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-xl mt-2"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              {/* Register Button */}
  <div className="flex justify-center mt-10">
    <a
      href="https://lu.ma/sglu2w7i"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-700 transition"
    >
      Register Now
    </a>
  </div>

              {/* Highlights */}
              <div>
                <h4 className="text-white text-xl font-semibold mb-4">
                  Program Overview
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex p-4 bg-black/30 rounded-lg">
                    <Lightbulb className="text-purple-500 h-5 w-5 mr-3 mt-1" />
                    <span className="text-gray-300 text-sm">
                      Innovative solutions to real-world challenges
                    </span>
                  </div>
                  <div className="flex p-4 bg-black/30 rounded-lg">
                    <Award className="text-purple-500 h-5 w-5 mr-3 mt-1" />
                    <span className="text-gray-300 text-sm">
                      Recognition & mentorship opportunities
                    </span>
                  </div>
                  <div className="flex p-4 bg-black/30 rounded-lg">
                    <Sparkles className="text-purple-500 h-5 w-5 mr-3 mt-1" />
                    <span className="text-gray-300 text-sm">
                      Valuable professional networking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* You can add more event cards here */}

          {/* <div className="mt-8 text-center">
            <Button
              text="View All Past Events"
              href="/events/archive"
              variant="gradient"
              size="lg"
              icon={<Calendar className="ml-2 h-5 w-5" />}
            />
          </div> */}
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
