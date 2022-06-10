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
  },
  // eslint-disable-next-line space-before-function-paren
  async addTodo({ commit }, title) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, completed: false })
    })
    const todo = await response.json()

    commit('addTodo', todo.title)
  },
  // eslint-disable-next-line space-before-function-paren
  async deleteTodo({ commit }, id) {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    })
    commit('deleteTodo', id)
  },
  // eslint-disable-next-line space-before-function-paren
  async filterTodos({ commit }, e) {
    const limit = parseInt(e.target.value)

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=' + limit
    )
    const todos = await response.json()
    commit('setTodos', todos)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id))
}

export default {
  state,
  getters,
  actions,
  mutations
}
