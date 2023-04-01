<template>
  <div id="#app">
    <div class="container-comparison">
      <div class="blast-resistance">{{ pvCompare }}</div>
      <div class="hardness">{{ defenseCompare }}</div>
      <div class="hardness">{{ bulkCompare }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComparisonPokemon",
  components: {},
  props: {
    pvCompare: String,
    defenseCompare: String,
    bulkCompare: String,
  },
};
</script>
<style scoped>
.container-comparison {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
  gap: 2.5vh;
  margin-top: 25.5vh;
  border: 8px solid #f5f5f5;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
}
</style>