import Vue from 'vue'
import VueRouter from 'vue-router'

import Binding from './components/Binding.vue'
import Estructura from './components/Estructura.vue'
import Atributos from './components/Atributos.vue'
import Contadores from './components/Contadores.vue'
import Formulario from './components/Formulario/index.vue'
import VueFormulario from './components/VueFormulario/index.vue'
import Http from './components/Http.vue'
import ApiRestFull from './components/ApiRestFull.vue'
import Padre from './components/Padre.vue'
import ContadorVuex from './components/ContadorVuex.vue'

Vue.use(VueRouter)

export const router=new VueRouter({
    mode :'history',
    routes : [
        {path:'/',},
        {path:'/binding',component: Binding},
        {path:'/atributos',component: Atributos},
        {path:'/contadores',component: Contadores},
        {path:'/estructura',component: Estructura},
        {path:'/formulario',component: Formulario },
        {path:'/vueformulario',component: VueFormulario },
        {path:'/api',component: ApiRestFull },
        {path:'/http',component: Http },
        {path:'/padre',component: Padre },
        {path:'/contador-vuex/:titulo/:colorDeFondo/:colorDeTexto',component: ContadorVuex,props:true },
    ]
})