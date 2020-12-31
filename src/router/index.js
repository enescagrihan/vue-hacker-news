import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/pages/Top'
import News from '@/pages/News'
import Newest from '../pages/Newest'
import Comments from "@/pages/Comments";
import Ask from "@/pages/Ask";
import Show from "@/pages/Show";
import Jobs from "@/pages/Jobs";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/newest',
    name: 'Newest',
    component: Newest
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/newcomments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/ask',
    name: 'Ask',
    component: Ask
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
