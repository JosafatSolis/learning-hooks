import React, { useEffect, useState } from "react";
import CharactersList from "../CharactersList";
import CharactersDetail from "../CharactersDetail";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const selectedCharacter = characters.find(
      (char) => String(char.id) === String(id)
    );
    console.log(selectedCharacter);
    setCharacter(selectedCharacter);
  }, [id, characters]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      const { results } = res.data;
      console.log(results);
      setCharacters(results);
    });
  }, []);

  return (
    <section className="uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-2">
          <CharactersList characters={characters} />
          <CharactersDetail {...character} />
        </div>
      </div>
    </section>
  );
};

export default CharacterContainer;
