<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppContent from '@/components/layout/AppContent.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import TodoList from '@/components/todolist/TodoList.vue'
</script>

<template>
  <AppHeader />
  <AppContent>
    <TodoList />
  </AppContent>
  <AppFooter />
</template>
