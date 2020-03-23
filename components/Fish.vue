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
    font-size: 14px;
    color: #fefefe;
    padding-top: 16px;
    text-align: center;
  }
</style>
