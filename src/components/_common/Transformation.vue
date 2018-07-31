<template>
  <article class="transformation">
    <div class="image-holder">
      <img :src="require('./../../assets/images/transformation/' + initial + '.jpg')" alt="blah" class="initial">
      <img :src="require('./../../assets/images/transformation/' + reveal + '.jpg')" alt="blah" class="reveal">
    </div>
    <div :id="'slider-' + initial.substring(0, 1)" class="dragdealer">
      <div class="handle red-bar">drag me</div>
      <p class="value">0</p>
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
          $value = $slider.querySelectorAll('.value')[0],
          $parent = this.getClosest($slider, '.transformation'),
          $reveal = $parent.querySelectorAll('.reveal')[0];

      new Dragdealer(slider, {

        animationCallback: function(x) {

          $reveal.style.opacity = x.toFixed(2);
          $value.innerHTML = x.toFixed(2);

        }

      });

    }
  }
</script>

<style lang="scss" scoped>
  .transformation {
    width: calc(50% - 24px);
  }

  .image-holder {
    position: relative;
    margin-bottom: 12px;
  }

  .reveal {
    position: absolute;
    top: 0;
    opacity: 0;
    will-change: opacity;
  }

  .handle {
    width: 60px;
    background: yellow;
  }
</style>
