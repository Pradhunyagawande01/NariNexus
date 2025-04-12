"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from "lucide-react"
import SectionTitle from "../components/SectionTitle"
import Button from "../components/Button"
import GeometricBackground from "../components/GeometricBackground"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle
                title="Get in Touch"
                subtitle="We're Here to Help"
                titleGradient="from-pink-500 to-purple-600"
              />

              <p className="text-gray-300 mb-8">
                Whether you have questions about our programs, want to partner with us, or are interested in supporting
                our mission, we're here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-300">
                      <a href="mailto:connect@narinexus.org" className="hover:text-white transition-colors">
                        connect@narinexus.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center mt-1 mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-gray-300">
                      <a href="tel:+15551234567" className="hover:text-white transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mt-1 mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-300">
                      123 Empowerment Street
                      <br />
                      Innovation City, 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-gray-300 mb-4">Follow us on social media for updates, resources, and inspiration.</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black/60 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="Find Us" subtitle="Our Location" centered={true} />

          <div className="max-w-5xl mx-auto mt-12">
            <div className="aspect-video bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
              <div className="w-full h-full bg-black rounded-xl overflow-hidden">
                {/* Placeholder for map - in a real implementation, you would use Google Maps or another map service */}
                <div className="w-full h-full bg-black/60 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                    <h3 className="text-xl font-bold mb-2">Nari-Nexus Headquarters</h3>
                    <p className="text-gray-300">
                      123 Empowerment Street
                      <br />
                      Innovation City, 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Other Ways to Connect"
            subtitle="We're Accessible"
            centered={true}
            titleGradient="from-orange-500 to-pink-500"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6">
                Chat with our team in real-time during business hours for immediate assistance.
              </p>
              <Button variant="secondary" size="lg">
                Start Chat
              </Button>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-gray-300 mb-6">
                Book a phone or video call with a team member to discuss your specific needs.
              </p>
              <Button variant="secondary" size="lg">
                Book Appointment
              </Button>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to stay updated on our programs, events, and resources.
              </p>
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="Frequently Asked Questions" subtitle="Quick Answers" centered={true} />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">How can I join Nari-Nexus?</h3>
              <p className="text-gray-300">
                You can join Nari-Nexus by signing up for one of our programs, attending an event, or becoming a
                volunteer. Visit our Programs page to explore options that align with your interests and goals.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Are your programs free?</h3>
              <p className="text-gray-300">
                We offer a mix of free and paid programs. Many of our community events and resources are free, while
                some specialized programs have fees. We also offer scholarships and financial assistance for those who
                qualify.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">How can I support Nari-Nexus?</h3>
              <p className="text-gray-300">
                There are many ways to support our mission, including donations, volunteering, partnerships, and
                spreading the word about our work. Contact us to discuss how you can contribute in a way that aligns
                with your interests and resources.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Do you have chapters in my area?</h3>
              <p className="text-gray-300">
                Nari-Nexus has chapters in over 30 cities globally. Contact us to find out if there's a chapter near you
                or to learn about starting one in your community.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button to="/faq" variant="secondary" size="lg">
              View All FAQs
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

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Take the Next Step?</h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Join our community today and be part of a movement that's empowering women and creating positive change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button to="/programs" size="xl">
                Explore Programs
              </Button>
              <Button to="/events" variant="secondary" size="xl">
                Attend an Event
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
