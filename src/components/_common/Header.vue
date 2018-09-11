<template>
  <header class="group">
    <router-link to="/projects" class="logo">
      <img src="./../../assets/images/global/logo-horizontal.svg" alt="Bakewell Plastering logo">
    </router-link>
    <nav>
      <button class="menu-toggle" @click="toggleElement($event, 'body', 'header')"><span>Menu</span></button>
      <Nav/>
    </nav>
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
    padding: 24px 24px 0;
    margin-bottom: 24px;
    // display: flex;
    // align-items: center;
    // justify-content: space-between;

  }

  nav {
    float: left;
    // position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

  // .logo,
  // nav {
  //   width: calc(50% - 24px);
  // }

  .logo {
    display: block;
    width: calc(50% - 24px);
    float: right;
    // width: 50%;
    // margin: 0 auto;

    // opacity: 0;
    // transform: translateY(0%);
    transition: all 0.5s ease;
    // will-change: transform;

    .toggle & {
      opacity: 0.1;
      // transform: translateY(48px);
    }
  }

  .menu-toggle {
    width: 40px;
    height: 40px;
    // background: url('./../../assets/images/global/icons/bars.svg') 50% 50% no-repeat;
    // background-size: auto 100%;
    background: none;
    text-indent: -99999rem;
    position: relative;

    span,
    span:before,
    span:after {
      display: block;
      position: absolute;
      // left: 0;
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
</style>
