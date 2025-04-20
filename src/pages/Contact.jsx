"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Calendar,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import GeometricBackground from "../components/GeometricBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <GeometricBackground className="opacity-40" />
              
        <div className="container mx-auto px-4 relative z-10"  style={{ fontFamily: '"Playfair Display", serif' }}  >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-orange-500">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or want to get involved? We'd love to hear from
              you.
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
 <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
      {/* JavaScript logo */}
      <div className="absolute top-10 left-20 w-16 h-16">
        <svg viewBox="0 0 128 128">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
        </svg>
      </div>
      
      {/* Python logo */}
      <div className="absolute top-40 right-24 w-20 h-20">
        <svg viewBox="0 0 128 128">
          <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4" />
            <stop offset="1" stopColor="#306998" />
          </linearGradient>
          <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B" />
            <stop offset="1" stopColor="#FFE873" />
          </linearGradient>
          <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
          <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
        </svg>
      </div>
      
      {/* Node.js logo */}
      <div className="absolute bottom-32 left-40 w-16 h-16">
        <svg viewBox="0 0 128 128">
          <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z" />
        </svg>
      </div>
      
      {/* Java logo */}
      <div className="absolute top-60 left-1/2 w-16 h-16">
        <svg viewBox="0 0 128 128">
          <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
          <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
          <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
          <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.866 28.42 81.722 22.195 76.491 1.587z" />
          <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
        </svg>
      </div>
      
      {/* Bootstrap logo */}
      <div className="absolute bottom-20 right-32 w-16 h-16">
        <svg viewBox="0 0 128 128">
          <path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z" />
        </svg>
      </div>
    </div>
              <p className="text-gray-300 mb-8">
                Whether you have questions about our programs, want to partner
                with us, or are interested in supporting our mission, we're here
                to help. Fill out the form, and we'll get back to you as soon as
                possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mt-1 mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-gray-300">
                      <a
                        href="mailto:narinexusofficial@gmail.com"
                        className="hover:text-white transition-colors"
                      >
                        narinexusofficial@gmail.com
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
                      <a
                        href="tel: +91 7776955168 "
                        className="hover:text-white transition-colors"
                      >
                        +91 77769 55168
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
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
                </div> */}
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-gray-300 mb-4">
                  Follow us on social media for updates, resources, and
                  inspiration.
                </p>
                <div className="flex space-x-4">
                  {/* <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a> */}
                  <a
                    href="https://x.com/narinexus"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns=" "
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/narinexus/"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/narinexus/"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
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
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle title="Find Us" subtitle="Our Location" centered={true} />

          <div className="max-w-5xl mx-auto mt-12">
            <div className="aspect-video bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 rounded-2xl p-1">
              <div className="w-full h-full bg-black rounded-xl overflow-hidden"> */}
      {/* Placeholder for map - in a real implementation, you would use Google Maps or another map service */}
      {/* <div className="w-full h-full bg-black/60 flex items-center justify-center">
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
      </section> */}

      {/* Contact Options */}
      {/* <section className="py-20">
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
      </section> */}

      {/* FAQ */}
      {/* <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative">
        <GeometricBackground className="opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Quick Answers"
            centered={true}
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">
                How can I join Nari-Nexus?
              </h3>
              <p className="text-gray-300">
                You can join Nari-Nexus by signing up for one of our programs,
                attending an event, or becoming a volunteer. Visit our Programs
                page to explore options that align with your interests and
                goals.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">
                Are your programs free?
              </h3>
              <p className="text-gray-300">
                We offer a mix of free and paid programs. Many of our community
                events and resources are free, while some specialized programs
                have fees. We also offer scholarships and financial assistance
                for those who qualify.
              </p>
            </div>
               
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">
                How can I support Nari-Nexus?
              </h3>
              <p className="text-gray-300">
                There are many ways to support our mission, including donations,
                volunteering, partnerships, and spreading the word about our
                work. Contact us to discuss how you can contribute in a way that
                aligns with your interests and resources.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">
                Do you have chapters in my area?
              </h3>
              <p className="text-gray-300">
                Nari-Nexus has chapters in over 30 cities globally. Contact us
                to find out if there's a chapter near you or to learn about
                starting one in your community.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button to="/faq" variant="secondary" size="lg">
              View All FAQs
            </Button>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-orange-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-12 text-center relative overflow-hidden">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rotate-45"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rotate-12"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-gray-300 mb-8 relative z-10">
              Join our community today and be part of a movement that's
              empowering women and creating positive change.
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
      </section> */}
    </div>
  );
};

export default Contact;
