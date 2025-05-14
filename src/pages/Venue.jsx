import React from "react";
import SectionTitle from "../components/SectionTitle";
import GeometricBackground2 from "../components/GeometricBackground2";
import GeometricBackground from "../components/GeometricBackground";


const Venue = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-10 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Geometric Background */}
      <GeometricBackground2 className="absolute top-0 left-0 w-full h-full opacity-40 z-0" />
      <GeometricBackground className="absolute top-0 left-0 w-full h-full opacity-40 z-0" />
       <SectionTitle 
              title="Venue" 
            //   subtitle="Building Tomorrow's Leaders"
              titleGradient="from-pink-500 to-purple-600"
            />

      <div className="z-10 w-full max-w-6xl flex flex-col md:flex-row gap-10">
        
        {/* Left - Bigger Map */}
        <div className="w-full md:w-3/5 h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Event Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.104413230842!2d79.12022707485967!3d21.12849998054253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c79c270ccc63%3A0x68446238d5d1d9d6!2sNandanvan%2C%20Nagpur%2C%20Maharashtra%20440009!5e0!3m2!1sen!2sin!4v1715511111111!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right - Venue Details */}
        <div className="w-full md:w-2/5 bg-gray-900 text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Venue Details</h2>
          <p className="mb-4">
            Join us on <strong>24th May 2025</strong> from <strong>4:00 PM to 6:00 PM</strong> for an amazing session. The venue is centrally located and easily accessible via any transport mode.
          </p>
          <div className="space-y-2">
            <p>📍 <strong>Location:</strong> Colony, Nandanvan, Nagpur, Maharashtra 440009</p>
            <p>📅 <strong>Date:</strong> 24 May 2025</p>
            <p>🕓 <strong>Time:</strong> 4:00 PM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
