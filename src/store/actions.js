export default {
  addPokemon({ commit }, pokemon) {
    commit("addPokemon", pokemon);
  },
  deletePokemon({ commit }, pokemon) {
    commit("deletePokemon", pokemon);
  }
};
