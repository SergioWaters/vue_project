<script>
import { Doughnut } from "vue-chartjs/legacy";

export default {
  name: "DoughnutExample",
  extends: Doughnut,
  props: ["chartData", "options"],
  methods: {
    update() {
      this.$data._chart.update();
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
