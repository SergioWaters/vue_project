<template>
  <div class="expences">
    <ul>
      <li>
        <h3>#</h3>
      </li>
      <li>
        <h3>Date</h3>
      </li>
      <li>
        <h3>Category</h3>
      </li>
      <li>
        <h3>Value</h3>
      </li>
    </ul>
    <ul
      v-for="expence in expencesArr"
      :key="(expence.id = expencesArr.indexOf(expence))"
    >
      <li>{{ expence.id + 1 }}</li>
      <li>{{ expence.date }}</li>
      <li>{{ expence.category }}</li>
      <li>{{ expence.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ExpencesList",
  props: {
    expencesArr: [],
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.expences {
  min-height: 300px;
}
h3 {
  margin: 40px 0 0 0;
  text-align: center;
  padding: 10px;
  font-weight: 700;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}
li {
  margin: 0 10px;
  width: 200px;
}
li:first-child {
  width: 30px;
}
</style>
