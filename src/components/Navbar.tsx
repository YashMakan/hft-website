import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white py-4 px-6 flex justify-between items-center border-b">
      <Link to="/" className="flex items-center">
        <BarChart className="h-6 w-6 text-red-800 mr-2" />
        <span className="text-xl font-semibold">Renaissance</span>
      </Link>
      <div className="flex items-center space-x-8">
        <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
        <Link to="/careers" className="text-gray-700 hover:text-gray-900">Careers</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        <button 
          onClick={() => navigate('/login')}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Log In
        </button>
      </div>
    </nav>
  );
}