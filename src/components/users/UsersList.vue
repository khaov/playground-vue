<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import type { User } from '@/types'

  import UsersCard from '@/components/users/UsersCard.vue'

  const usersUrl = 'https://jsonplaceholder.typicode.com/users'
  const users = ref<User[]>([])

  onMounted(async () => {
    users.value = await fetch(usersUrl)
      .then(response => response.json())
      .then(json => json as User[])

      console.log(users.value)
  })
</script>

<template>
    <h1>Список пользователей</h1>

    <ul>
      <li v-for="user in users" :key="user.id">
        <UsersCard :user="user" />
      </li>
    </ul>
</template>
