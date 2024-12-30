import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemGrid } from "../components/ItemGrid";
import { useApi } from "../hooks/useApi";
import { useBackground } from "../hooks/useBackground";
import CategoryTabs from "../components/CategoryTabs";
import SearchBar from "../components/SearchBar";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  // Handle background updates based on categoryId
  useBackground(categoryId || "default");

  // Fetch data from the API using the custom hook
  const { data, loading, error } = useApi(categoryId);

  // Filter items based on the search query
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Optional: Show a fallback message if there's an error
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading items: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <CategoryTabs />
      <SearchBar onSearch={setSearchQuery} />
      <ItemGrid items={filteredItems} loading={loading} error={error} />
    </div>
  );
};

export default CategoryPage;
