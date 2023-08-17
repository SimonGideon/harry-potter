"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "./redux/characters/characterSlice";
import SearchBar from "./search";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({ src: "./asset/Beyond_Wonderland.ttf" });

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
    <div className="p-10 md:p-12">
      <SearchBar onSearch={handleSearch} />
      <h1 className="text-3xl font-bold mt-4 md:mt-8">All Characters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-4 md:mt-8">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">Error: {error}</div>
        ) : filteredCharacters.length === 0 ? (
          <p className="text-center">No characters found.</p>
        ) : (
          filteredCharacters.map((character) => (
            <Link href={`/character/${character.id}`} key={character.id}>
              <div className="card hover:shadow-md cursor-pointer">
                <div className="relative">
                  <div className="flex justify-center items-end h-50">
                    <img
                      className="rounded-2xl w-full object-contain"
                      src={character.image}
                      alt={character.alternate_names[0]}
                    />
                  </div>
                  <div className="absolute bottom-0">
                    <span className={myFont.className}>
                      <h1 className="name absolute text-yellow-400 text-4xl  left-1/2 transform -translate-x-1/2 bottom-5 bottom-2 text-center">
                        {character.name}
                      </h1>
                    </span>
                    <Image
                      className="rounded-2xl"
                      src="/2.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mt-2">
                    Actor: {character.actor}
                  </h3>
                  <h5 className="text-gray-600">
                    D.O.B {character.dateOfBirth}
                  </h5>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
