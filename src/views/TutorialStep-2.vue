<script setup>
import { ref } from 'vue'

// логика компонента
// определите некоторое реактивное состояние тут.

const title = ref('Заголовок страницы')
</script>

<template>
  <h1>{{ title }}</h1>
</template>
