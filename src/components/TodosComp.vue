<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line space-before-function-paren
  computed: mapGetters(['todos'])
}
</script>

<style></style>
