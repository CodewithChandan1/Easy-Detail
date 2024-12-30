import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassCard } from './ui/GlassCard';

export const ItemGrid = ({ items, loading, error }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {items.map((item) => (
        <GlassCard
          key={item.id}
          className="cursor-pointer transform transition-all duration-300 hover:scale-105 animate-float"
          onClick={() => navigate(`/item/${item.category}/${item.id}`)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') navigate(`/item/${item.category}/${item.id}`);
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-black">{item.name}</h3>
            {item.description && (
              <p className="text-black mt-2 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </GlassCard>
      ))}
    </div>
  );
};
