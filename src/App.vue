<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <app-navigation></app-navigation>
      <section>
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view/>
        </fade-transition>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'

import AppHeader from "@/layout/AppHeader";
import AppNavigation from "@/layout/AppNavigation";
import AppFooter from "@/layout/AppFooter";

export default {
  name: "App",
  components: {
    FadeTransition,
    AppHeader,
    AppNavigation,
    AppFooter
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

main {
  display: -webkit-flex;
  display: flex;
}

@media (max-width: 600px) {
  main {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}

section {
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  background-color: #f1f1f1;
  padding: 10px;
}
</style>
