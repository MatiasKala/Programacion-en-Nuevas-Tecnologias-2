import Vue from 'vue'

Vue.filter('reverse',(value)=> {
    return value.split('').reverse().join('')
})

Vue.filter('pasarAmayus',(value)=> {
    return value.toUpperCase()
})
Vue.filter('wrap',(value,begin,end)=> {
    return begin + value + end
})