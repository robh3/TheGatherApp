import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route,
  Link 
} from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Import page components
import Home from './pages/Home';
import PlanEvent from './pages/PlanEvent';
import BrowseActivities from './pages/BrowseActivities';
import LocalGuides from './pages/LocalGuides';
import Chat from './pages/Chat';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Gather</Link>
            
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <>
                  <Link to="/plan-event" className="hover:underline">Plan Event</Link>
                  <Link to="/browse-activities" className="hover:underline">Browse Activities</Link>
                  <Link to="/local-guides" className="hover:underline">Local Guides</Link>
                  <Link to="/chat" className="hover:underline">Chat</Link>
                  <button 
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex space-x-4">
                  <Link 
                    to="/login" 
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Routes Accessible to All for Now */}
            <Route path="/" element={<Home />} />
            <Route path="/plan-event" element={<PlanEvent />} />
            <Route path="/browse-activities" element={<BrowseActivities />} />
            <Route path="/local-guides" element={<LocalGuides />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p className="opacity-75">
              © 2025 Gather App. Connect, Explore, Gather.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
