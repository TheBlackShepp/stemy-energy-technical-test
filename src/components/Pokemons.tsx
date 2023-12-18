import React from "react";
import { Pokemon } from "./Pokemon";
import { type ListOfPokemon } from "../types/Pokemons.d";
import { type Pokemon as PokemonType } from "../types/Pokemon";

interface Props {
  pokemons: ListOfPokemon;
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="w-full">
      <div className="container w-full mx-auto flex flex-wrap gap-1">
        {/* Using the map's index as a key is not a good practice, better to use something unique like the pokemon's name or id. */}
        {pokemons.map((p: PokemonType) => (
          <Pokemon key={p.name} name={p.name} url={p.url} />
        ))}
      </div>
    </div>
  );
};
