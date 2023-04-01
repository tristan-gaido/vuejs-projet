<template>
  <div class="container-all">
    <div class="container">
      <h1 class="card-title">{{ nom }} (Pokémon {{ type }})</h1>
      <div class="titleStat">
        <img :src="image" class="card-img-top" :alt="img" />
        <div class="content" id="stats">
          <p class="card-text">PV: {{ pv }}</p>
          <p class="card-text">Defense: {{ defense }}</p>
          <p class="card-text">
            Bulk :
            {{ bulkPokemon(pv, defense) }}
          </p>
        </div>
      </div>
      <div class="card-footer">
        <div class="content">
          <button
            v-if="isAuthenticated"
            class="btn-supprimer"
            @click="confirmDelete"
          >
            Supprimer
          </button>
        </div>
        <div class="content">
          <button class="btn-retour" @click="$router.go(-1)">Retour</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 12vh 0 0;
  width: 60%;
}
#stats {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.container-all {
  display: flex;
  justify-content: center;
}

.card-title {
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.titleStat {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

img {
  width: 30%;
  max-width: 300px;
}

.container {
  border: 8px solid #f5f5f5;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.btn-supprimer,
.btn-retour {
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #ad1f36;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
}

.btn-supprimer:hover,
.btn-retour:hover {
  background-color: red;
  cursor: pointer;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>



<script>
import { bus } from "./../../main";

export default {
  name: "InfoPokemon",
  components: {},
  props: {
    idPokemon: String,
    nom: String,
    type: String,
    pv: String,
    defense: String,
    image: String,
  },
  methods: {
    bulkPokemon(pv, defense) {
      return (parseFloat(pv) * parseFloat(defense)) / 100;
    },
    confirmDelete() {
      if (window.confirm(`Voulez vous vraiment supprimer ${this.nom} ?`)) {
        this.$store.dispatch("deletePokemon", this.idPokemon);
      }
      bus.$emit("pkmnupdate");
      this.$router.push("/");
    },
  },
  watch: {
    $store: {
      handler() {
        // actualiser la liste des pokemons
      },
      deep: true,
    },
  },

  data() {
    return {
      searchTerm: "",
      isAuthenticated: false,
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        this.isAuthenticated = true;
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
  },
};
</script>

