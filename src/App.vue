<template>
  <div>
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { bus } from "./main";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  created() {
    bus.$on("pkmnupdate", (data) => {
      axios
        .get("https://pokemon-node-js.vercel.app/pokedex")
        .then((response) => {
          const jsonData = response.data;
          this.$store.commit("loadedPokemons", jsonData);
          console.log(jsonData);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    });
    axios
      .get("https://pokemon-node-js.vercel.app/pokedex")
      .then((response) => {
        const jsonData = response.data;
        this.$store.commit("loadedPokemons", jsonData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  },
};
</script>

<style>
/*fade transition*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

body {
  /* background-color: #29303d */
}
</style>


