<template>
  <section class="index">
    <MainHeader class="h-20"/>
    <section class="w-full max-w-full mx-auto mt-20 flex">
      <div class="grid
        sm:grid-cols-3
        md:grid-cols-3 md:gap-3 md:m-4
        lg:grid-cols-3 lg:gap-3 lg:m-4
        xl:grid-cols-4 xl:gap-4 xl:m-4
        2xl:grid-cols-5 2xl:gap-6 2xl:m-4"
      >
        <nuxt-link :to="'/products/' + category + '/' + product.code" class="product transition duration-150 ease-in-out cursor-pointer px-2 pt-6 pb-2 hover:bg-gray-100 hover:shadow-lg"
                    :key="product.id" v-for="product in products">
          <img class="object-cover h-56 w-48 mx-auto rounded-md" :src="product.img"/>
          <div class="px-1">
            <h2 class="product__name transition duration-150 ease-in-out text-xl mt-3 mb-2 text-center font-baloo">{{product.label}}</h2>
            <p class="product__description h-14 min-h-full text-xs text-gray-600 font-col overflow-hidden break-words" v-html="product.description"></p>
            <div class="flex content-end px-1 mt-1">
              <span class="flex-1 pt-4 text-gray-700 text-lg font-bold">{{product.price}}</span>
              <div v-on:click="(event) => { add(event, product) }" title="добавить в корзину" class="product__add flex-initial text-center cursor-pointer hover:bg-gray-300 rounded-full p-4">
                <svg class="h-8 w-8 pr-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve"> <path style="fill:#FFC107;" d="M508.288,85.764c-3.04-3.648-7.552-5.76-12.288-5.76H107.52c-4.96,0-9.664,2.304-12.704,6.24 c-3.008,3.968-4.032,9.088-2.752,13.888l51.2,191.36c1.888,7.04,8.224,11.872,15.456,11.872c0.256,0,0.544,0,0.8-0.032l305.28-15.36 c7.392-0.384,13.6-5.792,14.944-13.088l32-176C512.608,94.18,511.328,89.38,508.288,85.764z"/> <g> <circle style="fill:#455A64;" cx="208" cy="448.004" r="48"/> <circle style="fill:#455A64;" cx="400" cy="448.004" r="48"/> <path style="fill:#455A64;" d="M432,368.004H176c-7.264,0-13.6-4.864-15.456-11.872L78.272,48.004H16c-8.832,0-16-7.168-16-16 s7.168-16,16-16h74.56c7.264,0,13.6,4.864,15.456,11.872l82.272,308.128H432c8.832,0,16,7.168,16,16S440.832,368.004,432,368.004z"/> </g> <g> <path style="fill:#FAFAFA;" d="M320,256.004c-8.832,0-16-7.168-16-16v-96c0-8.832,7.168-16,16-16s16,7.168,16,16v96 C336,248.836,328.832,256.004,320,256.004z"/> <path style="fill:#FAFAFA;" d="M368,208.004h-96c-8.832,0-16-7.168-16-16s7.168-16,16-16h96c8.832,0,16,7.168,16,16 S376.832,208.004,368,208.004z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="flex-initial py-4 px-2 m-6 bg-gray-100 shadow-md text-gray-900">
        <div class="w-64 px-2">
          <h3 class="text-sm font-bold mb-6 text-center uppercase">
            Прикормка рыболовная
          </h3>

          <div class="text-xs mt-6">
            <h4 class="font-bold my-2">Рыба</h4>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Лещ
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Плотва
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Карп
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Карась
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Уклейка
            </label>
          </div>

          <div class="text-xs mt-6">
            <h4 class="font-bold my-2">Цвет</h4>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Без красителя (БАЗА)
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Желтый
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Красный
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Черный
            </label>
          </div>

          <div class="text-xs mt-6">
            <h4 class="font-bold my-2">Аромат</h4>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Без аромата (БАЗА)
            </label>
            <label class="block cursor-pointer pt-1 hover:text-orange-500">
              <input class="align-text-bottom" type="checkbox"/>
              Strawberry Cream (Клубника со сливками)
            </label>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import MainHeader from '../../components/MainHeader.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      MainHeader
    },
    methods: {
      add: function (event, item) {
        event.stopPropagation();
        event.preventDefault();
        this.$store.commit('cart/add', item)
      }
    },
    data() {
      const category = this.$route.params.id
      return {
        products: this.$store.state.products[category].items,
        category: category
      }
    }
  }
</script>

<style lang="scss">
  .product {
    &:hover {
      .product__name {
        color: #f3a42f;
      }
      .product__add {
        display: block;
      }
    }

    &__add {
      display: none;
    }

    &__description {
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }
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

