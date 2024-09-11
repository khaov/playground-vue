<script setup lang="ts">
interface TodoInput {
  id?: string
  label?: string
}

defineProps<TodoInput>()
const model = defineModel({ required: true })
defineOptions({ inheritAttrs: false })
</script>

<template>
  <div data-test="todo-field">
    <input :id="id" v-model="model" v-bind="$attrs" data-test="todo-field-input" />
    <label :for="id" v-html="label" data-test="todo-field-label"></label>
  </div>
</template>
