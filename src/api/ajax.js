import qs from 'qs'
import axios from 'axios'
import router from '../router'
import {MessageBox} from 'mint-ui'

const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() ==='POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  let token = localStorage.getItem('token_key')
  if (config.headers.needToken) {
    if (token) {
      config.headers.authorization = token
    }else {
      throw new Error('没有token,请重新登录')
    }
  }
  return config
})

instance.interceptors.response.use(
  response => response.data,
  error => {
    // alert('请求失败')
    if (!error.response) {
      MessageBox.alert(error.message)
      router.currentRoute.path!=='/login' && router.replace('/login')
    }else {
      if (error.response.status ===401) {
        MessageBox.alert('token已过期，请重新登录')
        router.currentRoute.path!=='/login' && router.replace('/login')
      }else if(error.response.status === 404){
        MessageBox.alert('请求资源不存在')
      }else{
        MessageBox.alert('请求失败')
      }
    }
    MessageBox.alert('请求失败')
    return new Promise(() => {})
  }
)

export default instance