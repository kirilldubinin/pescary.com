<template>
  <section class="w-full max-w-screen-xl">
    <div class="p-12 w-full  grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
      <div class="transition duration-150 ease-in-out hover:bg-gray-100 p-8 hover:shadow-md cursor-pointer"
        :key="product.id"
        v-for="product in categories">
        <nuxt-link :to="product.route">
          <img class="object-cover h-48 w-full rounded-lg"
            :src="product.img"
            :title="product.label"
            :alt="product.label"/>

          <h2 class="transition duration-150 ease-in-out mt-8 text-center text-gray-800 tracking-wider">{{product.label}}</h2>
        </nuxt-link>
      </div>
    </div>
    <nuxt-child/>
  </section>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .products {
    &__card {
      background: whitesmoke;
      padding: 2em 1em 1em 1em;
      box-shadow: 0 0 5px #ccc;
      margin: 2em;
      cursor: pointer;
      img {
        width: 180px;
        height: 180px;
        object-fit: cover;
        background-size: cover;
        border-radius: 20%;
      }
      p {
        padding-top: 1em;
        text-align: center;
      }
    }
  }
</style>

