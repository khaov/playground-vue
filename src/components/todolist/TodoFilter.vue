<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import TodoInput from '@/components/todolist/TodoInput.vue'

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
    <TodoInput
      :id="`all`"
      :label="`Все <sup>` + allTasks + `</sup>`"
      type="radio"
      value="all"
      v-model="filter"
    />

    <TodoInput
      :id="`completed`"
      :label="`Завершенные <sup>` + completedTasks + `</sup>`"
      type="radio"
      value="completed"
      v-model="filter"
    />

    <TodoInput
      :id="`unfinished`"
      :label="`Невыполненные <sup>` + unfinishedTasks + `</sup>`"
      type="radio"
      value="unfinished"
      v-model="filter"
    />
  </div>
</template>
