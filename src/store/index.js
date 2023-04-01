import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

console.log("salut");
console.log(localStorage.getItem("token"));

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: []
  },
  mutations: {
    loadedPokemons(state, pokemons) {
      state.pokemons = pokemons;
    },
    async addPokemon(state, pokemon) {
      const response = await axios.post(
        "https://pokemon-node-js.vercel.app/add",
        {
          name: pokemon.nom,
          type: pokemon.type,
          pv: pokemon.pv,
          defense: pokemon.defense,
          image: pokemon.image
        }
      );
      state.pokemons.push(pokemon);
    },
    async deletePokemon(state, pokemonId) {
      const response = await axios.delete(
        "https://pokemon-node-js.vercel.app/delete/" + pokemonId,
        {
          id: pokemonId
        }
      );
    }
  },
  getters,
  actions
});
