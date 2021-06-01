<template>
  <section >
    
    <div class="columns"> 
      <div class="column">
        <nav class="navbar is-centered is-fixed-bottom " v-if="mostrar">
          <div class="navbar-start">
            <ul>
              <li class="nav-item">
                <article class="message is-small is-primary  ">
                  <div class="message-header">NavBar</div>
                  <div class="message-body buttons is-left ">
                    <router-link to="/">
                      <button class="nav-link button is-success is-focused" href="#">Inicio</button>
                    </router-link>

                    <router-link to="/estructura">
                      <button class="nav-link button" id="estructura" href="#">Estructura</button>
                    </router-link>

                    <router-link to="/atributos">
                      <button class="nav-link button" id="atributos" href="#">Atributos</button>
                    </router-link>

                    <router-link to="/contadores">
                      <button class="nav-link button" id="contadores" href="#">Contadores</button>
                    </router-link>
                   
                    <router-link to="/binding">
                      <button class="nav-link button" id="binding" href="#">Binding</button>
                    </router-link>
                    
                    <router-link to="/formulario">
                      <button class="nav-link button " id="formulario" href="#">Formulario</button>
                    </router-link>

                    <router-link to="/vueformulario">
                      <button class="nav-link button is-danger" id="vueformulario" href="#">FormularioVue</button>
                    </router-link>

                    <router-link to="/http">
                      <button class="nav-link button is-warning" id="http" href="#">HTTP</button>
                    </router-link>

                    <router-link to="/api">
                      <button class="nav-link button is-link " id="api" href="#">ApiRest</button>
                    </router-link>

                    <router-link to="/padre">
                      <button class="nav-link button " id="padre" href="#">Padre</button>
                    </router-link>

                  </div>
                </article>
              </li>
            </ul>
          </div>
        </nav> 
        <button class="btn btn-info my-3" @click="mostrar=!mostrar">
            {{ mostrar?'Ocultar Navbar':'Mostrar NavBar' }}
        </button>   
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'navbar',
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar:false ,
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  a {
    text-decoration: none !important
  }
  .navbar {
    height:117px;
    margin-bottom:40px;
    margin-left:20px;
    text-align: center;
    padding: 0px !important;
  }
  .navbar.is-fixed-bottom, .navbar.is-fixed-top{
    right: unset !important;
  }
  button{
    margin: 10px ;  opacity:1;
  }
  button:hover{
    animation: bounce 0.39s;
  }  
  @keyframes bounce {
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  30%, 50%,80%{
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  }
  #binding{
    background-color: purple;
    color: seashell ;
  }
  #atributos{
    background-color: cornflowerblue;
    color: rgb(230, 230, 230);
  }
  #contadores{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255) ;
  }
  #estructura{
    background-color: pink;
    color: white ;
  }
  #formulario{
    background-color: rgb(0, 70, 23);
    color: white ;
  }
  #padre{
    background-color:  #ff8352;
    color: white ;
  }
</style>
