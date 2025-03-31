import React from 'react';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover. Connect. Gather.</h1>
        <p className="text-xl mb-8">Plan unforgettable events and experiences with locals</p>
        <div className="cta-buttons space-x-4">
          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg">
            Plan an Event
          </button>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg">
            Browse Activities
          </button>
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;