<template>
  <ul>
    <li><a href="/" class="home" @click.prevent="closeAndGo($event)">Home</a></li>
    <li><a href="/services" class="services" @click.prevent="closeAndGo($event)">Services</a></li>
    <li><a href="/bio" class="bio" @click.prevent="closeAndGo($event)">Bio</a></li>
    <li><a href="/transformations" class="transformations" @click.prevent="closeAndGo($event)">Transformations</a></li>
    <li><a href="/contact" class="contact" @click.prevent="closeAndGo($event)">Contact</a></li>
  </ul>
</template>

<script>
  import mixins from './../../scripts/mixins.js';

  export default {
    name: 'Nav',
    mixins: [mixins],
    methods: {
      closeAndGo: function (event) {

        this.toggleElement(event, 'body', 'header');

        this.linkTo(event, false);

      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    margin: 0;

    a {
      padding: 12px 0;
      text-decoration: underline;

      &:hover,
      &:focus {
        text-decoration: none;
      }

      &:active {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 600px) {
    li a {
      text-indent: -99999rem;
      width: 40px;
      height: 40px;
      display: block;

      &.home {
        background: url('./../../assets/images/global/icons/home.svg') 50% 50% no-repeat;
        background-size: 90% 90%;
      }

      &.services {
        background: url('./../../assets/images/global/icons/services.svg') 50% 50% no-repeat;
        background-size: 90% 90%;
      }

      &.bio {
        background: url('./../../assets/images/global/icons/bio.svg') 50% 50% no-repeat;
        background-size: 90% 90%;
      }

      &.transformations {
        background: url('./../../assets/images/global/icons/transformations.svg') 50% 50% no-repeat;
        background-size: 90% 90%;
      }

      &.contact {
        background: url('./../../assets/images/global/icons/contact.svg') 50% 50% no-repeat;
        background-size: 90% 90%;
      }
    }
  }
</style>
