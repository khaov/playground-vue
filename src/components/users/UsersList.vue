<script setup lang="ts">
  import { ref, provide, onMounted } from 'vue'

  import UsersCard from '@/components/users/UsersCard.vue'

  import type { User } from '@/types'

  const usersUrl = 'https://jsonplaceholder.typicode.com/users'

  const users = ref<User[]>([])
  provide('UsersData', users)

  onMounted(async () => {
    users.value = await fetch(usersUrl)
      .then(response => response.json())
      .then(json => json as User[])
  })
</script>

<template>
  <h1>Список пользователей</h1>

  <ul>
    <li v-for="user in users" :key="user.id">
      <RouterLink :to="{ name: 'UsersDataView', params: { id: user.id }}">
        <UsersCard :user="user" />
      </RouterLink >
    </li>
  </ul>

  <div>
    <RouterView/>
  </div>
</template>
