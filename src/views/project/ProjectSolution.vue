<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const projectId = route.params.id

  const SolutionDemo = defineAsyncComponent(() => 
    import(`../../content/projects/${projectId}/SolutionDemo.vue`)
  )
</script>

<template>
  <div>
    Решение {{ $route.params.id }}

    <SolutionDemo />
  </div>
</template>