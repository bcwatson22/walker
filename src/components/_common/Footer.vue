<template>
  <footer class="group">
    <section>
      <small>&copy;2018. All rights reserved.</small>
      <small>Website by <a href="http://www.billywatson.net" target="_blank">billywatson.net</a>.</small>
    </section>
    <a href="http://www.billywatson.net" class="logo button" target="_blank">
      <img src="./../../assets/images/global/bw-logo-black.svg" alt="Billy Watson logo">
    </a>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      year: Number
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 45px;
  }

  small {
    display: block;
  }

  .logo {
    max-width: 115px;
    margin-left: auto;
    min-height: 40px;
  }

  @media screen and (max-width: 900px) {
    footer {
      padding: 12px 24px 24px;
    }
  }

  @media screen and (max-width: 450px) {
    footer {
      padding: 0 12px 24px;
    }
  }
</style>
