<template>
  <section class="product-composition">
    <b>{{label}}: </b>{{composition}}
  </section>
</template>

<script>
export default {
  props: [
    'label',
    'composition'
  ],
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="scss">
  $color: #fefefe;
  .product-composition {
    font-family: 'Montserrat', cursive;
    color: #fefefe;
    font-size: 9px;
    text-align: left;
    padding: 2px 0;
    line-height: 12px;
    text-align: justify;
    b {
      text-transform: uppercase;
      font-size: 8px;
    }
  }
</style>
