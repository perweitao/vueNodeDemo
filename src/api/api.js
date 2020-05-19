import Axios from '../utils/axios'


export function getMenuList(params) {
  return Axios.get(`menu/getMenuList`)
}