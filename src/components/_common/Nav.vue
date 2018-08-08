<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/bio">Bio</router-link>
    <router-link to="/before-and-after">Tranformations</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<script>
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Nav',
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>

</style>
