<template>
  <div class="helloVue">
    <p>This is a Vue(x) demo about using the Vuex core concepts focused with namespaced modules in object-style.</p>
    <p>The default Count value is set in the store/state.js to:</p>
    <pre>100</pre>
    <p>The Count value is increased by 1 by a normal store mutation when this component is created:</p>
    <pre v-if="count">{{ count }}</pre>
    <p>Not yet verry special, please switch the tabs and see that this value remains and will increase.</p>
    <p>If you are done watching for the Count value and had a look at the console and code than proceed on the Joke page.</p>
  </div>
</template>

<script>
export default {
  name: "HelloVue",
  data() {
    return {
      count: 0,
      fakeCount: 0,
    };
  },
  created: function () {
    // Trigger a mutation inside the state module
    this.$store.commit({
      type: 'increment',
      amount: 1
    })
    this.count = this.$store.state.count

    // Trigger a action inside the state module
    this.$store.dispatch({
      type: 'fakePromise',
      amount: 4321
    }).then((res) => {
      console.log('Did you see me do async counting? hiddenCount:', this.$store.state.hiddenCount)
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
