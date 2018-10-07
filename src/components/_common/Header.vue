<template>
  <header class="group">
    <nav>
      <button class="menu-toggle button" @click="toggleElement($event, 'body', 'header')"><span>Menu</span></button>
      <Nav/>
    </nav>
    <router-link to="/" class="logo button">
      <img src="./../../assets/images/global/logo-horizontal.svg" alt="Bakewell Plastering logo">
    </router-link>
  </header>
</template>

<script>
  import Nav from './Nav.vue';
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Header',
    components: {
      Nav
    },
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/sass/_variables.scss';

  header {
    padding: 0 24px;
    margin-bottom: 24px;
    position: relative;
  }

  nav {
    // float: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - 36px);
    top: 50%;
    left: 24px;
    transform: translateY(-50%);

    ul {
      padding: 24px 0;
      font-size: 22px;
      font-size: 2.2rem;
      width: calc(100% - 124px);
      left: 100px;
      position: absolute;
      opacity: 0;
      transform: translateY(-100%);
      transition: opacity 0.5s ease;
      will-change: opacity, transform;

      .toggle & {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .logo {
    position: relative;
    display: block;
    width: calc(50% - 24px);
    float: right;
    transition: all 0.5s ease;
    z-index: 5;

    .toggle & {
      opacity: 0.1;
      z-index: -1;
    }

    &:hover {
      transition: none;
    }
  }

  .menu-toggle {
    width: 40px;
    height: 40px;
    background: none;
    text-indent: -99999rem;
    position: relative;

    span,
    span:before,
    span:after {
      display: block;
      position: absolute;
      height: 6px;
      width: 36px;
      background: $light-blue;
      transition: all 0.3s ease-in-out;
      border-radius: 6px;
    }

    span,
    span:after {
      will-change: transform;
    }

    span {
      top: 6px;
      left: 2px;

      &:before,
      &:after {
        content: '';
        left: 0;
      }

      &:before {
        top: 12px;
        will-change: opacity;
      }

      &:after {
        top: 24px;
      }
    }

    .toggle & {
      span {
        top: 18px;
        transform: rotate(135deg);

        &:before {
          opacity: 0;
        }

        &:after {
          top: 0px;
          transform: rotate(-270deg);
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .logo {
      width: calc(70% - 24px);
    }
  }

  @media screen and (max-width: 700px) {
    nav ul {
      width: calc(100% - 84px);
      left: 60px;
      font-size: 18px;
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 600px) {
    nav ul {
      width: calc(100% - 96px);
      left: 84px;
    }
  }

  @media screen and (max-width: 500px) {
    header {
      padding: 0 12px;
    }

    nav {
      width: calc(100% - 24px);
      left: 12px;
      // top: 0;
      // transform: none;

      ul {
        width: calc(100% - 84px);
      }
    }

    .logo {
      width: calc(80% - 24px);
    }
  }

  @media screen and (max-width: 400px) {
    nav ul {
      width: calc(100% - 72px);
      left: 60px;
    }
  }
</style>
