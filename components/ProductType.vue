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
      padding: 3mm 20px 2mm 20px;
      color: #1f2e35;
      display: inline-block;
      text-transform: uppercase;
      position: relative;
      width: 300px;
      &:after {
        content: '';
        position: absolute;
        top: 38px;
        left: 0;
        /* margin-left: -142px; */
        width: 0;
        height: 0;
        border-top: solid 14px;
        border-top-color: #FBB02D;
        border-left: solid 150px transparent;
        border-right: solid 150px transparent;
      }
    }
  }
</style>
