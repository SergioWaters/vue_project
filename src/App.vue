<template>
  <div id="app">
    <nav><router-link to="/">Home</router-link> |</nav>
    <main>
      <router-view />
    </main>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  // data() {
  //   return {
  //     commonExpences: [
  //       {date: ,
  //       category: ,
  //       value:
  //       }
  //     ]
  //   }
  // },
  methods: {
    ...mapActions(["fetchData"]),

    //   goToPageAbout(){
    //     this.$router.push({
    //       name: "about",
    //       params: {
    //         isTrial: 0
    //       },
    //       query: {
    //         isTrial: true
    //       }
    //     })
    //   }
  },
  created() {},
  mounted() {
    this.fetchData();
  },
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