export default {
  getPokemonById: (state) => (id) => {
    return state.pokemons.find((p) => p._id === id);
  },
  getPokemon(state) {
    return state.pokemons;
  }
};
