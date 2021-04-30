<template>
  <div id="app" class="container-fluid mt-3" >
    <div class="jumbotron">
    <h1>Bienvenidos a Vue.Js CLI</h1>
    <br> 
    <Binding />
    </div>
  </div>
</template>

<script>
import Binding from './components/Binding.vue'

export default {
  name: 'App',
  components: {
    Binding
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
</style>
