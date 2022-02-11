import "../App.css";

function PokemonCard({ pokemon }) {
  function getPokemonImage(url) {
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        //console.log(results.sprites.front_default)
        return results.sprites.front_default;
      });
  }

  //let pokeImgUrl = getPokemonImage(pokemon.url);
  //console.log('after function:', pokeImgUrl)

  return (
    <div>
      <h1> {pokemon.name} </h1>
      <br />
      <img
        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        //src={pokeImgUrl}
        alt={pokemon.name}
        className="pokemon-card-image"
      />
    </div>
  );
}

export default PokemonCard;
