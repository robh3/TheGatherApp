import React, { useState } from 'react';

function PlanEvent() {
  const [eventDetails, setEventDetails] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxParticipants: 10
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement event creation logic
    console.log('Event Details:', eventDetails);
    alert('Event Created! (Mock functionality)');
  };

  return (
    <div className="plan-event-page container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Plan Your Gather</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Event Name
          </label>
          <input
            type="text"
            name="name"
            value={eventDetails.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Weekend Cooking Workshop"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tell us about your event"
            rows="4"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={eventDetails.date}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={eventDetails.time}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="City, Venue, or Address"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxParticipants">
            Max Participants
          </label>
          <input
            type="number"
            name="maxParticipants"
            value={eventDetails.maxParticipants}
            onChange={handleInputChange}
            min="1"
            max="50"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlanEvent;