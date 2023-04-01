<template>
  <div id="app" class="container-comparison">
    <InfoPokemon
      :nom="pokemon1.nom"
      :image="pokemon1.image"
      :type="pokemon1.type"
      :pv="pokemon1.pv"
      :defense="pokemon1.defense"
    ></InfoPokemon>
    <ComparisonPokemon
      :pvCompare="
        parseInt(pokemon1.pv) > parseInt(pokemon2.pv)
          ? '+' + (parseInt(pokemon1.pv) - parseInt(pokemon2.pv)).toString()
          : parseInt(pokemon1.pv) === parseInt(pokemon2.pv)
          ? '0'
          : '-' + (parseInt(pokemon2.pv) - parseInt(pokemon1.pv)).toString()
      "
      :defenseCompare="
        parseInt(pokemon1.defense) > parseInt(pokemon2.defense)
          ? '+' +
            (parseInt(pokemon1.defense) - parseInt(pokemon2.defense)).toString()
          : parseInt(pokemon1.defense) === parseInt(pokemon2.defense)
          ? '0'
          : '-' +
            (parseInt(pokemon2.defense) - parseInt(pokemon1.defense)).toString()
      "
      :bulkCompare="
        (parseInt(pokemon1.pv) * parseInt(pokemon1.defense)) / 100 >
        (parseInt(pokemon2.pv) * parseInt(pokemon2.defense)) / 100
          ? '+' +
            (
              (parseInt(pokemon1.pv) * parseInt(pokemon1.defense)) / 100 -
              (parseInt(pokemon2.pv) * parseInt(pokemon2.defense)) / 100
            )
              .toFixed(0)
              .toString()
          : (parseInt(pokemon1.pv) * parseInt(pokemon1.defense)) / 100 ===
            (parseInt(pokemon2.pv) * parseInt(pokemon2.defense)) / 100
          ? '0'
          : '-' +
            (
              (parseInt(pokemon2.pv) * parseInt(pokemon2.defense)) / 100 -
              (parseInt(pokemon1.pv) * parseInt(pokemon1.defense)) / 100
            )
              .toFixed(0)
              .toString()
      "
    ></ComparisonPokemon>
    <InfoPokemon
      :nom="pokemon2.nom"
      :image="pokemon2.image"
      :type="pokemon2.type"
      :pv="pokemon2.pv"
      :defense="pokemon2.defense"
    ></InfoPokemon>
  </div>
</template>


<script>
import ComparisonPokemon from "./../Pokemon/ComparisonPokemon";
import InfoPokemon from "./../Pokemon/InfoPokemon";

export default {
  name: "ComparePokemonView",
  components: {
    InfoPokemon,
    ComparisonPokemon,
  },
  props: {},
  computed: {
    pokemon1() {
      return this.$store.state.pokemons.find(
        (pokemon) => pokemon._id === this.$route.params.id1
      );
    },
    pokemon2() {
      return this.$store.state.pokemons.find(
        (pokemon) => pokemon._id === this.$route.params.id2
      );
    },
  },

  data() {
    return {
      pokemons: [],
      pvCompare: "",
      defenseCompare: "",
      bulkCompare: "",
    };
  },
};
</script>

<style lang="stylus" scoped>
.container-comparison {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}
</style>