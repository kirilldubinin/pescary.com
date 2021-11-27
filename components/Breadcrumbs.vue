<template>
  <section class="breadcrumbs text-xs text-gray-500 m-4 ml-10">
    <ul class="list-none">
      <li class="list-none inline mr-2"  v-for="item in breadcrumbs" :key="item.code">
        <nuxt-link v-if="item.url" :to="item.url" class="hover:underline">{{item.name}}</nuxt-link>
        <span v-if="!item.url">{{item.name}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: ['breadcrumbs']
  }
</script>




