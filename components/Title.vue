<template>
  <section class="title m-4 ml-10 text-xl text-left font-bold text-gray-800">
    <h1>{{title && title.main}}</h1>
    <p v-if="title.sub" class="text-xs text-gray-500 font-hairline">{{title && title.sub}}</p>
  </section>
</template>

<script>
  export default {
    props: ['title']
  }
</script>





