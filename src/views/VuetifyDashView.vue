<template>
  <v-container>
    <v-row class="sm-col-4 col-12">
      <v-col>
        <div class="text-h5 text-sm-h3 text-left mb-8">
          My personal expences
        </div>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on" class="mb-4">
              Add New Expence <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <ExpenceAdd />
          </v-card>
        </v-dialog>

        <v-data-table
          :headers="headers"
          :items="getAllExpences"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1 text-h6 text-sm-h3 text-left"
          @page-count="pageCount = $event"
        ></v-data-table>
        <div class="text-center pt-2">
          <v-pagination
            v-model="page"
            :length="pageCount"
            color="teal"
          ></v-pagination>
        </div>
      </v-col>
      <v-col>dia</v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
// import ExpencesList from "../components/ExpencesList.vue";
// import ExpencesPagination from "../components/ExpencesPagination.vue";

export default {
  name: "HomeView",
  components: {
    // ExpencesList,
    // ExpencesPagination,
    ExpenceAdd: () => import("@/components/ExpenceAdd.vue"),
  },
  data() {
    return {
      dialog: false,
      page: 1,
      pageCount: 10,
      itemsPerPage: 10,
      headers: [
        { text: "category", value: "category" },
        { text: "date", align: "start", sortable: false, value: "date" },
        { text: "id", value: "id" },
        { text: "value", value: "value" },
      ],
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
    numberOfButtons() {
      return Math.ceil(this.getAllExpences.length / this.getStackOfPages);
    },
  },
  mounted() {},
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

