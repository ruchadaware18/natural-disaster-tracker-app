import React from 'react'
import './../index.css';


const CategoryFilter = ({categories, selectedCategory, setSelectedCategory}) => {
  return (
    <div className="dropdown-container">
        <label htmlFor='category-select' className="dropdown-label">Select Event Category:</label>
        <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(Number(e.target.value))}
    >
        {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
                {cat.title}
            </option>
        ))}

    </select>
    </div>
    
  )
}

export default CategoryFilter
