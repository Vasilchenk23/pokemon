import React, { useState, useEffect } from "react";

export const Main = () => {
  const [pokemons, setPokemons] = useState({
    pokemon1: null,
    pokemon2: null,
}); 

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("http:pokemon-back-production-8a73.up.railway.app/api/pokemon/random");
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchPokemons();
  }, []);
  

  if (!pokemons.pokemon1 || !pokemons.pokemon2) {
    return ; 
  }

  return (
    <div>
      <h1>Какой покемон красивый?</h1>
      <div className="block">
        <div className="first-pokemon">
          <img src={pokemons.pokemon1.image} alt={pokemons.pokemon1.name} />
          <button>Он лучше</button>
        </div>
        <div className="second-pokemon">
          <img src={pokemons.pokemon2.image} alt={pokemons.pokemon2.name} />
          <button>Он лучше</button>
        </div>
      </div>
    </div>
  );
};
