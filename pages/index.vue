<template>
  <section class="index">
      <MainHeader class="h-auto sm:h-20"/>
      <section class="w-full max-w-6xl mx-auto mt-24 font-montserrat">
        <div class="">
          <img class="mx-auto shadow-md rounded-md object-cover h-full" src="/images/main.jpg"/>
        </div>
        <p class="w-full font-montserrat text-justify">

        </p>

      </section>

      <nuxt-child class="max-w-full mx-auto mt-20 overflow-auto"/>
    <!--footer>
      ООО "ПРОКОРМ" 2013-2020
    </footer-->
  </section>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
export default {
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">

  $color: #fefefe;
  $main-color: #1a334d;
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .index {
    color: #020202;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
  }

  footer {
    width: 1000px;
    position: absolute;
    bottom: 10px;
    color: $color;
    font-size: 11px;
    opacity: 0.8;
    text-align: center;
  }
</style>

