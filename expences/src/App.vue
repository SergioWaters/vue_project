<template>
  <div id="app">
    <AddExpence />
    <ExpencesList />
  </div>
</template>

<script>
import ExpencesList from "./components/ExpencesList.vue";
import AddExpence from "./components/AddExpence.vue";

export default {
  name: "App",
  components: {
    ExpencesList,
    AddExpence,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
