import "../App.css";
import App from "../App";

function AbilitiesCard({ pokemon, getPokemonDetails }) {
  / function getPokemonDetails(url) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((results) => {
  //       //console.log("getPokemonDetails: ", results)
  //       return JSON.stringify(results);
  //     });
  // }

  // async function getPokemonDetails2(url) {
  //   const response = await fetch(url)
  //   if (response.status >= 200 && response.status <= 299) {
  //     const JSONresponse = await response.json();
  //     //console.log("GPD2: ", JSONresponse)
  //     return JSON.stringify(JSONresponse);
  //     //return JSONresponse
  //   }
  //   else {
  //     console.log("ERROR: ", response.statusText)
  //   }
  // }

  //let pokeImgUrl = getPokemonImage(pokemon.url);
  //console.log('after function:', pokeImgUrl)

  //console.log("POKE URL: ", pokemon.url)
  let details = getPokemonDetails;
  console.log("DETAILS: ", details);

  // let details = getPokemonDetails2(pokemon.url).then((results)=> {
  //   console.log("HERE: ", JSON.parse(results))
  //   return JSON.parse(results)
  // })
  // console.log("types: ", details)

  return (
    <div>
      <h3> Abilities </h3>
      <br />    </div>
  );
}

export default AbilitiesCard;

 getPokemons=(id)=> {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//      .then(res => res.json())
//      .then(data => {
//           this.setState({data}); //here you are setting data to data state variable
//      })
//     .catch(err => {
//         console.log(err);
//     });
// }
import "../App.css";
import App from "../App";

function AbilitiesCard({ pokemon, getPokemonDetails }) {
  / function getPokemonDetails(url) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((results) => {
  //       //console.log("getPokemonDetails: ", results)
  //       return JSON.stringify(results);
  //     });
  // }

  // async function getPokemonDetails2(url) {
  //   const response = await fetch(url)
  //   if (response.status >= 200 && response.status <= 299) {
  //     const JSONresponse = await response.json();
  //     //console.log("GPD2: ", JSONresponse)
  //     return JSON.stringify(JSONresponse);
  //     //return JSONresponse
  //   }
  //   else {
  //     console.log("ERROR: ", response.statusText)
  //   }
  // }

  //let pokeImgUrl = getPokemonImage(pokemon.url);
  //console.log('after function:', pokeImgUrl)

  //console.log("POKE URL: ", pokemon.url)
  let details = getPokemonDetails;
  console.log("DETAILS: ", details);

  // let details = getPokemonDetails2(pokemon.url).then((results)=> {
  //   console.log("HERE: ", JSON.parse(results))
  //   return JSON.parse(results)
  // })
  // console.log("types: ", details)

  return (
    <div>
      <h3> Abilities </h3>
      <br />    </div>
  );
}

export default AbilitiesCard;

 getPokemons=(id)=> {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//      .then(res => res.json())
//      .then(data => {
//           this.setState({data}); //here you are setting data to data state variable
//      })
//     .catch(err => {
//         console.log(err);
//     });
// }
