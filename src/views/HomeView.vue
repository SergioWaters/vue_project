<template>
  <div>
    <input type="number" placeholder="Put amount" v-model="amount" />
    <div class="common_expences">
      <router-link
        v-for="category in this.getCategoryArr"
        :key="category"
        :to="`/addExpence/${amount}?category=${category}`"
      >
        {{ amount }} for {{ category }}
      </router-link>
    </div>
    <button
      @click="$modal.show('expenceAdd', (settings = { title: 'expenceAdd' }))"
    >
      Add New Expence
    </button>

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
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    ...mapMutations([
      "updateExpences",
      "updateFocusPage",
      "updateStackOfPages",
      "addNewExpence",
    ]),
  },
  computed: {
    ...mapGetters([
      "getAllExpences",
      "getExpencesSlice",
      "getStackOfPages",
      "getFocusPage",
      "getCategoryArr",
    ]),
  },
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
  align-items: center;
}
.common_expences a {
  margin: 10px;
  text-decoration: none;
}
.common_expences input {
  max-width: 300px;
}
</style>

