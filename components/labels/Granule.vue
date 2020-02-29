<template>
  <section class="granule-label">
    <Type class="granule-label__type" label="Гранула рыболовная" color="#ff6143"/>
    <Name class="granule-label__name" label="PURE HEMP"/>
    <Logo class="granule-label__logo"/>
    <Circles class="granule-label__circles"/>

    <p class="granule-flour__eco"> Натуральный продукт, не содержит красителей, ароматизаторов и консервантов.</p>

    <Composition label="СОСТАВ" composition="Конопля экструдированная."/>
    <Composition label="показатели" composition="Сырой протеин: 22%, Сырой жир: 1.2%, Переваримая энергия: 14.5МДж, Диаметр гранулы: 8мм, Время растворения: 20-40 мин."/>
    <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д. Васильчиково, д. 14. Телефон: 8-800-550-28-27, e-mail: sales@prokorm.com"/>
    <Composition label="Срок хранения" composition="6 месяцев со дня изготовления"/>
    <Composition label="Масса нетто" composition="1 кг"/>

  </section>
</template>

<script>
import Logo from '../PescaryLogo.vue'
import Type from '../ProductType.vue'
import Name from '../ProductName.vue'
import Circles from '../Circles.vue'
import Composition from '../ProductComposition.vue'
export default {
  components: {
    Logo,
    Type,
    Name,
    Circles,
    Composition
  }
}
</script>

<style lang="scss">

  @page {
    size: 150mm 210mm; // set appropriately
    margin: 0;
  }
  @media print {
    html, body {
      width: 150mm; // set appropriately
      height: 210mm; // set appropriately
    }
    /* ... the rest of the rules ... */
  }

  .granule-label {
    padding: 5mm;
    margin: 4em auto;
    width: 105mm;
    height: 150mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';
    &__logo {
      margin: 40px 0 20px 0;
    }
    &__type {
    }
  }

</style>
