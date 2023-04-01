<template>
  <div>
    <h2 class="form-title">Inscription</h2>
    <form class="form" @submit.prevent="register">
      <div class="form-group">
        <label class="form-label" for="email">Adresse email:</label>
        <input
          class="form-input"
          type="email"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="password">Mot de passe:</label>
        <input
          class="form-input"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button class="form-button" type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<style>
.form {
  max-width: 400px;
  margin: auto;
  margin-top: 12.5vh;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 10px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 16px;
}

button[type="submit"] {
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

button[type="submit"]:hover {
  background-color: red;
  cursor: pointer;
}
</style>


<script>
import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const response = await axios.post(
        "https://pokemon-node-js.vercel.app/register",
        {
          email: this.email,
          password: this.password,
        }
      );
      console.log(response);
    },
  },
};
</script>
