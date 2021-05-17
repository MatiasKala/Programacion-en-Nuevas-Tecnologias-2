<template >

  <section class="src-components-estructura">
    <div class="jumbotron notification is-link">
      <h2>Componente Http</h2>
      <hr>
      <br>
      <div class="button is-danger" @click="getPostsCb()">Pedir</div>
      <!-- <pre>{{posts}}</pre> -->
      <hr>
      <div class="table-container">
        <table class="table table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tr >
            <th>userID</th>
            <th>ID</th>
            <th>title</th>
            <th>body</th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://jsonplaceholder.typicode.com/posts',  
        posts:[],
      }
    },
    methods: {
    
    //Ajax

    getPostsCb(){
      let xhr = new XMLHttpRequest

      xhr.open('get',this.url)

      xhr.addEventListener('load',() => {

        if(xhr.status == 200){
          let respuesta=JSON.parse(xhr.response)
          console.log(respuesta);
          this.posts=respuesta
        }
        else {
          console.error('Error en GET -> status: '+xhr.status);
        }
      })

      xhr.send()
    }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-atributos {

  }
  th{
    background-color: #363636;
    border-color: rgba(112, 112, 112, 0.842);
    color: #fff;
  }  
  .jumbotron{
    background-color: #ffdb4a;
    color: rgb(0, 5, 8);
  }

  hr{
    background-color: rgb(252, 186, 4);
  }
</style>
