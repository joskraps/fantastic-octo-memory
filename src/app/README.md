# Oracle Health - CareTracker interview app

# React + TypeScript + Vite

## Helpful links

- [Pokeapi docs](https://pokeapi.co/docs/v2)
- Fetch random pokemon: `GET https://pokeapi.co/api/v2/pokemon?limit=5&offset=5`
- Fetch info about a pokemon: `GET https://pokeapi.co/api/v2/pokemon/{id or name}/`
- Fetch pokemon image: `GET https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId}.png`

## Goals

### Create a component which will show five random pokemon cards

- API endpoint: `GET https://pokeapi.co/api/v2/pokemon?limit=5&offset=5`

### Create pokemon spotlight

- On the home page, show
- Search all pokemon

- create local storage provider/ hook to retrieve/save local storage value
- save last 10 pokemon results to local storage and load on app start
