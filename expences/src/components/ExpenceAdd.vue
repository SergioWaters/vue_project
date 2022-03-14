<template>
  <div>
    <button @click="formVisible = !formVisible">add spending +</button>
    <div v-show="formVisible">
      <h3 v-if="isVisibleAlert">All of thoose lines should be filled</h3>
      <input v-model="date" type="date" placeholder="Date" />
      <input v-model="category" type="text" placeholder="Category" />
      <input v-model="value" type="number" placeholder="Summ" />
      <button @click="addNewExpence">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpenceAdd",
  data() {
    return {
      formVisible: false,
      date: "",
      category: "",
      value: 0,
      isVisibleAlert: false,
    };
  },
  methods: {
    addNewExpence() {
      this.isVisibleAlert = false;
      if (!this.category || !this.value) return (this.isVisibleAlert = true);
      const expence = {
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: +this.value,
      };
      this.$emit("addNewExpence", expence);
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      if (m < 10) return `${y}-${"0" + m}-${d}`;
      else return `${y}-${"0" + m}-${d}`;
    },
  },
};
</script>

<style>
</style>