import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="home-page">
      {/* Full-Page Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            className="w-full h-full"
          >
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,160C960,171,1056,213,1152,234.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Local Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Connect with locals, join exciting activities, and create unforgettable memories
          </p>

          {/* Search and CTA Section */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="max-w-2xl mx-auto bg-white rounded-full shadow-2xl overflow-hidden flex items-center mb-10"
          >
            <input 
              type="text" 
              placeholder="Search activities, events, or locations" 
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-grow px-6 py-4 text-gray-800 outline-none text-lg"
            />
            <button 
              type="submit" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 transition-colors"
            >
              Search
            </button>
          </form>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <Link 
              to="/plan-event" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-transform transform hover:scale-105 inline-block"
            >
              Plan an Event
            </Link>
            <Link 
              to="/browse-activities" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-transform transform hover:scale-105 inline-block"
            >
              Browse Activities
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How Gather Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="text-center bg-white shadow-lg rounded-xl p-8 transform transition hover:scale-105">
            <div className="bg-blue-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Create Your Event</h3>
            <p className="text-gray-600">Easily plan and customize your gathering with our intuitive tools</p>
          </div>

          {/* Step 2 */}
          <div className="text-center bg-white shadow-lg rounded-xl p-8 transform transition hover:scale-105">
            <div className="bg-green-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Invite Participants</h3>
            <p className="text-gray-600">Connect with friends or open your event to the local community</p>
          </div>

          {/* Step 3 */}
          <div className="text-center bg-white shadow-lg rounded-xl p-8 transform transition hover:scale-105">
            <div className="bg-purple-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Enjoy Your Gathering</h3>
            <p className="text-gray-600">Create memorable experiences and make new connections</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;