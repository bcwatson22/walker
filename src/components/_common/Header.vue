<template>
  <header>
    <router-link to="/projects" class="logo">
      <img src="./../../assets/images/global/logo.svg" alt="Bakewell Plastering logo">
    </router-link>

    <Nav/>
  </header>
</template>

<script>
  import Nav from './Nav.vue';
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Header',
    components: {
      Nav
    },
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>
  header {
    padding: 24px;
    margin-bottom: 36px;
  }

  .logo {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
</style>
