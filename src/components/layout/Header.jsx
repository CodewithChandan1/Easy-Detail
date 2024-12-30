import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-white/20">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="ml-4 text-xl font-semibold">Category Explorer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};