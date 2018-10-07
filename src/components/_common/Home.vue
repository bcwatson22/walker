<template>
  <section class="page Home">
    <h1 class="hidden">Home</h1>
    <article class="splash" :class="[{ 'loading': showPlayer, 'embedded': playerReady }]">
      <span class="iframe-holder">
        <iframe v-if="showPlayer" src="https://player.vimeo.com/video/282563026" width="640" height="363" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen @load="iFrameLoaded()"></iframe>
      </span>
      <v-lazy-image :src="require('./../../assets/images/pages/home-full.jpg')" :src-placeholder="require('./../../assets/images/pages/home-thumb.jpg')" alt="Completed project"></v-lazy-image>
      <button class="icon play button" @click.self="loadVideo()">Play</button>
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
</style>
