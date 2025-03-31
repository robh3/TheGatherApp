import React, { useState } from 'react';

// Mock local guides data
const guidesData = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    specialty: 'City Tours',
    bio: 'Born and raised in the city, I love sharing local hidden gems and stories.',
    rating: 4.8,
    pricePerHour: 50,
    languages: ['English', 'Spanish'],
    availability: ['Weekends', 'Evenings']
  },
  {
    id: 2,
    name: 'Jack Thompson',
    specialty: 'Food & Culture',
    bio: 'Passionate foodie and cultural explorer with 10 years of guiding experience.',
    rating: 4.9,
    pricePerHour: 65,
    languages: ['English', 'French'],
    availability: ['Weekdays', 'Mornings']
  }
];

function LocalGuides() {
  const [filters, setFilters] = useState({
    specialty: '',
    language: '',
    minRating: 0
  });

  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuides = guidesData.filter(guide => {
    const matchesSpecialty = !filters.specialty || guide.specialty === filters.specialty;
    const matchesLanguage = !filters.language || guide.languages.includes(filters.language);
    const matchesRating = guide.rating >= filters.minRating;
    const matchesSearch = !searchTerm || 
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.bio.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSpecialty && matchesLanguage && matchesRating && matchesSearch;
  });

  return (
    <div className="local-guides container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Local Guides</h1>

      {/* Filters */}
      <div className="filters mb-8 grid md:grid-cols-3 gap-4">
        <select
          value={filters.specialty}
          onChange={(e) => setFilters(prev => ({ ...prev, specialty: e.target.value }))}
          className="border rounded p-2"
        >
          <option value="">All Specialties</option>
          <option value="City Tours">City Tours</option>
          <option value="Food & Culture">Food & Culture</option>
        </select>

        <select
          value={filters.language}
          onChange={(e) => setFilters(prev => ({ ...prev, language: e.target.value }))}
          className="border rounded p-2"
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>

        <div className="rating-filter">
          <label className="block text-sm mb-1">Minimum Rating: {filters.minRating}</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={filters.minRating}
            onChange={(e) => setFilters(prev => ({ ...prev, minRating: parseFloat(e.target.value) }))}
            className="w-full"
          />
        </div>
      </div>

      {/* Guides Grid */}
      <div className="guides-grid grid md:grid-cols-3 gap-6">
        {filteredGuides.map(guide => (
          <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
              <div className="guide-specialty text-blue-600 mb-2">{guide.specialty}</div>
              <p className="text-gray-600 mb-4">{guide.bio}</p>
              
              <div className="guide-details grid grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
                <div>
                  <strong>Rating:</strong> {guide.rating} ⭐
                </div>
                <div>
                  <strong>Price:</strong> ${guide.pricePerHour}/hour
                </div>
                <div>
                  <strong>Languages:</strong> {guide.languages.join(', ')}
                </div>
                <div>
                  <strong>Available:</strong> {guide.availability.join(', ')}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                  View Profile
                </button>
                <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600">
                  Book Guide
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No guides found. Try adjusting your filters.
        </div>
      )}
    </div>
  );
}

export default LocalGuides;