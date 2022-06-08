const state = {
  todos: [
    {
      id: 1,
      title: 'Learn Vue',
      completed: false
    },
    {
      id: 2,
      title: 'Learn Vuex',
      completed: true
    },
    {
      id: 3,
      title: 'Learn Vue Router',
      completed: false
    }
  ]
}

const getters = {
  todos: (state) => state.todos
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
