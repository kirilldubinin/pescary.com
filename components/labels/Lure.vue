<template>
  <section class="lure">

    <Type class="lure__type" :label="type" color="#FBB02D"/>

    <Name :label="name"/>

    <Logo class="lure__logo"/>
    <Ring>
      <Weight :value="weight"/>
    </Ring>
    <Ring class="color">
      <div v-bind:style="{ backgroundColor: circleBackground }">&nbsp;</div>
    </Ring>
    <Ring>
      <Fish :value="fish"/>
    </Ring>
    <Ring class="taste" v-html="circleIcon">
    </Ring>
    <Composition label="СОСТАВ" :composition="composition"/>
    <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д.Васильчиково, д.14.&nbsp;&nbsp;&nbsp;8-800-550-28-27,&nbsp;&nbsp;&nbsp;pescary.com"/>
    <Composition label="Срок хранения" composition="12 месяцев со дня изготовления (указан на упаковке)"/>
    <Composition label="Масса нетто" :composition="weight"/>
    <Composition composition="Товар не подлежит обязательной сертификации."/>
  </section>
</template>

<script>
import Type from '../ProductType.vue'
import Name from '../ProductName.vue'
import Ring from '../Ring.vue'
import Composition from '../ProductComposition.vue'
import QRUrl from '../QRUrl.vue'
import Weight from '../Weight.vue'
import Fish from '../Fish.vue'
import Brush from '../Brush.vue'
import Logo from '../PescaryLogo.vue'

export default {
  props: ['type', 'name', 'weight', 'indicators', 'composition', 'circleBackground', 'circleIcon', 'fish'],
  components: {
    Logo,
    Type,
    Name,
    Ring,
    Composition,
    QRUrl,
    Weight,
    Brush,
    Fish
  }
}
</script>

<style lang="scss">

  .lure {
    padding: 0 4mm 6mm 4mm;
    width: 105mm;
    height: 148mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';
    margin: 0;

    &__fish {
      font-family: 'Montserrat', cursive;
      color: #f0f0f0;
      margin: 10mm 0;
      font-size: 22px;
    }
    &__logo {
      margin: 80px 0 10px 0;
      z-index: 1;
    }
    &__eco {
      font-family: 'Montserrat', cursive;
      margin: 10px 0 20px 0;
      color: #f0f0f0;
      font-size: 15px;
      text-align: justify;
    }

    .taste {
      svg {
        fill: #f0f0f0;
        height: 52px;
        width: 52px;
        margin-top: 10px;
        path {
          fill: #f0f0f0 !important;
        }
      }
    }
    .color {
      div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 12px auto;
        border: 2px solid #f0f0f0;

      }
    }
    .pescary-ring {
    }
  }

</style>
