<template>
  <section class="index pt-20">
    <MainHeader class="h-20"/>
    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
    <Title :title="title"/>
    <section class="w-full max-w-full mx-auto flex">
      <div class="grid
        sm:grid-cols-2
        md:grid-cols-2 md:gap-3 md:m-4
        lg:grid-cols-3 lg:gap-3 lg:m-4
        xl:grid-cols-4 xl:gap-4 xl:m-4
        2xl:grid-cols-4 2xl:gap-4 2xl:m-4
        3xl:grid-cols-5 2xl:gap-4 2xl:m-4
        4xl:grid-cols-6 2xl:gap-4 2xl:m-4"
      >
        <nuxt-link :to="'/products/' + category + '/' + product.code"
          class="product transition duration-150 ease-in-out cursor-pointer w-56 px-2 pt-4 pb-4 hover:shadow-lg border rounded"
          :key="product.id" v-for="product in products">
          <img class="object-cover h-48 w-40 mx-auto rounded-md" :src="product.img"/>
          <div class="">
            <h2 class="product__name transition duration-150 ease-in-out text-xl mt-3 mb-2 text-center font-baloo">{{product.name}}</h2>
            <p class="product__aroma text-gray-900 text-xs text-center truncate ..." :title="product.aroma" v-html="product.aroma"></p>
            <div class="product__color text-gray-100 text-xs text-center rounded-full mt-2 h-6 w-6 mx-auto"></div>
            <!--p class="product__description h-14 min-h-full text-xs text-gray-600 font-col overflow-hidden break-words" v-html="product.description"></p-->
            <!--div class="flex content-center px-1 mt-1">
              <div class="rounded-full border-2 border-grey-100 p-1">
                <div class="rounded-full w-8 h-8 bg-red-500"></div>
              </div>
              <div class="">
                <svg  class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><g id="Outline"><path d="M488.967,55.014A23.883,23.883,0,0,0,472,48H330.6A56,56,0,0,0,280,16H232a56,56,0,0,0,0,112v48H160a8,8,0,0,0-8,8v36.321l-14.374,12.323a119.2,119.2,0,0,0-17.447,18.525l12.754,9.661a103.242,103.242,0,0,1,15.1-16.037l17.17-14.719A8,8,0,0,0,168,224V192h64v24H184v16h48v40a16.019,16.019,0,0,1-16,16H153.3a70.8,70.8,0,0,1,5.08-7.789l-12.765-9.645a87.571,87.571,0,0,0-9.653,16.164c-.193.418-.364.848-.55,1.27H118.179c.98-2.7,2.057-5.371,3.256-7.97l-14.53-6.7a119.2,119.2,0,0,0-2.8,93.01L150.561,485.8A15.9,15.9,0,0,0,165.473,496H346.527a15.9,15.9,0,0,0,14.912-10.2L407.9,366.343a119.173,119.173,0,0,0-33.518-133.7L360,220.321V184a8,8,0,0,0-8-8H280V128a55.843,55.843,0,0,0,46.653-25.048A55.278,55.278,0,0,0,330.6,96H472a24.008,24.008,0,0,0,16.967-40.986ZM280,80H264V32h16ZM248,32V80H232V32Zm-32,3.318V80H192.8a40.291,40.291,0,0,1-.8-8A39.844,39.844,0,0,1,216,35.318ZM248,192h16v24H248ZM398.238,342.161a103.528,103.528,0,0,1-5.254,18.38L346.527,480H165.473L119.016,360.539A103.161,103.161,0,0,1,113.792,304H130.13a87.135,87.135,0,0,0,3.8,50.741L149.546,394.9l14.912-5.8L148.84,348.94a71.236,71.236,0,0,1-2.687-43.191c.148-.587.321-1.166.483-1.749H216a32.036,32.036,0,0,0,32-32V232h16v40a32.036,32.036,0,0,0,32,32H398.208a103.328,103.328,0,0,1,.03,38.161Zm-34.274-97.367A102.56,102.56,0,0,1,393.824,288H296a16.019,16.019,0,0,1-16-16V232h69.04ZM344,192v24H280V192Zm-64-80h-8a8,8,0,0,0-8,8v56H248V120a8,8,0,0,0-8-8h-8a39.7,39.7,0,0,1-28.283-11.717,40.185,40.185,0,0,1-3.7-4.283H311.979A39.875,39.875,0,0,1,280,112ZM472,80H296V35.346a39.981,39.981,0,0,1,21.717,23.32A8,8,0,0,0,325.26,64H472a8,8,0,0,1,0,16ZM165.568,272.09,154.432,260.6c1.29-1.25,2.639-2.479,4.01-3.653l8.19-7.021,10.414,12.147-8.193,7.024C167.727,270.062,166.623,271.067,165.568,272.09Z"/></g></svg>
              </div>
            </div-->
            <div class="flex content-end px-2">
              <span class="flex-1 pt-4 text-gray-700 text-sm font-bold">
                {{product.price}}
                {{product.currency}}
              </span>
              <div v-on:click="(event) => { add(event, product) }" title="добавить в корзину"
                class="product__add flex-initial text-center cursor-pointer hover:bg-gray-300 rounded-full p-2">
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
  import Breadcrumbs from '../../components/Breadcrumbs.vue'
  import Title from '../../components/Title.vue'

  import { mapMutations } from 'vuex'
  export default {
    components: {
      MainHeader,
      Breadcrumbs,
      Title
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
      console.log('this.$store.state.breadcrumbs[category]', this.$store.state.breadcrumbs[category])
      return {
        products: this.$store.state.products[category].items,
        category: category,
        breadcrumbs: this.$store.state.breadcrumbs[category],
        title: this.$store.state.title[category],
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

