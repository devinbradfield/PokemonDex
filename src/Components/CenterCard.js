import React from "react";
import PokemonCard from "./PokemonCard";
import Welcome from "./Welcome";

function CenterCard({ pokemon, isSelected }) {
  console.log("Center Card Log: ", pokemon);
  return !isSelected ? <Welcome /> : <PokemonCard pokemon={pokemon} />;
}

export default CenterCard;
