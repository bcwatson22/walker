<template>
  <!-- <nav> -->
    <ul>
      <li><a href="/" @click.prevent="closeAndGo($event)">Home</a></li>
      <li><a href="/services" @click.prevent="closeAndGo($event)">Services</a></li>
      <li><a href="/bio" @click.prevent="closeAndGo($event)">Bio</a></li>
      <li><a href="/before-and-after" @click.prevent="closeAndGo($event)">Transformations</a></li>
      <li><a href="/contact" @click.prevent="closeAndGo($event)">Contact</a></li>
    </ul>
  <!-- </nav> -->
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
    }
  }
</style>
