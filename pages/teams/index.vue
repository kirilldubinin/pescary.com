<template>
  <section class="index">
    <MainHeader class="h-20"/>
    <section class="w-full max-w-6xl mx-auto mt-24 font-montserrat teams">

      <h2 class="text-2xl mb-6">Наши команды</h2>

    </section>
  </section>
</template>

<script>
  import categories from '../../store/categories.js'
  import MainHeader from '../../components/MainHeader.vue'
  export default {
    components: {
      MainHeader
    },
    data() {
      return {
        teams: []
      }
    }
  }
</script>

<style lang="scss">

</style>

