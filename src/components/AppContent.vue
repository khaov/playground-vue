<script setup lang="ts">
import { RouterView } from 'vue-router'
import GuideList from '../components/GuideList.vue'
</script>

<template>
  <div class="content">
    <aside>
      <GuideList />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>
