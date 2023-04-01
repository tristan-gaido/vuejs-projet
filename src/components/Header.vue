<template>
  <header class="navbar">
    <div class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
        alt="Logo"
      />
    </div>
    <nav class="nav">
      <router-link class="nav-link" to="/">Pokedex</router-link>
      <router-link v-if="isAuthenticated" class="nav-link" to="/add"
        >Ajouter</router-link
      >

      <router-link v-if="!isAuthenticated" class="nav-link" to="/login"
        >Connexion</router-link
      >
      <router-link v-if="!isAuthenticated" class="nav-link" to="/register"
        >Inscription</router-link
      >
      <span @click="logout()"
        ><router-link v-if="isAuthenticated" class="nav-link" to="/"
          >Se Déconnecter</router-link
        ></span
      >
    </nav>
  </header>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
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
    logout() {
      localStorage.removeItem("token");
      this.isAuthenticated = false;
      this.$router.push({ path: "/" });
      window.location.reload();
    },
  },
};
</script>


<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ad1f36;
  color: #fff;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: solid 3px black;
}

.navbar::after {
  content: "";
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: -25px;
  left: calc(50% - 25px);
  background-color: #fff;
  border-radius: 50%;
  border: solid 4px black;
}

.navbar::before {
  content: "";
  display: block;
  position: absolute;
  width: calc(100% - 4px);
  height: 2px;
  bottom: 0;
  left: 2px;
  background-color: #000;
}

.logo img {
  height: 50px;
  margin-right: 20px;
}

.nav-link {
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin-right: 20px;
}

.nav-link:hover {
  border-color: #fff;
  background-color: #fff;
  color: #ad1f36;
}

.nav-link:hover .logo img {
  border-color: transparent;
}

.navbar-brand {
  margin-right: 20px;
}
</style>
