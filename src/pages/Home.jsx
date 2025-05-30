import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  Lightbulb,
  Award,
  Sparkles,
  Calendar,
  BookOpen,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

 
import Button from "../components/Button";
 
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground2 from "../components/GeometricBackground2";
import GeometricBackground3 from "../components/GeometricBackground3";
import HeroHeading from "../components/HeroHeading";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Enhanced animation function
const initAnimations = () => {
  // Existing scroll fade animation
  gsap.from(".scroll-fade", {
    scrollTrigger: {
      trigger: ".scroll-fade",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });
  
  // New hero animation
   
  
  // Animate hero elements in sequence
  heroTl
    .from(".hero-background", {
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut"
    })
    .from(".hero-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .from(".hero-description", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from(".hero-button", {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".hero-image-container", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "elastic.out(1, 0.8)"
    }, "-=0.7")
    .to(".hero-image-glow", {
      scale: 1.05,
      opacity: 0.9,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "-=0.5");
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      initAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <GeometricBackground className="opacity-50 hero-background" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="transition-all duration-1000"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
             <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ml-4 md:ml-10">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
    Empowering Individuals,
  </span>
  <br />
  Inspiring Futures
</h1>


              <div className="hero-subtitle ">
                <HeroHeading />
              </div>

              <p
                className="hero-description text-xl text-gray-300 mb-8 ml-6 md:ml-10"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                संयोगे शक्तिः, नवोन्नतेः मार्गः
                <br />
                <br />
              </p>

              <div
                className="hero-button flex flex-wrap gap-4 ml-6 md:ml-10"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                <Button href="#programs" size="lg">
                  Explore Programs
                </Button>
              </div>
            </div>

            <div className="hero-image-container relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div
                  className="hero-image-glow absolute inset-0 rounded-full blur-xl opacity-80 z-0"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ec4899, #a855f7, #f97316, #ec4899)",
                    animation: "spinGradient 10s linear infinite",
                  }}
                />
                <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center z-10 shadow-2xl">
                  <img
                    src="/img/logo.png"
                    alt="Centered Logo"
                    className="object-contain rounded-full w-3/4 h-3/4"
                  />
                </div>

                <style>
                  {`
                    @keyframes spinGradient {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      
    </div>
  );
};

export default Home;