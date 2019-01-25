<template>
  <div class="brand">

    <h1 class="brand-title"><strong>{{ title }}</strong></h1>
    <h2 class="brand-subtitle"><strong>{{ subtitle }}</strong></h2>
  </div>
</template>

<script>
export default {
  name: "Brand",
  props: {
    title: {
      type: String,
      default: "title",
    },
    subtitle: {
      type: String,
      default: "subtitle",
    },
  },
};
</script>

<style  lang="scss">
@import "../../styles/views/components/Brand.scss";
</style>
