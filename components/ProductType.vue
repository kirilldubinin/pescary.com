<template>
  <section class="product-type">
    <label :style="{backgroundColor: color}">{{label}}</label>
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
  .product-type {
    font-family: 'Montserrat', cursive;
    font-weight: bold;
    margin: 10px auto;
    text-align: center;
    label {
      border-radius: 6px;
      padding: 12px 20px;
    }
  }
</style>
