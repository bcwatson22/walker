<template>
  <section class="landing">
    <article class="image">
      <img src="./../../assets/images/global/splash.jpg" alt="Billy Watson logo">
    </article>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Landing',
    mixins: [mixins],
    mounted () {

      this.updateTitleMeta('Landing');

    }
  }
</script>

<style lang="scss" scoped>

</style>
