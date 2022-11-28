import React from "react";

function CategoryFilter({ categories, handleFilter, selectCategory }) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) =>
        <button key={category} onClick={() => handleFilter(category)} className={category === selectCategory ? "selected" : null}>{category}</button>
      )
      }
    </div>
  );
}

export default CategoryFilter;
