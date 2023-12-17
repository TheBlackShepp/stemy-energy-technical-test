import React from 'react'
import { Pokemon } from './Pokemon'
import { type ListOfPokemon } from '../types/Pokemons.d'
import { type Pokemon as PokemonType } from '../types/Pokemon'

interface Props {
  pokemons: ListOfPokemon
}

export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className='w-full'>
      <div className='pokemon-list container w-full mx-auto flex flex-wrap gap-1'>
        {pokemons.map((p: PokemonType, ite: number) => (
            <Pokemon
              key={ite}
              name={p.name}
              url={p.url}
            />
        ))}
      </div>
    </div>
  )
}
