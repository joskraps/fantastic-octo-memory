import "./App.css";
import SearchPokemon from "./features/search/components/SearchPokemon";
import Spotlight from "./features/spotlight/components/Spotlight";

// https://pokeapi.co/api/v2/pokemon
const totalPokemon = 1302;

function App() {
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="flex flex-col">
          <div className="font-thin text-7xl text-center mt-4">
            My Pokemon App
          </div>
          <Spotlight totalPokemon={totalPokemon} />
          <SearchPokemon />
        </div>
      </div>
    </>
  );
}

export default App;
