"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacterById } from "../../redux/characters/characterSlice";

const CharacterDetail = ({ params: { id } }) => {
  const dispatch = useDispatch();
  const { selectedCharacter, error } = useSelector(
    (state) => state.characters
  );
  const character = selectedCharacter[0];

  useEffect(() => {
    dispatch(fetchCharacterById(id));
  }, [dispatch, id]);

  if (error) {
    return <ConnectionError/>;
  }

  

  if (!character && !error) {
    return (
      <p className="text-center mt-8">Error: Character data not available</p>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="bio-data">
            <p className="text-xl font-semibold mb-4">{character.name}</p>
            <p>Born: {character.dateOfBirth}</p>
            <p>Gender: {character.gender}</p>
            <p>Actor: {character.actor}</p>
            <p>Status: {character.alive ? "Alive" : "Dead"}</p>
          </div>
          <div className="profile-image">
            <img
              src={character.image}
              alt={character.name}
              className="mx-auto w-1/2 h-auto rounded-lg"
            />
          </div>
        </div>
        <p className="mt-6">
          In the world of magic, {character.name} stands out as a{" "}
          {character.gender === "male" ? "bold" : "courageous"} individual. Born
          on {character.dateOfBirth}, {character.name} ventured into the realm
          of wizards and witches with an unwavering spirit.
        </p>

        <p className="mt-4">
          Raised in the renowned {character.house} house, {character.name}{" "}
          learned the secrets of spells and potions, forging lifelong
          friendships with fellow students. {character.name}'s{" "}
          {character.gender === "male" ? "bold" : "daring"} actions in the face
          of adversity earned a place in wizarding history.
        </p>

        <p className="mt-4">
          With {character.eyeColour} eyes that reflect {character.hairColour}{" "}
          hair, {character.name} possesses a wand crafted from{" "}
          {character.wand.wood}, known for its {character.wand.core} core and a
          length of {character.wand.length}. This magical tool aids in
          manifesting spells beyond imagination.
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
