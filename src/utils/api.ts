import axios from "axios"
import { REQUEST_SATUS, URL } from "../consts"
import { TypeResponseApi } from "../types"


export const fetchPokemonsData = async (): Promise<TypeResponseApi> => {
    try {
        const response = await axios.get(URL)

        if (response.status !== REQUEST_SATUS.ok) {
            throw new Error('Network response was not ok')
        }

        return response.data.results
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
  }
