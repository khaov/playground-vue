<script setup lang="ts">
import { ref, computed } from 'vue'

const todos = ref([
  { id: '1', title: 'Задача 1', completed: true },
  { id: '2', title: 'Задача 2', completed: false },
  { id: '3', title: 'Задача 3', completed: true }
])

const completedTasks = computed(() => {
  return todos.value.filter((todo) => todo.completed).length
})

const unfinishedTasks = computed(() => {
  return todos.value.length - completedTasks.value
})

const filter = ref('all')

const filteredTodos = computed(() => {
  if (filter.value === 'all') {
    return todos.value
  } else if (filter.value === 'completed') {
    return todos.value.filter((todo) => todo.completed)
  } else {
    return todos.value.filter((todo) => !todo.completed)
  }
})

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

  <p>Выполненные задачи: {{ completedTasks }}</p>
  <p>Невыполненные задачи: {{ unfinishedTasks }}</p>

  <div>
    <input type="radio" id="all" value="all" v-model="filter" />
    <label for="all">Все</label>

    <input type="radio" id="completed" value="completed" v-model="filter" />
    <label for="completed">Завершенные</label>

    <input type="radio" id="active" value="active" v-model="filter" />
    <label for="active">Активные</label>
  </div>

  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input :id="todo.id" type="checkbox" v-model="todo.completed" />
      <label :for="todo.id">{{ todo.title }}</label>
    </li>
  </ul>

  <h2>Добавить задачу</h2>

  <form @submit.prevent="addTask">
    <input v-model="inputTask" type="text" placeholder="Сформулируйте задачу" />
    <button type="submit">Добавить</button>
  </form>
</template>
