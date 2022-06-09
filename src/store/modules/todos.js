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

const actions = {
  // eslint-disable-next-line space-before-function-paren
  async fetchTodos({ commit }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    commit('setTodos', todos)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
}

export default {
  state,
  getters,
  actions,
  mutations
}
