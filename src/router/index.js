import Vue from "vue";
import Router from "vue-router";
import PokedexView from "@/components/Views/PokedexView";
import InfoPokemonView from "@/components/Views/InfoPokemonView";
import ComparePokemonView from "@/components/Views/ComparePokemonView";
import FormCRUDPokemon from "@/components/Views/FormCRUDPokemon";
import RegisterView from "@/components/Views/RegisterView";
import LoginView from "@/components/Views/LoginView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "PokedexView",
      component: PokedexView
    },
    {
      path: "/pkmn/:id",
      name: "InfoPokemonView",
      component: InfoPokemonView
    },
    {
      path: "/comparepkmn/:id1/:id2",
      name: "ComparePokemonView",
      component: ComparePokemonView
    },
    {
      path: "/add/",
      name: "FormCRUDPokemon",
      component: FormCRUDPokemon
    },
    {
      path: "/register/",
      name: "RegisterView",
      component: RegisterView
    },
    {
      path: "/login/",
      name: "LoginView",
      component: LoginView
    }
  ]
});
