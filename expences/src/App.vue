<template>
  <div id="app">
    <ExpencesList :expencesArr="this.expencesArr" />
    <ExpenceAdd @addNewExpence="addNewExpence" />
  </div>
</template>

<script>
import ExpencesList from "./components/ExpencesList.vue";
import ExpenceAdd from "./components/ExpenceAdd.vue";

export default {
  name: "App",
  components: {
    ExpencesList,
    ExpenceAdd,
  },
  data() {
    return {
      expencesArr: [],
    };
  },
  methods: {
    addNewExpence(expence) {
      this.expencesArr.unshift(expence);
    },
    fetchData() {
      return [
        {
          date: "2020-03-28",
          category: "Food",
          value: 169,
        },
        {
          date: "2020-03-24",
          category: "Transport",
          value: 360,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
  created() {
    this.expencesArr = this.fetchData();
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
