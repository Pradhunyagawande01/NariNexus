import { useState } from 'react';

// Collapsible FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-4 transition-all duration-300">
      <button 
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-purple-600 text-xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div className={`mt-2 text-gray-600 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQSection = ({ title, items }) => {
  const [isSectionOpen, setIsSectionOpen] = useState(true);
  
  return (
    <div className="mb-12">
      <button 
        className="w-full text-left flex justify-between items-center focus:outline-none mb-6"
        onClick={() => setIsSectionOpen(!isSectionOpen)}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-purple-600 text-xl">
          {isSectionOpen ? '▼' : '►'}
        </span>
      </button>
      
      <div className={`space-y-4 transition-all duration-300 ${isSectionOpen ? 'block' : 'hidden'}`}>
        {items.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </div>
  );
};

const FAQPage = () => {
  // FAQ data organized by sections
  const faqData = {
    general: [
      {
        question: "What is the mission of your community?",
        answer: "Our mission is to empower women in technology through education, mentorship, networking, and providing resources that enable them to thrive in tech careers. We aim to increase women's representation and leadership in the technology sector."
      },
      {
        question: "Who can join your community?",
        answer: "Our community welcomes all women and non-binary individuals interested in technology, regardless of their experience level. We also welcome allies who support our mission and want to contribute to creating a more inclusive tech industry."
      },
      {
        question: "Is there a membership fee?",
        answer: "Basic membership to our community is free. Some specialized programs, workshops, and events may have associated costs, but we offer scholarships and financial assistance to ensure that cost is not a barrier to participation."
      },
      {
        question: "How can I get involved?",
        answer: "You can get involved by signing up for membership on our website, attending our events, volunteering, mentoring, or sponsoring our initiatives. We have various opportunities for engagement based on your interests and availability."
      }
    ],
    programs: [
      {
        question: "What types of educational programs do you offer?",
        answer: "We offer a variety of educational programs including coding bootcamps, workshops on specific technologies, webinars, certification preparation courses, and self-paced online learning resources. Our programs cater to different skill levels from beginners to advanced professionals."
      },
      {
        question: "How does the mentorship program work?",
        answer: "Our mentorship program pairs mentees with experienced professionals in their field of interest. After applying, mentees are matched based on their goals, experience level, and area of interest. Mentorship typically involves regular one-on-one meetings, goal-setting, and progress tracking over a period of 3-6 months."
      },
      {
        question: "What financial support options are available?",
        answer: "We offer scholarships for educational programs, grants for women-led tech startups, equipment access programs, and financial assistance for conference attendance and certification exams. Application processes vary for each type of support, but all aim to reduce financial barriers."
      },
      {
        question: "Do you help with job placement?",
        answer: "Yes, we provide job placement assistance through our network of partner companies, career fairs, resume reviews, interview preparation, and a job board exclusive to our members. We also offer salary negotiation workshops to help women advocate for fair compensation."
      }
    ],
    events: [
      {
        question: "How often do you host events?",
        answer: "We host events throughout the year, including monthly networking meetups, quarterly workshops, annual conferences, hackathons, and special events featuring guest speakers. Our events calendar is regularly updated on our website and shared in our newsletter."
      },
      {
        question: "Are your events in-person or virtual?",
        answer: "We offer both in-person and virtual events to accommodate diverse preferences and ensure accessibility. Major events like our annual summit typically have hybrid options to allow for broader participation regardless of location."
      },
      {
        question: "Can I speak at one of your events?",
        answer: "Yes! We welcome speakers who can share valuable insights, experiences, and knowledge with our community. You can submit a speaker proposal through our website, and our events team will review it for potential speaking opportunities."
      }
    ],
    partners: [
      {
        question: "How can companies partner with your community?",
        answer: "Companies can partner with us through sponsorships, hosting events, providing mentors, offering job opportunities to our members, supporting our educational programs, or providing pro bono services. We offer various partnership tiers with different benefits and involvement levels."
      },
      {
        question: "Can I volunteer if I'm not a tech professional?",
        answer: "Absolutely! We need volunteers with diverse skills including event organization, marketing, graphic design, fundraising, administration, and more. All skills are valuable in supporting our mission, and we provide training for volunteer roles."
      },
      {
        question: "How can I donate to support your initiatives?",
        answer: "You can make tax-deductible donations through our website, set up recurring donations, contribute to specific programs, or donate equipment. We also accept in-kind donations and corporate matching gifts. All donations directly support our programs empowering women in tech."
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <p className="text-xl text-center mb-12">Find answers to common questions about our women in tech community</p>

      {/* Tab navigation for larger screens */}
      <div className="hidden md:flex mb-12 border-b">
        <button className="px-6 py-3 font-medium text-purple-600 border-b-2 border-purple-600">All FAQs</button>
        <button className="px-6 py-3 font-medium text-gray-500 hover:text-purple-600">General</button>
        <button className="px-6 py-3 font-medium text-gray-500 hover:text-purple-600">Programs</button>
        <button className="px-6 py-3 font-medium text-gray-500 hover:text-purple-600">Events</button>
        <button className="px-6 py-3 font-medium text-gray-500 hover:text-purple-600">Partners</button>
      </div>

      {/* FAQ Sections */}
      <div className="divide-y divide-gray-200">
        <FAQSection title="General Questions" items={faqData.general} />
        <FAQSection title="Programs & Services" items={faqData.programs} />
        <FAQSection title="Events & Networking" items={faqData.events} />
        <FAQSection title="For Supporters & Partners" items={faqData.partners} />
      </div>

      {/* Contact Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-12">
        <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">If you couldn't find the answer to your question, please feel free to contact us directly. Our team is here to help!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info@womenintechcommunity.org</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to join our community?</h2>
        <p className="text-white text-lg mb-6">Become a member today and access all our resources, events, and networks</p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">Sign Up Now</button>
      </div>
    </div>
  );
};

export default FAQPage;