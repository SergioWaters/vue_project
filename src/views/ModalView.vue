<template>
  <div>
    component
    <ExpenceAdd
      :cat="category"
      :dat="date"
      :val="value"
      :customCat="customCategory"
      @addExpence="addExpence"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: { ExpenceAdd: () => import("../components/ExpenceAdd.vue") },
  name: "ExpenceAddModal",
  data() {
    return {
      alertVisible: false,
      date: "",
      category: "",
      customCategory: "",
      value: null,
    };
  },
  methods: {
    ...mapMutations(["updNewExpence"]),
  },
  computed: {
    ...mapGetters(["getCategoryArr"]),
  },
  mounted() {
    console.log(this.$route.params, this.$route.value);
    if (this.$route.params.category)
      this.customCategory = this.$route.params.category;
    if (this.$route.query.value) this.value = +this.$route.query.value;
    if (this.$route.params.category && this.$route.query.category) {
      this.addExpence();
      this.$router.push({
        name: "home",
      });
    }
  },
};
</script>

<style scoped>
input,
select {
  min-height: 20px;
  min-width: 50px;
  margin: 5px;
  color: #222;
}
.add {
  margin: 10px;
}
</style>