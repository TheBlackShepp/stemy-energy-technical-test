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
        expect(responseFectch).not.toBeUndefined()
    })

    test('API return bulbasaur', async () => {
        if (responseFectch) {
            expect(responseFectch[0].name).toBe("bulbasaur")
        } else {
            throw new Error("Response is undefined")
        }
    })

    test('API return pidgey', async () => {
        if (responseFectch) {
            const isInclude: boolean = responseFectch.some(({name}) => name === "pidgey")
            expect(isInclude).toBeTruthy()
        } else {
            throw new Error("Response is undefined")
        }
    })
})
