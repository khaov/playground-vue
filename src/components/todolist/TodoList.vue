<script setup lang="ts">
import type { Todo } from '@/types'
import { ref, computed } from 'vue'

import TodoInput from '@/components/todolist/TodoInput.vue'
import TodoFilter from '@/components/todolist/TodoFilter.vue'
import TodoItem from '@/components/todolist/TodoItem.vue'

const todos = ref<Todo[]>([
  { id: '1', label: 'Задача 1', completed: true },
  { id: '2', label: 'Задача 2', completed: false },
  { id: '3', label: 'Задача 3', completed: true }
])

const filterTodo = ref('all')

const filteredTodos = computed(() => {
  if (filterTodo.value === 'all') {
    return todos.value
  } else if (filterTodo.value === 'completed') {
    return todos.value.filter((todo) => todo.completed)
  } else {
    return todos.value.filter((todo) => !todo.completed)
  }
})

const inputTodo = ref('')

const toggleTodo = (id: string, completed: boolean) => {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) {
    todo.completed = completed
  }
}

function addTodo() {
  const taskID = (todos.value.length + 1).toString()

  if (inputTodo.value.length) {
    todos.value.push({
      id: taskID,
      label: inputTodo.value,
      completed: false
    })
  }

  inputTodo.value = ''
}

const removeTodo = (id: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<template>
  <h1>Список задач</h1>

  <TodoFilter :todos="todos" v-model="filterTodo" />

  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <TodoItem :todo="todo" @toggle="toggleTodo" @remove="removeTodo" />
    </li>
  </ul>

  <h2>Добавить задачу</h2>

  <form @submit.prevent="addTodo">
    <TodoInput v-model="inputTodo" type="text" placeholder="Сформулируйте задачу" />
    <button type="submit">Добавить</button>
  </form>
</template>
