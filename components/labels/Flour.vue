<template>
  <section class="granule-flour">

    <Type class="granule-flour__type" :label="type" color="#e4cf3c"/>
    <Logo class="granule-flour__logo"/>

    <Ring>
      <QRUrl/>
    </Ring>
    <Ring>
      <Weight :value="weight"/>
    </Ring>
    <Ring>
      <Eco/>
    </Ring>
    <Ring>
      <div style="font-size: 14px; margin-top: 8px; font-weight: bold;">extrusion</div>
    </Ring>

    <p class="granule-flour__eco"> Натуральный продукт, не содержит красителей, ароматизаторов и консервантов.</p>

    <Composition label="СОСТАВ" :composition="type"/>
    <Composition label="показатели" :composition="indicators"/>
    <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д. Васильчиково, д. 14.&nbsp;&nbsp;&nbsp;8-800-550-28-27,&nbsp;&nbsp;sales@prokorm.com"/>
    <el-row type="flex">
      <el-col :span="16"><Composition label="Срок хранения" composition="6 месяцев со дня изготовления"/></el-col>
      <el-col :span="8"><Composition label="Дата изготовления"/></el-col>
    </el-row>

    <Composition label="Масса нетто" :composition="weight"/>
    <!--Composition composition="Товар не подлежит обязательной сертификации."/-->
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

export default {
  props: ['type', 'weight', 'indicators'],
  components: {
    Logo,
    Type,
    Name,
    Ring,
    Composition,
    QRUrl,
    Weight,
    Eco
  }
}
</script>

<style lang="scss">

  .granule-flour {
    padding: 6mm 4mm;
    width: 105mm;
    height: 148mm;
    background: #1f2e35;
    text-align: center;
    font-family: 'Core Rhino';
    &__logo {
      margin: 70px 0 40px 0;
      z-index: 1;
    }
    &__eco {
      font-family: 'Montserrat', cursive;
      margin: 30px 0 20px 0;
      color: #f0f0f0;
      font-size: 15px;
      text-align: justify;
    }

  }

</style>
