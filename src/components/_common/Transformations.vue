<template>
  <section class="page transformations">
    <!-- <h1>Transformations</h1> -->
    <div class="content">
      <article class="text">
        <h1>Transformations</h1>
        <p>Sometimes it can be difficult to imagine how much difference there is from the start to the end of a job.</p>
        <p>A lot can change during the plastering process, which makes visualising the transformation tricky.</p>
        <p>Click and drag, slide or swipe the blue handles on each of the following sliders to see before and after photos for various jobs undertaken by Bakewell Plastering.</p>
      </article>
      <article class="image">
        <Transformation :start="'1-start'" :finish="'1-finish'"/>
      </article>
    </div>
    <article class="sliders">
      <!-- <Transformation :start="'1-start'" :progress="'1-progress'" :finish="'1-finish'"/> -->
      <Transformation :start="'2-start'" :finish="'2-progress'"/>
      <Transformation :start="'3-start'" :finish="'3-finish'"/>
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
    mounted () {

      this.updateTitleMeta('Transformations');

    }
  }
</script>

<style lang="scss" scoped>
  .sliders {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  // h1 {
  //   margin-top: 30px;
  // }

  .text {
    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .image {
    overflow: auto;
  }

  @media screen and (max-width: 770px) {
    // h1 {
    //   margin-top: 0;
    // }

    .text {
      // margin-bottom: 0;
    }

    .transformation {
      width: 100%;
      margin: 36px 0 24px;
    }
  }
</style>
