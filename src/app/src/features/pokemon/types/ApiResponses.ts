// GET https://pokeapi.co/api/v2/pokemon?limit=5&offset=5
export type AllPokemonResults = {
  count: number;
  next?: string;
  previous?: string;
  results: AllPokemonResult[];
};

export type AllPokemonResult = {
  name: string;
  url: string;
};
