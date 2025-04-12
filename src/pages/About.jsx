import { Users, Heart, Globe, Target, TrendingUp, Shield } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import GeometricBackground from "../components/GeometricBackground";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              About Nari-Nexus
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We’re not waiting for doors to open we’re building our own.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="How We Started"
                titleGradient="from-pink-500 to-purple-600"
              />

              <p className="text-gray-300 mb-6">
                A belief that women belong in tech not just as participants, but
                as leaders, innovators, and changemakers.
              </p>

              <p className="text-gray-300 mb-6">
                We’re a community-driven initiative created to bridge the gender
                divide in technology by offering opportunities for learning,
                growth, and leadership while welcoming allies who share our
                vision for a more inclusive tech world.
              </p>

              <p className="text-gray-300">
                Through nationwide hackathons, workshops, mentorship circles,
                and community events, we’re creating space for skill-building,
                confidence-boosting, and voice-lifting.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                  <img
                    src="img/Kritika.jpg"
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

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Values"
            subtitle="What We Stand For"
            centered={true}
            titleGradient="from-orange-500 to-pink-500"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Empathy</h3>
              <p className="text-gray-300">
                We lead with compassion recognizing the challenges women face in
                tech and creating a space where those stories are seen,
                heard, and respected.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-purple-600 to-orange-500 text-white">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusion</h3>
              <p className="text-gray-300">
                We celebrate diversity and strive to create safe, empowering
                spaces where every woman feels welcomed, valued, and capable
                of leading change.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-300">
                Change happens through connection. We foster networks of
                support, collaboration, and collective growth to
                uplift every voice.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-300">
                We commit to high standards in everything we do — pushing
                boundaries and empowering women to reach their
                fullest potential.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">
                We spark creativity and practical problem-solving through
                programs that drive progress and redefine what
                leadership looks like.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-300">
                We stand for transparency, accountability, and ethical action
                building trust and leading with purpose in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Impact" 
            subtitle="Making A Difference"
            titleGradient="from-purple-600 to-orange-500"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">10,000+</h3>
                  <p className="text-gray-300">Women Empowered</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 mb-2">30+</h3>
                  <p className="text-gray-300">Global Chapters</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">500+</h3>
                  <p className="text-gray-300">Successful Startups</p>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-2">250+</h3>
                  <p className="text-gray-300">Annual Events</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-gray-300 mb-6">
                Since our founding, Nari-Nexus has made a significant impact on the lives of women around the world. Our programs have helped thousands of women develop essential skills, build successful businesses, and advance in their careers.
              </p>
              
              <p className="text-gray-300 mb-6">
                Through our mentorship initiatives, we've facilitated meaningful connections that have led to professional growth and personal development for both mentors and mentees.
              </p>
              
              <p className="text-gray-300 mb-6">
                Our advocacy work has contributed to policy changes that promote gender equality in workplaces and communities, creating more inclusive environments for all.
              </p>
              
              <Button to="/programs" size="lg">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Our Team" 
            subtitle="The People Behind Nari-Nexus"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={`/placeholder.svg?height=300&width=300`}
                    alt="Team member" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-purple-400 mb-3">Co-Founder & CEO</p>
                  <p className="text-gray-300 text-sm">Passionate about creating opportunities for women in technology and leadership.</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/team" variant="secondary" size="lg">
              Meet Our Full Team
            </Button>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking to grow professionally, connect with
              like-minded women, or contribute to a movement for change, there's
              a place for you at Nari-Nexus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="xl">
                Get Involved
              </Button>
              <Button to="/programs" variant="secondary" size="xl">
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
