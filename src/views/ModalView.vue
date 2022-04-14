<template>
  <div>
    component
    <ExpenceAdd
      :cat="category"
      :dat="date"
      :val="value"
      :customCat="customCategory"
    />
    view
    <div>
      <!-- v-show="formVisible" -->
      <h3 v-if="alertVisible">All of thoose lines should be filled</h3>
      <div>
        <input v-model="date" type="date" placeholder="Date" />
        <input v-model="value" type="number" placeholder="Summ" />
      </div>
      <div>
        <select v-model="category">
          <option disabled>Choose an existing category</option>
          <option v-for="option in this.getCategoryArr" :key="option">
            {{ option }}
          </option>
        </select>
        <span>OR</span>
        <input
          type="text"
          placeholder="Create custom category"
          v-model="customCategory"
        />
      </div>
      <button @click="addExpence">save</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import ExpenceAdd from "../components/ExpenceAdd.vue";

export default {
  components: { ExpenceAdd },
  name: "ExpenceAddModal",
  data() {
    return {
      alertVisible: false,
      date: "",
      category: "",
      customCategory: "",
      value: null,
      componentOn: "",
    };
  },
  methods: {
    ...mapMutations(["updNewExpence"]),
    addExpence() {
      this.alertVisible = false;
      if (!this.category) this.category = this.customCategory;
      if (!this.category || !this.value) return (this.alertVisible = true);

      const expence = {
        category: this.customCategory || this.category,
        date: this.date || this.getCurrentDate,
        value: +this.value,
      };

      this.updNewExpence(expence);
    },
  },
  computed: {
    ...mapGetters(["getCategoryArr"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${y}.${m}.${d}`;
    },
  },
  mounted() {
    if (this.$route.query.category)
      this.customCategory = this.$route.query.category;
    if (this.$route.query.value) this.value = +this.$route.query.value;
    if (this.$route.params.cost) this.value = +this.$route.params.cost;
    if (this.$route.params.cost && this.$route.query.category) {
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