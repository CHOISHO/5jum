import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        splitter: {
            namespaced: true,
            state: {
                open: false,
                searchedList: [],
                selectedList: []
            },
            mutations: {
                toggle(state, shouldOpen) {
                    if (typeof shouldOpen === 'boolean') {
                        state.open = shouldOpen
                    } else {
                        state.open = !state.open
                    }
                },
                addSelectedList(state, list) {
                    state.selectedList.push(list)
                }
            }
        }
    }
})