<template>
  <section class="page home">
    <h1 class="hidden">Home</h1>
    <article class="splash" :class="[{ 'loading': showPlayer, 'embedded': playerReady }]">
      <span class="iframe-holder">
        <iframe v-if="showPlayer" src="https://player.vimeo.com/video/295596849" width="640" height="363" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen @load="iFrameLoaded()"></iframe>
      </span>
      <v-lazy-image :src="require('./../../assets/images/pages/home-splash-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/home-splash-10.jpg')"
      :srcset="require('./../../assets/images/pages/home-splash-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/home-splash-800.jpg') + ' 800w,' + require('./../../assets/images/pages/home-splash-600.jpg') + ' 600w,' + require('./../../assets/images/pages/home-splash-400.jpg') + ' 400w'"
      sizes="100vw" alt="Bakewell Plastering project"></v-lazy-image>
      <button class="icon play button" @click.self="loadVideo()">Play</button>
    </article>
    <div class="content">
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/home-working-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/home-working-10.jpg')" :srcset="require('./../../assets/images/pages/home-working-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/home-working-800.jpg') + ' 800w,' + require('./../../assets/images/pages/home-working-600.jpg') + ' 600w,' + require('./../../assets/images/pages/home-working-400.jpg') + ' 400w'"
        sizes="(min-width: 771px) 50vw, 100vw" alt="Bakewell Plastering project"></v-lazy-image>
      </article>
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/home-fireplace-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/home-fireplace-10.jpg')" :srcset="require('./../../assets/images/pages/home-fireplace-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/home-fireplace-800.jpg') + ' 800w,' + require('./../../assets/images/pages/home-fireplace-600.jpg') + ' 600w,' + require('./../../assets/images/pages/home-fireplace-400.jpg') + ' 400w'"
        sizes="(min-width: 771px) 50vw, 100vw" alt="Bakewell Plastering project"></v-lazy-image>
      </article>
    </div>
    <article class="splash">
      <v-lazy-image :src="require('./../../assets/images/pages/home-pano-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/home-pano-10.jpg')" :srcset="require('./../../assets/images/pages/home-pano-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/home-pano-800.jpg') + ' 800w,' + require('./../../assets/images/pages/home-pano-600.jpg') + ' 600w,' + require('./../../assets/images/pages/home-pano-400.jpg') + ' 400w'"
      sizes="100vw" alt="Bakewell Plastering project"></v-lazy-image>
    </article>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Home',
    components: {
      VLazyImage
    },
    mixins: [mixins],
    data () {
      return {
        showPlayer: false,
        playerReady: false
      }
    },
    methods: {
      loadVideo: function () {

        this.showPlayer = true;

      },
      unloadVideo: function () {

        this.showPlayer = false;
        this.playerReady = false;

      },
      iFrameLoaded: function () {

        this.playerReady = true;

      }
    },
    mounted () {

      this.updateTitleMeta('Home');

    }
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';
  @import './../../assets/styles/sass/_mixins.scss';

  .splash {
    background: #000;
    position: relative;

    .play {
      background: url('./../../assets/images/global/icons/video-circle.svg') 50% 50% no-repeat;
      position: absolute;
      @include centre();
    }

    iframe {
      margin: 0 auto;
      width: 100%;
      background: #000;
      transform: translateY(-100%);
      opacity: 0;
      will-change: opacity;
      transition: opacity 0.3s ease;
    }

    &.loading {
      background: #000 url('./../../assets/images/global/loader.svg') 50% 50% no-repeat;
      background-size: 80px 80px;

      &:before {
        content: '';
        width: 1px;
        margin-left: -1px;
        float: left;
        height: 0;
        padding-top: 58%;
      }

      &:after {
        content: '';
        display: table;
        clear: both;
      }

      img,
      .play {
        display: none;
      }
    }

    &.embedded {
      display: flex;
      flex-direction: column;

      &:before {
        display: none;
      }

      &:after {
        display: none;
      }

      iframe {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .content .image {
    margin: 48px 0;
  }

  @media screen and (max-width: 770px) {
    .content .image {
      margin: 24px 0;

      &:nth-of-type(2) {
        margin-top: 0
      }
    }
  }
</style>
