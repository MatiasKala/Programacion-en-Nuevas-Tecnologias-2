<template>
  <div id="app" class="container-fluid mt-3" >
    <div class="jumbotron">
    <h1 style="font-size:30px">Bienvenidos a Vue.Js CLI</h1>
    <br> 
    <Navbar/>
    <router-view></router-view>
    <!-- <Binding />
    <Estructura />
    <Atributos />
    <Contadores/> -->

    </div>
  </div>
</template>

<script>
// import Binding from './components/Binding.vue'
// import Estructura from './components/Estructura.vue'
// import Atributos from './components/Atributos.vue'
// import Contadores from './components/Contadores.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Binding,
    // Estructura,
    // Atributos,
    // Contadores,
    Navbar
  }
}
</script>

<style>
/*#app {

}*/
h1{
  color: rgb(44, 0, 88);
}

.jumbotron{
  padding: 32px !important;
}
</style>
