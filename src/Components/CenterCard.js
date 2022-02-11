import React from "react";
import PokemonCard from "./PokemonCard";
import Welcome from "./Welcome";

function CenterCard({ pokemon, isSelected, addPokemonToTeam }) {
  //console.log("Center Card Log: ", pokemon);
  let stringifyPokemon = JSON.stringify(pokemon);
  if (!isSelected) {
    return <Welcome />;
  } else {
    return (
      <>
        <PokemonCard pokemon={pokemon} />
        <br />
        <button value={stringifyPokemon} onClick={addPokemonToTeam}>
          {" "}
          Add To Team{" "}
        </button>
      </>
    );
  }
}

export default CenterCard;
