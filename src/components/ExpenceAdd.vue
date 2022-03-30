<template>
  <div class="add">
    <button @click="formVisible = !formVisible">add spending +</button>
    <div v-show="formVisible">
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

export default {
  name: "ExpenceAdd",
  data() {
    return {
      formVisible: true,
      alertVisible: false,
      date: "",
      category: "",
      customCategory: "",
      value: null,
    };
  },
  methods: {
    ...mapMutations(["updNewExpence"]),
    addExpence() {
      this.alertVisible = false;
      if (!this.category) this.category = this.customCategory;
      if (!this.category || !this.value) return (this.alertVisible = true);

      const expence = {
        category: this.customCategory ? this.customCategory : this.category,
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
      if (m < 10) return `${y}-${"0" + m}-${d}`;
      else return `${y}-${"0" + m}-${d}`;
    },
  },
  mounted() {
    // if (!this.getCategoryArr.length) {
    // await this.$store.dispatch("getCategoryArr");
    console.log(this.$route.params.category);
    console.log(this.$route.query.value);
    console.log(this.$route);

    if (this.$route.query.category)
      this.customCategory = this.$route.query.category;
    else this.category = this.getCategoryArr[0];
    if (this.$route.query.value) this.value = +this.$route.query.value;
    else this.alertVisible = true;

    if (this.$route.query.category && this.$route.query.value) {
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