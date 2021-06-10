<template >

  <section class="src-components-estructura">
    <div class="jumbotron notification is-link">
      <h2>Componente Atributos</h2>
      <hr>
      <br>
      <!-- ------------------------------------------------------- -->
      <h4><u>Directivas de atributo</u></h4>
      <br>

      <h5>:style</h5>
      
      <button class="btn btn-info my-3" @click="estado1=!estado1">Cambiar fondo</button>
      <!-- <p style="color:white; background-color: green; border-radius: 10px; padding: 10px;"> -->
      <!-- <p :style="{color:'white','background-color':estado1?'green':'red',borderRadius: '10px', padding:'10px'}"> -->
      <p :style="getEstilos(estado1)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam harum provident quas eos in delectus incidunt at placeat! Non recusandae officia rem id vitae provident illo eaque veritatis assumenda quaerat?
      </p>

      <!-- ----------------------------------- -->
      <hr>

      <h5>:class</h5>
      
      <button class="btn btn-info my-3" @click="estado2=!estado2">Cambiar fondo</button>
      <!-- <p class="text-white bg-success p-2"> -->
      <!-- <p :class="['text-white', {'bg-success':estado2, 'bg-danger':!estado2}, 'p-2']"> -->
      <p :class="getClass(estado2)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam harum provident quas eos in delectus incidunt at placeat! Non recusandae officia rem id vitae provident illo eaque veritatis assumenda quaerat?
      </p>
      <br>
      <hr>
      <h4 class="mb-2"><u>DIRECTIVAS PERSONALIZADAS</u></h4>
      <input type="text" v-model="color" v-cambio-color="color">{{color}}

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-atributos',
    props: [],
    mounted () {

    },
    data () {
      return {
        estado1:true,
        estado2:true,
        color:''
      }
    },
    methods: {
        getEstilos(estado) {
            return {
                color: 'white',
                'background-color': estado?'green':'red',
                borderRadius: '10px',
                padding: '10px'
            }
        },
        getClass(estado) {
            return [
                'text-white',
                {
                    'bg-success':estado,
                    'bg-danger':!estado
                },
                'p-2'
            ]
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  /* .src-components-atributos {

  } */

  .jumbotron{
    background-color: cornflowerblue;
    color: rgb(6,6,155);
  }

  hr{
    background-color: #333;
  }
</style>
