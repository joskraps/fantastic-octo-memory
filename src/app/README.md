# Oracle Health - Care Tracker interview app (React + TypeScript/JS + Vite)

**No external sources may be used** - all resources and documentation will be provided. Read through the goal description and requirements carefully. Tailwind is used for stying with this app so if you are not familiar, describe how you would create the style using css and I will translate to Tailwind classes.

## Resources

- [Pokeapi docs](https://pokeapi.co/docs/v2)
- [1] Fetch info about a pokemon: `GET https://pokeapi.co/api/v2/pokemon/{id or name}/`
- [2] Fetch pokemon image: `GET https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId}.png`
- [3] Fetch random pokemon: `GET https://pokeapi.co/api/v2/pokemon?limit=5&offset=5`
- [4] Random number generator: `Math.floor(Math.random() * {MAX} + 1);` - replace MAX
- [5] `await new Promise(f => setTimeout(f, {TIME_IN_MS}));` - replace TIME_IN_MS

## Goal 1 - Spotlight component with random pokemon

Modify the existing Spotlight component (Spotlight.tsx or SpotlightJS.jsx) to display five random pokemon (using the pokemon id). We will assume that pokemon ids are sequential from 1-1025

Each pokemon should be displayed in a card with the id in the upper left corner, the image centered in middle, and the pokemon name centered on the bottom. The image can be fetched using [2] and the pokemon id.

### Requirements

- Fetch five random pokemon using [1] and [4] above
- Display each pokemon using a card that has the id in the upper left corner, the image centered in middle (use [2] and pokemon id), and the pokemon name centered on the bottom.
- Submit button should be disabled while searching (add a 2 second wait)
- Display each card in a flex row with a gap between each card

#### Extras

- Calculate each pokemon's BMI and display it on the card under the name. BMI is calculated by multiplying the weight in pounds by 703, divide that by height in inches (12 inches in a foot), and divide that result by the height in inches again. We will assume that the weight is returned in pounds and the height is returned in feet.
- Discuss how you would prevent cards shown in the last hour from showing up.

## Goal 2 - Pokemon search component

Create a component that will allow the user to search for a particular pokemon. The search api does not work with partial names - it must be the full pokemon name. Each search that returns a pokemon will add a card representing that pokemon to the component.

### Requirements

- Display a search input and submit button
- Upon submit, call the pokemon api [1] with the name or id (can be either)
- Display each pokemon using a card that has the id in the upper left corner, the image centered in middle (use [2] and pokemon id), and the pokemon name centered on the bottom.
- Display each card in a flex row with a gap between each card

### Extras

- Allow the search field to auto-search once user is done typing. How would you prevent each keystroke from sending a search request?
- How would you prevent duplicate searches from actually calling the api?
- Persist previous seach results to local storage. Add a button to clear history. Upon reload, hydrate the search results with the previous 10 searchs.

## Examples

### Await delay

```typescript
await new Promise((f) => setTimeout(f, { TIME_IN_MS })); // replace TIME_IN_MS
```

### Generate random number

```typescript
const randomNumber = Math.floor(Math.random() * { MAX } + 1); // replace MAX
```

### Sample request

```typescript
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
const responseJson = await response.json(); // this object will be the sample response below
```

### Sample response

```json
{
    ...
    id:132
    name:"ditto"
    height:3
    weight:40
    ...
}
```
