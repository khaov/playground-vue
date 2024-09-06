<script setup lang="ts">
import { computed } from 'vue'

import TodoInput from '@/components/todolist/TodoInput.vue'

interface TodoItem {
  id: string
  title: string
  completed: boolean
}

const props = defineProps<{
  todo: TodoItem
}>()

const emit = defineEmits<{
  (e: 'toggle', id: string, completed: boolean): void
  (e: 'remove', id: string): void
}>()

const toggleTodo = (event: Event) => {
  const isCompleted = (event.target as HTMLInputElement).checked
  emit('toggle', props.todo.id, isCompleted)
}

const removeTodo = () => {
  emit('remove', props.todo.id)
}
</script>

<template>
  <!-- <input :id="props.todo.id"  />
  -->

  <TodoInput
    :id="props.todo.id"
    :label="props.todo.title"
    type="checkbox"
    :checked="todo.completed"
    @change="toggleTodo"
  />
  <button @click="removeTodo">Удалить</button>
</template>
