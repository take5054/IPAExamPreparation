/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import AMQuestionOverview from '@/pages/kakomon/AM-Question-overview.vue'
import AMQuestion  from '@/pages/kakomon/AM-Question.vue';

// 過去問のルーティング
const kakomonRoutes = [
  {
    path: '/kakomon/FE-AM/:id',
    name: 'FE-AM-Detail',
    component: AMQuestionOverview,
  },
  {
    path: '/kakomon/AP-AM/:id',
    name: 'AP-AM-Detail',
    component: AMQuestionOverview,
  },
];

// 午前問題のルーティング
const AMQuestionRoutes = [
  {
    path: '/kakomon/FE-AM/:yearID/:questionID',
    name: 'FE-AM-Question',
    component: AMQuestion,
  },
  {
    path: '/kakomon/AP-AM/:yearID/:questionID',
    name: 'AP-AM-Question',
    component: AMQuestion,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    ...kakomonRoutes,
    ...AMQuestionRoutes,],
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
