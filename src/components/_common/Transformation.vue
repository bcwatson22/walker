<template>
  <article class="transformation">
    <div class="image-holder">
      <img :src="require('./../../assets/images/transformation/' + initial + '.jpg')" alt="blah" class="initial">
      <img :src="require('./../../assets/images/transformation/' + reveal + '.jpg')" alt="blah" class="reveal">
    </div>
    <div :id="'slider-' + initial.substring(0, 1)" class="dragdealer">
      <div class="handle"><span>Handle</span></div>
    </div>
  </article>
</template>

<script>
  import Dragdealer from 'dragdealer';
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Transformation',
    props: {
      initial: String,
      reveal: String
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
    width: 60px;
    height: 30px;
    position: relative;
    background: $dark-blue;
    cursor: pointer;

    span,
    span:before,
    span:after {
      display: block;
      width: 1px;
      height: 10px;
      background: $silver;
      position: absolute;
    }

    span {
      @include centre();

      &:before,
      &:after {
        content: '';
        top: 0;
      }

      &:before {
        left: -4px;
      }

      &:after {
        right: -4px;
      }
    }
  }
</style>
