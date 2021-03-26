 var app=new Vue({
    el:'#app',
    data: {
        mensaje: 'Soy un mensaje',
        valor:123,
        contador:123,
        contador2:456,
        contador3:789

    },
    methods:{
        incrementar(){
            this.contador3++
        },
        getContador(){
            return this.contador3
        }
    }
})