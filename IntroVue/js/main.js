 var app=new Vue({
    el:'#app',
    data: {
        mensaje: 'Soy un mensaje',
        valor:123,
        valor2:999,
        valor3:1000,
        contador:123,
        contador2:456,
        contador3:789,
        mostrar:true

    },
    methods:{
        incrementar(){
            this.contador3++
        },
        getContador(){
            return this.contador3
        },
        actualizar(e){
            let dato=e.target.value
            console.log('Actualizar',dato)
            this.valor2=dato;
        }
    }
})