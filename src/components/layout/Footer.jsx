import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="backdrop-blur-md bg-white/10 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              © 2024 Category Explorer. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white/80"><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white/80"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white/80"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};