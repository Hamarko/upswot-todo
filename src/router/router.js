import {createRouter, createWebHashHistory} from "vue-router"
import todoLogin from '@/components/todo-login.vue'
import todoList from '@/components/todo-list.vue'


const routes = [
    { 
      path: '/login',
      name: 'login',           
      component: todoLogin 
    },
    { 
      path: '/todo',
      name: 'todo',
      meta:{auth: true},
      component: todoList
    },  
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  router.beforeEach((to, from, next) =>{
    const currentUser = localStorage.isAuth
    const requireAuth = to.matched.some(record => record.meta.auth)
    if (requireAuth && !currentUser){
      next('/login')      
    } else{
      next()    
    }
  })
  export {router}