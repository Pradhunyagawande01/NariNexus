function Initiatives() {
    return (
      <div>
        {/* Initiatives Hero */}
        <section className="bg-purple-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering women through education, mentorship, and community programs.
            </p>
          </div>
        </section>
  
        {/* Main Initiatives */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Initiative 1 */}
              <div className="bg-purple-50 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mentorship Program"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-800">Mentorship Program</h3>
                  <p className="text-gray-700 mb-4">
                    Our mentorship program connects experienced professionals with women seeking guidance in their careers
                    or personal development.
                  </p>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      One-on-one mentoring sessions
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Goal setting and accountability
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Career guidance and networking
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
  
              {/* Initiative 2 */}
              <div className="bg-purple-50 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Skill Building Workshops"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-800">Skill Building Workshops</h3>
                  <p className="text-gray-700 mb-4">
                    Our workshops provide practical skills and knowledge to help women advance in their careers and
                    personal lives.
                  </p>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Technical and professional skills
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Leadership and communication
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Financial literacy and entrepreneurship
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full transition-colors"
                  >
                    View Schedule
                  </a>
                </div>
              </div>
  
              {/* Initiative 3 */}
              <div className="bg-purple-50 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Advocacy Campaigns"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-purple-800">Advocacy Campaigns</h3>
                  <p className="text-gray-700 mb-4">
                    We advocate for policies and practices that promote gender equality and women's empowerment in all
                    areas of society.
                  </p>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Awareness campaigns
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Policy recommendations
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-pink-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Community mobilization
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full transition-colors"
                  >
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Additional Programs */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Additional Programs</h2>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Program 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md flex">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Entrepreneurship Incubator</h3>
                  <p className="text-gray-700">
                    Supporting women entrepreneurs with resources, mentorship, and funding opportunities to start and grow
                    their businesses.
                  </p>
                </div>
              </div>
  
              {/* Program 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md flex">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">STEM Education Initiative</h3>
                  <p className="text-gray-700">
                    Encouraging girls and women to pursue careers in science, technology, engineering, and mathematics
                    through workshops and scholarships.
                  </p>
                </div>
              </div>
  
              {/* Program 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md flex">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Support Groups</h3>
                  <p className="text-gray-700">
                    Creating safe spaces for women to share experiences, challenges, and solutions in a supportive and
                    understanding environment.
                  </p>
                </div>
              </div>
  
              {/* Program 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md flex">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Financial Literacy Program</h3>
                  <p className="text-gray-700">
                    Equipping women with the knowledge and skills to make informed financial decisions and achieve
                    economic independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Impact Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-800">Our Impact</h2>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">5,000+</div>
                <p className="text-gray-700">Women Mentored</p>
              </div>
  
              <div className="bg-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                <p className="text-gray-700">Workshops Conducted</p>
              </div>
  
              <div className="bg-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
                <p className="text-gray-700">Community Partners</p>
              </div>
  
              <div className="bg-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">15</div>
                <p className="text-gray-700">Cities Reached</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Get Involved CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-700 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to empower women and create a more equitable world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/join"
                className="inline-block bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
              >
                Become a Member
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent hover:bg-purple-600 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Initiatives
  