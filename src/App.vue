<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppContent from '@/components/layout/AppContent.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

import ProjectsList from './components/projects/ProjectsList.vue'
</script>

<template>
  <AppHeader />
  <AppContent>
    <ProjectsList />
  </AppContent>
  <AppFooter />
</template>
