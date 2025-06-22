import { useEffect, useRef } from "react";
import { Award, Sparkles, Lightbulb } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground3 from "../components/GeometricBackground3";
import Card from "../components/Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Create refs for animated elements
  const aboutSectionRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const imageRef = useRef(null);
  const provideSectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Initialize all scroll animations
    const initScrollAnimations = () => {
      // Hero section animation
      gsap.from(heroRef.current.querySelectorAll('.animate-hero'), {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reset"
        }
      });

      // Story section animations
      gsap.from(storyRef.current.querySelectorAll('p'), {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none reset"
        }
      });

      // Image animation with parallax effect
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reset",
          scrub: 1 // Smooth parallax effect
        }
      });

      // Decorative elements animation
      gsap.from(imageRef.current.querySelectorAll('.decorative-element'), {
        scale: 0,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reset"
        }
      });

      // What We Provide section title animation
      gsap.from(provideSectionRef.current.querySelector('.section-title'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: provideSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });

      // Cards staggered animation
      gsap.from(cardsRef.current.querySelectorAll('.program-card'), {
        y: 80,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reset"
        }
      });

      // Progress indicator animation
      const progressBar = document.querySelector(".scroll-progress");
      if (progressBar) {
        gsap.to(progressBar, {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3
          }
        });
      }
    };

    // Create scroll progress bar
    const createScrollProgressBar = () => {
      // Remove existing progress bar if it exists
      const existingBar = document.querySelector(".scroll-progress-container");
      if (existingBar) existingBar.remove();

      // Create new progress bar
      const progressContainer = document.createElement("div");
      progressContainer.className = "scroll-progress-container";
      progressContainer.style.cssText = "position: fixed; top: 0; left: 0; right: 0; height: 5px; background: rgba(255,255,255,0.1); z-index: 1000;";
      
      const progressBar = document.createElement("div");
      progressBar.className = "scroll-progress";
      progressBar.style.cssText = "height: 100%; width: 0%; background: linear-gradient(to right, #ec4899, #a855f7, #f97316); transition: width 0.1s;";
      
      progressContainer.appendChild(progressBar);
      document.body.appendChild(progressContainer);
    };

    // Create scroll progress bar
    createScrollProgressBar();
    
    // Initialize animations with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      const progressBar = document.querySelector(".scroll-progress-container");
      if (progressBar) progressBar.remove();
    };
  }, []);

  return (
    <div ref={aboutSectionRef}>
      {/* Hero & About Section */}
      <section id="about" className="relative overflow-hidden">
        <GeometricBackground3 className="opacity-40" />

        <div
          ref={heroRef}
          className="container mx-auto px-4 relative z-10"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-hero text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              About NariNexus
            </h1>
            <p className="animate-hero text-xl text-gray-300 mb-8">
              We're not waiting for doors to open — we're building our own.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={storyRef}>
              {/* <SectionTitle
                title="Our Story"
                titleGradient="from-pink-500 to-purple-600"
                className="ml-4 md:ml-18"
              /> */}

              <p className="text-gray-300 mb-6 ml-6 md:ml-10">
                NariNexus is a vibrant community initiative dedicated to
                empowering women in technology and related fields. We provide a
                dynamic platform for women to connect, learn, and lead through a
                variety of events, including hackathons, webinars, seminars, and
                mentorship programs across India.
              </p>

              <p className="text-gray-300 mb-6 ml-6 md:ml-10">
                Women remain underrepresented in key sectors like tech, gaming,
                and sports. They hold only 26.7% of tech jobs globally, just 5%
                of professional esports roles, and 13% of top positions in
                cricket. NariNexus is working to close this gap by creating
                inclusive spaces for mentorship, learning, and growth.
              </p>

              <p className="text-gray-300 ml-6 md:ml-10">
                NariNexus is for aspiring and established women in tech, gaming,
                and sports who seek growth and visibility. Whether you're looking
                to upskill, connect, or create impact — NariNexus is your
                platform to thrive in fields traditionally led by men.
              </p>
            </div>

            <div ref={imageRef} className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img
                    src="img/grp.jpg"
                    alt="Nari-Nexus founding members"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative background elements */}
              <div className="decorative-element absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-xl rotate-12"></div>
              <div className="decorative-element absolute -bottom-6 -left-6 w-24 h-24 bg-orange-500/30 rounded-xl -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section ref={provideSectionRef} className="py-20 relative bg-gradient-to-b from-black to-purple-900/20 min-h-[300px] opacity-100">
        <GeometricBackground className="opacity-30 pointer-events-none absolute inset-0 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="section-title" style={{ marginTop: "-20px" }}>
            <SectionTitle title="What We Provide ?" centered={true} />
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="program-card">
              <Card
                title="Leadership Development"
                description="Training programs to build leadership and confidence in women."
                icon={Award}
                gradient="from-pink-500 to-purple-600"
              />
            </div>
            <div className="program-card">
              <Card
                title="Entrepreneurship"
                description="Resources, mentorship, and funding opportunities for women entrepreneurs to launch and scale their businesses."
                icon={Sparkles}
                gradient="from-purple-600 to-orange-500"
              />
            </div>
            <div className="program-card">
              <Card
                title="Tech Skills Training"
                description="Hands-on workshops and courses in coding, digital marketing, and other in-demand tech skills."
                icon={Lightbulb}
                gradient="from-orange-500 to-pink-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;