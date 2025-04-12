const GetInvolved = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Get Involved</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Join as a Member</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Interest Area</label>
              <select className="w-full px-4 py-2 border rounded">
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Cloud Computing</option>
                <option>Cybersecurity</option>
              </select>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded">Submit</button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Become a Mentor</h2>
          <p className="text-gray-600 mb-6">Share your expertise and help shape the future of women in tech.</p>
          <button className="bg-secondary text-white px-6 py-2 rounded">Apply as Mentor</button>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;