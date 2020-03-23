<template>
  <section class="granule-flour">

    <el-row type="flex">
      <el-col :span="6">
        <p class="granule-flour__eco"> Натуральный продукт, не содержит красителей, ароматизаторов и консервантов.</p>
      </el-col>
      <el-col :span="12">
        <Type class="granule-flour__type" :label="type" color="rgb(104, 162, 46)"/>

        <Name :label="name"/>

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
          <div style="font-size: 20px; margin-top: 0px; font-weight: bold;">OIL</div>
        </Ring>
      </el-col>

      <el-col :span="6">
        <Composition label="СОСТАВ" :composition="composition || type"/>
        <Composition label="показатели" :composition="indicators"/>
        <Composition label="ИЗГОТОВИТЕЛЬ" composition="ООО «ПРОКОРМ», 601470, Владимирская обл., Гороховецкий р-н, МО Денисовское,  д. Васильчиково, д. 14.&nbsp;&nbsp;&nbsp;8-800-550-28-27,&nbsp;&nbsp;sales@prokorm.com"/>
        <Composition label="Срок годности" composition="6 месяцев со дня изготовления"/>
        <Composition label="Дата изготовления"/>
        <Composition label="Объем" :composition="weight"/>
      </el-col>
    </el-row>
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
  props: ['type', 'name', 'weight', 'indicators', 'composition'],
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
    width: 200mm;
    height: 75mm;
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
