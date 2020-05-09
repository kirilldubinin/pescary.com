<template>
  <section class="pt-20 category">
    <MainHeader class="h-20"/>
    <section class="w-full mx-auto mt-20 max-w-6xl">
      <div class="p-12 w-full  grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        <div class="category__item transition duration-150 ease-in-out hover:bg-gray-100 p-8 hover:shadow-md cursor-pointer hover:text-orange-500"
          :key="product.id"
          v-for="product in categories">
          <nuxt-link :to="product.route" class="hover:text-orange-500">
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
  </section>
</template>

<script>
  import MainHeader from '../../components/MainHeader.vue'
  export default {
    components: {
      MainHeader
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .category {
    &__item {
      &:hover {
        h2 {
          color: #f3a42f;
        }
      }
    }
  }
</style>

