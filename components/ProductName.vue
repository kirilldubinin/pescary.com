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
    height: 100px;
    text-align: center;
    font-family: 'Core Rhino';
    width: 100%;
    color: #fefefe;
    font-size: 34px;
    /* margin-bottom: 42px; */
    letter-spacing: 3px;
    padding: 10px 0 0 0;
  }
</style>
