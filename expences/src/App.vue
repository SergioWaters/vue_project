<template>
  <div id="app">
    <ExpencesList :expencesArr="this.getExpencesArr" />
    <ExpenceAdd @addNewExpence="addNewExpence" />
    <ExpencesPagination
      @getlistToView="getListToView"
      :lists="this.getNumberOfButtons"
    />
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
      expencesToShow: 1,
    };
  },
  methods: {
    getListToView(listNumber) {
      console.log(listNumber);
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
        this.expencesToShow - 1,
        this.expencesToShow * 5
      );
    },
    getNumberOfButtons() {
      return this.expencesArr.length;
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
