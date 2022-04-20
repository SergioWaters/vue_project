<template>
  <div>The message is: {{ msg }}</div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
};
</script>