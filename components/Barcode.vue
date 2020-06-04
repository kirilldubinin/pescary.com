<template>
  <section class="barcode">
    <img :src="'/barcodes/' + code  + '.svg'"/>
    <!--div v-html="code"></div-->
  </section>
</template>

<script>
export default {
  props: ['code']
}
</script>

<style lang="scss">
  .barcode {
    position: absolute;
    bottom: 6px;
    background: #f0f0f0;
    height: 44px;
    overflow: hidden;
    right: 8px;
    border-top: 4px solid #f0f0f0;
    width: 120px;
    img {
      transform: scale(0.12);
      position: absolute;
      top: -212px;
      left: -416px;
    }
  }
</style>
