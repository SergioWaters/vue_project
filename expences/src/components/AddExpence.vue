<template>
  <div class="add-form">
    <button @click="formVisibile = !formVisibile">Add new expence</button>
    <form class="expenceAdd" v-show="formVisibile">
      <input type="date" placeholder="Date" />
      <input type="number" placeholder="Amount" />
      <input type="text" placeholder="Description" />
      <input type="submit" value="put" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddExpence",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  color: #42b983;
}
</style>