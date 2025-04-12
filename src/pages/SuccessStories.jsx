const SuccessStories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Priya Sharma</h3>
          <p className="text-gray-600 text-center mb-4">Software Engineer at Google</p>
          <p className="text-gray-700">"NariNexus helped me transition from a non-tech background to a successful career in software development."</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full mx-auto" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">Anjali Patel</h3>
          <p className="text-gray-600 text-center mb-4">Tech Lead at Microsoft</p>
          <p className="text-gray-700">"The mentorship program was instrumental in helping me advance to a leadership position."</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;