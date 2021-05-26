<template>

  <section class="api-rest-full">
    <div class="box block my-2">
      <h2>Componente ApiRestFull</h2>
      <hr>
      <br>

      <pre>{{usuarios}}</pre>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'api-rest-full',
    props: [],
    mounted () {
      this.getUsuariosAxios()
    },
    data () {
      return {
        urlUsuarios: 'https://609dba3e33eed80017957062.mockapi.io/users',
        usuarios:[],
     }
    },
    methods: {
      async getUsuariosAxios(){
        try {
          let respuesta = await this.axios(this.urlUsuarios)
          console.log("AXIOS",respuesta)
          this.usuarios  = respuesta.data
        } catch (e) {
          console.error(e)
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .box{
    background-color: rgb(11, 0, 107);
    color: white;
  }
</style>
