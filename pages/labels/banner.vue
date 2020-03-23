<template>
  <section class="banner-page">
    <banner/>
  </section>
</template>

<script>
import Banner from '../../components/labels/Banner2.vue'
export default {
  components: {
    Banner
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style lang="scss">
   @page {
    size: 3000mm 2500mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 3000mm; // set appropriately
      height: 2500mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .banner-page {
    overflow: hidden;
    width: 3000mm; // set appropriately
    height: 2500mm; // set appropriately
    margin: 0;
    padding: 0;
    background: linear-gradient(
      rgba(26, 51, 77, 0.6),
      rgba(26, 51, 77, 0.6)
    ), url(../../static/images/back-min2.jpg) no-repeat;
    background-size: cover;
    background-position: 0 0;
    text-align: center;
    .banner {
      top: 800mm;
      left: 1150mm;
      position: absolute;
      transform: scale(4);
    }
  }

</style>

