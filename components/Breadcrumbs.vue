<template>
  <section class="breadcrumbs text-xs text-gray-500 m-4">
    <ul class="list-none">
      <li class="list-none inline mr-2 hover:underline"  v-for="item in breadcrumbs" :key="item.code">
        <nuxt-link :to="item.url" class="">
          {{item.name}}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: ['breadcrumbs']
  }
</script>

<style lang="scss">

</style>




