<template>
  <div>
    <h1>Pokédex</h1>
    <input
      type="text"
      v-model="searchTerm"
      placeholder="Rechercher un pokémon"
    />
    <div id="listePokemon">
      <transition-group name="fade" tag="ul">
        <CardPokemon
          v-for="pokemon in listPokemonfiltered"
          :key="pokemon.idPokemon"
          :idPokemon="pokemon.idPokemon"
          :nom="pokemon.nom"
          :type="pokemon.type"
          :image="pokemon.image"
          :pv="pokemon.pv"
          :defense="pokemon.defense"
        ></CardPokemon>
      </transition-group>
    </div>
  </div>
</template>

<script>
import CardPokemon from "./CardPokemon";

export default {
  name: "ListPokemon",
  components: {
    CardPokemon,
  },
  data() {
    return {
      searchTerm: "",
      isAuthenticated: false,
      counter: 0,
    };
  },

  async created() {
    // this.startInterval();

    const token = localStorage.getItem("token");
    if (token) {
      try {
        this.isAuthenticated = true;
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
  },

  methods: {
    startInterval() {
      setInterval(() => {
        this.counter++;
        this.loadData();
      }, 1000);
    },
    loadData() {},
  },

  computed: {
    listPokemonfiltered() {
      return this.listPokemons.filter((pokemon) => {
        return pokemon.nom
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
    listPokemons() {
      return this.$store.state.pokemons.map((pokemon) => {
        return {
          idPokemon: pokemon._id,
          nom: pokemon.nom,
          type: pokemon.type,
          image: pokemon.image,
          pv: pokemon.pv,
          defense: pokemon.defense,
        };
      });
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}

#listePokemon {
  display: flex;
  justify-content: space-evenly;
}

input[type="text"] {
  width: 35%;
  padding: 10px;
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
  height: 24px;
}

input[type="text"]::placeholder {
  color: #ccc;
  font-style: italic;
}

input[type="text"]:focus {
  width: 50%;
  font-size: 16px;
}

input[type="text"]:hover {
  background-color: #444;
}

/*fade group-transition*/
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>