<template>
  <section class="category">
    <MainHeader class=""/>
    <section class="w-full mx-auto mt-10 max-w-6xl">
      <nuxt-child/>
    </section>
  </section>
</template>

<script>
  import MainHeader from '../../components/MainHeader.vue'
  export default {
    components: {
      MainHeader
    },
    data() {
      const sort = [
        'lure',
        'granule',
        //'pellets',
        'liquid',
        'flour',
        //'other'
      ]
      const categories = Object.values(this.$store.state.categories).sort
      return {
        categories: sort.map(i => { return this.$store.state.categories[i] })
      }
    }
  }
</script>

<style>
  .category__item :hover h2 {
    color: #f3a42f;
  }
</style>

