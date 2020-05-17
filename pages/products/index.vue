<template>
  <section class="pt-20 category">
    <MainHeader class="h-20"/>
    <section class="w-full mx-auto mt-10 max-w-6xl">
      <h2 class="uppercase text-center text-gray-700 text-3xl tracking-widest">продукты</h2>
      <div class="p-12 pt-10 w-full grid
        sm:grid-cols-3 sm:gap-4
        lg:grid-cols-3 lg:gap-6">
        <div class="category__item transition duration-150 ease-in-out hover:bg-gray-100 p-8 hover:shadow-md cursor-pointer hover:text-orange-500"
          :key="product.id"
          v-for="product in categories">
          <nuxt-link :to="product.route" class="hover:text-orange-500">
            <img class="object-cover h-56 w-full rounded-lg"
              :src="product.img"
              :title="product.shortName"
              :alt="product.shortName"/>
            <h2 class="transition duration-150 ease-in-out mt-8 text-lg text-center uppercase text-gray-800 tracking-wider">
              {{product.shortName}}
            </h2>
          </nuxt-link>
        </div>
      </div>
      <nuxt-child/>
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
      const sort = [
        'lure',
        'granule',
        'pellets',
        'liquid',
        'flour',
        'other'
      ]
      const categories = Object.values(this.$store.state.categories).sort
      return {
        categories: sort.map(i => { return this.$store.state.categories[i] })
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

