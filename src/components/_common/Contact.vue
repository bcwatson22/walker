<template>
  <section class="page contact">
    <img src="./../../assets/images/global/trowel.svg" class="trowel" alt="Trowel image">
    <h1>Contact</h1>
    <div class="content">
      <article class="text">
        <p>All aspects of plasterwork undertaken.</p>
        <p>Any jobs considered within a 10 mile radius of Bakewell.</p>
        <p>For more information or to request a quote please email:</p>
        <h3><a href="mailto:bakewellplastering@aol.co.uk">bakewellplastering@aol.co.uk</a></h3>
      </article>
      <article class="image">
        <!-- <img src="./../../assets/images/pages/contact.jpg" alt="Bakewell Plastering van"> -->
        <v-lazy-image :src="require('./../../assets/images/pages/contact-full.jpg')" :src-placeholder="require('./../../assets/images/pages/contact-thumb.jpg')" alt="Bakewell Plastering van"></v-lazy-image>
      </article>
    </div>
  </section>
</template>

<script>
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Contact',
    components: {
      VLazyImage
    }
  }
</script>

<style lang="scss" scoped>

</style>
