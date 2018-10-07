<template>
  <section class="page contact">
    <div class="content">
      <article class="text">
        <h1>Services</h1>
        <p>All aspects of plasterwork undertaken.</p>
        <p>Bakewell Plastering has over 6 years' experience of providing a quality finish at an affordable price to our customers, so whether it's a small repair or an entire property refurbishment we guarantee you will be satisfied with the results!</p>
        <p>Our services include (but aren't limited to):</p>
        <ul>
          <li>Repairs</li>
          <li>Plastering</li>
          <li>Water damage</li>
          <li>Dry lining</li>
          <li>Artex cover-up and removal</li>
          <li>Insurance work</li>
          <li>Dot and dab walls</li>
          <li>Metal/wood studding</li>
          <li>MF (Metal Frame) suspended ceilings</li>
          <li>External rendering</li>
          <li>Coving fitted</li>
        </ul>
      </article>
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/services-full.jpg')" :src-placeholder="require('./../../assets/images/pages/services-thumb.jpg')" alt="Completed project"></v-lazy-image>
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
