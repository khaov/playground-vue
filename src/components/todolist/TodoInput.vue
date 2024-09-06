<script setup lang="ts">
interface TodoInput {
  id?: string
  label?: string
}

const props = defineProps<TodoInput>()
const model = defineModel({ required: true })
defineOptions({ inheritAttrs: false })
</script>

<template>
  <input :id="id" v-model="model" v-bind="$attrs" />

  <label :for="id">{{ label }}</label>
</template>
