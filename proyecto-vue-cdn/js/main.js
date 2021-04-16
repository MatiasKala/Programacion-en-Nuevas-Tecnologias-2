console.log(document.querySelector('title').textContent)


Vue.component('contador',{
    data() {
        return {
            cont : this.init || 0
        }
    },
    props: ['init','color'],
    methods: {
        contar() {
            this.cont++
        },
        getColorBoton() {
            if(this.color) return 'btn-'+this.color
            else return 'btn-primary'
        }
    },
    template: `
        <span>
            <button :class="['btn', getColorBoton(), 'my-2', 'mr-2']" @click="contar()">Contador {{cont}}</button>
        </span>    
    `
})

var app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        valor2: 456,
        valor3: 789,
        contador: 123,
        contador2: 456,
        contador3: 789,
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
        estado1: true,
        estado2: true
    },
    methods: {
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
})