import PokemonCard from "./PokemonCard";

function TeamCards({ pokeTeam }) {
  let pokeComponentArray = pokeTeam.map((pokemon) => (
    <PokemonCard pokemon={pokemon} />
  ));
  // console.log(`In the pokemon list`);
  return <div className="pokemon-team-cards">{pokeComponentArray}</div>;
}
export default TeamCards;
