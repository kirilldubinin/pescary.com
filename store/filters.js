export const state = () => ({
  lure: []
})

export const mutations = {
  add (state, {category, data}) {
    state[category].push(data)
  },
  remove (state, {category, data}) {
    state[category] = state[category].filter(o => { return o.value !== data.value })
  }
}

