<template>
  <div>The message is: {{ msg }}</div>
</template>
<script>
export default {
  name: "TestComp",
  props: {
    msg: String,
  },
};
</script>