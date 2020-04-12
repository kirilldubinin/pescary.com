<template>
  <section class="index">
      <MainHeader class="h-20"/>
      <section class="w-full max-w-6xl mx-auto mt-24 font-montserrat">
        <div class="w-full bg-gray-500 w-max-6xl">
          <img class="p-4 mx-auto object-cover h-full" src="/images/mock5.png"/>
        </div>
        <p class="w-full font-montserrat text-justify">
          Продукты компании  RHINO BAITS Lab созданы на сплаве большого и успешного рыболовного опыта и многолетних экспериментов в производстве питания для ловли карпа. Мы использовали богатый опыт лучших российских и мировых спортсменов – рыболовов, которые своими победами завоевали признание и славу. Наши исследования постоянны и  не прекращаются ни на минуту, и даже сейчас мы делаем всё, чтобы усовершенствовать наши продукты, находясь в лаборатории или на берегу во время свободных рыбалок и соревнований. Вы можете доверять нам, ведь мы не производим “золотых бойлов” и не создаем мифов, мы просто даём вам уверенность в ваших кормах на рыбалках и на соревнованиях!
        </p>

      </section>

      <nuxt-child class="max-w-full mx-auto mt-20 overflow-auto"/>
    <!--footer>
      ООО "ПРОКОРМ" 2013-2020
    </footer-->
  </section>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
export default {
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">

  $color: #fefefe;
  $main-color: #1a334d;
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .index {
    color: #020202;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
  }

  footer {
    width: 1000px;
    position: absolute;
    bottom: 10px;
    color: $color;
    font-size: 11px;
    opacity: 0.8;
    text-align: center;
  }
</style>

