"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "./redux/characters/characterSlice";
import SearchBar from "./search";
import Link from "next/link";
const Home = () => {
  const characters = useSelector((state) => state.characters.data);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleSearch = (query) => {
    if (query === "") {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1>All Characters</h1>
      {filteredCharacters.map((character) => (
        <Link href={`/character/${character.id}`} key={character.id}>
          <div>
            <h3>{character.name}</h3>
            <h5>{character.dateOfBirth}</h5>
            <img src={character.image} alt={character.name} />
          </div>
        </Link>
      ))}
      {filteredCharacters.length === 0 && (
        <>
          <p>No characters found.</p>
        </>
      )}
    </div>
  );
};

export default Home;
