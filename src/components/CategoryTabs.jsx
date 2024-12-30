import React from "react";
import { categories } from "../config/categories";
import { useNavigate, useParams } from "react-router-dom";

const CategoryTabs = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto py-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/category/${category.id}`)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md whitespace-nowrap transition-colors ${categoryId === category.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryTabs;
