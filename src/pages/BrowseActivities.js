import React, { useState } from 'react';

// Mock activity data
const activitiesData = [
  {
    id: 1,
    name: 'City Walking Tour',
    description: 'Explore hidden gems with a local guide',
    price: 25,
    category: 'Tour',
    location: 'Downtown',
    duration: '2 hours'
  },
  {
    id: 2,
    name: 'Cooking Class',
    description: 'Learn authentic local cuisine',
    price: 45,
    category: 'Workshop',
    location: 'Culinary Center',
    duration: '3 hours'
  }
];

function BrowseActivities() {
  const [filters, setFilters] = useState({
    category: '',
    maxPrice: 100,
    location: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const filteredActivities = activitiesData.filter(activity => {
    const matchesCategory = !filters.category || activity.category === filters.category;
    const matchesPrice = activity.price <= filters.maxPrice;
    const matchesLocation = !filters.location || 
      activity.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesSearch = !searchTerm || 
      activity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesLocation && matchesSearch;
  });

  return (
    <div className="browse-activities container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Discover Activities</h1>

      {/* Filters */}
      <div className="filters mb-8 grid md:grid-cols-3 gap-4">
        <select
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="Tour">Tours</option>
          <option value="Workshop">Workshops</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
          className="border rounded p-2"
        />

        <div className="price-filter">
          <label className="block text-sm mb-1">Max Price: ${filters.maxPrice}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={filters.maxPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
            className="w-full"
          />
        </div>
      </div>

      {/* Activities Grid */}
      <div className="activities-grid grid md:grid-cols-3 gap-6">
        {filteredActivities.map(activity => (
          <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
              <p className="text-gray-600 mb-4">{activity.description}</p>
              <div className="activity-details grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>
                  <strong>Location:</strong> {activity.location}
                </div>
                <div>
                  <strong>Duration:</strong> {activity.duration}
                </div>
                <div>
                  <strong>Category:</strong> {activity.category}
                </div>
                <div className="text-green-600 font-bold">
                  ${activity.price} / person
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Book Activity
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No activities found. Try adjusting your filters.
        </div>
      )}
    </div>
  );
}

export default BrowseActivities;