# Oracle Health - CareTracker interview app

## React + TypeScript + Vite

## Helpful links

- [Pokeapi docs](https://pokeapi.co/docs/v2)
- Fetch random pokemon: `GET https://pokeapi.co/api/v2/pokemon?limit=5&offset=5`
- Fetch info about a pokemon: `GET https://pokeapi.co/api/v2/pokemon/{id or name}/`
- Fetch pokemon image: `GET https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId}.png`

## Goals

### Update Spotlight component to display five random Pokemon cards

- On render, fetch 5 random pokemon using the total pokemon count that is passed in.
- Once five random ids have been generated, fetch the pokemon information via this API endpoint: `GET https://pokeapi.co/api/v2/pokemon/{id or name}/`
- Each card should be styled with the id in the upper left hand corner, the image centered, and the name centered on the bottom.
- The image can be fetched with the following url (replace pokemonId with the current pokemon): `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId}.png`.
- The cards should be displayed in a flex row with a gap between the cards and centered within the parent container.

### Create pokemon search component

Text box to search for pokemon by full name (partial does not work with their api)

Displays previous search results from the current session

Button should be disabled on search

Search can either submit via a button click or auto submit (needs debounce)

How do you prevent multiple searches on each keystroke

Show each pokemon card using a flex row

#### Bonus

- Store results in localStorage. Hydrate previous search requests on load. Button to clear previous search results
