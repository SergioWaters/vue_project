<template>
  <div>
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
          path: '/addExpence/1000',
          query: { category: 'Sports' },
        }"
      >
        Add 1000 for Sports category
      </router-link>
      <router-link
        :to="{
          path: '/addExpence/7000',
          query: { category: 'Useless' },
        }"
      >
        Add something to Useless category
      </router-link>
    </div>
    <ExpencesList :expencesArr="getExpencesSlice" />
    <ExpencesPagination
      @clickHandler="updateFocusPage"
      :pages="getAllExpences.length"
      :focus="getFocusPage"
      :stack="getStackOfPages"
    />
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import ExpencesList from "../components/ExpencesList.vue";
import ExpencesPagination from "../components/ExpencesPagination.vue";

export default {
  name: "App",
  components: {
    ExpencesList,
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
  flex-direction: column;
  justify-content: space-evenly;
}
</style>

