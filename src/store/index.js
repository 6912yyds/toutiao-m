import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storag'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 1一个对象，存储当前登录用户信息（token等数据）
    // user: null

    // 原来获取数据的方法
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    user: getItem(TOKEN_KEY)
  },
  getters: {
  },
  // 2 外界修改store 中state属性的途径，必须通过mutations设置的方法来修改state-类比methods
  mutations: {
    setUser (state, data) {
      this.state.user = data
      // 为了防止刷新页面丢失数据，我们需要把数据备份到本地存储
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
