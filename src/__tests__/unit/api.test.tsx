import '@testing-library/jest-dom'
import { expect, test, describe, beforeAll} from '@jest/globals'
import { fetchPokemonsData } from '../../utils/api'
import { ListOfPokemon } from '../../types/Pokemons.d'

describe('Suite Api', () => {
    let responseFectch: ListOfPokemon | undefined = undefined

    beforeAll(async() => {
        responseFectch = await fetchPokemonsData()
    })

    test('API return not undefined', async () => {
        expect(responseFectch).not.toBeNull()
    })
})
