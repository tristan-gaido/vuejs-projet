<template>
  <div>
    <input
      v-on:change="updateCheckedBoxes"
      type="checkbox"
      :id="idPokemon"
      class="hidden"
    />
    <label :for="idPokemon">
      <div class="card">
        <div class="card-header">{{ nom }}</div>
        <div class="card-body">
          <div class="card-image">
            <img
              :src="image"
              class="card-img-top"
              style="max-width: 300px; max-height: 300px"
              alt="name"
            />
          </div>
          <div class="card-stats">
            <p>Type : {{ type }}</p>
            <p>PV : {{ pv }}</p>
            <p>Defense : {{ defense }}</p>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-center">
          <router-link
            :to="{
              name: 'InfoPokemonView',
              params: {
                id: idPokemon,
              },
            }"
            class="btn btn-voir"
          >
            Voir
          </router-link>
          <button
            v-if="isAuthenticated"
            class="btn btn-voir"
            @click="confirmDelete"
          >
            Supprimer
          </button>
        </div>
      </div>
    </label>
  </div>
</template>



<script>
import { bus } from "../../main";
import { mapState } from "vuex";

export default {
  name: "CardPokemon",
  props: {
    idPokemon: String,
    nom: String,
    type: String,
    pv: String,
    defense: String,
    image: String,
  },
  computed: {
    ...mapState(["items"]),
  },

  data() {
    return {
      checkedBoxes: [],
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
  methods: {
    confirmDelete() {
      if (window.confirm(`Voulez vous vraiment supprimer ${this.nom} ?`)) {
        this.$store.dispatch("deletePokemon", this.idPokemon);
      }
      bus.$emit("pkmnupdate");
      window.location.reload();
      this.$router.push("/");
    },
    updateCheckedBoxes() {
      const checked = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
      );
      this.checkedBoxes = checked.map((box) => box.id);
      if (this.checkedBoxes.length > 1) {
        this.$router.push({
          name: "ComparePokemonView",
          params: {
            id1: this.checkedBoxes[0],
            id2: this.checkedBoxes[1],
          },
        });
        bus.$emit("compare", this.checkedBoxes);
      }
    },
  },
};
</script>

<style scoped>
input[type="checkbox"]:checked + label > div.card {
  border: 2px solid #f00;
  box-shadow: 0px 0px 5px #f00;
}
.card {
  margin-bottom: 20px;
  border: solid 2px #ccc;
  border-radius: 10px;
  overflow: hidden;
}

.card-header {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  background-color: #ad1f36;
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-bottom: 2px solid #000;
  position: relative;
}

.card-header::after {
  content: "";
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
}

.card-body {
  display: flex;
  flex-direction: row;
}

.card-image {
  flex: 1;
  text-align: center;
  padding: 10px;
}

.card-stats {
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.btn-voir {
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: #ad1f36;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.btn-voir:hover {
  background-color: red;
}

.hidden {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.card-footer {
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: center;
}
</style>



