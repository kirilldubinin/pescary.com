<template>
  <section class="flour-label">
      <Granule v-for="item in items"
        :key="item.id"
        :type="item.type"
        :name="item.name"
        :indicators="item.indicators"
        :composition="item.composition"
        :circleBackground="item.circleBackground"
        :circleIcon="item.circleIcon"
        :size="item.size"
        :weight="item.weight" />
  </section>
</template>

<script>
import Granule from '../../components/labels/GranuleEco.vue'
export default {
  components: {
    Granule
  },
  data() {
    return {
      items: [
        {
          id: 1,
          type: 'Гранула рыболовная',
          name: 'PURE HEMP',
          size: '8 мм',
          composition: 'Конопля экструдированная',
          indicators: 'Сырой протеин = 32,0%; Сырой жир = 9,0%; Переваримая энергия (рыбы) = 17,0 МДж',
          weight: '1 кг'
        },
        {
          id: 2,
          type: 'Гранула рыболовная',
          name: 'PURE PEAS',
          size: '8 мм',
          composition: 'Горох экструдированный',
          indicators: 'Сырой протеин = 22,0%; Сырой жир = 1,2%; Переваримая энергия (рыбы) = 14,5 МДж',
          weight: '1 кг'
        },
        {
          id: 2,
          type: 'Гранула рыболовная',
          name: 'PURE CORN',
          size: '8 мм',
          composition: 'Кукуруза экструдированная',
          indicators: 'Сырой протеин = 11,0%; Сырой жир = 4,7%; Переваримая энергия (рыбы) = 16,0 МДж',
          weight: '1 кг'
        },
        {
          id: 2,
          type: 'Гранула рыболовная',
          name: 'PURE CORN-PEAS',
          size: '8 мм',
          composition: 'Горох экструдированный, кукуруза экструдированная',
          indicators: 'Сырой протеин = 16,0%; Сырой жир = 3,0%; Переваримая энергия (рыбы) = 15,5 МДж',
          weight: '1 кг'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
   @page {
    size: 105mm 148mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 105mm; // set appropriately
      height: 148mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }
  .flour-label {
  }

</style>

