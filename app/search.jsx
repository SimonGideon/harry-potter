import React from "react";
const SearchBar = ({ onSearch}) => {
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
        />
    );
};

export default SearchBar;