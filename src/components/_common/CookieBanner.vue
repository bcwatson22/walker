<template>
  <section class="cookie-banner">
    <div class="inner">
      <span class="icon cookie">Cookie</span>
      <p>This site uses cookies to give you a sweet user experience.</p>
      <button class="icon close button" @click="dismissBanner($event)">Info</button>
    </div>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'CookieBanner',
    mixins: [mixins],
    methods: {
      dismissBanner: function (event) {

        let $root = document.getElementById('app');

        this.$cookie.set('bakewell-plastering', 'dismissed', 365);

        this.toggleElement(event, '#app', '.cookie-banner');

        $root.style.paddingBottom = '0';

        $root.addEventListener('transitionend', function () {

          $root.removeAttribute('style');

        }, false);

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';

  .cookie-banner {
    width: 100%;
    background: rgba(39, 45, 62, 0.98);
    position: fixed;
    bottom: 0;
    opacity: 1;
    transform: translateY(0%);
    will-change: opacity, transform;
    transition: all 0.3s ease;

    &.toggle {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .inner {
    display: flex;
    align-items: center;
    padding: 18px 72px 18px 72px;
    max-width: 1150px;
    opacity: 1;
    transform: translateY(0%);
    will-change: opacity, transform;
    transition: all 0.3s ease;
    color: $silver;

    &.toggle {
      opacity: 0;
      transform: translateY(100%);
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;

    &.cookie {
      left: 24px;
      background: url('./../../assets/images/global/icons/cookie.svg') 50% 50% no-repeat;
      background-size: 80% 80%;
    }

    &.close {
      right: 24px;
      background: url('./../../assets/images/global/icons/close.svg') 50% 50% no-repeat;
      background-size: 90% 90%;
    }
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    .inner {
      padding: 10px 60px 10px 60px;
    }

    .icon {
      &.cookie {
        left: 12px;
      }

      &.close {
        right: 12px;
      }
    }
  }
</style>
