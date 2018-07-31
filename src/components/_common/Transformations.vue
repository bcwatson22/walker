<template>
  <section class="transformations">
    <h2>Before and after</h2>
    <div class="sliders">
      <Transformation :initial="'1-a'" :reveal="'1-b'" />
      <Transformation :initial="'3-a'" :reveal="'3-b'" />
    </div>
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
  .transformations {
    margin-top: 48px;
  }

  .sliders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
