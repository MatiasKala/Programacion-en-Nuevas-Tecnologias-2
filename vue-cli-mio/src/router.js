import Vue from 'vue'
import VueRouter from 'vue-router'

import Binding from './components/Binding.vue'
import Estructura from './components/Estructura.vue'
import Atributos from './components/Atributos.vue'
import Contadores from './components/Contadores.vue'
import Formulario from './components/Formulario/index.vue'

Vue.use(VueRouter)

export const router=new VueRouter({
    mode :'history',
    routes : [
        {path:'/',redirect:'/contadores'},
        {path:'/binding',component: Binding},
        {path:'/atributos',component: Atributos},
        {path:'/contadores',component: Contadores},
        {path:'/estructura',component: Estructura},
        {path:'/formulario',component: Formulario },
    ]
})