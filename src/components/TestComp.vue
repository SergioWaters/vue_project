<template>
  <v-container>The message is: {{ msg }}</v-container>
</template>
<script>
export default {
  name: "TestComp",
  props: {
    msg: String,
  },
};
</script>