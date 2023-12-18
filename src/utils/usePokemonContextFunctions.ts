import { useState } from 'react'
import { type ListOfPokemon, type Pokemon, type PokemonName } from '../types/Pokemon.d'
import { TypeApiResponseElement, TypeResponseApi } from '../types'
import { SORT_ALPHABET } from '../consts'

interface ReturnPokemonContextFunctions {
  pokemonsFiltered: ListOfPokemon
  setPokemonsFiltered: (pokemons: ListOfPokemon) => void
  setPokemons: (pokemons: ListOfPokemon) => void
  handleFilter: (name: PokemonName) => void
  handleSort: () => void
  convertResponseToPokemons: (response: TypeResponseApi) => ListOfPokemon
}

export const usePokemonContextFunctions = (): ReturnPokemonContextFunctions => {
  const [pokemons, setPokemons] = useState<ListOfPokemon>([])
  const [pokemonsFiltered, setPokemonsFiltered] = useState<ListOfPokemon>([])
  const [typeSort, setTypeSort] = useState<number>(SORT_ALPHABET.ASCENDING)

  const convertResponseToPokemons = (responseApi: TypeResponseApi): ListOfPokemon => {
    return responseApi.map((ele: TypeApiResponseElement) => ({
      id: Number( (ele.url.match(/\/([^/]+)\/?$/) || [])[1] || -1  ),
      name: ele.name,
      url: ele.url
    }))
  }

  const handleFilter = (name: PokemonName): void => {
    const trimmedLowerCaseName = name.trim().toLowerCase()
    const newPokemons = pokemons.filter((p: Pokemon) => p.name.includes(trimmedLowerCaseName))
    setPokemonsFiltered(newPokemons)
  }

  const handleSort = (): void => {
    const newTypeSort: number = typeSort === SORT_ALPHABET.DESCENDING ? SORT_ALPHABET.ASCENDING : SORT_ALPHABET.DESCENDING
    const newPokemons = [...pokemonsFiltered].sort((p1: Pokemon, p2: Pokemon) => p1.name.localeCompare(p2.name) / newTypeSort)

    setPokemonsFiltered(newPokemons)
    setTypeSort(newTypeSort)
  }

  return { pokemonsFiltered, setPokemonsFiltered, setPokemons, handleFilter, handleSort, convertResponseToPokemons }
}
