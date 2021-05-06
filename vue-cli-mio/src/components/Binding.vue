<template>
  <div class="hello">

    <div class="box block my-2">
      <h2>Componente Binding</h2>
      <hr>
      <br>
      
      <h4><u>Interpolación / v-text / v-html</u></h4>
      <b>{{ 3 + 4 }}</b>
      <div>{{ mensaje }}</div>
      <div v-text="mensaje"></div>
      <div v-html="mensaje"></div>
      <br> 

      <div>{{ mensajeHTML }}</div>
      <div v-text="mensajeHTML"></div>
      <div v-html="mensajeHTML"></div>
      <hr>

      <!-- ---------------------------------------------------------------------------- -->
      <h4><u>Property Binding / v-bind</u></h4>
      <input type="text" value="123"> <br>
      <input type="text" value="valor"> <br>
      <input type="text" v-bind:value="valor"> {{ valor }}<br>
      <input type="text" :value="valor"> {{ valor }}<br>
      <hr>

      <!-- ---------------------------------------------------------------------------- -->
      <h4><u>Event Binding / v-on</u></h4>
      <button class="btn btn-success my-3 mr-2" v-on:click="contador++">Contar {{ contador }}</button>
      <button class="btn btn-warning my-3 mr-2" @click="contador2++">Contar {{ contador2 }}</button>
      <button class="btn btn-danger my-3" @click="incrementar()">Contar {{ getContador() }}</button>
      <hr>

      <!-- ---------------------------------------------------------------------------- -->
      <h4><u>Doble Data Binding / v-model</u></h4>
      <br>
      <h5>Manual</h5>
      <input type="text" :value="valor2" @input="actualizar($event)"> {{ valor2 }}<br>
      <br>
      <h5>Automático</h5>
      <input type="text" v-model="valor3"> {{ valor3 }}<br>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        valor2: 456,
        valor3: 789,
        contador: 123,
        contador2: 456,
        contador3: 789,
    }
  },
  methods:{
        incrementar() {
            this.contador3++
        },
        getContador() {
            return this.contador3
        },
        actualizar(e) {
            let dato = e.target.value
            console.log('actualizar',dato)
            this.valor2 = dato
        },
        borrar(index) {
            console.log(index)
            this.alumnos.splice(index,1)
        }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  background-color: purple;
  color: white;
}
.box{
  background-color: purple;
  color: white;
}
hr{
  background-color: #eee;
}
</style>
