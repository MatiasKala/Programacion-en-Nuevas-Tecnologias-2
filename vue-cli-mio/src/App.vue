<template>
  <div id="app" class="container-fluid mt-3" >
    <div class="jumbotron">
    <h1 style="font-size:30px">Bienvenidos a Vue.Js CLI </h1>
    <br> 

    <!-- <ContadorVuex titulo="1" colorDeFondo="crimson" colorDeTexto="white" @contador="leerContador($event)" /> -->
    <!-- <ContadorVuex titulo="2" colorDeFondo="navy" colorDeTexto="white" @contador="leerContador($event)" /> -->

    <ContadorVuex titulo="1" colorDeFondo="crimson" colorDeTexto="white"  />
    <ContadorVuex titulo="2" colorDeFondo="navy" colorDeTexto="white"  />
    
    <Navbar />
    <router-view></router-view>
    <!-- <Binding />
    <Estructura />
    <Atributos />
    <Contadores/> -->

    </div>
  </div>
</template>

<script>

import ContadorVuex from "./components/ContadorVuex.vue";
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Binding,
    // Estructura,
    // Atributos,
    // Contadores,
    Navbar,
    ContadorVuex
  },
  data(){
    return {
      // contador : 0
    }
  },
  methods:{
    // leerContador(cont){
    //   this.contador = cont
    // },
    // getContador(){
    //   return this.contador
    // }
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
