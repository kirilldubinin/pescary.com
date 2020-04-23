<template>
  <section class="molasses">
    <Type class="molasses__type" :label="type" color="#487cd4"/>
    <div class="molasses__aroma-icon" v-html="circleIcon"></div>
    <Logo class="molasses__logo"/>
    <div class="left">
      <Composition label="СОСТАВ" :composition="composition"/>
      <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д.Васильчиково, д.14.&nbsp;&nbsp;&nbsp;8-800-550-28-27,&nbsp;&nbsp;&nbsp;pescary.com"/>

    </div>
    <div class="right">
      <Composition label="Срок хранения" composition="24 месяца со дня изготовления"/>
      <Composition label="Дата изготовления"/>
      <Composition label="Объем" :composition="weight"/>
      <Composition composition="Товар не подлежит обязательной сертификации."/>
      <Barcode :code="barcode"/>
    </div>
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
  props: ['type', 'name', 'weight', 'composition', 'circleIcon', 'barcode'],
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

  .molasses {
    position: relative;
    padding: 0 4mm 6mm 4mm;
    width: 148mm;
    height: 105mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';
    margin: 0px;
    &__logo {
      margin: 0;
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
        padding: 4mm 20px 2mm 20px;
        display: inline-block;
        text-transform: uppercase;
        position: relative;
        width: 300px;
        font-size: 18px;
        color: #f0f0f0;
      }
    }
    &__aroma-icon {
      padding: 20px 0;
      svg {
        height: 180px;
        width: 180px;
        fill: #f0f0f0;
        path {
          fill: #f0f0f0 !important;
        }
      }
    }

    .left {
      transform: rotate(90deg);
      position: absolute;
      top: 168px;
      left: -140px;
      width: 96mm;
      /* font-size: 8px !important; */
      text-align: justify;
    }
    .right {
      transform: rotate(90deg);
      position: absolute;
      top: 166px;
      right: -140px;
      width: 96mm;
      /* font-size: 8px !important; */
      text-align: justify;
    }
  }

</style>
