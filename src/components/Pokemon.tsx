import { type Pokemon as PokemonType } from '../types/Pokemon.d'

export const Pokemon: React.FC<PokemonType> = ({ id, name, url }) => {
  return (
    <article className='flex-initial w-28 bg-white shadow'>
      <a
        href={url}
        className='w-full'
      >
        <figure>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            alt={`${name} image`}
          />
        </figure>
        <h2 className='w-full m-2'>{name}</h2>
      </a>
    </article>
  )
}
