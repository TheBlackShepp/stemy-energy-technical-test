import "@testing-library/jest-dom";
import { expect, test, describe, beforeAll } from "@jest/globals";
import { fetchPokemonsData } from "../../utils/api";
import { ListOfPokemon } from "../../types/Pokemons.d";

// Testing, nice!

// Your tests are calling an API. This indicates that they are integration tests, not unit tests.
// This is not necessary bad, they are testing that the API is not breaking the contract with the client.
// However, if the test suite is in CI, it could increase the costs due to increased usage.
describe("Suite Api", () => {
  let responseFectch: ListOfPokemon | undefined = undefined;

  beforeAll(async () => {
    responseFectch = await fetchPokemonsData();
  });

  test("API return not undefined", async () => {
    expect(responseFectch).not.toBeUndefined();
  });

  test("API return bulbasaur", async () => {
    if (responseFectch) {
      expect(responseFectch[0].name).toBe("bulbasaur");
    } else {
      throw new Error("Response is undefined");
    }
  });

  test("API return pidgey", async () => {
    if (responseFectch) {
      const isInclude: boolean = responseFectch.some(
        ({ name }) => name === "pidgey"
      );
      expect(isInclude).toBeTruthy();
    } else {
      throw new Error("Response is undefined");
    }
  });
});
