<template>
  <section class="fish" v-html="value">
  </section>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  .fish {
    line-height: 20px;
    font-size: 13px;
    color: #fefefe;
    padding-top: 12px;
    text-align: center;
    font-weight: bold;
  }
</style>
