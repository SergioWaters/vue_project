<template>
  <v-container>
    <v-row class="sm-col-4 col-12">
      <v-col>
        <div class="text-h5 text-sm-h3 text-left mb-8">
          My personal expences
        </div>

        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              Add New Expence <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <ExpenceAdd />
          </v-card>
        </v-dialog>

        <ExpencesList :expencesArr="getExpencesSlice" />
        <ExpencesPagination
          @clickHandler="updateFocusPage"
          :pages="getAllExpences.length"
          :focus="getFocusPage"
          :stack="getStackOfPages"
        />
      </v-col>
      <v-col>dia</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import ExpencesList from "../components/ExpencesList.vue";
import ExpencesPagination from "../components/ExpencesPagination.vue";

export default {
  name: "HomeView",
  components: {
    ExpencesList,
    ExpencesPagination,
    ExpenceAdd: () => import("@/components/ExpenceAdd.vue"),
  },
  data() {
    return {
      dialog: false,
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
  color: #2c3e50;
}
</style>

