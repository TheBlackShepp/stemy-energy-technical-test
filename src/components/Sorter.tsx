import { useState } from 'react'
import { useContextFunctionsPokemon } from '../contexts/Pokemon.c'

export const Sorter: React.FC = () => {
  const [rotate, setRotate] = useState<string>('rotate-180')
  const { onSort } = useContextFunctionsPokemon()

  const handleClickButton = (): void => {
    onSort()
    setRotate(
      rotate === 'rotate-0'
        ? 'rotate-180'
        : 'rotate-0'
    )
  }

  return (
    <button className="w-min flex flex-row items-center" onClick={handleClickButton}>
      <p className="w-max">Sorter alphabet</p>
      <figure className={`ml-2 ${rotate} ease-out duration-300`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </figure>
    </button>
  )
}
