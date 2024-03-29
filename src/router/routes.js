import {lazy} from "react";

const routes = [
  {
    path:"/",
    meta: {
      title: '登录',
    },
    component:lazy(() =>import('../pages/dome/dome2'))
  },
  {
    path:"/login",
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
    path:"/ways",
    meta: {
      title: '登录',
    },
    component:lazy(() =>import('../pages/ways'))
  },
  {
    path:"/404",
    meta: {
      title: '404',
    },
    component:lazy(() =>import('../pages/404'))
  },
  {
    path:"/dome2",
    meta: {
      title: '生命周期（创建时）',
    },
    component:lazy(() =>import('../pages/dome/dome2'))
  }
]

export default routes
