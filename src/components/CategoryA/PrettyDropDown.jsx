import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  select {
    background-color: #27272a;
    color: #d9d9d9;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #6d28d9;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    min-width: 200px;
    text-transform: capitalize; /* Yazıları güzelleştirir */
  }
`;

const PrettyDropdown = ({ onFilterChange, categories = [] }) => {
  return (
    <SelectWrapper>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">Tüm Kategoriler</option>
        {/* Sadece dizi varsa ve maplenebiliyorsa çalışır */}
        {categories && categories.length > 0 && categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
          
        ))}
      </select>
    </SelectWrapper>
  );
};

export default PrettyDropdown;