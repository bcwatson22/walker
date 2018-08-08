<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/bio">Bio</router-link></li>
      <li><router-link to="/before-and-after">Tranformations</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
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
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
