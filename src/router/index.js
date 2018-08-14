import Vue from 'vue';
import Router from 'vue-router';
import GMap from '@/components/home/GMap';
import Signup from '@/components/auth/Signup';
import Login from '@/components/auth/Login';

Vue.use(Router)
import firebase from 'firebase';

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: 'login/',
      name: 'Login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){  
    //check auth state of user
    let user = firebase.auth.currentUser;
    if(user){
      next(); //now the user is signed in, he can proceed to route
    }else{}
      next({ name: 'Login' });
  }else{
    next();
  }
});

export default router;