<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    id: '1',
    title: 'Single-Page CV',
    description: 'Create a single-page HTML CV to showcase your career history'
  }
]
</script>

<template>
  <h1>Frontend Projects</h1>

  <ul>
    <li v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </li>
  </ul>
</template>
