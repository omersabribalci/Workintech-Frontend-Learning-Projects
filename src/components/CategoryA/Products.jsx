import React, { useState } from 'react';
import { thedata } from "../../data"; // Verinin geldiği yer
import ProductList from "./ProductList";
import PrettyDropdown from "./PrettyDropdown";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = thedata ? [...new Set(thedata.map(item => item.category))] : [];

  const handleFilterChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = selectedCategory === "All" 
    ? thedata 
    : thedata.filter(item => item.category === selectedCategory);

  return (
    <>
      <PrettyDropdown 
        categories={categories} 
        onFilterChange={handleFilterChange} 
      />
      <ProductList product={filteredProducts} />
    </>
  );
}

export default Products;