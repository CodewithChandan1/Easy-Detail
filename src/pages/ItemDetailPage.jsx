import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useApi } from "../hooks/useApi";
import { CommentSection } from "../components/comments/CommentSection";
import { categories } from "../config/categories";

 const ItemDetailPage = () => {
  const { categoryId, itemId } = useParams(); 
  const navigate = useNavigate();

  const category = categories.find((c) => c.id === categoryId);
  const { data, loading, error } = useApi(`${category?.endpoint}/${itemId}`);
  const item = data[0];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">Error loading item details</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {item.name}
            </h1>
            {item.description && (
              <p className="text-gray-600 mb-6">{item.description}</p>
            )}
            {item.attributes && (
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(item.attributes).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-500 uppercase">
                      {key}
                    </h3>
                    <p className="mt-1 text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <CommentSection itemId={itemId} />
      </div>
    </div>
  );
};
export default ItemDetailPage;