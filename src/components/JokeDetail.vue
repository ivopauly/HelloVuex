<template>
  <div class="joke-detail">
    <p>We kind of love Chuck Norris so much that we will use his code on multiple pages and even consider to re-use his related code somewhere else. Because we are not so fast as Chuck Norris we load the jokes async and do something when its ready.</p>
    <p>How could we do that?</p>
    <p>Use a State Module for all related Chuck Norris stuff and give it a Namespace as reference, so lets create ChuckNorrisModule and assign the namespace ChuckNorris to it in our store/index.js. </p>
    <pre>
      this.$store.dispatch({
        type: 'chuckNorris/getJoke',
        category: 'dev'
      }).then((res) => {
        console.log(res)
        this.joke = res
      })
    </pre>
    <p>This is a single async Chuck Norris joke:</p>
    <h3 v-if="joke">{{ joke.value }}</h3>
    <button @click="newJoke()">New Joke</button>
  </div>
</template>

<script>
export default {
  name: "JokeDetail",
  data() {
    return {
      joke: {}
    };
  },
  created: function () {
    this.newJoke();
  },
  methods: {
    newJoke() {
      this.$store.dispatch({
        type: 'chuckNorris/getJoke',
        category: 'dev'
      }).then((res) => {
        console.log(res)
        this.joke = res
        // Alternative to retrieve the result
        // this.joke = this.$store.state.chuckNorris.joke
        // console.log(this.joke)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
