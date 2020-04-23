<template>
  <section class="granule">

    <Type class="granule__type" :label="type" color="#f0f0f0"/>

    <Name :label="name"/>

    <Logo class="granule__logo"/>
    <Ring class="granule__size">
      {{weight}}
    </Ring>
    <Ring class="granule__size">
      {{size}}
    </Ring>
    <Ring>
      <Eco/>
    </Ring>
    <Ring class="granule__icon" v-html="circleIcon">
    </Ring>

    <Composition label="СОСТАВ" :composition="composition"/>
    <Composition label="ПОКАЗАТЕЛИ" :composition="indicators"/>
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
import Brush from '../Brush.vue'
import Barcode from '../Barcode.vue'

export default {
  props: ['type', 'name', 'weight', 'size', 'indicators', 'composition', 'circleBackground', 'circleIcon', 'barcode'],
  components: {
    Logo,
    Type,
    Name,
    Ring,
    Composition,
    QRUrl,
    Weight,
    Brush,
    Eco,
    Barcode
  }
}
</script>

<style lang="scss">

  .granule {
    padding: 0 4mm 6mm 4mm;
    width: 105mm;
    height: 148mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';
    margin: 0;
    position: relative;
    overflow: hidden;
    &__logo {
      margin: 70px 0 10px 0;
      z-index: 1;
    }
    &__eco {
      font-family: 'Montserrat', cursive;
      margin: 10px 0 10px 0;
      color: #f0f0f0;
      font-size: 15px;
      text-align: justify;
      height: 20px;
    }
    &__size {
      text-align: center;
      /* line-height: 18px; */
      font-size: 22px;
      padding-top: 8px;
      b {
        font-size: 20px;
      }
    }
    &__icon {
      padding-top: 10px;
      font-size: 14px;
      position: relative;
      svg {
        width: 56px;
        height: 56px;
        fill: #f0f0f0;
      }
      #peas {
        position: absolute;
        transform: rotate(-56deg);
        left: 26px;
        width: 48px;
        top: 7px;
      }
      #corn {
        position: absolute;
        left: -2px;
        width: 48px;
        top: 8px;
      }
    }


  }

</style>
