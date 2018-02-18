import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'

Vue.use(Router)

let actualPath = window.location.pathname;

function generatePath (route) {
  console.log(actualPath + route);
  return actualPath + route
}

export default new Router({
  mode: 'history',
  routes: [
    {
     path: generatePath('about'),
     name: 'About',
     component: About
    },
    {
      path: generatePath('*'),
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
