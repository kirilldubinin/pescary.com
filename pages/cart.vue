<template>
  <section class="index">
    <MainHeader class="h-20"/>
    <section class="w-full max-w-6xl mx-auto mt-24 font-montserrat cart">

      <h2 class="text-2xl mb-6">Ваша корзина</h2>

      <div class="flex text-gray-800">
        <div class="flex-1 text-xs">
          Продукт
        </div>
        <span class="w-32 flex-initial p-2 text-right text-xs">Размер</span>
        <span class="w-32 flex-initial p-2 text-right text-xs">Цена</span>
        <span class="w-32 flex-initial p-2 text-right text-xs">Количество</span>
        <span class="w-32 flex-initial p-2 text-right text-xs">Итого</span>
        <span class="w-32 flex-initial p-2 text-right text-xs"></span>
      </div>

      <div class="py-6 flex text-gray-800 cart__item" :key="item.id" v-for="item in items">
        <div class="flex-1 flex">
          <img class="rounded h-40 w-40 object-cover rounded" src="/images/mock.png"/>
          <div class="pl-6">
            <p class="text-xs text-gray-500">Прикормка рыболовная (Сыпуха)</p>
            <h2 class="text-2xl hover:underline hover:text-orange-500 cursor-pointer">
              Strawberry Cream
            </h2>
            <p class="text-xs text-gray-500">863446</p>
            <p class="text-xs font-normal mt-4 h-14 cart__item--description">
              Прикормка рыболовная с ароматизатором "Клубника со сливками", красного цвета. Прикормка хорошо впитывает воду, позволяя вам добиваться нужной структуры. Кукурузные хлопья мощнейшие и все токое.
            </p>
          </div>
        </div>
        <b class="w-32 flex-initial p-2 text-right">1 кг.</b>
        <b class="w-32 flex-initial p-2 text-right">150 руб.</b>
        <input class="w-24 h-8 border ml-8 px-2 flex-initial text-right" type="number" value="1"/>
        <b class="w-32 flex-initial p-2 text-right">150 руб.</b>
        <div class="w-32 flex-initial p-2 text-right">
          <button class="w-20 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded hover:shadow text-xs cart__item--remove">
            удалить
          </button>
        </div>
      </div>

      <div class="py-6 flex text-gray-800 cart__item">
        <div class="flex-1 flex">
          <img class="rounded h-40 w-40 object-cover rounded" src="/images/mock4.png"/>
          <div class="pl-6">
            <p class="text-xs text-gray-500">Прикормка рыболовная (Сыпуха)</p>
            <h2 class="text-2xl hover:underline hover:text-orange-500 cursor-pointer">
              Strawberry Cream
            </h2>
            <p class="text-xs text-gray-500">863446</p>
            <p class="text-xs font-normal mt-4 h-14 cart__item--description">
              Прикормка рыболовная с ароматизатором "Клубника со сливками", красного цвета. Прикормка хорошо впитывает воду, позволяя вам добиваться нужной структуры. Кукурузные хлопья мощнейшие и все токое.
            </p>
          </div>
        </div>
        <b class="w-32 flex-initial p-2 text-right">1 кг.</b>
        <b class="w-32 flex-initial p-2 text-right">150 руб.</b>
        <input class="w-24 h-8 border ml-8 px-2 flex-initial text-right" type="number" value="1"/>
        <b class="w-32 flex-initial p-2 text-right">150 руб.</b>
        <div class="w-32 flex-initial p-2 text-right">
          <button class="w-20 bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded hover:shadow text-xs cart__item--remove">
            удалить
          </button>
        </div>
      </div>

      <div class="flex text-gray-800 mt-6">
        <div class="flex-1 text-md font-bold">
          ИТОГО
        </div>
        <span class="w-32 flex-initial p-2 text-right text-xs"></span>
        <span class="w-32 flex-initial p-2 text-right text-xs"></span>
        <span class="w-32 flex-initial p-2 text-right text-xs"></span>
        <span class="w-32 flex-initial p-2 text-right text-md font-bold">1650 руб.</span>
        <span class="w-32 flex-initial pt-1 pb-2 pr-2 text-right text-xs">
          <button class="bg-blue-500 hover:bg-blue-700 h-8 text-white text-xs py-2 px-4 rounded">
            оплатить
          </button>
        </span>
      </div>

    </section>
  </section>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
export default {
  components: {
    MainHeader
  },
  computed: {
    items () {
      return this.$store.state.cart.items
    }
  },
}
</script>

<style lang="scss">
  .cart {
    &__item {
      border-bottom: 1px solid #999;
      &--description {
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
      }
    }
  }
</style>

