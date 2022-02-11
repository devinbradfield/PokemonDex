import "./styles.css";
import { Component } from "react";
import "./Components/Navbar";
import CenterCard from "./Components/CenterCard";
import SearchBar from "./Components/SearchBar";

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
      searched: ""
    };
    //this.selectPokemon = this.selectPokemon.bind(this);
  }

  async componentDidMount() {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    // .then(response => response.json())
    // .then(name => this.setState({pokemons:name.results}));

    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((pokemon) => this.setState({ pokeData: pokemon.results }));
  }

  updateChange = (e) => {
    this.setState({ searched: e.target.value });
  };

  render() {
    const { pokeData, searched } = this.state;
    //const searchedPokemon = pokeData.filter(pokemon => pokemon.name.toLowerCase().includes(searched.toLowerCase()))
    const searchedPokemon = pokeData.searched.toLowerCase();
    return (
      <div className="App">
        <header className="App-header">
          <h1> Pokedex </h1>
          <SearchBar
            placeholder="Search for a Pokemon"
            updateChange={this.updateChange}
          />
        </header>
        <body>
          <CenterCard pokemon={searchedPokemon} />
        </body>
      </div>
    );
  }
}

export default App;
