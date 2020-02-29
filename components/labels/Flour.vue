<template>
  <section class="granule-flour">
    <Type class="granule-flour__type" label="Мука экструдированного гороха" color="#e4cf3c"/>
    <Logo class="granule-flour__logo"/>

    <Circles class="granule-flour__circles"/>

    <p class="granule-flour__eco"> Натуральный продукт, не содержит красителей, ароматизаторов и консервантов.</p>

    <Composition label="СОСТАВ" composition="Мука экструдированного гороха"/>
    <Composition label="показатели" composition="Сырой протеин: 22%, Сырой жир: 1.2%, Переваримая энергия: 14.5МДж"/>
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

  .granule-flour {
    padding: 5mm;
    margin: 4em auto;
    width: 105mm;
    height: 150mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';

    &__circles {
      margin-bottom: 40px;
    }
    &__logo {
      margin: 80px 0 40px 0;
    }
    &__eco {
      font-family: 'Montserrat', cursive;
      margin-bottom: 20px;
      color: #f0f0f0;
      font-size: 14px;
      text-align: center;
    }
  }

</style>
