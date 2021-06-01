<template>

  <section class="contadorVuex">
    <div class="jumbotron ">
      <h2>Componente ContadorVuex</h2>
      <hr>
      <br>

      
      <h4>Contador  {{contador}}</h4>
      <hr>
      <button class="btn btn-dark my-2 mr-3" @click="incrementar()">Incrementar </button>
      <button class="btn btn-dark my-2" @click="decrementar()">Decrementar </button>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'contadorVuex',
    props: [],
    mounted () {

    },
    data () {
      return {
        contador:0
      }
    },
    methods: {
      incrementar(){
        this.contador++
      },
      decrementar(){
        this.contador--
      }
    }, 
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    color: white;
    background-color: #942a00;
  }
</style>
