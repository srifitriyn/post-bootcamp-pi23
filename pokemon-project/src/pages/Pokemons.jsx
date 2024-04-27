import { useEffect, useState } from "react";
import axios from "axios";
import { TextInput } from "flowbite-react";
import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getDataPokemon();
  }, []);

  const getDataPokemon = async () => {
    try {
      const { data } = await axios("https://pokeapi.deno.dev/pokemon?limit=20");
      setPokemons(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="py-4 px-20 flex items-center justify-between gap-10 bg-[#f1d287]">
        <Link to="/">
          <img
            src="./src/assets/pokemon-logo.png"
            width={200}
            alt="Pokemon Logo"
          />
        </Link>
        <TextInput
          className="rounded-lg border-none"
          id="search"
          type="text"
          placeholder="Search your fighter..."
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>
      <div className="wrapper">
        {loading ? (
          <span>Loading...</span>
        ) : (
          filteredPokemons.map((item) => (
            <div
              key={item.id}
              className="pokemon-card w-64 h-96 relative bg-white rounded-2xl shadow-lg flex flex-col justify-between items-center"
            >
              <img
                className="w-60 h-52 left-[8px] top-[10px] absolute"
                src={item.imageUrl}
                alt={item.name}
              />
              <div className="detail-button absolute inset-0 flex items-center justify-center opacity-0 invisible">
                <Link to={`/pokemons/${item.id}`}>
                  <MainButton text="Detail" />
                </Link>
              </div>
              <div className="w-64 h-40 left-[0px] top-[225px]  rounded-xl absolute bg-[#f1d287]" />
              <div className="px-3 py-2 right-[10px] top-[16px] absolute bg-[#E64131] rounded-3xl">
                <div className="text-white text-sm font-bold leading-tight">
                  0{item.id}
                </div>
              </div>
              <div className="left-[20px] top-[238px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="items-center gap-1 inline-flex">
                  <div className="text-[#E64131] text-lg font-extrabold leading-7">
                    {item.name}
                  </div>
                  <div className="flex gap-1">
                    {item.types.map((type, index) => (
                      <div
                        key={index}
                        className="px-2 py-2 bg-[#4A4A41] rounded-2xl flex"
                      >
                        <div className="text-white text-xs font-bold leading-none">
                          {type}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-gray-500 text-xs font-medium leading-none">
                  {item.genus}
                </div>
              </div>
              <div className="left-[20px] top-[292px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="gap-1 inline-flex flex-wrap">
                  {item.stats &&
                    Object.keys(item.stats).map((key, index) => (
                      <div
                        key={index}
                        className="p-1 bg-gray-100 rounded gap-1 flex"
                      >
                        <div className="text-[#4A4A41] text-xs font-normal leading-none">
                          {key}
                        </div>
                        <div className="text-[#4A4A41] text-xs font-bold leading-none">
                          {item.stats[key]}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
export default Pokemons;
