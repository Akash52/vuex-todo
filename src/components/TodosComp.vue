<template>
  <h1 class="text-4xl text-center bg-gray-900 py-2 shadow shadow-blue-500 mx-4">
    Todo App
  </h1>
  <div
    class="max-w-5xl flex flex-col justify-center mx-auto container px-4 sm:px-6 lg:px-8 mt-8"
  >
    <ul
      class="bg-gray-900 p-4 mx-auto container rounded-md shadow shadow-indigo-500"
    >
      <AddTodo />
      <li v-for="todo in todos.slice(0, 5)" :key="todo.id">
        <div
          class="flex justify-between bg-slate-800 m-1 p-2 items-center rounded-md transition duration-500 transform hover:opacity-75 cursor-pointer"
        >
          {{ todo.title }}
          <button
            class="font-bold py-2 px-4 rounded-full"
            @click="removeTodo(todo.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-400 hover:text-red-600 transition duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddTodo from './AddTodo.vue'
export default {
  methods: {
    ...mapActions(['fetchTodos'])
  },
  // eslint-disable-next-line space-before-function-paren
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
  },
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.fetchTodos()
  },
  // eslint-disable-next-line space-before-function-paren
  components: { AddTodo }
}
</script>

<style></style>
