import React from "react";
import PokemonCard from "./PokemonCard";
import Welcome from "./Welcome";
import AbilitiesCard from "./AbilitiesCard";

function CenterCard({ pokemon, isSelected, addPokemonToTeam, getPokeDetails }) {
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
        <br />
        <br />
        <div className="abilities-card">
          <AbilitiesCard pokemon={pokemon} getPokemonDetails={getPokeDetails} />
        </div>
      </>
    );
  }
}

export default CenterCard;
