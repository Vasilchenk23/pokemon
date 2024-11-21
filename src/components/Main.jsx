import React, { useState, useEffect } from "react";

export const Main = () => {
  const [pokemons, setPokemons] = useState({
    pokemon1: null,
    pokemon2: null,
  });

  const fetchPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokemon-back-production-8a73.up.railway.app/api/pokemon/random"
      );
      const data = await response.json();
      setPokemons(data);
    } catch (error) {
      console.error("Error pokemon:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const voteForPokemon = async (pokemonId, pokemonName) => {
    try {
      const response = await fetch(
        "https://pokemon-back-production-8a73.up.railway.app/api/pokemon/vote",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pokemonId, pokemonName }),
        }
      );
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error voting:", errorData.error);
        throw new Error(errorData.error || "Unknown error");
      }
  
      fetchPokemons(); 
    } catch (error) {
      console.error("Error voting:", error.message);
    }
  };
  
  
  if (!pokemons.pokemon1 || !pokemons.pokemon2) {
    return <p>Загрузка покемонов...</p>;
  }

  return (
    <div>
      <h1>Какой покемон красивый?</h1>
      <div className="block">
        <div className="first-pokemon">
          <img src={pokemons.pokemon1.image} alt={pokemons.pokemon1.name} />
          <button
            onClick={() => voteForPokemon(pokemons.pokemon1.id, pokemons.pokemon1.name)}
          >
            Он лучше
          </button>
        </div>
        <div className="second-pokemon">
          <img src={pokemons.pokemon2.image} alt={pokemons.pokemon2.name} />
          <button
            onClick={() => voteForPokemon(pokemons.pokemon2.id, pokemons.pokemon2.name)}
          >
            Он лучше
          </button>
        </div>
      </div>
    </div>
  );
};
