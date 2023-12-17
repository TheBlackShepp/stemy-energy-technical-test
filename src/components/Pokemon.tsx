import { type Pokemon as PokemonType } from '../types/Pokemons.d'

export const Pokemon: React.FC<PokemonType> = ({ name, url }) => {
  return (
    <article className='flex-initial w-28 bg-white shadow'>
      <a
        href={url}
        className='w-full'
      >
        <figure>
          <img
            src="https://play-lh.googleusercontent.com/mEQTKXkEJ7QwSCmec-cIe9b-GlAMCsG9efBAQV6yUDN6DZVtEuM25A4zfMi47KDUej8=w240-h480-rw" alt="general image pokemon"
          />
        </figure>
        <h2 className='w-full m-2'>{name}</h2>
      </a>
    </article>
  )
}
