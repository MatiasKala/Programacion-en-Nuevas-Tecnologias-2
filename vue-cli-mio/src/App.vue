<template>
  <div id="app" class="container-fluid mt-3" >
    <div class="jumbotron">
    <h1>Bienvenidos a Vue.Js CLI</h1>
    <br> 
    <Binding />
    <Estructura />
    <Atributos />
    <Contadores/>

    </div>
  </div>
</template>

<script>
import Binding from './components/Binding.vue'
import Estructura from './components/Estructura.vue'
import Atributos from './components/Atributos.vue'
import Contadores from './components/Contadores.vue'

export default {
  name: 'App',
  components: {
    Binding,
    Estructura,
    Atributos,
    Contadores
  }
}
</script>
z
<style>
#app {

}
h1{
  color: blue;
}

.jumbotron{
  padding: 32px !important;
}
</style>
