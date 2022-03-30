<template>
  <div>
    <h1>Tag your Payments</h1>
    <div class="common_expences">
      <router-link
        :to="{
          path: '/addExpence/',
          query: { value: 5000, category: 'Entertainment' },
        }"
      >
        Add 5000 for Entertainment category
      </router-link>
      <router-link
        :to="{
          path: '/addExpence/',
          query: { value: 1000, category: 'Sports' },
        }"
      >
        Add 1000 for Sports category
      </router-link>
      <router-link
        :to="{
          path: '/addExpence/',
          query: { value: 3000, category: 'Useless' },
        }"
      >
        Add 3000 for Useless category
      </router-link>
    </div>

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
import { mapGetters } from "vuex";
import ExpencesList from "../components/ExpencesList.vue";
import ExpenceAdd from "../components/ExpenceAdd.vue";
import ExpencesPagination from "../components/ExpencesPagination.vue";
export default {
  name: "App",
  components: {
    ExpencesList,
    ExpenceAdd,
    ExpencesPagination,
  },
  methods: {
    ...mapMutations([
      "updateExpences",
      "updateFocusPage",
      "updateStackOfPages",
      "addNewExpence",
    ]),
  },
  computed: mapGetters([
    "getAllExpences",
    "getExpencesSlice",
    "getStackOfPages",
    "getFocusPage",
  ]),
};
</script>

<style scoped>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.common_expences {
  display: flex;
  justify-content: space-evenly;
}
</style>

