<script setup lang="ts">
import { ref } from 'vue'

import TodoInput from '@/components/todolist/TodoInput.vue'

interface TodoItem {
  id: string
  label: string
  completed: boolean
}

const props = defineProps<{
  todo: TodoItem
}>()

const completed = ref(props.todo.completed)

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
  <TodoInput
    :id="props.todo.id"
    :label="props.todo.label"
    type="checkbox"
    v-model="completed"
    @change="toggleTodo"
  />
  <button @click="removeTodo" data-test="todo-remove">Удалить</button>
</template>
