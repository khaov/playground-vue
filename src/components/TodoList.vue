<script setup lang="ts">
import { ref } from 'vue'

const todos = ref([
  { id: '1', title: 'Задача 1', completed: true },
  { id: '2', title: 'Задача 2', completed: false },
  { id: '3', title: 'Задача 3', completed: true }
])

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
</script>

<template>
  <h1>Список задач</h1>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input :id="todo.id" type="checkbox" v-model="todo.completed" />
      <label :for="todo.id">{{ todo.title }}</label>
    </li>
  </ul>

  <h2>Добавить задачу</h2>

  <form>
    <input v-model="inputTask" type="text" placeholder="Сформулируйте задачу" />
    <button @click="addTask" type="button">Добавить</button>
  </form>
</template>
