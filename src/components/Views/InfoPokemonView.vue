<template>
  <div id="app">
    <InfoPokemon
      v-if="pokemon"
      :idPokemon="pokemon._id"
      :nom="pokemon.nom"
      :image="pokemon.image"
      :type="pokemon.type"
      :pv="pokemon.pv"
      :defense="pokemon.defense"
    ></InfoPokemon>
  </div>
</template>

<script>
import InfoPokemon from "./../Pokemon/InfoPokemon";

export default {
  name: "InfoPokemonView",
  components: {
    InfoPokemon,
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemons.find(
        (pokemon) => pokemon._id === this.$route.params.id
      );
    },
  },
};
</script>