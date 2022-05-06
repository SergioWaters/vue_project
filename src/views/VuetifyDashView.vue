<template>
  <v-container>
    <!-- eslint-disable  -->
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
          :items="addNumber"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1 text-h5 text-sm-h3 text-left"
          @page-count="pageCount = $event"
        >
          <template v-slot:item.actions="{ item }" cols-1>
            <v-icon
              small
              @click="$context.show([item.number - 1, item, $event.target])"
            >
              mdi-dots-vertical
            </v-icon>
          </template>
        </v-data-table>

        <v-container class="text-center pt-2 b-black">
          <v-pagination
            v-model="page"
            :length="pageCount"
            color="teal"
          ></v-pagination>
        </v-container>
      </v-col>
      <v-col>
        <div class="text-h6 text-center mb-8">Expences by Category</div>

        <DiagrammChart
          :chartData="chartDataMut"
          :options="chartOptions"
          label="Expences"
        />
      </v-col>
    </v-row>
    <ExpenceEdit />
  </v-container>
</template>

<script>
import randomColor from "randomcolor";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    DiagrammChart: () => import("@/components/DiagrammChart.vue"),
    ExpenceEdit: () => import("@/components/ContextMenu.vue"),
    ExpenceAdd: () => import("@/components/ExpenceAdd.vue"),
  },
  data() {
    return {
      chartOptions: { hoverOffset: 4, width: 100, height: 100 },
      dialog: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        { text: "#", value: "number", align: "start", sortable: true },
        { text: "date", value: "date" },
        { text: "category", value: "category" },
        { text: "value", value: "value" },
        { text: " ", value: "actions", sortable: false },
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
    // setUp() {
    //   this.getAllCategories.forEach((item) => {
    //     let dataItem = (item.count / this.getAllExpences.length) * 100;

    //     this.chartData.labels.push(item.category);
    //     this.chartData.datasets[0].backgroundColor.push(randomColor());
    //     this.chartData.datasets[0].data.push(dataItem);
    //   });
    // },
  },
  computed: {
    ...mapGetters([
      "getAllExpences",
      "getExpencesSlice",
      "getStackOfPages",
      "getFocusPage",
      "getCategoryArr",
      "getAllCategories",
    ]),
    getColorsArr() {
      const colors = [];
      let count = this.getCategoryArr.length;
      for (let i = 0; i < count; i++) {
        colors.push(randomColor());
      }
      return colors;
    },
    getPercentsArr() {
      return this.getAllCategories.map((item) => {
        return Math.round((item.count / this.getAllExpences.length) * 100);
      });
    },
    chartDataMut() {
      return {
        labels: this.getCategoryArr,
        datasets: [
          {
            backgroundColor: this.getColorsArr,
            data: this.getPercentsArr,
          },
        ],
      };
    },
    numberOfButtons() {
      return Math.ceil(this.getAllExpences.length / this.getStackOfPages);
    },
    addNumber() {
      const items = this.getAllExpences;
      items.forEach((expence, indx) => {
        expence.number = +indx + 1;
      });
      return items;
    },
  },
  async mounted() {},
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

