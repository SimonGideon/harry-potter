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
      <img src={character.image} alt={character.name}  />
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>House: {character.house}</p>
      <p>D.O.B: {character.dateOfBirth}</p>
      <p>Birth Year: {character.yearOfBirth}</p>
      <p>Wizard: {character.wizard? 'wizard': 'not wizard'}</p>
      <p>Ancestry: {character.ancestry}</p>
      <p>Eye COlor: {character.eyeColour}</p>
      <p>Hair Color: {character.hairColour}</p>
      <p>{character.wand.wood}</p>
      <p>{character.wand.core}</p>
      <p>{character.wand.length}</p>
      <p>{character.patronus}</p>
      <p>{character.actor}</p>
      <p>{character.alive? 'Alive': 'Dead'}</p>
    </div>
  );
};
export default characterDetail;