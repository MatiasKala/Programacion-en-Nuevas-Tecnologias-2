<template>

  <section class="hijo">
    <div class="jumbotron ">
      <h2>Componente Hijo</h2>
      <hr>
      <br>

      
      <h4 class="alert alert-success">Contador del Padre {{contador}}</h4>

      <button class="btn btn-success mt-1 mb-4" @click="incrementar()">Contador {{cont}}</button>

      <h3>FILTROS LOCALES</h3>
      <input type="text" v-model="valor">
      <p>{{valor==''?0:valor}} X 3 = {{valor | por3 | currency}}</p>
  
      <br>
      <hr>
      <h4><u>SLOTS</u></h4>
      <br>
      <header>
        <slot name="header" ></slot>
      </header>
      <br>
      <main>
        <slot>...main</slot>
      </main>
      <br>
      <footer>
        <slot name="footer" ></slot>
      </footer>
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
        cont:0,
        valor:5
      }
    },
    filters:{
      por3:(v)=>{return !isNaN(v)? v*3 : 'La entrada no es valida'},
      currency:(v)=>{return '$'+v}
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
