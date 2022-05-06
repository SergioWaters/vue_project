<script>
import { Doughnut } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
import { mapGetters } from "vuex";
import { randomColor } from "randomcolor";

export default {
  name: "DiagrammChart",
  extends: Doughnut,
  props: {
    chartData: Object,
    labels: Array,
    options: Object,
    chartColors: Array,
    label: String,
    width: { type: Number, default: 200 },
    height: { type: Number, default: 200 },
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
  },
  methods: {
    randomColor,
  },
  mounted() {
    if (this.chartData) {
      this.renderChart(this.chartData, this.options);
      return;
    }
    const chartData = {
      labels: this.getCategoryArr,
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651"],
          data: [40, 60],
        },
      ],
    };
    this.renderChart(chartData, this.options);
  },
};
</script>
