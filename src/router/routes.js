import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from "../pages/Order/Order"
import Profile from '../pages/Profile/Profile'
import Login from "../pages/Login/Login"
import Shop from '../pages/Shop/Shop'
import Goods from "../pages/Shop/Goods/Goods"
import Info from "../pages/Shop/Info/Info"
import Rating from "../pages/Shop/Rating/Rating"

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooterGuide:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooterGuide:true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooterGuide:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods
      },
      {
        path: 'rating',
        component: Rating
      },
      {
        path: '/shop/info',
        component: Info
      },
      {
        path: '/shop',
        redirect: '/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]