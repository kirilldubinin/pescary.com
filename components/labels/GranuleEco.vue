<template>
  <section class="granule">

    <Type class="granule__type" :label="type" color="rgba(86, 192, 232, 0.96)"/>

    <Name :label="name"/>

    <Logo class="granule__logo"/>

    <Ring>
      <QRUrl/>
    </Ring>
    <Ring class="color">
       <Eco/>
    </Ring>
    <Ring>
      <Weight :value="weight"/>
    </Ring>
    <Ring class="granule__size">
      <b>8</b> <br/>мм
    </Ring>
    <Ring class="granule__size">
      <b>4</b> <br/>часа
    </Ring>

    <p class="granule__eco"> Натуральный продукт, не содержит красителей, ароматизаторов и консервантов.</p>

    <Composition label="СОСТАВ" :composition="composition"/>
    <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д. Васильчиково, д. 14.&nbsp;&nbsp;&nbsp;8-800-550-28-27,&nbsp;&nbsp;sales@prokorm.com"/>
    <Composition label="Срок хранения" composition="12 месяцев со дня изготовления"/>
    <Composition label="Дата изготовления"/>
    <Composition label="Масса нетто" :composition="weight"/>
    <Composition composition="Товар не подлежит обязательной сертификации."/>
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

export default {
  props: ['type', 'name', 'weight', 'size', 'indicators', 'composition', 'circleBackground', 'circleIcon'],
  components: {
    Logo,
    Type,
    Name,
    Ring,
    Composition,
    QRUrl,
    Weight,
    Brush,
    Eco
  }
}
</script>

<style lang="scss">

  .granule {
    padding: 6mm 4mm;
    width: 105mm;
    height: 148mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';

    .pescary-ring {
      width: 62px;
      height: 62px;
      margin: 0 3px;
      .weight {
        margin: 0px auto;
      }
    }

    .eqo svg {
      width: 42px;
      margin-top: 10px;
      fill: #fefefe;
    }

    .qr-url svg {
      transform: scale(0.23);
      position: absolute;
      top: -85px;
      left: -88px;
    }

    &__logo {
      margin: 30px 0 40px 0;
      z-index: 1;
    }
    &__eco {
      font-family: 'Montserrat', cursive;
      margin: 10px 0 20px 0;
      color: #f0f0f0;
      font-size: 15px;
      text-align: justify;
    }
    &__size {
      text-align: center;
      line-height: 18px;
      font-size: 14px;
      padding-top: 12px;
      b {
        font-size: 20px;
      }
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
  }

</style>
