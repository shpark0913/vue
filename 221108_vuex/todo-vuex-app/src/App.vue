<template>
  <div id="app">
    <h1>Todo List</h1>
    <h3>할 일 : {{ allTodosCount }} 개</h3>
    <h3>다 한 일 : {{ completedTodosCount }} 개</h3>
    <h3>못 한 일 : {{ uncompletedTodosCount }}개</h3>
    <TodoList/>
    <TodoForm/>
    <!-- <button @click="loadTodos">Todo 불러오기</button> -->
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  computed: {
    allTodosCount() {
      return this.$store.getters.allTodosCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    uncompletedTodosCount() {
      return this.$store.getters.uncompletedTodosCount
    },
  },

  methods: {
    loadTodos() {
      this.$store.dispatch('loadTodos')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>