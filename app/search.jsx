import React from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };
  
  return (
    <div className="flex items-center justify-center">
        <input
      type="text"
      placeholder="Search characters..."
      value={searchQuery}
      onChange={handleSearch}
      className="text-slate-400 bg-transparent border border-gray-400 rounded-3xl my-8 px-4 py-2 focus:outline-none focus:border-blue-500"
    />
    </div>
  );
};

export default SearchBar;
