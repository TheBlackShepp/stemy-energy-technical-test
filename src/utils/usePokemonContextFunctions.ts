import { useState } from "react";
import { type Pokemon, type PokemonName } from "../types/Pokemon";
import { type ListOfPokemon } from "../types/Pokemons.d";
import { SORT_ALPHABET } from "../consts";

interface ReturnPokemonContextFunctions {
  pokemonsFiltered: ListOfPokemon;
  setPokemonsFiltered: (pokemons: ListOfPokemon) => void;
  setPokemons: (pokemons: ListOfPokemon) => void;
  handleFilter: (name: PokemonName) => void;
  handleSort: () => void;
}

export const usePokemonContextFunctions = (): ReturnPokemonContextFunctions => {
  // Having two states for pokemonList, one filtered and one unfiltered is a bad practice. Whenever you have "derived" states
  // from another state, it's best to calculate them when rendering, not to have them duplicated. This is because you can
  // easily get into a situation where the two states are out of sync, and you have to remember to update both of them.
  const [pokemons, setPokemons] = useState<ListOfPokemon>([]);

  // I would remove this state
  const [pokemonsFiltered, setPokemonsFiltered] = useState<ListOfPokemon>([]);

  // This is similar to what I was proposing in the other component, but with object instead of strings
  // I appreciate that you didn't use an enum, which are a bit controversial. Instead you used an object
  // marked `as const`. This is a good practice.
  const [typeSort, setTypeSort] = useState<number>(SORT_ALPHABET.ASCENDING);

  // I would just set a state variable for the filter string, and then calculate the filtered list when rendering
  const handleFilter = (name: PokemonName): void => {
    const trimmedLowerCaseName = name.trim().toLowerCase();
    const newPokemons = pokemons.filter((p: Pokemon) =>
      p.name.includes(trimmedLowerCaseName)
    );
    setPokemonsFiltered(newPokemons);
  };

  // Same for sorting. I would just set a state variable for the sort type, and then calculate the sorted list when rendering
  const handleSort = (): void => {
    const newTypeSort: number =
      typeSort === SORT_ALPHABET.DESCENDING
        ? SORT_ALPHABET.ASCENDING
        : SORT_ALPHABET.DESCENDING;
    const newPokemons = [...pokemonsFiltered].sort(
      (p1: Pokemon, p2: Pokemon) => p1.name.localeCompare(p2.name) / newTypeSort
    );

    setPokemonsFiltered(newPokemons);
    setTypeSort(newTypeSort);
  };

  return {
    pokemonsFiltered,
    setPokemonsFiltered,
    setPokemons,
    handleFilter,
    handleSort,
  };
};
