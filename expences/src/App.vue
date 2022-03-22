<template>
  <div id="app">
    <ExpencesList :expencesArr="this.getExpencesArr" />
    <ExpencesPagination
      @clickHandler="changePage"
      :pages="expencesArr.length"
      :focus="focusPage"
      :stack="stackOfPages"
    />
    <ExpenceAdd @addNewExpence="addNewExpence" />
  </div>
</template>

<script>
import ExpencesList from "./components/ExpencesList.vue";
import ExpenceAdd from "./components/ExpenceAdd.vue";
import ExpencesPagination from "./components/ExpencesPagination.vue";

export default {
  name: "App",
  components: {
    ExpencesList,
    ExpenceAdd,
    ExpencesPagination,
  },
  data() {
    return {
      expencesArr: [],
      stackOfPages: 5,
      focusPage: 1,
    };
  },
  methods: {
    changePage(n) {
      this.focusPage = n;
    },
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
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
        },
        {
          date: "2020-03-24",
          category: "Food",
          value: 532,
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
  computed: {
    getExpencesArr() {
      return this.expencesArr.slice(
        this.stackOfPages * (this.focusPage - 1),
        this.stackOfPages * (this.focusPage - 1) + this.stackOfPages
      );
    },
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
