import React from "react";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

function CenterCard({ searchedPokemon }) {
  return (
    <div>
      <h1>Welcome to the Pokedex</h1>
      <h2> Please search a Pokemon to learn more about it</h2>
      <PokemonCard
        pokemon={searchedPokemon.name}
        index={searchedPokemon.index}
      />
    </div>
  );
}

export default CenterCard;
