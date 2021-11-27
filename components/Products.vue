<template>
  <section class="">
    <section class="w-full mx-auto mt-10 max-w-6xl">
      <div class="p-12 pt-10 w-full flex justify-around">
        <div class="category__item"
          :key="product.id"
          v-for="product in categories">
          <nuxt-link :to="product.route" class="">
            <img class="oobject-cover h-64 rounded-lg opacity-80"
              :src="product.img"
              :title="product.shortName"
              :alt="product.shortName"/>
          </nuxt-link>
        </div>
      </div>
      <nuxt-child/>
    </section>
  </section>
</template>

<script>
  export default {
    components: {
    },
    data() {
      const sort = [
        'lure',
        'granule',
        //'pellets',
        'liquid',
        //'flour',
        //'other'
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

