<script setup lang="ts">
interface ProjectCard {
  id: string
  title: string
}

const props = defineProps<{
  project: ProjectCard
}>()
</script>

<template>
  {{ project.title }}
</template>
