<template>
  <div class="app">
    <div class="navbar">
      <Brand
        class="brand"
        :title="title"
        :subtitle="subtitle"
      />
      <div class="menulist">
        <router-link
          class="menulist-link"
          to="/"
        >ACCUEIL</router-link>
        <router-link
          class="menulist-link"
          to="/about"
        >A PROPOS</router-link>
      </div>
      <svg
        class="svg-header"
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        fill='currentcolor'
        preserveAspectRatio="none"
      >
        <path d='M0 64 C0 32 64 32 64 32 L64 64 Z' />
      </svg>
    </div>
    <router-view />
    <footer>
      <svg
        class="svg-footer"
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        fill='white'
        preserveAspectRatio="none"
      >
        <path d='M0 0 L0 64 C64 64 64 0 64 0 Z' />
      </svg>
    </footer>
  </div>
</template>
<script>
import Brand from "@/views/components/Brand.vue";
export default {
  name: "Home",
  components: {
    Brand,
  },
  data() {
    return {
      title: "Matthias Goudjil",
      subtitle: "web dev",
    };
  },
};
</script>

<style lang="scss" >
@import "./styles/views/_app.scss";
</style>
