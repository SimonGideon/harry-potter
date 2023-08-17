import React from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };
  
  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={searchQuery}
      onChange={handleSearch}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
    />
  );
};

export default SearchBar;
