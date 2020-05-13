<template>
  <section class="filter shadow-md overflow-hidden font-montserrat">
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
  </section>
</template>

<script>
  export default {
    props: ['category'],
    components: {
    },
    computed: {
      items () {
        return {}
      }
    },
    data() {
      const category = this.$store.state.categories[this.category];
      debugger;
      return {
        name: category.name
      }
    }
  }
</script>

<style lang="scss">

</style>




