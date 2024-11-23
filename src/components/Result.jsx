import React, { useState, useEffect } from "react";

export const Result = () => {
  const [topPokemons, setTopPokemons] = useState([]);
  const fetchTopPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokemon-back-production-8a73.up.railway.app/api/pokemon/top"
      );
      const data = await response.json();
      setTopPokemons(data);
    } catch (error) {
      console.error("Error fetching top pokemons:", error);
    }
  };

  useEffect(() => {
    fetchTopPokemons();
  }, []);

  return (
    <div className="result-container">
      <h1 className="title">Топ 5 покемонів</h1>
      <ul className="pokemon-list">
        {topPokemons.map((pokemon, index) => (
          <li key={pokemon.id} className="pokemon-card">
            <span className="pokemon-rank">{index + 1}</span>
            <img
              src={pokemon.image_url}
              alt={pokemon.pokemon_name}
              className="pokemon-image"
            />
            <p className="pokemon-name">{pokemon.pokemon_name}</p>
            <p className="pokemon-votes">Голоси: {pokemon.votes_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
