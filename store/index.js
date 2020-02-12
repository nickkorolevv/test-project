import Vue from 'vue'
import Vuex from 'vuex'
import condition from './condition'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        condition: {
            namespaced: true,
            ...condition
        },
    },
})
Vue.use(store)

export default store
