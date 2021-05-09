<template>

  <section class="src-components-contadores buttons are-medium">
    <div class="jumbotron">
      <h2>Componente Contadores</h2>
      <hr>
      <br>
          
      <Contador init="123" color="danger"/>
      <Contador init="456" color="warning"/>
      <Contador init="789" color="success"/>
      <Contador init="101"/>
      <div class="block mt-3">
      <progress class="progress is-medium is-success" max="100">45%</progress>
      </div>
      <span class="tag is-danger is-large" v-if="mostrar" >
        Delete Button
        <button class="delete" @click="mostrar=!mostrar"></button>
      </span>
    </div>  
    </section>

</template>

<script lang="js">
  
  import Contador from './Contador/index.vue'

  export default  {
    name: 'src-components-contadores',
    components:{
      Contador
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar:true
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-contadores {

  }
  .jumbotron{
    background-color: black;
    color: lightgray;
  }

  hr{
    background-color: #DDD;
  }
</style>
