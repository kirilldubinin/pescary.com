<template>
  <section class="index pt-20">
    <MainHeader class="h-20"/>
    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
    <section class="w-full max-w-6xl mx-auto font-montserrat flex">
      <div class="flex-initial w-1/2 mt-10">
        <img class="w-full object-cover rounded" src="/images/mock4.png"/>
      </div>
      <div class="flex-initial w-1/2 ml-12 mt-8">
        <p class="text-xs text-gray-500">{{title.main}}</p>
        <div class="flex relative">
          <h2 class="text-3xl flex-initial text-gray-800 font-baloo mr-16 tracking-wide">
            {{product.name}}
            <p class="text-xs text-gray-500">{{product._id}}</p>
          </h2>
          <!--div title="добавить в корзину" class="flex-initial text-center cursor-pointer hover:shadow-md hover:bg-gray-300 rounded-full p-4 transition duration-150 ease-in-out">
            <svg class="h-8 w-8 pr-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve"> <path style="fill:#FFC107;" d="M508.288,85.764c-3.04-3.648-7.552-5.76-12.288-5.76H107.52c-4.96,0-9.664,2.304-12.704,6.24 c-3.008,3.968-4.032,9.088-2.752,13.888l51.2,191.36c1.888,7.04,8.224,11.872,15.456,11.872c0.256,0,0.544,0,0.8-0.032l305.28-15.36 c7.392-0.384,13.6-5.792,14.944-13.088l32-176C512.608,94.18,511.328,89.38,508.288,85.764z"/> <g> <circle style="fill:#455A64;" cx="208" cy="448.004" r="48"/> <circle style="fill:#455A64;" cx="400" cy="448.004" r="48"/> <path style="fill:#455A64;" d="M432,368.004H176c-7.264,0-13.6-4.864-15.456-11.872L78.272,48.004H16c-8.832,0-16-7.168-16-16 s7.168-16,16-16h74.56c7.264,0,13.6,4.864,15.456,11.872l82.272,308.128H432c8.832,0,16,7.168,16,16S440.832,368.004,432,368.004z"/> </g> <g> <path style="fill:#FAFAFA;" d="M320,256.004c-8.832,0-16-7.168-16-16v-96c0-8.832,7.168-16,16-16s16,7.168,16,16v96 C336,248.836,328.832,256.004,320,256.004z"/> <path style="fill:#FAFAFA;" d="M368,208.004h-96c-8.832,0-16-7.168-16-16s7.168-16,16-16h96c8.832,0,16,7.168,16,16 S376.832,208.004,368,208.004z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>

          </div-->
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
      debugger;
      const _id = this.$route.params.id
      const category = this.$route.params.category
      const product = this.$store.state.categories[category].items.filter( item => { return item._id === +_id })[0]
      return {
        title: this.$store.state.title[category],
        breadcrumbs: this.$store.state.breadcrumbs[category],
        currentSize: product.sizes[0],
        currentPrice: product.prices[0],
        product: product
      }
    }
  }
</script>

<style lang="scss">
</style>

