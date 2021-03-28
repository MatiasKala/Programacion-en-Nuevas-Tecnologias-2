console.log(document.querySelector('title').textContent)

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
        ]
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
        }
    }
})