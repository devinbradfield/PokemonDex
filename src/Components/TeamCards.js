import PokemonCard from "./PokemonCard";

function TeamCards({ pokeTeam }) {
  let pokeComponentArray = pokeTeam.map((pokemon, index) => (
    <PokemonCard pokemon={pokemon} index={index} />
  ));
  // console.log(`In the pokemon list`);
  return <div className="pokemon-list">{pokeComponentArray}</div>;
}
export default TeamCards;
