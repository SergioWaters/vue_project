<template>
  <div>
    <div class="common_expences">
      <h3>Popular Categories</h3>
      <input type="number" placeholder="Put amount" v-model="amount" />
      <router-link
        v-for="item in getCategoryArr"
        :key="item"
        :to="`/ModalView/${amount}?category=${item}`"
      >
        {{ item }}
      </router-link>
    </div>
    <ExpencesList :expencesArr="getExpencesSlice" />
    <ExpencesPagination
      @clickHandler="updateFocusPage"
      :pages="getAllExpences.length"
      :focus="getFocusPage"
      :stack="getStackOfPages"
    />
    <button
      @click="
        $modal.show('addExpence', {
          title: 'Add your new expence',
          component: 'addExpence',
        })
      "
    >
      Add New Expence
    </button>
  </div>
</template>

<script>
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
      amount: Number,
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
  margin-top: 10px;
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
button {
  margin: 20px;
}
</style>

