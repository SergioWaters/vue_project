<template>
  <div id="app">
    <h1>Tag your Payments</h1>
    <ExpencesList :expencesArr="getExpencesSlice" />
    <ExpencesPagination
      @clickHandler="updateFocusPage"
      :pages="getAllExpences.length"
      :focus="getFocusPage"
      :stack="getStackOfPages"
    />
    <ExpenceAdd @addNewExpence="addNewExpence" />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

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
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations([
      "updateExpences",
      "updateFocusPage",
      "updateStackOfPages",
      "addNewExpence",
    ]),
  },
  mounted() {
    this.fetchData();
  },
  computed: mapGetters([
    "getAllExpences",
    "getExpencesSlice",
    "getStackOfPages",
    "getFocusPage",
  ]),
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
