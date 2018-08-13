<template>
  <nav>
    <ul>
      <li>
        <router-link :to="'/'">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="'/joke'">
          Joke
        </router-link>
      </li>
      <li>
        <router-link :to="'/jokes'">
          Jokes
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {}
</script>

<style scoped>
nav {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: #ccc;
  padding: 5px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}
</style>
