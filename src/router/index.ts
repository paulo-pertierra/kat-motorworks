import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import { getCurrentUser } from 'vuefire'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AuthView,
      beforeEnter: async () => {
        const currentUser = await getCurrentUser()
        if (currentUser) {
          return '/dashboard/main'
        }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect(to) {
            return '/dashboard/main'
      },
      beforeEnter: async () => {
        const currentUser = await getCurrentUser()
        if (!currentUser) {
          return "/"
        }
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.,
      children: [
        {
          path: "main",
          component: () => import('@/components/InspectorComp.vue')
        },
        {
          path: "user",
          component: () => import('@/components/UserComp.vue')
        },{
          path: "inspection",
          children: [
            {
              path: ":id",
              component: () => import('@/components/InspectionDisplay.vue')
            }
          ]
        },
        {
          path: "tables",
          component: () => import('@/components/InspectionsPage.vue')
        }
      ]
    }
  ]
})

export default router
