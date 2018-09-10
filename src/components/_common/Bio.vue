<template>
  <section class="page bio">
    <div class="content">
      <article class="text">
        <h1>Bio</h1>
        <p>James Walker is a plasterer from Derbyshire. He grew up in Birchover and went to Lady Manners School. He was born in a barn and has a reyt shire accent. He has been plastering for donkeys' years and has a lot of experience.</p>
        <p>He lives in Over Haddon. He has a lovely wife called Hannah. They got married in Over Haddon in summer 2016. The ceremony was in Over Haddon church and the shindig in the village hall. It was nice. Everyone had a lot of fun. It didn't rain.</p>
        <p>They have two cats. The cats are soft and purr. They are friendly. One is called Walter and he wears socks. The other is called Polly and is scared of visitors.</p>
        <p>James likes to go cycling in his spare time. He shaves his legs to avoid 'road rash'. He was always into mountain biking but then he went full roadie. He has now got a mountain bike again and loves Strava. It is a Cube Stereo. It isn't as good as his friend Billy's but he doesn't care.</p>
      </article>
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/bio-full.jpg')" :src-placeholder="require('./../../assets/images/pages/bio-thumb.jpg')" alt="James Walker portrait"></v-lazy-image>
      </article>
    </div>
  </section>
</template>

<script>
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Bio',
    components: {
      VLazyImage
    }
  }
</script>

<style lang="scss" scoped>

</style>
