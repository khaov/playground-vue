import { createRouter, createWebHistory } from 'vue-router'

import ProjectHome from '@/views/project/ProjectHome.vue'
import ProjectDescription from '@/views/project/ProjectDescription.vue'
import ProjectSolution from '@/views/project/ProjectSolution.vue'

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
    }
  ]
})

export default router
