import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Pokemons from "./pages/Pokemons";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/pokemons" element={<Pokemons />}/>
        <Route path="/pokemons/:id" element={<PokemonDetail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
