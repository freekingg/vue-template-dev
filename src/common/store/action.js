import { removeToken } from '@/common/utils/token'
import * as types from './mutation-type'

export default {
  setUserAndState({ commit }, user) {
    // 如果登陆成功，设置logined标志位
    commit(types.SET_LOGINED, true)
    // 设置全局用户状态
    commit(types.SET_USER, user)
  },

  loginOut({ commit }) {
    removeToken()
    commit(types.REMOVE_LOGINED, false)
  },
}
