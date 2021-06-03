<template>

  <section class="contadorVuex">
    <div class="jumbotron" :style="{background: colorDeFondo, color:colorDeTexto}">
      <h2>Componente ContadorVuex {{titulo}}</h2>
      <hr>
      <br>

      
      <h4>Contador  {{mostrarContadorVuex}}</h4>
      <button class="button is-dark my-2 mr-3" @click="incrementar()">Incrementar </button>
      <button class="button is-dark my-2" @click="decrementar()">Decrementar </button>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'ContadorVuex',
    props: ['titulo','colorDeFondo','colorDeTexto'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      incrementar(){
        // this.contador++  
        // this.$emit('contador',this.contador)
        let cant = 1
        console.log('dispatch contarUp')
        this.$store.dispatch('contarUp',cant)
      },
      decrementar(){
        // this.contador--
        // this.$emit('contador',this.contador)
        let cant = 1
        console.log('dispatch contarDown')
        this.$store.dispatch('contarDown',cant)
      }
    }, 
    computed: {
      mostrarContadorVuex(){
        // this.$emit('contador',this.contador)
        // return this.contador
        return this.$store.state.contador
      }
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    color: white;
    background-color: #942a00;
  }
</style>
