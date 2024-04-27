import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import MainButton from "../components/MainButton";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.deno.dev/pokemon/${id}`
        );
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <div>
      <div className="py-4 px-20 flex items-center justify-center gap-10 bg-[#f1d287]">
        <div className="absolute left-10">
          <Link to="/pokemons">
            <MainButton text="Back" />
          </Link>
        </div>
        <Link to="/">
          <img
            src="pokemon-project/public/pokemon-logo.png"
            width={200}
            alt="Pokemon Logo"
          />
        </Link>
      </div>
      <div className="bg-[#faeace] min-h-[82vh] py-10 px-8 flex flex-col gap-8">
        <h1 className="text-[#4A4A41] text-left text-2xl font-semibold">
          Pokemon Detail:
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="pokemon-card-detail w-full h-96 relative bg-white rounded-2xl shadow-lg flex justify-between py-5">
              <div className="w-1/3 flex flex-col items-center">
                <div className="w-full flex px-4 gap-2">
                  <div className="px-3 py-2 bg-[#E64131] rounded-3xl text-white text-sm font-bold leading-tight">
                    0{pokemon.id}
                  </div>
                  <div className="items-center gap-1 inline-flex">
                    <div className="text-[#E64131] text-lg font-extrabold leading-7">
                      {pokemon.name}
                    </div>
                    <div className="flex gap-1">
                      {pokemon.types.map((type, index) => (
                        <div
                          key={index}
                          className="px-2 py-2 bg-[#f1d287] rounded-2xl flex"
                        >
                          <div className="text-[#4A4A41] text-xs font-medium leading-none">
                            {type}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="w-64"
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                  />
                  <div className="w-1/3 left-[20px] bottom-[10px] absolute flex-col justify-start items-start gap-1 inline-flex">
                    <div className="gap-1 inline-flex flex-wrap">
                      {pokemon.stats &&
                        Object.keys(pokemon.stats).map((key, index) => (
                          <div
                            key={index}
                            className="p-1 bg-gray-100 rounded gap-1 flex"
                          >
                            <div className="text-[#4A4A41] text-xs font-normal leading-none">
                              {key}
                            </div>
                            <div className="text-[#4A4A41] text-xs font-bold leading-none">
                              {pokemon.stats[key]}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 h-96 right-[0] top-[0] rounded-xl absolute bg-[#f1d287]" />
              <div className="absolute left-1/3 top-0 px-4 py-2 text-justify flex flex-col gap-2">
                <div>
                  <h3 className="text-lg font-medium text-[#E64131]">Genus:</h3>
                  <p className="text-[#4A4A41]">{pokemon.genus}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#E64131]">
                    Description:
                  </h3>
                  <p className="text-[#4A4A41]">{pokemon.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#E64131]">
                    Locations:
                  </h3>
                  {pokemon.locations.slice(0, 4).map((item, index) => (
                    <p key={index} className="text-[#4A4A41]">
                      - {item}
                    </p>
                  ))}
                  <div>
                    <h3 className="text-lg font-medium text-[#E64131]">
                      Abilities:
                    </h3>
                    {pokemon.abilities.map((item, index) => (
                      <p key={index} className="text-[#4A4A41]">
                        - {item.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;
