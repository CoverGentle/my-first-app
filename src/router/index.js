import {lazy} from "react";

const routes = [
  {
    path:"/home",
    exact:true,
    component:lazy(() =>import('../pages/home'))
  },
  {
    path:"/buy",
    exact:true,
    component:lazy(() =>import('../pages/buy'))
  },
  {
    path:"/shopping",
    exact:true,
    component:lazy(() =>import('../pages/shopping'))
  }
]

export default routes
