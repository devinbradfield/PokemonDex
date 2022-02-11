function PokemonCard({ pokemon }) {
  return (
    <div>
      <h1> {pokemon.name} </h1>
      <br />
      <img src={pokemon.image} alt={pokemon.name} />
    </div>
    // <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
    //     <div className="card-header"><b>{pokemon.name}</b></div>
    //     <div className="card-body">
    //       <h6 className="card-subtitle mb-2 text-muted">Id: {pokemon.id}</h6>
    //       <h6 className="card-subtitle mb-2 text-muted">Height: {pokemon.height}</h6>
    //       <h6 className="card-subtitle mb-2 text-muted">Weight: {pokemon.weight}</h6>
    //       <img src={pokemon.sprites['front_default']} alt={pokemon.name} />
    //       <img src={pokemon.sprites['back_default']} alt={pokemon.name} />
    //     </div>
    //   </div>
  );
}

export default PokemonCard;
