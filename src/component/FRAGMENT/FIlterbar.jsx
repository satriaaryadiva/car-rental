/* eslint-disable react/prop-types */
 

const FilterBar = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex justify-center space-x-4 mb-6">
      <input
        type="text"
        name="search"
        placeholder="Search by name"
        className="p-2 border rounded"
        onChange={handleFilterChange}
      />
      <select name="category" className="p-2 border rounded" onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Hatchback">Hatchback</option>
        {/* Add more categories as needed */}
      </select>
      <select name="transmission" className="p-2 border rounded" onChange={handleFilterChange}>
        <option value="">All Transmissions</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        className="p-2 border rounded"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        className="p-2 border rounded"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterBar;
