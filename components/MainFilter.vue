<template>
  <section class="filter font-montserrat">
    <div class="w-64 bg-gray-100 shadow-md rounded-sm">
      <h3 class="text-lg text-gray-600 pt-6 mb-1 font-bold text-center uppercase">
        Фильтр
      </h3>

      <div class="text-xs px-6 py-4" v-for="section in sections" :key="section.code">
        <h4 class="font-bold my-2 uppercase">{{section.name}}</h4>
        <label class="block cursor-pointer pt-1 hover:text-orange-500"
          v-on:click="(event) => { set(event, section.code, item.label, item.selected) }"
          v-for="item in section.items" :key="item.label">
          <input class="align-text-bottom" v-model="item.selected" type="checkbox"/>
          {{item.label}}
        </label>
      </div>
    </div>
  </section>
</template>

<script>

  import { mapMutations } from 'vuex'

  export default {
    props: ['category'],
    components: {
    },
    methods: {
      set: function (event, code, value, selected) {
        event.stopPropagation();
        event.preventDefault();
        const params = { category: this.category, data: { code, value }}
        selected ?
          this.$store.commit('filters/remove', params) :
          this.$store.commit('filters/add', params)
      }
    },
    computed: {
      sections () {
        const filters = this.$store.state.filters[this.category];
        const category = this.$store.state.categories[this.category];
        return this.$store.state.filtersSection[this.category].map(item => {
          let items = category.items.map(i => { return i[item.code] })
          if (Array.isArray(items[0])) {
            items = items.reduce((a, b) => [...a, ...b], [])
          }
          items = items.filter((elem, position, array) => {
            return array.indexOf(elem) == position;
          }).sort()

          items = items.map(i => {
            return {
              label: i,
              selected: filters.some(filter => { return filter.code === item.code && filter.value === i})
            }
          })

          return {
            code: item.code,
            name: item.name,
            items: items
          }
        })
      }
    },
    data() {
      const category = this.$store.state.categories[this.category];
      return {
        name: category.name
      }
    }
  }
</script>

<style lang="scss">

</style>




