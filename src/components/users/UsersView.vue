<script setup lang="ts">
  import { inject, computed } from 'vue';
  import type { Ref } from 'vue';
  import type { User } from '@/types';

  interface Props {
    id: User['id'] | string;
  }

  const props = defineProps<Props>();

  const users = inject<Ref<User[]>>('UsersData');

  const user = computed(() => {
    if (!users) return;

    return users.value.find(user => user.id == props.id);
  });
</script>

<template>
  <div>
    <div v-if="user">
      <p>user id: {{ user.id }}</p>
      <p>user name: {{ user.name }}</p>
    </div>
  </div>
</template>
