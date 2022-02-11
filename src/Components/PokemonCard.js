function PokemonCard({ pokemon, index }) {
  return (
    <div>
      {pokemon.name}
      <br />
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
  );
}

export default PokemonCard;
