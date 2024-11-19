<script setup lang="ts">
  const navigation = [
    {
      id: '1',
      title: 'Задача 1',
    },
    {
      id: '2',
      title: 'Задача 2',
    },
    {
      id: '3',
      title: 'Задача 3',
    },
    {
      id: '4',
      title: 'Задача 4',
    }
  ]
</script>

<template>
  <aside>
    <nav>
      <ul>
        <li v-for="item in navigation" :key="item.id">
          <RouterLink :to="{ name: 'ProjectName', params: { id: item.id }}">
            {{ item.title }}
          </RouterLink >

          <ul>
            <li>
              <RouterLink :to="{ name: 'ProjectDescription', params: { id: item.id }}">
                Описание
              </RouterLink >
            </li>
            <li>
              <RouterLink :to="{ name: 'ProjectSolution', params: { id: item.id }}">
                Решение
              </RouterLink >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>
  