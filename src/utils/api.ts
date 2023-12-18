import axios from "axios";
import { REQUEST_SATUS, URL } from "../consts";
import { ListOfPokemon } from "../types/Pokemons.d";

export const fetchPokemonsData = async (): Promise<ListOfPokemon> => {
  try {
    const response = await axios.get(URL);

    if (response.status !== REQUEST_SATUS.ok) {
      throw new Error("Network response was not ok");
    }
    // You are assuming that the response will be of type ListOfPokemon, but you are not checking it in runtime.
    // However, you are covering this with tests.
    // There are libraries that can help you with this, like zod.
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Catching the error and then rethrowing it is a bit weird. You could just remove the try/catch block
    // Not your fault, exceptions and other hidden control flow mechanisms are a bit weird in general.
    throw error;
  }
};
