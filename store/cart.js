export const state = () => ({
  items: []
})

export const mutations = {
  add (state, item) {
    state.items.push(item)
  },
  remove (state, item) {
    state.items = state.items.filter( i => { return i.id !== item.id })
  }
}
