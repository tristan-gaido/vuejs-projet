<template>
  <div id="app">
    <AddPokemon></AddPokemon>
  </div>
</template>

<script>
import AddPokemon from "./../Forms/AddPokemon";

export default {
  name: "FormCRUDPokemon",
  components: {
    AddPokemon,
  },
};
</script>