"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "./redux/characters/characterSlice";
const Home = () => {
  const characters = useSelector((state) => state.characters.data);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>All Characters</h1>
      {characters.map((character) => (
        <div
          key={character.id}
          onClick={() => handleCharacterClick(character.id)}
        >
          <h3>{character.name}</h3>
          <h5>{character.dateOfBirth}</h5>
          <img src={character.image} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default Home;
