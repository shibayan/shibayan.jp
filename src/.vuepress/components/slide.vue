<style scoped>
  iframe {
    margin: 1.0em 0;
  }
</style>
<template>
  <iframe :src="src" width="720" height="405" frameborder="0" allowfullscreen></iframe>
</template>
<script>
export default {
  data() {
    return {
      src: ""
    };
  }
};
</script>