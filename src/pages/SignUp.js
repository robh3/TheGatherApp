import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      // Placeholder for signup logic
      console.log('Signup attempt:', email);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. ' + err.message);
      setLoading(false);
    }
  }

  return (
    <div className="signup-page container mx-auto px-4 py-8 max-w-md">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up for Gather</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label 
                className="block text-gray-700 text-sm font-bold mb-2" 
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label 
                className="block text-gray-700 text-sm font-bold mb-2" 
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
              minLength="6"
              required
            />
          </div>

          <div className="mb-6">
            <label 
              className="block text-gray-700 text-sm font-bold mb-2" 
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
              minLength="6"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account? 
            <Link 
              to="/login" 
              className="text-blue-500 hover:text-blue-800 ml-1"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;