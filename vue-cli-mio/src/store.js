import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        contador:1234
    },
    actions:{
        contarUp({commit},cant){
            console.log('actionx -> contarUp ',cant);
            commit('incrementar',cant)
        },
        contarDown({commit},cant){
            console.log('actionx -> contarDown ',cant);
            commit('decrementar',cant)
        }
    },
    mutations:{
        incrementar(state,cant){
            console.log('mutations -> incrementar',state,cant);
            state.contador += cant
        },
        decrementar(state,cant){
            console.log('mutations -> decrementar',state,cant);
            state.contador -= cant
        }
    }
})