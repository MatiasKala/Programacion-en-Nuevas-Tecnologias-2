<template >

  <section class="src-components-estructura">
    <div class="jumbotron notification is-link">
      <h2>Componente Http</h2>
      <hr>
      <br>
      <div class="button is-danger" @click="getPostsCb()">PedirCallback</div>
      <div class="button is-link mx-4" @click="getPostsFetch()">PedirFetch</div>
      <div class="button is-success" @click="getPostsAxios()">PedirAxios</div>
      <!-- <pre>{{posts}}</pre> -->
      <hr>
      <div  v-if="posts.length" class="table-container ">
        <table class="table table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tr >
            <th v-for="(key,index) in getColumsNames" :key="index">{{key}}</th>
          </tr>
          <tr v-for="(p,index) in posts" :key="index">
            <td v-for="(colName,i) in getColumsNames" :key="i">{{p[colName]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        //// https://609dba3e33eed80017957062.mockapi.io/data
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
            console.log('CALLBACK',respuesta);
            this.posts=respuesta
          }
          else {
            console.error('Error en GET -> status: '+xhr.status)
          }
        })

        xhr.addEventListener('error', e => {
          console.error(`Error XMLHttpRequest ${e}`);
        })

        xhr.send()
      },
      getPostsFetch() {
        fetch(this.url)
        .then(datos => datos.json())
        .then(respuesta => {
          console.log("FETCH",respuesta)
          this.posts = respuesta
          })
        .catch(error => console.error(error))
      }

    },
    computed: {
      getColumsNames(){
        return Object.keys(this.posts[0])
      }
    }
}


</script>

<style scoped lang="css">
  /* .src-components-atributos {

  } */
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
