<template>
  <section class="product-name">
    {{label}}
  </section>
</template>

<script>
export default {
  props: [
    'label',
    'color'
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
  .product-name {
    font-family: 'Baloo Chettan', cursive;
    text-align: center;
    width: 100%;
    color: #fefefe;
    font-size: 40px;
    /* margin-bottom: 42px; */
    letter-spacing: 2px;
    padding: 16px 0 0 0;
  }
</style>
