<template>
  <footer class="group">
    <section class="small-print">
      <div class="small-print">
        <small>&copy;2018. All rights reserved.</small>
        <small>Website by <a href="http://www.billywatson.net">billywatson.net</a>.</small>
      </div>
    </section>
    <router-link to="/projects" class="logo">
      <img src="./../../assets/images/global/bw-logo-black.svg" alt="Billy Watson logo">
    </router-link>
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
      padding: 10px 20px 20px;
    }
  }

  @media screen and (max-width: 450px) {
    footer {
      padding: 0 10px 20px;
    }
  }
</style>
