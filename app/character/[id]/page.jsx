"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacterById } from "../../redux/characters/characterSlice";

const characterDetail = ({ params: { id } }) => {
  const dispatch = useDispatch();
  const { selectedCharacter, isLoading, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const character = selectedCharacter[0];
  if (!character) {
    return <p>Error: Character data not available</p>;
  }
  return (
    <div>
      <h1>Character {id}</h1>
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};
export default characterDetail;