<script setup lang="ts">
import { ref } from 'vue'

const todos = ref([
  { id: '1', title: 'Задача 1', completed: true },
  { id: '2', title: 'Задача 2', completed: false },
  { id: '3', title: 'Задача 3', completed: true }
])
</script>

<template>
  <h1>Список дел</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input :id="todo.id" type="checkbox" v-model="todo.completed" />
      <label :for="todo.id">{{ todo.title }}</label>
    </li>
  </ul>
</template>
