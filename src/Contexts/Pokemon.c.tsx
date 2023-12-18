import { type ReactNode, createContext, useContext } from 'react'
import { type PokemonName } from '../types/Pokemon.d'

interface TypeFunctionFilter {
  onFilter: (name: PokemonName) => void
  onSort: () => void
}
interface ContextProviderProps {
  onFilter: (name: PokemonName) => void
  onSort: () => void
  children: ReactNode
}

const PokemonFuntionsContext = createContext<TypeFunctionFilter | null>(null)

export const useContextFunctionsPokemon = (): TypeFunctionFilter => {
  const currentUserContext = useContext(PokemonFuntionsContext)

  if (!currentUserContext) {
    throw new Error(
      'useCurrentUser has to be used within <CurrentUserContext.Provider>'
    )
  }

  return currentUserContext
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ onFilter, onSort, children }) => {
  return (
    <PokemonFuntionsContext.Provider value={{ onFilter, onSort }}>
      {children}
    </PokemonFuntionsContext.Provider>
  )
}
