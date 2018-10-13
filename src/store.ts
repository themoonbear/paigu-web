import Vue from 'vue'
import Vuex from 'vuex'
import engines from "@/utils/engines";
import RequestAPI from "@/api";
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    search: false,
    searchResult: {}
  },
  mutations: {
    startSearch (state: any, r: boolean){
      state.search = r
    },
    updateResult (state: any,  r: any) {
      state.search = false
      Vue.set(state.searchResult, r.title, r.msg)
    }
  },
  actions: {
    search({commit}, c: string) {
      commit("startSearch", true)
      for(let name of engines.names) {
        RequestAPI(name, c, (r : any) => {
          commit("updateResult", r)
        })
      }
    }
  }
})
