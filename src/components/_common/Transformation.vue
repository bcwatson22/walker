<template>
  <article class="transformation">
    <div class="image-holder">
      <!-- <img :src="require('./../../assets/images/transformations/' + initial + '.jpg')" alt="Before image" class="initial"> -->
      <v-lazy-image :src="require('./../../assets/images/transformations/' + initial + '-full.jpg')" :src-placeholder="require('./../../assets/images/transformations/' + initial + '-thumb.jpg')" alt="Before image" class="initial"></v-lazy-image>
      <img :src="require('./../../assets/images/transformations/' + reveal + '.jpg')" alt="After image" class="reveal">
    </div>
    <div :id="'slider-' + initial.substring(0, 1)" class="dragdealer">
      <!-- <div class="handle"><span>Handle</span></div> -->
      <div class="handle">Handle</div>
    </div>
  </article>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import Dragdealer from 'dragdealer';
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Transformation',
    props: {
      initial: String,
      reveal: String
    },
    components: {
      VLazyImage
    },
    mixins: [mixins],
    mounted () {

      let slider = 'slider-' + this.initial.substring(0, 1),
          $slider = document.getElementById(slider),
          $parent = this.getClosest($slider, '.transformation'),
          $reveal = $parent.querySelectorAll('.reveal')[0];

      new Dragdealer(slider, {

        animationCallback: function (x) {

          $reveal.style.opacity = x.toFixed(2);

          (x > 0.1) ? $slider.classList.add('touched') : $slider.classList.remove('touched');

        }

      });

    }
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';
  @import './../../assets/styles/sass/_mixins.scss';

  .transformation {
    width: calc(50% - 24px);
    margin-top: 48px;
  }

  .image-holder {
    position: relative;
    margin-bottom: 24px;
  }

  .reveal {
    position: absolute;
    top: 0;
    opacity: 0;
    will-change: opacity;
  }

  .dragdealer {
    background: $silver;
    position: relative;
    height: 20px;
    overflow: visible;
    border-radius: 6px;

    &:after {
      content: '\3E Slide handle';
      font-size: 12px;
      font-size: 1.2rem;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
      will-change: opacity;
      transition: all 0.3s ease;
    }

    &.touched {
      &:after {
        opacity: 0;
      }
    }
  }

  .handle {
    text-indent: -99999rem;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    position: relative;
    top: -10px;
    background: $light-blue;
    cursor: pointer;

    // span,
    // span:before,
    // span:after {
    //   display: block;
    //   width: 1px;
    //   height: 10px;
    //   background: $silver;
    //   position: absolute;
    // }
    //
    // span {
    //   @include centre();
    //
    //   &:before,
    //   &:after {
    //     content: '';
    //     top: 0;
    //   }
    //
    //   &:before {
    //     left: -4px;
    //   }
    //
    //   &:after {
    //     right: -4px;
    //   }
    // }
  }
</style>
