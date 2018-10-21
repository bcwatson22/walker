<template>
  <section class="page contact">
    <div class="content" :class="formSent ? 'form-sent' : ''">
      <article class="text">
        <h1>Contact</h1>
        <div v-if="!formSent" class="contact-content">
          <p>All jobs considered.</p>
          <p>For more information or to request a no-obligation quote please fill in the following form:</p>
          <form id="contactform" action="//formspree.io/bakewellplastering@aol.co.uk" method="POST">
            <fieldset>
              <div class="input">
                <input type="text" name="name" required>
                <label for="name">Name</label>
              </div>
              <div class="input">
                <input type="tel" name="phone" required>
                <label for="phone">Phone number</label>
              </div>
              <div class="input">
                <input type="text" name="email" required>
                <label for="email">Email address</label>
              </div>
              <div class="input">
                <textarea name="message" required></textarea>
                <label for="message">Brief description of work</label>
              </div>
              <div class="input">
                <select name="budget" required>
                  <!-- <option value="" selected disabled>Rough budget</option> -->
                  <option value="" selected disabled></option>
                  <option value="Less than £500">Less than £500</option>
                  <option value="£500-1000">£500-1000</option>
                  <option value="£1000-5000">£1000-5000</option>
                  <option value="£5000+">£5000+</option>
                </select>
                <label for="budget">Rough budget</label>
              </div>
              <input type="hidden" name="_subject" value="Website quote enquiry">
              <input type="hidden" name="_next" value="/contact?form=success">
              <input type="text" name="_gotcha" class="honeypot">
              <input type="submit" value="Send">
            </fieldset>
          </form>
        </div>
        <div v-if="formSent" class="contact-content">
          <h2>Thanks for your enquiry.</h2>
          <h3>Bakewell Plastering will be in touch.</h3>
        </div>
      </article>
      <article class="image">
        <v-lazy-image :src="require('./../../assets/images/pages/contact-1500.jpg')" :src-placeholder="require('./../../assets/images/pages/contact-10.jpg')" alt="Bakewell Plastering van"></v-lazy-image>
      </article>
    </div>
  </section>
</template>

<script>
  import mixins from './../../scripts/mixins.js';
  import VLazyImage from 'v-lazy-image';

  export default {
    name: 'Contact',
    props: {
      formSent: String
    },
    components: {
      VLazyImage
    },
    mixins: [mixins],
    mounted () {

      this.updateTitleMeta('Contact');

    }
  }
</script>

<style lang="scss" scoped>
  .honeypot {
    display: none;
  }
</style>
