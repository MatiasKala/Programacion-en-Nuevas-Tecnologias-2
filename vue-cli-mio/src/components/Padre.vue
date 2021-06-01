<template>

  <section class="padre">
    <div class="jumbotron ">
      <h2>Componente Padre</h2>
      <hr>
      <br>


      <h4 class="alert alert-success">Contador del Hijo</h4>

      <button class="btn btn-success mt-1 mb-4" @click="incrementar()">Contador {{cont}}</button>

      <Hijo :contador="cont" />

    </div>
  </section>

</template>

<script>

  import Hijo from "./Hijo.vue"

  export default  {
    name: 'padre',
    components : {
      Hijo
    }, 
    props: [],
    mounted () {

    },
    data () {
      return {
        cont:0
      }
    },
    methods: {
      incrementar(){
        this.cont++
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: #ff8352;
    color: white;
  }
</style>
