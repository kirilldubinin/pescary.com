<template>
  <section class="index pt-0 sm:pt-20">
    <MainHeader class="h-20"/>
    <section class="mx-1 sm:mx-10 flex">
      <div class="flex-1">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
        <Title :title="title"/>
        <section class="mx-10">
          <div class="grid
            sm:grid-cols-2
            md:grid-cols-2 md:gap-4 md:m-4
            lg:grid-cols-3 lg:gap-5 lg:m-4
            xl:grid-cols-4 xl:gap-5 xl:m-4
            2xl:grid-cols-4 2xl:gap-6 2xl:m-4
            3xl:grid-cols-5 2xl:gap-5 2xl:m-4
            4xl:grid-cols-6 2xl:gap-5 2xl:m-4">

            <nuxt-link :to="'/products/' + category + '/' + product._id"
              class="my-2 sm:my-0 product transition duration-150 ease-in-out cursor-pointer w-full px-2 pt-4 pb-2 hover:shadow-lg border rounded"
              :key="product._id" v-for="product in products">

              <!-- IMAGE -->
              <img class="object-cover h-56 w-40 mx-auto rounded-md"
                :src="getImagePath(category, product)"/>
              <div class="">

              <!-- NAME -->
              <h2 :class="{'font-baloo': category !== 'liquid'}" class="product__name transition duration-150 ease-in-out text-xl mt-3 mb-2 text-center">{{getName(category, product)}}</h2>

              <!-- AROMA -->
              <p v-if="!product.eco" class="product__aroma text-gray-900 text-xs text-center truncate ..." :title="product.aroma" v-html="product.aroma"></p>
              <p v-if="product.eco" class="product__aroma text-gray-900 text-xs text-center truncate ..." :title="product.composition" v-html="product.composition"></p>

              <!-- COLOR -->
              <div v-if="product.background" :title="'Цвет: ' + product.color"
                class="product__color rounded-full mt-2 p-1 h-10 w-10 border border-gray-500 rounded-full mx-auto">
                <span class="h-full w-full mx-auto block rounded-full" :style="{backgroundColor: colors[product.background]}"></span>
              </div>
              <div v-if="!product.background && !product.eco" :title="'Цвет: ' + product.color"
                class="product__color mt-2 p-1 h-10 mx-auto text-xs text-center truncate ...">
                Без красителя
              </div>

              <!-- ECO -->
              <div v-if="product.eco" title="ЭКО продукт без красителй и ароматизаторов"
                class="product__eco rounded-full mt-2 h-10 w-10 p-2 border border-gray-500 rounded-full mx-auto">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"> <g> <g> <path d="M504.694,222.444l-0.078-0.273c-0.802-3.318-3.262-6.042-6.57-7.139c-1.228-0.408-30.559-9.95-72.438-7.011 c-38.553,2.704-95.542,16.96-148.108,69.525c-52.565,52.566-66.82,109.554-69.522,148.105c-2.936,41.88,6.606,71.208,7.014,72.436 c0.994,2.996,3.345,5.346,6.34,6.34c1.065,0.354,23.253,7.574,56.434,7.574c5.087,0,10.435-0.17,16.002-0.56 c38.551-2.703,95.539-16.958,148.105-69.522C534.881,348.909,510.522,242.775,504.694,222.444z M401.997,231.244 c7.905-1.526,15.956-2.602,24.153-3.211c20.256-1.504,37.415,0.252,49.1,2.242c-0.499,0.343-0.977,0.729-1.42,1.172 l-71.833,71.833V231.244z M381.997,236.182v87.098l-67.029,67.029V272.108c0-0.327-0.018-0.649-0.049-0.968 C335.662,255.081,358.076,243.404,381.997,236.182z M227.928,427.049c3.584-51.126,25.02-96.668,63.714-135.361 c1.103-1.102,2.212-2.187,3.326-3.262v121.438c0,0.143,0.015,0.281,0.021,0.422L230.175,475.1 C228.23,463.629,226.536,446.914,227.928,427.049z M293.225,491.428c-20.131,1.494-37.205-0.232-48.886-2.208l31.238-31.238 c0.034,0,0.066,0.005,0.1,0.005h115.294C361.363,477.576,328.642,488.798,293.225,491.428z M427.731,427.775 c-3.55,3.55-7.16,6.953-10.825,10.213H295.572l58.04-58.04h111.123C455.543,395.898,443.477,412.029,427.731,427.775z M474.877,359.948H373.611l114.36-114.36c0.427-0.427,0.798-0.887,1.131-1.365C493.25,268.35,495.87,312.211,474.877,359.948z"/> </g> </g> <g> <g> <path d="M234.501,277.544c-52.566-52.565-109.555-66.821-148.108-69.525c-41.877-2.937-71.21,6.604-72.438,7.011 c-3.308,1.098-5.768,3.822-6.57,7.14l-0.078,0.273C1.479,242.775-22.88,348.909,70.129,441.918 c29.508,29.508,63.305,50.019,100.45,60.961c0.943,0.278,1.895,0.41,2.831,0.41c4.32,0,8.305-2.822,9.588-7.176 c1.561-5.298-1.469-10.858-6.766-12.418c-33.902-9.988-64.842-28.802-91.96-55.919c-23.637-23.637-39.004-48.14-48.759-71.599 h99.106l48.266,48.266c1.953,1.953,4.512,2.929,7.071,2.929s5.119-0.976,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143 l-11.025-11.023V263.074c11.978,8.156,23.44,17.698,34.356,28.613c3.905,3.905,10.237,3.905,14.143,0 C238.407,287.782,238.406,281.45,234.501,277.544z M84.994,227.971c4.379,0.307,8.715,0.755,13.011,1.324v61.985l-60.406-60.406 c-0.23-0.23-0.471-0.445-0.717-0.648C48.356,228.277,65.097,226.574,84.994,227.971z M28.412,336.178v-0.001 c-11.317-38.122-8.972-71.737-5.539-91.806c0.185,0.22,0.376,0.438,0.583,0.646l91.161,91.162H28.412z M166.003,359.278 l-47.999-47.999v-78.332c16.71,3.931,32.726,9.957,47.999,18.052V359.278z"/> </g> </g> <g> <g> <path d="M188.871,449.601c-19.324-5.693-37.67-14.818-54.529-27.12c-4.462-3.256-10.717-2.278-13.973,2.183 c-3.256,4.461-2.278,10.717,2.183,13.973c18.72,13.662,39.131,23.805,60.666,30.149c0.943,0.278,1.895,0.41,2.831,0.41 c4.32,0,8.305-2.822,9.588-7.176C197.198,456.721,194.169,451.161,188.871,449.601z"/> </g> </g> <g> <g> <path d="M110.292,401.822l-0.035-0.035c-3.905-3.903-10.218-3.886-14.125,0.018c-3.905,3.905-3.887,10.255,0.018,14.16 c1.953,1.953,4.512,2.929,7.071,2.929c2.559,0,5.119-0.976,7.071-2.929C114.197,412.06,114.197,405.728,110.292,401.822z"/> </g> </g> <g> <g> <path d="M128.152,126.997H74.005V83.498h37.3c5.523,0,10-4.477,10-10c0-5.523-4.477-10-10-10h-37.3V19.999h54.146 c5.523,0,10-4.477,10-10c0-5.523-4.477-10-10-10H64.006c-5.523,0-10,4.477-10,10v126.997c0,5.523,4.477,10,10,10h64.146 c5.523,0,10-4.477,10-10C138.152,131.473,133.675,126.997,128.152,126.997z"/> </g> </g> <g> <g> <path d="M383.997,0c-40.527,0-73.498,32.971-73.498,73.498c0,40.527,32.971,73.498,73.498,73.498 c40.527,0,73.498-32.971,73.498-73.498C457.495,32.971,424.524,0,383.997,0z M383.997,126.997 c-29.499,0-53.499-23.999-53.499-53.499s23.999-53.499,53.499-53.499s53.499,23.999,53.499,53.499 S413.496,126.997,383.997,126.997z"/> </g> </g> <g> <g> <path d="M271.535,111.327c-20.858,20.859-54.8,20.859-75.658,0c-20.859-20.858-20.859-54.799,0-75.658 c20.858-20.859,54.799-20.859,75.658,0c3.905,3.905,10.237,3.905,14.143,0c3.905-3.905,3.905-10.237,0-14.143 c-28.657-28.656-75.285-28.656-103.942,0c-28.657,28.657-28.657,75.286,0,103.942c14.328,14.329,33.149,21.493,51.971,21.493 s37.643-7.165,51.972-21.492c3.905-3.905,3.905-10.237,0-14.143C281.773,107.422,275.441,107.422,271.535,111.327z"/> </g> </g> <g> <g> <path d="M256.068,170.358c-5.523,0-10,4.477-10,10v28.279c0,5.523,4.477,10,10,10c5.523,0,10-4.477,10-10v-28.279 C266.067,174.835,261.59,170.358,256.068,170.358z"/> </g> </g> <g> <g> <path d="M314.425,197.907c-3.906-3.906-10.237-3.905-14.142,0l-20.391,20.39c-3.905,3.905-3.906,10.237,0,14.142 c1.953,1.953,4.512,2.929,7.071,2.929c2.559,0,5.119-0.977,7.071-2.929l20.39-20.39 C318.33,208.143,318.331,201.811,314.425,197.907z"/> </g> </g> <g> <g> <path d="M232.142,218.001l-20.424-20.425c-3.906-3.906-10.237-3.904-14.142,0c-3.905,3.905-3.906,10.237,0,14.142l20.424,20.425 c1.953,1.953,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929C236.047,228.238,236.048,221.906,232.142,218.001z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
              </div>

              <!-- PRICE -->
              <div class="flex content-end px-2">
                <span class="flex-initial w-12 pl-2 text-gray-500 pt-3 text-sm">
                  {{product.sizes[0]}}
                </span>
                <span class="flex-1 text-center text-gray-700 pt-3 text-sm font-bold">
                  {{product.prices[0]}}
                  {{product.currency}}
                </span>
                <div v-on:click="(event) => { add(event, product) }" title="добавить в корзину"
                  class="flex-initial product__add text-center cursor-pointer hover:bg-gray-300 rounded-full p-2">
                  <svg class="h-8 w-8 pr-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve"> <path style="fill:#FFC107;" d="M508.288,85.764c-3.04-3.648-7.552-5.76-12.288-5.76H107.52c-4.96,0-9.664,2.304-12.704,6.24 c-3.008,3.968-4.032,9.088-2.752,13.888l51.2,191.36c1.888,7.04,8.224,11.872,15.456,11.872c0.256,0,0.544,0,0.8-0.032l305.28-15.36 c7.392-0.384,13.6-5.792,14.944-13.088l32-176C512.608,94.18,511.328,89.38,508.288,85.764z"/> <g> <circle style="fill:#455A64;" cx="208" cy="448.004" r="48"/> <circle style="fill:#455A64;" cx="400" cy="448.004" r="48"/> <path style="fill:#455A64;" d="M432,368.004H176c-7.264,0-13.6-4.864-15.456-11.872L78.272,48.004H16c-8.832,0-16-7.168-16-16 s7.168-16,16-16h74.56c7.264,0,13.6,4.864,15.456,11.872l82.272,308.128H432c8.832,0,16,7.168,16,16S440.832,368.004,432,368.004z"/> </g> <g> <path style="fill:#FAFAFA;" d="M320,256.004c-8.832,0-16-7.168-16-16v-96c0-8.832,7.168-16,16-16s16,7.168,16,16v96 C336,248.836,328.832,256.004,320,256.004z"/> <path style="fill:#FAFAFA;" d="M368,208.004h-96c-8.832,0-16-7.168-16-16s7.168-16,16-16h96c8.832,0,16,7.168,16,16 S376.832,208.004,368,208.004z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                </div>
              </div>
              </div>
            </nuxt-link>
          </div>
        </section>
        <section class="m-10 text-gray-500 text-center" v-if="!products.length">
          Ничего не найдено с текущем фильтром.<br/>
          Измените критерии фильтра для продолжения.
        </section>
      </div>
      <MainFilter class="hidden sm:block flex-initial mt-10" :category="category"/>
    </section>
  </section>
</template>

<script>
  import MainFilter from '../../components/MainFilter.vue'
  import MainHeader from '../../components/MainHeader.vue'
  import Breadcrumbs from '../../components/Breadcrumbs.vue'
  import Title from '../../components/Title.vue'

  import { mapMutations } from 'vuex'
  import { mapState } from 'vuex'

  export default {
    components: {
      MainFilter,
      MainHeader,
      Breadcrumbs,
      Title
    },
    methods: {
      add: (event, item) => {
        event.stopPropagation();
        event.preventDefault();
        this.$store.commit('cart/add', item)
      },
      getImagePath: (category, product) => { ///images/liquid/sm/molasses-packagestrawberry cream-1.jpg
        if (category === 'liquid') {
          if (product.type === 'molasses') {
            return '/images/' + category + '/sm/' + product.type + '-package-' + product.name.toLowerCase() + '-1.jpg'
          } else if (product.type === 'aroma') {
            return '/images/' + category + '/sm/' + product.type + '-package-' + product.name.toLowerCase() + '-0.5.jpg'
          }
        } else {
          return '/images/' + category + '/sm/' + category + '-package-rotate-' + product.name.toLowerCase() + '-1.jpg'
        }
      },
      getName: (category, product) => {
        if (category === 'liquid') {
          switch(product.type) {
            case 'molasses':
              return 'Меласса'
            case 'aroma':
              return 'Арома Комплекс'
            case 'oil':
              return 'Масло'
          }
        } else {
          return product.name
        }

      }
    },
    computed: {
      products () {
        const category = this.$route.params.id
        const filters = this.$store.state.filters[category];
        let products = this.$store.state.categories[category].items;

        if (filters.length) {
          products = products.filter(product => {
            return !filters.some(filter => {
              return product[filter.code].indexOf(filter.value) === -1
            })
          })
        }
        return products
      }
    },
    data() {
      const category = this.$route.params.id
      return {
        breadcrumbs: this.$store.state.breadcrumbs[category],
        category: category,
        title: this.$store.state.title[category],
        colors: this.$store.state.colors
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

