import Vue from "vue";
import Router from "vue-router";

import HelloVue from "@/components/HelloVue";
import JokeDetail from "@/components/JokeDetail";
import JokesList from "@/components/JokesList";

Vue.use(Router);

Vue.component(JokeDetail.name, JokeDetail);
Vue.component(JokesList.name, JokesList);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: HelloVue
    },
    {
      path: "/jokes",
      name: "Jokes",
      component: JokesList
    },
    {
      path: "/joke",
      name: "Joke",
      component: JokeDetail
    }
  ]
});
