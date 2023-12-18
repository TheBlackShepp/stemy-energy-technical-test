import React from 'react'
import { Pokemon } from './Pokemon'
import { type ListOfPokemon, type Pokemon as PokemonType } from '../types/Pokemon.d'

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
              id={p.id}
              name={p.name}
              url={p.url}
            />
        ))}
      </div>
    </div>
  )
}
