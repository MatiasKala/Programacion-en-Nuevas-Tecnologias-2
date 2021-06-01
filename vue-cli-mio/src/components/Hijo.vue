<template>

  <section class="hijo">
    <div class="jumbotron ">
      <h2>Componente Hijo</h2>
      <hr>
      <br>

      
      <h4 class="alert alert-success">Contador del Padre {{contador}}</h4>

      <button class="btn btn-success mt-1 mb-4" @click="incrementar()">Contador {{cont}}</button>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'hijo',
    props: ['contador'],
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
        this.$emit('contadorEvento',this.cont)
      }
    }, 
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    color: white;
    background-color: #ffb066;
  }
</style>
