<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps<{
  todos: { id: string; title: string; completed: boolean }[]
}>()

const emit = defineEmits(['update:filteredTodos'])

const filter = ref('all')

const filteredTodos = computed(() => {
  if (filter.value === 'all') {
    return props.todos
  } else if (filter.value === 'completed') {
    return props.todos.filter((todo) => todo.completed)
  } else {
    return props.todos.filter((todo) => !todo.completed)
  }
})

const allTasks = computed(() => {
  return props.todos.length
})

const completedTasks = computed(() => {
  return props.todos.filter((todo) => todo.completed).length
})

const unfinishedTasks = computed(() => {
  return allTasks.value - completedTasks.value
})

watch(
  filteredTodos,
  (newFilteredTodos) => {
    emit('update:filteredTodos', newFilteredTodos)
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <input type="radio" id="all" value="all" v-model="filter" />
    <label for="all"
      >Все <sup>{{ allTasks }}</sup></label
    >

    <input type="radio" id="completed" value="completed" v-model="filter" />
    <label for="completed"
      >Завершенные <sup>{{ completedTasks }}</sup></label
    >

    <input type="radio" id="unfinished" value="unfinished" v-model="filter" />
    <label for="unfinished"
      >Невыполненные <sup>{{ unfinishedTasks }}</sup></label
    >
  </div>
</template>
