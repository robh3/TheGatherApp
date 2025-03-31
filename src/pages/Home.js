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

      {/* How It Works */}
      <section className="how-it-works container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Gather Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Event</h3>
            <p>Easily plan and customize your gathering</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Invite Participants</h3>
            <p>Connect with friends or meet new people</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enjoy Your Gathering</h3>
            <p>Create memorable experiences together</p>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="featured-activities container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Activities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sample Activity Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/placeholder-activity-1.jpg" alt="City Tour" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">City Walking Tour</h3>
              <p className="text-gray-600 mb-4">Explore hidden gems with a local guide</p>
              <span className="text-green-600 font-bold">$25 / person</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/placeholder-activity-2.jpg" alt="Cooking Class" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Local Cooking Workshop</h3>
              <p className="text-gray-600 mb-4">Learn authentic local cuisine</p>
              <span className="text-green-600 font-bold">$45 / person</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/placeholder-activity-3.jpg" alt="Wine Tasting" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Wine Tasting Experience</h3>
              <p className="text-gray-600 mb-4">Discover local wineries and flavors</p>
              <span className="text-green-600 font-bold">$65 / person</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;