<template>

  <section class="src-components-contadores">
    <div class="jumbotron">
      <h2>Componente Contadores</h2>
      <hr>
      <br>
          
      <Contador init="123" color="danger"/>
      <Contador init="456" color="warning"/>
      <Contador init="789" color="success"/>
      <Contador/>

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
    background-color: brown;
    color: lightgray;
  }

  hr{
    background-color: #DDD;
  }
</style>
