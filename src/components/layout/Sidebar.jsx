import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../../config/categories';

export const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  return (
    <aside className={`fixed left-0 top-16 h-full w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
      <div className="h-full backdrop-blur-md bg-white/10 border-r border-white/20 p-4">
        <nav className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/category/${category.id}`)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  categoryId === category.id
                    ? 'bg-white/20 text-white'
                    : 'hover:bg-white/10'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};