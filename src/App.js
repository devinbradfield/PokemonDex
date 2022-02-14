import "./styles.css";
import "./App.css";
import { Component } from "react";
import "./Components/Navbar";
import CenterCard from "./Components/CenterCard";
import SearchBar from "./Components/SearchBar";
import TeamCards from "./Components/TeamCards";
//import AbilitiesCard from "./Components/AbilitiesCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokeData: [],
      PokeImg: [],
      searched: "",
      team: [],
      isSelected: false,
      currentPokemon: "",
      pokeDetails: undefined
    };
    this.updateChange = this.updateChange.bind(this);
    this.addPokemonToTeam = this.addPokemonToTeam.bind(this);
  }

  async componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((name) => this.setState({ pokeData: name.results }));
  }

  updateChange = (e) => {
    let searched = document.querySelector("#search-input").value;
    this.setState({ searched, isSelected: true });
    e.preventDefault();
    //console.log("UPDATE CHANGE LOG: ", searched);
  };

  addPokemonToTeam = (e) => {
    let data = JSON.parse(e.target.value);
    // console.log("ADD POKEMON TO TEAM LOG: ", data)
    this.setState((prevState) => ({
      team: [...prevState.team, data]
    }));
    //console.log("ADD POKEMON TO TEAM LOG: ", this.state.team)
    e.preventDefault();
  };

  getPokemonDetails() {
    fetch(this.state.currentPokemon.url)
      .then((response) => response.json())
      .then((results) => {
        //console.log("getPokemonDetails: ", results)
        this.setState({ pokeDetails: results });
      });
  }

  getSearchedPokemon() {
    const searchedPokemon = this.state.pokeData.filter((p) =>
      p.name.toLowerCase().includes(this.state.searched.toLowerCase())
    )[0];

    this.setState({ currentPokemon: searchedPokemon });
  }

  render() {
    const { pokeData, searched, team, isSelected, currentPokemon } = this.state;
    const currentPokemon2 = pokeData.filter((p) =>
      p.name.toLowerCase().includes(searched.toLowerCase())
    )[0];
    //console.log("APP.JS LOG: ", searchedPokemon);
    //this.setState({currentPokemon: searchedPokemon})

    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg"
            alt="pokemon_logo"
            className="pokemon-logo"
          />
          <h1 className="title"></h1>
        </header>
        <body className="app-body">
          <div className="center-card">
            <SearchBar
              placeholder="Search for a Pokemon"
              updateChange={this.updateChange}
              searched={searched}
            />
            <CenterCard
              pokemon={currentPokemon2}
              isSelected={isSelected}
              addPokemonToTeam={this.addPokemonToTeam}
              getPokemonDetails={this.getPokemonDetails}
            />
          </div>
          <div className="team-cards">
            <h2>
              {" "}
              <u> Your Team </u>{" "}
            </h2>
            <TeamCards pokeTeam={team} />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
