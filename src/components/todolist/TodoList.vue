<script setup lang="ts">
import { ref, computed } from 'vue'

import TodoFilter from '@/components/todolist/TodoFilter.vue'

const todos = ref([
  { id: '1', title: 'Задача 1', completed: true },
  { id: '2', title: 'Задача 2', completed: false },
  { id: '3', title: 'Задача 3', completed: true }
])

const filteredTodos = ref([])

const inputTask = ref('')

function addTask() {
  const taskID = (todos.value.length + 1).toString()

  if (inputTask.value.length) {
    todos.value.push({
      id: taskID,
      title: inputTask.value,
      completed: false
    })
  }

  inputTask.value = ''
}

function removeTask(todoToRemove: { id: string }) {
  todos.value = todos.value.filter((todo) => todo.id !== todoToRemove.id)
}
</script>

<template>
  <h1>Список задач</h1>

  <TodoFilter :todos="todos" @update:filteredTodos="filteredTodos = $event" />

  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input :id="todo.id" type="checkbox" v-model="todo.completed" />
      <label :for="todo.id">{{ todo.title }}</label>
      <button @click="removeTask(todo)">Удалить</button>
    </li>
  </ul>

  <h2>Добавить задачу</h2>

  <form @submit.prevent="addTask">
    <input v-model="inputTask" type="text" placeholder="Сформулируйте задачу" />
    <button type="submit">Добавить</button>
  </form>
</template>
