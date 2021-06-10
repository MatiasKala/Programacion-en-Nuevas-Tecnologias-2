import Vue from 'vue'

Vue.directive('cambio-color',(element,binding,vnode)=>{
    console.log(element,binding,vnode)

    element.style.color=binding.value
})