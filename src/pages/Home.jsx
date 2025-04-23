import { useState, useEffect } from "react";
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
import BgBox from "../components/BgBox";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground2 from "../components/GeometricBackground2";
import GeometricBackground3 from "../components/GeometricBackground3";
import HeroHeading from "../components/HeroHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    // Initialize all animations
    initAnimations();
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const initAnimations = () => {
    // Animation for major sections
    const sections = document.querySelectorAll(".scroll-fade");
    sections.forEach((section) => {
      // Set initial state before animation
      gsap.set(section, {
        opacity: 0,
        y: 50,
      });

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    const aboutCards = document.querySelectorAll(".about-card");
    aboutCards.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        y: 30,
      });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
      });

      // Animate the icons inside event cards
      const icon = card.querySelector(".event-icon");
      if (icon) {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          scale: 0.5,
          rotate: -10,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.2 + 0.2,
          ease: "back.out(1.7)",
        });
      }
    });

    // Animation for mission items
    const missionItems = document.querySelectorAll(".mission-item");
    missionItems.forEach((item, index) => {
      gsap.set(item, {
        opacity: 0,
        y: 30,
      });

      gsap.to(item, {
        scrollTrigger: {
          trigger: ".mission-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });

    // Animation for program cards
    const cards = document.querySelectorAll(".program-card");
    cards.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        y: 30,
      });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });

    const eventCards = document.querySelectorAll(".event-card");
    eventCards.forEach((card, index) => {
      gsap.set(card, {
        opacity: 0,
        y: 30,
      });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
      });

      // Animate the icons inside event cards
      const icon = card.querySelector(".event-icon");
      if (icon) {
        gsap.from(icon, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          scale: 0.5,
          rotate: -10,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.2 + 0.2,
          ease: "back.out(1.7)",
        });
      }
    });

    // Animation for events CTA button
    gsap.from(".events-cta", {
      scrollTrigger: {
        trigger: ".events-cta",
        start: "top 90%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: "power2.out",
    });

    // Animation for testimonials
    const testimonials = document.querySelectorAll(".testimonial-item");
    testimonials.forEach((testimonial, index) => {
      gsap.set(testimonial, {
        opacity: 0,
        y: 30,
      });

      gsap.to(testimonial, {
        scrollTrigger: {
          trigger: ".testimonial-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });

    // CTA animation
    gsap.set(".cta-section", {
      opacity: 0,
      scale: 0.95,
    });

    gsap.to(".cta-section", {
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });
  };

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
        // linkedin: 'https://linkedin.com/in/kritika',
        github: "https://github.com/codetechie43",
        x: "https://x.com/CodeTechie43?t=s9J0-cmid0UXHVk0lMSx7w&s=09",
      },
    },
    {
      id: 3,
      name: "Sunidhi",
      // role: 'Events Coordinator',
      image: "/placeholder.svg?height=300&width=300",
      socials: {
        instagram:
          "https://www.instagram.com/sunidhi_vj?igsh=MWs1NHY1N3F6bXRibg==",
        linkedin:
          "https://www.linkedin.com/in/sunidhi-haware-797a97323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        // github: 'https://github.com/kritika',
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
      image: "/placeholder.svg?height=300&width=300",
      socials: {
        instagram: "https://instagram.com/kritika",
        linkedin: "https://linkedin.com/in/kritika",
        github: "https://github.com/kritika",
        x: "https://twitter.com/kritika",
      },
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Place BgBox first in the DOM to ensure it's behind everything */}
        {/* <div className="absolute inset-0 w-full h-full"> */}
        {/* <BgBox /> */}

        <GeometricBackground className="opacity-50" />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transform translate-x-4 md:translate-x-18 transition-all duration-500">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
                  Empowering Women,
                </span>
                <br />
                Inspiring Futures
              </h1>

              <HeroHeading />

              <p
                className="text-xl text-gray-300 mb-8 transform translate-x-4 md:translate-x-18 transition-all duration-500"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                संयोगे शक्तिः, नवोन्नतेः मार्गः
                <br />
                <br />
              </p>

              <div
                className="flex flex-wrap gap-4 transform translate-x-4 md:translate-x-18 transition-all duration-500"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                <Button href="#programs" size="lg">Explore Programs</Button>

                <Button to="#about" variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
             <div className="relative w-full aspect-square max-w-md mx-auto">
  {/* Animated Gradient Background */}
  <div
    className="absolute inset-0 rounded-full blur-xl opacity-80 z-0"
    style={{
      background: "conic-gradient(from 0deg, #ec4899, #a855f7, #f97316, #ec4899)",
      animation: "spinGradient 10s linear infinite",
    }}
  />

  {/* White Inner Circle with Logo */}
  <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center z-10 shadow-2xl">
    <img
      src="/img/logo.png"
      alt="Centered Logo"
      className="object-contain rounded-full w-3/4 h-3/4"
    />
  </div>

  {/* Inline Style for Animation */}
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

      {/* About */}

      <section id="about" className="relative py-20 overflow-hidden">
        <GeometricBackground3 className="opacity-40" />

        <div className="container mx-auto px-4 relative z-10 "  style={{ fontFamily: '"Playfair Display", serif' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              About NariNexus
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We’re not waiting for doors to open we’re building our own.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                // subtitle="How We Started"
                titleGradient="from-pink-500 to-purple-600"
                className="ml-4 md:ml-18"
              />

              <p className="text-gray-300 mb-6 transform translate-x-4 md:translate-x-18 ">
                NariNexus is a vibrant community initiative dedicated to
                empowering women in technology and related fields. We provide a
                dynamic platform for women to connect, learn, and lead through a
                variety of events, including hackathons, webinars, seminars, and
                mentorship programs across India. Our mission is to bridge the
                gender gap in traditionally male-dominated industries by
                fostering an inclusive environment where women can thrive.
              </p>

              <p className="text-gray-300 mb-6 transform translate-x-4 md:translate-x-18">
                Women remain underrepresented in key sectors like tech, gaming,
                and sports. They hold only 26.7% of tech jobs globally, just 5%
                of professional esports roles, and 13% of top positions in
                cricket. Despite progress, leadership opportunities for women
                are still limited. NariNexus is working to close this gap by
                creating inclusive spaces for mentorship, learning, and growth.
              </p>

              <p className="text-gray-300 transform translate-x-4 md:translate-x-18">
                NariNexus is for aspiring and established women in tech, gaming,
                and sports who seek growth and visibility. It also welcomes
                students, professionals, and allies committed to gender
                diversity. Whether you're looking to upskill, connect, or create
                impact. NariNexus is your platform to thrive in fields
                traditionally led by men.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img
                    src="img/grp.jpg"
                    alt="Nari-Nexus founding members"
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

      {/* Our Story */}
      {/* <section className="py-20">
         
      </section> */}

      <section id= "programs" className="py-20 relative scroll-fade">
        <GeometricBackground2 className="opacity-50" />
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Mission" centered={true} />

          {/* Programming language logos background */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
            {/* JavaScript logo */}
            <div className="absolute top-10 left-20 w-16 h-16">
              <svg viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
                <path
                  fill="#323330"
                  d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                />
              </svg>
            </div>

            {/* Python logo */}
            <div className="absolute top-40 right-24 w-20 h-20">
              <svg viewBox="0 0 128 128">
                <linearGradient
                  id="python-original-a"
                  gradientUnits="userSpaceOnUse"
                  x1="70.252"
                  y1="1237.476"
                  x2="170.659"
                  y2="1151.089"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stopColor="#5A9FD4" />
                  <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <linearGradient
                  id="python-original-b"
                  gradientUnits="userSpaceOnUse"
                  x1="209.474"
                  y1="1098.811"
                  x2="173.62"
                  y2="1149.537"
                  gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                  <stop offset="0" stopColor="#FFD43B" />
                  <stop offset="1" stopColor="#FFE873" />
                </linearGradient>
                <path
                  fill="url(#python-original-a)"
                  d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                  transform="translate(0 10.26)"
                />
                <path
                  fill="url(#python-original-b)"
                  d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                  transform="translate(0 10.26)"
                />
              </svg>
            </div>

            {/* Node.js logo */}
            <div className="absolute bottom-32 left-40 w-16 h-16">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#83CD29"
                  d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                />
              </svg>
            </div>

            {/* Java logo */}
            <div className="absolute top-60 left-1/2 w-16 h-16">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#0074BD"
                  d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                />
                <path
                  fill="#EA2D2E"
                  d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                />
                <path
                  fill="#0074BD"
                  d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                />
                <path
                  fill="#EA2D2E"
                  d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.866 28.42 81.722 22.195 76.491 1.587z"
                />
                <path
                  fill="#0074BD"
                  d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                />
              </svg>
            </div>

            {/* Bootstrap logo */}
            <div className="absolute bottom-20 right-32 w-16 h-16">
              <svg viewBox="0 0 128 128">
                <path
                  fill="#5B4282"
                  d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-xl text-gray-300 mb-8"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              Nari-Nexus is dedicated to empowering women through education,
              community, and innovation. We create spaces where women can
              connect, learn, and grow together, breaking barriers and building
              a more equitable future for all.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12 mission-container">
              <div className="text-center mission-item">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Community
                </h3>
                <p
                  className="text-gray-300"
                  style={{ fontFamily: '"Roboto", sans-serif' }}
                >
                  Building strong networks of support and collaboration
                </p>
              </div>

              <div className="text-center mission-item">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Innovation
                </h3>
                <p
                  className="text-gray-300"
                  style={{ fontFamily: '"Roboto", sans-serif' }}
                >
                  Fostering creative solutions to complex challenges
                </p>
              </div>

              <div className="text-center mission-item">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Leadership
                </h3>
                <p
                  className="text-gray-300"
                  style={{ fontFamily: '"Roboto", sans-serif' }}
                >
                  Developing the next generation of visionary leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="py-20 relative bg-gradient-to-b from-black to-purple-900/20 scroll-fade"
      >
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div style={{ marginTop: "-20px" }}>
            <SectionTitle title="What We Provide ?" centered={true} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adding div wrappers with program-card class for animation */}
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

            {/* <div className="program-card">
              <Card
                title="Mentorship Program"
                description="Connecting experienced professionals with emerging talents for personalized guidance and support."
                icon={Users}
                gradient="from-pink-500 to-orange-500"
              />
            </div>

            <div className="program-card">
              <Card
                title="Networking Events"
                description="Regular gatherings that facilitate meaningful connections and collaborative opportunities."
                icon={Calendar}
                gradient="from-purple-600 to-pink-500"
              />
            </div>  

            {/* <div className="program-card">
              <Card
                title="Educational Resources"
                description="Access to a wealth of learning materials, research, and tools for continuous personal and professional growth."
                icon={BookOpen}
                gradient="from-orange-500 to-purple-600"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <section className="py-20 relative bg-gradient-to-b from-black to-purple-900/20 scroll-fade">
        <SectionTitle title="Upcoming Events" centered={true} />
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white event-icon" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                  <p className="text-sm font-medium">
                    May 15, 2023 • 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Women in Tech Summit</h3>
                <p className="text-gray-300 mb-4">
                  Join industry leaders for a day of inspiration, learning, and
                  networking focused on advancing women in technology.
                </p>
                <Button to="/events" variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-orange-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lightbulb className="w-16 h-16 text-white event-icon" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                  <p className="text-sm font-medium">
                    June 8, 2023 • 6:00 PM - 8:30 PM
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Entrepreneurship Workshop
                </h3>
                <p className="text-gray-300 mb-4">
                  A hands-on workshop covering business planning, funding
                  strategies, and marketing for women entrepreneurs.
                </p>
                <Button to="/events" variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white event-icon" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                  <p className="text-sm font-medium">
                    July 22, 2023 • 1:00 PM - 5:00 PM
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Mentorship Matchmaking
                </h3>
                <p className="text-gray-300 mb-4">
                  Connect with potential mentors and mentees in this structured
                  networking event designed to foster meaningful relationships.
                </p>
                <Button to="/events" variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 events-cta">
            <Button to="/" size="lg">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div> */}

        {/* Testimonials   */}

        {/* <div className="container mx-auto px-4">
          <SectionTitle
            title="Testimonial"
            subtitle="Voices of Empowerment"
            centered={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 testimonial-container">
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

      <section id="team" className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500"  style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Meet the passionate individuals behind Nari-Nexus who are
              dedicated to empowering women and creating positive change.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"  style={{ fontFamily: '"Playfair Display", serif' }}>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm">{member.role}</p>

                  {/* ✅ Social Icons must be inside this scope */}
                  <div className="flex justify-center gap-4 mt-3 text-white text-xl">
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="hover:text-pink-500 transition" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="hover:text-blue-400 transition" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="hover:text-gray-400 transition" />
                      </a>
                    )}
                    {member.socials.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
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

      {/* Call to Action */}
      <section className="py-20 relative scroll-fade">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-12 text-center relative overflow-hidden cta-section">
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rotate-45"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rotate-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10" style={{ fontFamily: '"Playfair Display", serif' }}>
              Join Our Community Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Connect with like-minded women, access exclusive resources, and be
              part of a movement that's changing the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10" style={{ fontFamily: '"Playfair Display", serif' }}>
              <Button to="/Contact" size="xl">
                Get Started
              </Button>
              <Button to="#programs" size="xl">
                Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
