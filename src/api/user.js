/*
 * @Description: 
 * @Author: charles
 * @Date: 2021-06-06 09:18:20
 * @LastEditors: charles
 * @LastEditTime: 2021-06-06 22:11:11
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
