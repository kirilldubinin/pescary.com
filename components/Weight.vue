<template>
  <section class="weight">
    {{value}}
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
  .weight {

    font-size: 22px;
    color: #fefefe;
    margin: 6px auto;
  }
</style>
