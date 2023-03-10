import {lazy} from "react";

const routes = [
  {
    path:"/",
    meta: {
      title: '登录',
    },
    component:lazy(() =>import('../pages/login'))
  },
  {
    path:"/home",
    meta: {
      title: '首页',
    },
    component:lazy(() =>import('../pages/home'))
  },
  {
    path:"/buy",
    meta: {
      title: '买买',
    },
    component:lazy(() =>import('../pages/buy'))
  },
  {
    path:"/shopping",
    meta: {
      title: '购物车',
    },
    component:lazy(() =>import('../pages/shopping'))
  },
  {
    path:"/login",
    meta: {
      title: '登录',
    },
    component:lazy(() =>import('../pages/login'))
  }
]

export default routes
