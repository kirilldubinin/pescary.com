<template>
  <section class="w-full max-w-screen-xl">
    <div class="p-12 w-full grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 gap-6">
      <div class="bg-gray-100 p-8 shadow-md cursor-pointer"
        :key="product.id"
        v-for="product in products">
        <nuxt-link :to="product.route">
          <img class="object-cover h-48 w-full rounded-lg"
            :src="product.img"
            :title="product.label"
            :alt="product.label"/>

          <p class="mt-8 text-center text-gray-800 tracking-wider">{{product.label}}</p>
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
        products: [{
          id: 1,
          label: 'СЫПУХА',
          route:'products/lure',
          img: '/images/mock.png'
        }, {
          id: 2,
          label: 'ГРАНУЛА',
          route:'/granule',
          img: '/images/mock2.png'
        }, {
          id: 3,
          label: 'ПЕЛЛЕТС',
          route:'/pellets',
          img: '/images/mock3.png'
        }, {
          id: 3,
          label: 'ЛИКВИДЫ',
          route:'/pellets',
          img: '/images/mock.png'
        }, {
          id: 3,
          label: 'МАСЛА',
          route:'/pellets',
          img: '/images/mock3.png'
        }, {
          id: 3,
          label: 'ПАТОКА',
          route:'/pellets',
          img: '/images/mock2.png'
        }, {
          id: 3,
          label: 'БОЙЛОСТРОЕНИЕ',
          route:'/pellets',
          img: '/images/mock2.png'
        }, {
          id: 3,
          label: 'ПЛАСТИК',
          route:'/pellets',
          img: '/images/mock.png'
        }]
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

