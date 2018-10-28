<template>
  <section class="page contact">
    <div class="content">
      <article class="text">
        <h1>Services</h1>
        <p>The spectrum of building projects across the Peak District and throughout Derbyshire demanding high-quality plastering is boundless; Bakewell Plastering has contributed to many of these.</p>
        <p>From listed buildings, barn conversions, shops and holiday lets; to the creation of a new home or simply enhancing an existing one - modern or traditional - the team has the experience and expertise to make it happen!</p>
        <p>Our plastering and damp proofing services extend to rendering, drylining and lime plastering.</p>
        <p>One of the business' priorities is to help achieve your desired interior. Whether it's just smooth, straight lines or dramatic curves and uneven, coarse wall surfaces, Bakewell Plastering will help to realise the anticipated finish.</p>
      </article>
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/services-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/services-10.jpg')" alt="Completed project"></v-lazy-image>
      </article>
    </div>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Services',
    components: {
      VLazyImage
    },
    mixins: [mixins],
    mounted () {

      this.updateTitleMeta('Services');

    }
  }
</script>

<style lang="scss" scoped>

</style>
