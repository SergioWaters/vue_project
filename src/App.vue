<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ModalView">Add</router-link>
    </nav>
    <main>
      <h1>Tag your Payments</h1>

      <router-link to="/ModalView/add">
        <button>Add New Expence</button>
      </router-link>
      <router-view />
    </main>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["fetchData"]),
  },
  created() {
    this.fetchData();
  },
  mounted() {},
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a .router-link-exact-active {
  color: #42b983;
}
</style>