import "./App.css";
import Spotlight from "./features/spotlight/components/Spotlight";

const totalPokemon = 1025;

function App() {
  return (
    <>
      <div className="container mx-auto h-screen">
        <div className="flex flex-col">
          <div className="font-thin text-7xl text-center mt-4">
            My Pokemon App
          </div>
          <Spotlight totalPokemon={totalPokemon} />
          {/* The search and results will allow the user to seach for a pokemon and display not only the current search result but the previous search results as well (up to 20) */}
          <div className="bg-slate-400 w-full min-h-[400px] mt-4">
            <div>Search and results</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
