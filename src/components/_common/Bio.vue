<template>
  <section class="page bio">
    <div class="content">
      <article class="text">
        <h1>Bio</h1>
        <p>Established in 2015, Bakewell Plastering has evolved from the multitude of projects that the Peak District has to offer and quickly affirmed itself as an honest, reliable and clean business within the local building industry.</p>
        <p>James Walker, the owner of Bakewell Plastering, trained with a local firm straight after leaving Lady Manners School; over 10 years later he has secured a trusted reputation as a plastering and damp proofing expert in Derbyshire.</p>
        <p>Now the business regularly completes jobs as a plastering team.</p>
        <p><em>"We are delighted by the high-quality finish of the plastering and we greatly appreciate the careful and tidy manner in which the work was efficiently carried out. We should certainly be pleased to use your expert service on future occasions."</em><strong>Paul</strong>, Buxton</p>
      </article>
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/bio-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/bio-10.jpg')" :srcset="require('./../../assets/images/pages/bio-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/bio-800.jpg') + ' 800w,' + require('./../../assets/images/pages/bio-600.jpg') + ' 600w,' + require('./../../assets/images/pages/bio-400.jpg') + ' 400w'"
        sizes="(min-width: 771px) 50vw, 100vw" alt="James Walker portrait"></v-lazy-image>
      </article>
    </div>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Bio',
    components: {
      VLazyImage
    },
    mixins: [mixins],
    mounted () {

      this.updateTitleMeta('Bio');

    }
  }
</script>

<style lang="scss" scoped>

</style>
