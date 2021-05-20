<template >

  <section class="src-components-estructura">
    <div class="jumbotron">
      <h2>Componente Estructura</h2>
      <hr>
      <br>

      <!-- -------------------------------------------- -->
      <!--           Directivas Estructurales           -->
      <!-- -------------------------------------------- -->
      <h4><u>v-if / v-else-if / v-else</u></h4>

      <button class="btn btn-warning my-3" @click="mostrar=!mostrar">
          {{ mostrar?'Ocultar':'Mostrar' }}
      </button>
      
      <p v-if="mostrar" class="alert alert-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad molestias? Perferendis, nesciunt, sapiente obcaecati consectetur, amet voluptatem error suscipit illo fuga fugit temporibus culpa! Non cumque qui aspernatur obcaecati.
      </p>
      <!-- <p v-if="!mostrar" class="alert alert-danger"> -->
      <p v-else class="alert alert-danger">
          ELEMENTO REMOVIDO
      </p>

      <!-- ---------------------------------------------------------------------------- -->
      <h4><u>v-show</u></h4>

      <button class="btn btn-info my-3" @click="mostrar2=!mostrar2">
          {{ mostrar2?'Ocultar':'Mostrar' }}
      </button>
      
      <p v-show="mostrar2" class="alert alert-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad molestias? Perferendis, nesciunt, sapiente obcaecati consectetur, amet voluptatem error suscipit illo fuga fugit temporibus culpa! Non cumque qui aspernatur obcaecati.
      </p>
      <hr>

      <!-- ---------------------------------------------------------------------------- -->
      <h4><u>v-for</u></h4>
      <br>
      <ul>
          <li v-for="(usuario,index) in usuarios" :key="index">
              {{ index+1 }} - {{ usuario }}
          </li>
          <!-- <li>{{ usuarios[0] }}</li>
          <li>{{ usuarios[1] }}</li>
          <li>{{ usuarios[2] }}</li>
          <li>{{ usuarios[3] }}</li> -->
      </ul>
      <hr>

      <button class="btn btn-warning my-3" @click="agregarAlumno()">Agregar Alumno</button>
      <div v-if="alumnos.length">
          <ul>
              <li v-for="(alumno,index) in alumnos" :key="index">
                  <!-- <pre>{{ index+1 }} - {{ alumno }}</pre> -->
                  <!-- {{ alumno.nombre }} {{ alumno.apellido }} -->
                  {{ alumno.nombre + ' ' + alumno.apellido }}
              </li>
          </ul>
          <hr>

          <div class="table-responsive">
              <table class="table">
                  <tr class="bg-success text-white">
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Edad</th>
                      <th>Curso</th>
                      <th>Foto</th>
                  </tr>
                  <tr class="bg-info text-white" v-for="(alumno,index) in alumnos" :key="index">
                      <td>{{ alumno.nombre }}</td>
                      <td>{{ alumno.apellido }}</td>
                      <td>{{ alumno.edad }}</td>
                      <td>{{ alumno.curso?'Si':'No' }}</td>
                      <td>
                          <img :src="alumno.foto" width="50" :alt="alumno.nombre">
                      </td>
                  </tr>
              </table>

              <div class="alert alert-info">
                  <div v-if="calcularAlumnosCurso.ninguno">
                      Ningún alumno hizo el curso.
                  </div>
                  <div v-else-if="calcularAlumnosCurso.todos">
                      Todos los alumnos hicieron el curso.
                  </div>
                  <div v-else>
                      {{calcularAlumnosCurso.cantidad}} de {{calcularAlumnosCurso.total}} alumnos 
                      {{calcularAlumnosCurso.uno?'hizo':'hicieron'}} el curso.
                  </div>
              </div>

          </div>
          <hr>

          <div class="media alert alert-warning" v-for="(alumno,index) in alumnos" :key="index">
              <img :src="alumno.foto" width="150" :alt="alumno.nombre">
              <div class="media-body ml-3">
                  <h5><u>Alumno {{ index + 1}}</u></h5>
                  <br>
                  <p>Nombre: {{alumno.nombre}} {{alumno.apellido}}</p>
                  <p>Edad: <i>{{alumno.edad}}</i></p>
                  Hizo el curso <input type="checkbox" v-model="alumno.curso">
                  <button class="btn btn-danger ml-3" @click="borrar(index)">Borrar</button>
              </div>
          </div>
      </div>
      <h2 v-else class="alert alert-warning">
          no se encontraron alumnos
      </h2>

      <!-- ------------------------------------------------------- -->
      <br>
      <hr>
      <h4><u>v-if / v-else-if / v-else</u></h4>
      <br>
      <input type="text" v-model="nombre"> {{ nombre }}<br>
      <div class="btn btn-primary mt-3">
          <div v-if="nombre.toLowerCase() == 'juan'">
              Bienvenido Juan
          </div>
          <div v-else-if="nombre.toLowerCase() == 'ana'">
              Bienvenida Ana
          </div>
          <div v-else-if="nombre.toLowerCase() == 'pedro'">
              Bienvenido Pedro
          </div>
          <div v-else-if="nombre.length >=3 ">
              Bienvenido/a {{ nombre }}
          </div>
          <div v-else>
              Ingrese un nombre
          </div>
      </div>
      <br>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-estructura',
    props: [],
    mounted () {

    },
    data () {
      return {
        mostrar: true,
        mostrar2: true,
        usuarios : [
            'Pedro',
            'Juan',
            'Ana',
            'Laura'
        ],
        alumnos: [
            { nombre: 'Juan',   apellido: 'Mei',    edad: 32,   curso: true,    foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-128.png' },
            { nombre: 'Pedro',  apellido: 'Picos',  edad: 24,   curso: false,   foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-128.png' },
            { nombre: 'Lucía',  apellido: 'Gomez',  edad: 31,   curso: false,   foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png' },
            { nombre: 'Ana',    apellido: 'Lopez',  edad: 27,   curso: true,    foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png' },
        ],
        nombre: '',
      }
    },
    methods: {
        borrar(index) {
            console.log(index)
            this.alumnos.splice(index,1)
        },
        agregarAlumno() {
            let alumno =  { 
                nombre: 'Cecilia',
                apellido: 'Perez',
                edad: 29,
                curso: false,
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-128.png' 
            }
            this.alumnos.push(alumno)
        },
    },
    computed: {
       calcularAlumnosCurso() {
            let cant = this.alumnos.filter(alumno => alumno.curso).length
            return {
                cantidad : cant,
                total : this.alumnos.length,
                ninguno: cant == 0,
                todos: cant == this.alumnos.length,
                uno: cant == 1
            }
        }
    }
}


</script>

<style scoped lang="css">
  /* .src-components-estructura {

  } */

  .jumbotron{
    background-color: pink;
    color: brown;
  }

  hr{
    background-color: #444;
  }
</style>
