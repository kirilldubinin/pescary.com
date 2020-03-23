<template>
  <section class="flour-label">
      <Oil v-for="item in items" :key="item.id"
        :type="item.type"
        :indicators="item.indicators"
        :composition="item.composition"
        :weight="item.weight"
        :name="item.name"
      />
  </section>
</template>

<script>
import Oil from '../../components/labels/Oil.vue'
export default {
  components: {
    Oil
  },
  data() {
    return {
      items: [
        {
          id: 1,
          type: 'Масло соевое',
          name: 'Soybean oil',
          indicators: 'Переваримая энергия (рыбы) = 36,5 МДж; Омега-3 = 8%, Омега-6 = 54%, Омега-9 = 23%',
          composition: 'Масло соевое (нерафинированное)',
          weight: '250 мл'
        },
        {
          id: 2,
          type: 'Масло рапсовое',
          name: 'Canola oil',
          indicators: 'Переваримая энергия (рыбы) = 36,5 МДж; Омега-3 = 11%, Омега-6 = 21%, Омега-9 = 61%',
          composition: 'Масло рапсовое (нерафинированное)',
          weight: '250 мл'
        },
        {
          id: 3,
          type: 'Масло конопляное',
          name: 'Hemp oil',
          indicators: 'Переваримая энергия (рыбы) = 36,5 МДж; Омега-3 = 21%, Омега-6 = 54%, Омега-9 = 12%',
          composition: 'Масло конопляное (нерафинированное)',
          weight: '250 мл'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
   @page {
    size: 200mm 75mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 200mm; // set appropriately
      height: 75mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }
  .flour-label {
    width: 200mm;
    height: 75mm;
  }

</style>

