import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  CategoryPage  from './pages/CategoryPage';
import  ItemDetailPage  from './pages/ItemDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/category/animals" replace />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/item/:categoryId/:itemId" element={<ItemDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;