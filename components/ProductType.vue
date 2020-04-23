<template>
  <section class="product-type">
    <label :style="{backgroundColor: color}">{{label}}</label>
    <span :style="{borderTopColor: color}" class="product-type__arrow"></span>
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
  margin: 0 auto;
  text-align: center;
  label {
    padding: 4mm 20px 2mm 20px;
    color: #1f2e35;
    display: inline-block;
    text-transform: uppercase;
    position: relative;
    width: 300px;
  }
  &__arrow {
    margin: 0 auto;
    display: block;
    width: 0;
    height: 0;
    border-top: solid 14px;
    border-top-color: rgb(251, 176, 45);
    border-left: solid 150px transparent;
    border-right: solid 150px transparent;
  }
}
</style>
