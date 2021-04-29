<template>
  <div class="slide-container">
    <iframe v-bind:src="id" class="slide" frameborder="0" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  props: {
    id: ""
  }
};
</script>
<style scoped>
  .slide-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    margin: 1em 0;
  }
  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>