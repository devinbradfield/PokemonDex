import "./styles.css";
import "./App.css";
import { Component } from "react";
import "./Components/Navbar";
import CenterCard from "./Components/CenterCard";
import SearchBar from "./Components/SearchBar";
import TeamCards from "./Components/TeamCards";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to the Pokedex</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeData: [],
      searched: "",
      team: [],
      isSelected: false
    };
    this.updateChange = this.updateChange.bind(this);
  }

  async componentDidMount() {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    // .then(response => response.json())
    // .then(name => this.setState({pokemons:name.results}));

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((name) => this.setState({ pokeData: name.results }));
  }

  updateChange = (e) => {
    // const formData = new FormData(e.target.value);

    let searched = document.querySelector("#search-input").value;
    this.setState({ searched, isSelected: true });
    e.preventDefault();
    console.log("UPDATE CHANGE LOG: ", searched);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    //   fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    //   .then((response) => response.json())
    //   .then((name) => this.setState({ pokeData: name.results }));
  };
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim()
  //   });
  // };

  render() {
    const { pokeData, searched, team, isSelected } = this.state;
    const searchedPokemon = pokeData.filter((p) =>
      p.name.toLowerCase().includes(searched.toLowerCase())
    )[0];
    console.log("APP.JS LOG: ", searchedPokemon);
    //const searchedPokemon = pokeData.searched.toLowerCase();
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg"
            alt="pokemon_logo"
            className="pokemon-logo"
          />
          <h1 className="title"> Pokedex </h1>
          {/* <form
            className="search"
            type="search"
            placeholder= "Search for a Pokemon"
            onSubmit= {this.updateChange}
          >
            Enter Pokemon: <input type="text" />
            <input type="submit" value="Submit" />
          </form> */}
        </header>
        <body>
          <div className="center-card">
            <SearchBar
              placeholder="Search for a Pokemon"
              updateChange={this.updateChange}
              searched={searched}
            />
            <CenterCard pokemon={searchedPokemon} isSelected={isSelected} />
          </div>
          <div className="team-cards">
            <h2> Your Team </h2>
            <TeamCards pokeTeam={team} />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
