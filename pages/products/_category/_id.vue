<template>
  <section class="index pt-20">
    <MainHeader class="h-20"/>
    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
    <section class="w-full max-w-6xl mx-auto font-montserrat flex">
      <div class="flex-initial w-1/2 mt-10">
        <img class="object-cover h-full mx-auto rounded-md"
                :src="'/images/' + category + '/sm/' + category + '-package-rotate-' + product.name.toLowerCase() + '-1.jpg'"/>
      </div>
      <div class="flex-initial w-1/2 ml-12 mt-8">
        <p class="text-xs text-gray-500">{{title.main}}</p>
        <div class="flex relative">
          <h2 class="text-3xl flex-initial text-gray-800 font-baloo mr-16 tracking-wide">
            {{product.name}}
            <p class="text-xs text-gray-500">{{product._id}}</p>
          </h2>
          <button v-on:click="add()" class="bg-blue-500 hover:bg-blue-700 h-8 text-white text-xs mt-2 py-2 px-4 rounded">
            В корзину
          </button>
        </div>
        <p class="price text-xs text-gray-800 mt-4 mb-6">
          <label>Цена:</label>
          <span class="text-sm font-bold">{{currentPrice}} {{product.currency}}</span>
        </p>

        <p class="text-xs text-gray-800 mt-4">
          <label>Размер:</label>
          <span v-for="(size, index) in product.sizes" :key="size"
            v-on:click="setSize(size, index)"
            v-bind:class="{
              'border-orange-400': size === currentSize,
              'text-orange-600': size === currentSize,
              'bg-orange-100': size === currentSize
            }"
            class="cursor-pointer border hover:border-orange-300 hover:text-gray-800 border-gray-400 text-gray-400 px-4 py-2 mx-2">
            {{size}}
          </span>
        </p>
        <p class="text-xs text-gray-800 mt-6">
          <label class="">Ароматизатор:</label>
          <span class="font-bold">{{product.aroma === 'none' ? 'без аромата' : product.aroma }}</span>
        </p>

        <p class="text-xs text-gray-800 mt-4">
          <label>Цвет:</label>
          <span class="font-bold">{{product.color === 'none' ? 'без красителя' : product.color }}</span>
        </p>

        <p class="text-xs text-gray-800 mt-4">
          <label class="">Рыба:</label>
          <span class="font-bold">{{product.fishes.join(', ')}}</span>
        </p>

        <p class="text-xs text-gray-800 mt-4">
          <label>Состав:</label>
          <span class="leading-loose font-bold">
            {{product.composition}}
          </span>
        </p>

        <p class="text-xs text-justify text-gray-800 mt-4">
          <span class="leading-loose">
            {{product.description}}
          </span>
        </p>
      </div>
    </section>
  </section>
</template>

<script>
  import MainHeader from '../../../components/MainHeader.vue'
  import Breadcrumbs from '../../../components/Breadcrumbs.vue'
  export default {
    components: {
      MainHeader,
      Breadcrumbs
    },
    methods: {
      setSize: function (size, index) {
        this.currentSize = size;
        this.currentPrice = this.product.prices[index]
      },
      add: function (event, item) {

      }
    },
    data() {
      const _id = this.$route.params.id
      const category = this.$route.params.category
      const product = this.$store.state.categories[category].items.filter( item => { return item._id === +_id })[0]
      return {
        category: category,
        title: this.$store.state.title[category],
        breadcrumbs: [...this.$store.state.breadcrumbs[category], ...[{code: 'product', name: product.name + '(' + _id + ')'}]],
        currentSize: product.sizes[0],
        currentPrice: product.prices[0],
        product: product
      }
    }
  }
</script>

<style lang="scss">
</style>

