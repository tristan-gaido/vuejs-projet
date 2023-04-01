<template>
  <div id="app">
    <Header />
    <ListPokemon id="listePkmn" :pokemons="pokemons" />
    <Footer />
  </div>
</template>

<script>
import ListPokemon from "./../Pokemon/ListPokemon";
import Header from "./../Header";
import Footer from "./../Footer";

export default {
  name: "PokedexView",
  components: {
    ListPokemon,
    Header,
    Footer,
  },
  data() {
    return {
      pokemons: this.$store.state.count,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#listePkmn {
  margin-top: 12vh;
}
</style>
