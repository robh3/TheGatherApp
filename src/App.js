import React from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate,
  Link 
} from 'react-router-dom';

// Import page components
import Home from './pages/Home';
import PlanEvent from './pages/PlanEvent';
import BrowseActivities from './pages/BrowseActivities';
import LocalGuides from './pages/LocalGuides';
import Chat from './pages/Chat';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Simulated auth context (replace with actual implementation)
const useAuth = () => {
  // Placeholder for authentication state
  return { 
    currentUser: null, 
    login: () => {},
    logout: () => {} 
  };
};

// Protected Route Component
function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route 
              path="/" 
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/plan-event" 
              element={
                <PrivateRoute>
                  <PlanEvent />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/browse-activities" 
              element={
                <PrivateRoute>
                  <BrowseActivities />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/local-guides" 
              element={
                <PrivateRoute>
                  <LocalGuides />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/chat" 
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Navigation() {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Gather</Link>
        
        {currentUser ? (
          <div className="space-x-4 flex items-center">
            <Link to="/plan-event" className="hover:text-blue-200">Plan Event</Link>
            <Link to="/browse-activities" className="hover:text-blue-200">Browse Activities</Link>
            <Link to="/local-guides" className="hover:text-blue-200">Local Guides</Link>
            <Link to="/chat" className="hover:text-blue-200">Chat</Link>
            <button 
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="hover:text-blue-200">Login</Link>
            <Link 
              to="/signup" 
              className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2025 Gather App. Connect, Explore, Gather.</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-blue-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-300">Terms of Service</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default App;