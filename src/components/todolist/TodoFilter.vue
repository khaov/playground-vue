<script setup lang="ts">
import type { Todo } from '@/types'
import { computed } from 'vue'

import TodoInput from '@/components/todolist/TodoInput.vue'

const props = defineProps<{
  todos: Todo[]
}>()

const model = defineModel({ required: true })

const allTasks = computed(() => {
  return props.todos.length
})

const completedTasks = computed(() => {
  return props.todos.filter((todo) => todo.completed).length
})

const unfinishedTasks = computed(() => {
  return allTasks.value - completedTasks.value
})
</script>

<template>
  <div data-test="todo-filter">
    <TodoInput
      :id="`all`"
      :label="`Все <sup>` + allTasks + `</sup>`"
      type="radio"
      value="all"
      v-model="model"
    />

    <TodoInput
      :id="`completed`"
      :label="`Завершенные <sup>` + completedTasks + `</sup>`"
      type="radio"
      value="completed"
      v-model="model"
    />

    <TodoInput
      :id="`unfinished`"
      :label="`Невыполненные <sup>` + unfinishedTasks + `</sup>`"
      type="radio"
      value="unfinished"
      v-model="model"
    />
  </div>
</template>
