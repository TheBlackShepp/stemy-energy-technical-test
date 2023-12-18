import { useEffect } from 'react'
import { Pokemons } from './components/Pokemons'
import { Header } from './components/Header'
import { ContextProvider } from './contexts/Pokemon.c'
import { usePokemonContextFunctions } from './utils/usePokemonContextFunctions'
import { fetchPokemonsData } from './utils/api'
import { ListOfPokemon } from './types/Pokemon'

const App = (): JSX.Element => {
  const { pokemonsFiltered, setPokemonsFiltered, setPokemons, handleFilter, handleSort, convertResponseToPokemons } = usePokemonContextFunctions()

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetchPokemonsData()
      const listPokemons: ListOfPokemon = convertResponseToPokemons(response)
      
      setPokemons(listPokemons)
      setPokemonsFiltered(listPokemons)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <ContextProvider onFilter={handleFilter} onSort={handleSort}>
        <Header />
      </ContextProvider>

      <Pokemons
        pokemons={pokemonsFiltered}
      />
    </div>
  )
}

export default App
