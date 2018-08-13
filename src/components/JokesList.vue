<template>
  <div class="jokes-list">
    <p v-if="!jokes.length">{{ msg }}</p>
    <h4 v-if="jokes.length">Your personal history of jokes:</h4>
    <ul v-if="jokes.length">
      <li v-for="joke in jokes">
        {{ joke.value }}
      </li>
    </ul>
    <p>Did you know what your total jokes + the Count value is?</p>
    <p>This is done by using a getter in the state module and use the rootState value:</p>
    <pre>this.$store.getters['chuckNorris/sumWithRootCount']</pre>
    <p>Result</p>
    <pre v-if="totalCount">{{ totalCount }}</pre>
  </div>
</template>

<script>
export default {
  name: "JokesList",
  data: () => ({
    msg: "Visit the Joke page and click on the button to fill your joke list history.",
    jokes: null,
    totalCount: 0
  }),
  created: function () {
    // State Module ChuckNorris
    this.jokes = this.$store.state.chuckNorris.jokes
    // Demonstrates the combined power of rootState and 'moduleState' 
    this.totalCount = this.$store.getters['chuckNorris/sumWithRootCount']
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
