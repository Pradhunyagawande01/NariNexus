import React, { useEffect, useRef } from "react";
import { Calendar, Lightbulb, Target, Sparkles, BookOpen, Globe } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GeometricBackground from "../components/GeometricBackground";
import GeometricBackground2 from "../components/GeometricBackground2";

gsap.registerPlugin(ScrollTrigger);

const Upcoming = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.utils.toArray(".event-card").forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const events = [
    {
      title: "Hack4Maha KickOff Session",
      date: "10th May",
      desc: "Get ready for the Hack4Maha Kickoff Session on 10th May! 🚀 Know the themes, guidelines, and start your journey towards innovation.",
      icon: <Calendar className="w-16 h-16 text-white/70" />,
      colors: "from-pink-500 to-purple-600",
    },
    {
      title: "Pixel Art Drawing Contest",
      date: "16th May",
      desc: "Dive into the world of creativity with the Pixel Art Drawing Contest on 16th May! 🎨 Bring your ideas to life, pixel by pixel.",
      icon: <Lightbulb className="w-16 h-16 text-white/70" />,
      colors: "from-purple-600 to-orange-500",
    },
    {
      title: "Idea to MVP Session",
      date: "17th May",
      desc: "Join us on 17th May for the Idea to MVP Session! 🚀 Learn how to transform raw ideas into working prototypes.",
      icon: <Target className="w-16 h-16 text-white/70" />,
      colors: "from-orange-500 to-pink-500",
    },
    {
      title: "Scribble Gaming Night",
      date: "23rd May",
      desc: "Join us on 23rd May for a thrilling evening of games and fun at Scribble Gaming Night! 🎮",
      icon: <Sparkles className="w-16 h-16 text-white/70" />,
      colors: "from-blue-500 to-purple-600",
    },
    {
      title: "Hack4Brahma KickOff Session",
      date: "24th May",
      desc: "Get ready to kickstart your journey at Hack4Brahma on 24th May! 🎯",
      icon: <BookOpen className="w-16 h-16 text-white/70" />,
      colors: "from-purple-600 to-pink-500",
    },
    {
      title: "More Events Coming Soon",
      date: "",
      desc: "Stay tuned for more exciting events and opportunities to connect, learn, and grow with our community!",
      icon: <Globe className="w-16 h-16 text-white/70" />,
      colors: "from-gray-600 to-gray-800",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-black text-white overflow-hidden">
      {/* Geometric Backgrounds */}
      <GeometricBackground className="absolute inset-0 z-0 opacity-30 geometric-float" />
      <GeometricBackground2 className="absolute inset-0 z-0 opacity-30 geometric-float" />

      {/* Section content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="animate-title">
            <SectionTitle title="Our Programs" centered={true} />
          </div>
          <p className="animate-title text-xl text-gray-300 mt-4 bg-black/30 p-4 backdrop-blur-sm rounded-lg">
            Mark Your Calendars and join us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="event-card bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${event.colors} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {event.icon}
                </div>
                {event.date && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3">
                    <p className="text-sm font-medium text-white">
                      {event.date} - {event.title}
                    </p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                <p className="text-gray-300">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
