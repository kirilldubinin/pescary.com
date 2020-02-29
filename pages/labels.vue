<template>
  <section class="container">
    <el-row type="flex">
      <el-col>
        <Granule/>
      </el-col>
      <el-col>
        <Flour/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import Granule from '../components/labels/Granule.vue'
import Flour from '../components/labels/Flour.vue'

export default {
  components: {
    Granule,
    Flour
  }
}
</script>

<style>

  @font-face {
    font-family: 'Core Rhino';
    font-weight: normal;
    src:  url('../static/fonts/CoreRhino/CoreRhino25Thin.otf') format('opentype'),
          url('../static/fonts/CoreRhino/CoreRhino35Light.otf') format('opentype'),
          url('../static/fonts/CoreRhino/CoreRhino45Regular.otf') format('opentype'),
          url('../static/fonts/CoreRhino/CoreRhino55Medium.otf') format('opentype'),
  }
  @font-face {
    font-family: 'Core Rhino';
    font-weight: bold;
    src:  url('../static/fonts/CoreRhino/CoreRhino65Bold.otf') format('opentype'),
          url('../static/fonts/CoreRhino/CoreRhino75Heavy.otf') format('opentype');
  }

  .container {
  }

</style>

