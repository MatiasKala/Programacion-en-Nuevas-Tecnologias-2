<template>

  <section class="padre">
    <div class="jumbotron ">
      <h2>Componente {{'Padre' | reverse | pasarAmayus | wrap('"','*')}}</h2>
      <hr>
      <br>


      <h4 class="alert alert-success">Contador del Hijo {{contadorHijo}}</h4>

      <button class="btn btn-success mt-1 mb-4" @click="incrementar()">Contador {{cont}}</button>

      <Hijo :contador="cont" @contadorEvento="contadorHijo=$event"  >
        <div slot="header"> 
          <h3>SLOT este es el HEADER</h3>
        </div>
        <h5>SLOT MAIN</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugit, repudiandae eos voluptatum nisi placeat ullam animi iste. Maiores dolor repellendus animi non quisquam eius impedit corrupti sit culpa iusto!</p>
        <div slot="footer">
          <h3>SLOT este es el FOOTER</h3>
        </div>
      </Hijo>

    </div>
  </section>

</template>

<script >

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
        cont:0,
        contadorHijo:0
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
