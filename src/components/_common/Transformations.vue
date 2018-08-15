<template>
  <section class="page transformations">
    <img src="./../../assets/images/global/trowel.svg" class="trowel" alt="Trowel image">
    <h1>Transformations</h1>
    <article class="text">
      <p>Sometimes it's hard to imagine how much difference there is from the start to the end of a job!</p>
      <p>Click and drag or swipe across the blue handles on each of the sliders below to see before and after photos for various jobs undertaken by Bakewell Plastering.</p>
    </article>
    <article class="sliders">
      <Transformation :initial="'1-a'" :reveal="'1-b'"/>
      <Transformation :initial="'3-a'" :reveal="'3-b'"/>
      <Transformation :initial="'2-a'" :reveal="'2-b'"/>
      <Transformation :initial="'4-a'" :reveal="'4-b'"/>
    </article>
  </section>
</template>

<script>
  import Transformation from './Transformation.vue';

  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Transformations',
    components: {
      Transformation
    },
    mixins: [mixins],
  }
</script>

<style lang="scss" scoped>
  .sliders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .text {
    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
</style>
