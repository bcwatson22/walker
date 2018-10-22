<template>
  <article class="transformation">
    <div class="image-holder">
      <v-lazy-image :src="require('./../../assets/images/pages/transformation-' + start + '-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/transformation-' + start + '-10.jpg')" :srcset="require('./../../assets/images/pages/transformation-' + start + '-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/transformation-' + start + '-800.jpg') + ' 800w,' + require('./../../assets/images/pages/transformation-' + start + '-600.jpg') + ' 600w,' + require('./../../assets/images/pages/transformation-' + start + '-400.jpg') + ' 400w'"
      sizes="(min-width: 771px) 50vw, 100vw" alt="Before image" class="start"></v-lazy-image>
      <!-- <img v-if="progress" :src="require('./../../assets/images/pages/transformation-' + progress + '-1500.jpg')" alt="Progress image" class="progress"> -->
      <img :src="require('./../../assets/images/pages/transformation-' + finish + '-1500.jpg')" :srcset="require('./../../assets/images/pages/transformation-' + finish + '-1200.jpg') + ' 1200w,' + require('./../../assets/images/pages/transformation-' + finish + '-800.jpg') + ' 800w,' + require('./../../assets/images/pages/transformation-' + finish + '-600.jpg') + ' 600w,' + require('./../../assets/images/pages/transformation-' + finish + '-400.jpg') + ' 400w'"
      sizes="(min-width: 771px) 50vw, 100vw" alt="After image" class="finish">
    </div>
    <div :id="'slider-' + start.substring(0, 1)" class="dragdealer">
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
      start: String,
      // progress: String,
      finish: String
    },
    components: {
      VLazyImage
    },
    mixins: [mixins],
    mounted () {

      let slider = 'slider-' + this.start.substring(0, 1),
          $slider = document.getElementById(slider),
          $parent = this.getClosest($slider, '.transformation'),
          // $progress = $parent.querySelectorAll('.progress')[0],
          $finish = $parent.querySelectorAll('.finish')[0];

      new Dragdealer(slider, {

        animationCallback: function (x) {

          // if ($progress) {
          //
          //   if (x <= 0.5) {
          //     x = x * 2;
          //     $progress.style.opacity = x.toFixed(2);
          //   } else {
          //     // x = x / 2;
          //     $finish.style.opacity = x.toFixed(2);
          //   }
          //
          // } else {

            $finish.style.opacity = x.toFixed(2);

          // }

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

    .image & {
      width: 100%;
      margin: 0;
      padding-bottom: 14px;
    }
  }

  .image-holder {
    position: relative;
    margin-bottom: 24px;
  }

  .progress,
  .finish {
    position: absolute;
    top: 0;
    opacity: 0;
    will-change: opacity;
  }

  .dragdealer {
    background: $silver;
    position: relative;
    height: 6px;
    overflow: visible;
    border-radius: 6px;

    // &:after {
    //   content: '\3E Slide';
    //   font-size: 12px;
    //   font-size: 1.2rem;
    //   position: absolute;
    //   right: 12px;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   opacity: 1;
    //   will-change: opacity;
    //   transition: all 0.3s ease;
    // }

    // &.touched {
    //   &:after {
    //     opacity: 0;
    //   }
    // }
  }

  .handle {
    text-indent: -99999rem;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    position: relative;
    top: -12px;
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
