import { createRouter, createWebHistory } from 'vue-router'

import ProjectHome from '@/views/project/ProjectHome.vue'
import ProjectDescription from '@/views/project/ProjectDescription.vue'
import ProjectSolution from '@/views/project/ProjectSolution.vue'

import UsersView from '@/components/users/UsersView.vue'
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/projects/:id',
      name: 'ProjectName',
      component: ProjectHome,

      children: [
        {
          path: 'description',
          name: 'ProjectDescription',
          component: ProjectDescription,
        },
        {
          path: 'solution',
          name: 'ProjectSolution',
          component: ProjectSolution,
        }
      ]
    },
    {
      path: '/users',
      name: 'UsersData',
      component: UsersList,
      children: [
        {
          path: ":id",
          name: "UsersDataView",
          component: UsersView,
          props: true
        }
      ]
    }
  ],
})

export default router
