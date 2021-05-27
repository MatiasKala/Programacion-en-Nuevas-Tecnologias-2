<template>

  <section class="api-rest-full">
    <div class="box block my-2">
      <h2>Componente ApiRestFull</h2>
      <hr>
      <br>

      <div class="block">
        <div class="button is-primary" @click="getUsuarios()">GET ALL</div>
        <div class="button is-info ml-3" @click="postUsuario()">POST</div>
      </div>
      <div class="block">
        <div class="media alert alert-warning" v-for="(usuario,index) in usuarios" :key="index">
            <img :src="usuario.foto" width="250" :alt="usuario.nombre" :style="{'border-radius' : '20px'}">
            <div class="media-body ml-4">
                <h4><u>Usuario {{ index + 1}}- ID: {{usuario.id}} - Creado: {{convertirFmtFyh(usuario.createdAt)}}</u></h4>
                <br>
                <p>Nombre: {{usuario.nombre}} {{usuario.apellido}}</p>
                <p>Descripcion: <i>{{usuario.descripcion}}</i></p>
                <p>Comentarios: {{usuario.comentarios}}</p>
                <p>Direccion: <u>{{usuario.direccion}}</u> - <b>{{usuario.coordenadas}}</b></p>
                
                <div class="button is-warning" @click="putUsuario(usuario.id)">PUT</div>
                <div class="button is-danger ml-3" @click="deleteUsuario(usuario.id)">DELETE</div>
            </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  export default  {
    name: 'api-rest-full',
    props: [],
    mounted () {
    },
    data () {
      return {
        urlUsuarios: 'https://609dba3e33eed80017957062.mockapi.io/users/',
        usuarios:[],
     }
    },
    methods: {
      async getUsuarios(){
        try {
          let respuesta = await this.axios(this.urlUsuarios)
          console.log("GET ALL",respuesta)
          this.usuarios  = respuesta.data
        } catch (e) {
          console.error(e)
        }
      },



      async postUsuario(){

        let usuario = {
          nombre: "CARLONCHA",
          foto: "https://cdn.fakercloud.com/avatars/haligaliharun_128.jpg",
          descripcion: "We need to program the virtual COM hard drive!",
          coordenadas: [
            "13.8173",
            "-123.7520"
          ],
          comentarios: "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
          direccion: "CASA"
        }

        try {
          let respuesta = await this.axios.post(this.urlUsuarios,usuario,{'content-type':'application/json'})
          let user = respuesta.data
          console.log("POST",respuesta.data)
          this.usuarios.push(user)
        } catch (e) {
          console.error(e)
        }
      },
      


      async putUsuario(id){
        let usuario = {
          nombre: "PEPOTE",
          foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png",
          descripcion: "CALLATE",
          coordenadas: [
            "13.8173",
            "-123.7520"
          ],
          comentarios: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          direccion: "CALLE"
        }
        try {
          let respuesta = await this.axios.put(this.urlUsuarios+id,usuario,{'content-type':'application/json'})
          let user = respuesta.data
        
          console.log("PUT",user)

          let index = this.usuarios.findIndex(usuario => usuario.id == user.id)
          this.usuarios.splice(index,1,usuario)
        } catch (e) {
          console.error(e)
          console.log(e)
        }
      },


      async deleteUsuario(id){
        try {
          let respuesta = await this.axios.delete(this.urlUsuarios+id)
          let user = respuesta.data
          console.log("DELETE",id)
          
          let index = this.usuarios.findIndex(usuario => usuario.id == user.id)
          this.usuarios.splice(index,1)
        } catch (e) {
          console.error(e)
        }
      },
      convertirFmtFyh(fhy){
        return new Date(fhy).toLocaleString()
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
  pre{
    background-color:#212121;
    color: white;

  }
</style>
