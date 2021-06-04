import Vue from 'vue'

var miMixin = {
    computed : {
        mostrarContadorVuex(){
            console.log('mostrarContador GLOBAL');
            return this.$store.state.contador
        }
    }
}

Vue.mixin(miMixin)