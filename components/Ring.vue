<template>
  <section class="pescary-ring">
    <slot></slot>
  </section>
</template>

<script>
export default {
	props: ['inner']
}
</script>

<style lang="scss">
  $color: #fefefe;
  .pescary-ring {
    font-family: 'Montserrat', cursive;
    display: inline-block;
    border: 2px solid $color;
    border-radius: 50%;
    height: 78px;
    width: 78px;
    line-height: 60px;
    text-align: center;
    overflow: hidden;
    color: $color;
    margin: 14px 4px 10px 4px;
  }

</style>
