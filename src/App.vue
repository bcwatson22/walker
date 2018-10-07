<template>
  <div id="app">
    <section class="wrapper">
      <Header/>

      <main>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </main>

      <Footer :year="copyrightYear"/>
    </section>
    <CookieBanner v-if="cookieBanner"/>
  </div>
</template>

<script>
  import Header from './components/_common/Header.vue';
  import Home from './components/_common/Home.vue';
  import Bio from './components/_common/Bio.vue';
  import Transformations from './components/_common/Transformations.vue';
  import Contact from './components/_common/Contact.vue';
  import Footer from './components/_common/Footer.vue';
  import CookieBanner from './components/_common/CookieBanner.vue';

  import mixins from './scripts/mixins.js';

  // IntersectionObserver polyfill
  require('intersection-observer');

  export default {
    name: 'app',
    components: {
      Header,
      Home,
      Bio,
      Transformations,
      Contact,
      Footer,
      CookieBanner
    },
    mixins: [mixins],
    methods: {
      getCurrentYear: function () {

        let d = new Date(),
            y = d.getFullYear();

        return y;

      },
      checkForCookie: function () {

        let showBanner = (this.$cookie.get('bakewell-plastering')) ? false : true;

        return showBanner;

      }
    },
    data () {
      return {
        copyrightYear: this.getCurrentYear(),
        cookieBanner: this.checkForCookie()
      }
    },
    mounted () {

      let $root = document.getElementById('app'),
          $banner = $root.querySelectorAll('.cookie-banner')[0],
          height = '0';

      if ($banner) {

        height = $banner.offsetHeight.toString();

        $root.style.paddingBottom = height + 'px';

      }

    }
  }
</script>
