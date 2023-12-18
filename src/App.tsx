import { useEffect } from 'react'
import axios from 'axios'
import { Pokemons } from './components/Pokemons'
import { Header } from './components/Header'
import { ContextProvider } from './contexts/Pokemon.c'
import { usePokemonContextFunctions } from './utils/usePokemonContextFunctions'
import { REQUEST_SATUS, URL } from './consts'

const App = (): JSX.Element => {
  const { pokemonsFiltered, setPokemonsFiltered, setPokemons, handleFilter, handleSort } = usePokemonContextFunctions()

  const fetchData = async (): Promise<void> => {
    try {
      const response = await axios.get(URL);

      if (response.status !== REQUEST_SATUS.ok) {
        throw new Error('Network response was not ok');
      }

      const data = response.data;

      setPokemons(data.results)
      setPokemonsFiltered(data.results)
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
