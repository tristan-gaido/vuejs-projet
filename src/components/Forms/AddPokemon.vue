<template>
  <div class="add-pokemon">
    <h1 class="add-pokemon__title">Ajouter un Pokémon</h1>
    <form class="add-pokemon__form" @submit.prevent="addPokemon">
      <div class="add-pokemon__form-group">
        <label class="add-pokemon__label" for="name">Nom</label>
        <input
          class="add-pokemon__input"
          type="text"
          id="name"
          v-model="name"
        />
      </div>
      <div class="add-pokemon__form-group">
        <label class="add-pokemon__label" for="type">Type</label>
        <input
          class="add-pokemon__input"
          type="text"
          id="type"
          v-model="type"
        />
      </div>
      <div class="add-pokemon__form-group">
        <label class="add-pokemon__label" for="pv">PV</label>
        <input class="add-pokemon__input" type="number" id="pv" v-model="pv" />
      </div>
      <div class="add-pokemon__form-group">
        <label class="add-pokemon__label" for="defense">Défense</label>
        <input
          class="add-pokemon__input"
          type="number"
          id="defense"
          v-model="defense"
        />
      </div>
      <div class="add-pokemon__form-group">
        <label class="add-pokemon__label" for="image">URL de l'image</label>
        <input
          class="add-pokemon__input"
          type="text"
          id="image"
          v-model="image"
        />
      </div>
      <button class="add-pokemon__submit-button" type="submit">Ajouter</button>
    </form>
  </div>
</template>

<style>
.add-pokemon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.add-pokemon__title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.add-pokemon__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
}

.add-pokemon__form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
}

.add-pokemon__label {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.add-pokemon__input {
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.add-pokemon__submit-button {
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

.add-pokemon__submit-button:hover {
  background-color: red;
  cursor: pointer;
}
</style>


<script>
import { bus } from "../../main";

export default {
  name: "AddPokemon",
  data() {
    return {
      name: "",
      image: "",
      pv: null,
      defense: null,
      type: "",
      isAuthenticated: false,
    };
  },
  methods: {
    addPokemon() {
      const pokemon = {
        nom: this.name,
        type: this.type,
        pv: this.pv,
        defense: this.defense,
        image: this.image,
      };
      console.log(pokemon);
      bus.$emit("pkmnupdate");

      this.$store.commit("addPokemon", pokemon);
      this.$router.push("/");
    },
  },
};
</script>

