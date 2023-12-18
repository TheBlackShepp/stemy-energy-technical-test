export type PokemonId = number
export type PokemonName = string
export type PokemonUrl = string

export interface Pokemon {
  id: PokemonId
  name: PokemonName
  url: PokemonUrl
}

export type ListOfPokemon = Pokemon[]
