<script setup lang="ts">
  import type { User } from '@/types'

  const props = defineProps<{
    user: User
  }>()
</script>

<template>
  {{ user.name }}
</template>
