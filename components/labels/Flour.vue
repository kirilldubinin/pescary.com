<template>
  <section class="granule-flour">

    <Type class="granule-flour__type" :label="type" color="#f0f0f0"/>
    <Logo class="granule-flour__logo"/>

    <Ring>
      <Weight :value="weight"/>
    </Ring>
    <Ring>
      <Eco/>
    </Ring>
    <Ring class="granule-flour__icon" v-html="circleIcon"></Ring>
    <Composition :composition="'Натуральный продукт, не содержит красителей, ароматизаторов и консервантов.'"/>
    <Composition label="СОСТАВ" :composition="type"/>
    <Composition label="показатели" :composition="indicators"/>
    <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д.Васильчиково, д.14.&nbsp;&nbsp;&nbsp;8-800-550-28-27,&nbsp;&nbsp;&nbsp;pescary.com"/>
    <Composition label="Срок хранения" composition="12 месяцев со дня изготовления (указан на упаковке)"/>
    <Composition label="Масса нетто" :composition="weight"/>
    <Composition composition="Товар не подлежит обязательной сертификации."/>
    <Barcode :code="barcode"/>
  </section>
</template>

<script>
import Logo from '../PescaryLogo.vue'
import Type from '../ProductType.vue'
import Name from '../ProductName.vue'
import Ring from '../Ring.vue'
import Composition from '../ProductComposition.vue'
import QRUrl from '../QRUrl.vue'
import Weight from '../Weight.vue'
import Eco from '../Eco.vue'
import Barcode from '../Barcode.vue'

export default {
  props: ['type', 'weight', 'indicators', 'circleIcon', 'barcode'],
  components: {
    Logo,
    Type,
    Name,
    Ring,
    Composition,
    QRUrl,
    Weight,
    Eco,
    Barcode
  }
}
</script>

<style lang="scss">

  .granule-flour {
    position: relative;
    padding: 0 4mm 6mm 4mm;
    width: 105mm;
    height: 148mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';
    &__logo {
      margin: 100px 0 10px 0;
      z-index: 1;
    }
    &__eco {
      font-family: 'Montserrat', cursive;
      margin: 30px 0 20px 0;
      color: #f0f0f0;
      font-size: 15px;
      text-align: justify;
    }
    &__type {
      font-size: 13px;
      label {
        padding: 4mm 8px 2mm 8px;
        font-size: 14px;
      }
    }
    &__icon {
      padding-top: 10px;
      font-size: 14px;
      position: relative;
      svg {
        width: 50px;
        height: 50px;
        fill: #f0f0f0;
      }
    }
  }

</style>
