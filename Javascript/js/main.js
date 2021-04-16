console.log(document.querySelector('title').textContent)

/* ----------------------------------------------------- */
/*       VARIABLES Y TIPO DE DATOS EN JAVASCRIPT         */
/* ----------------------------------------------------- */
//1) Tipo primitivo : number, string, boolean -> copia X Valor
//2) Tipo objeto : array, object, function -> copia X Referencia

//1)
//tipo number
var an = 1
var bn = an
an = 10
console.log(an, typeof an)
console.log(bn, typeof bn)

//tipo boolean
var ab = true
var bb = ab
ab = false
console.log(ab, typeof ab)
console.log(bb, typeof bb)

//tipo string
var as = 'hola'
var bs = as
as = 'mundo'
console.log(as, typeof as)
console.log(bs, typeof bs)

//--------------------------------
//2)
//tipo array
var aa = [1,2,3]
var ba = aa
aa[0] = 11
console.log(aa, typeof aa, Array.isArray(aa))
console.log(ba, typeof ba, Array.isArray(ba))

//tipo object
var ao = {x:1}
var bo = ao
ao.x = 11
console.log(ao, typeof ao, Array.isArray(ao))
console.log(bo, typeof bo, Array.isArray(bo))


/* ----------------------------------------------------- */
/*       FUNCIONES Y TIPO DE DATOS EN JAVASCRIPT         */
/* ----------------------------------------------------- */
//1) Tipo primitivo : number, string, boolean -> copia X Valor
//2) Tipo objeto : array, object, function -> copia X Referencia

//1)
var fecha = '15/4/2021'
function agregarHoraAFecha(f) {
    f = f + ' 19:53'
    return f
}

console.log(fecha)
let fechaYHora = agregarHoraAFecha(fecha)
console.log(fechaYHora)
console.log(fecha)

// ---------------------------------------
//2) 
var fechaObj = {fecha: '15/4/2021'}
function agregarHoraAFechaObj(fobj) {
    fobj.fecha = fobj.fecha + ' 19:53'
    return fobj
}

console.log(fechaObj)
let fechaYHoraObj = agregarHoraAFechaObj(fechaObj)
console.log(fechaYHoraObj)
console.log(fechaObj)

/* -------------------------------------------------------------- */
console.log('\/* Funciones constructoras */')
/* -------------------------------------------------------------- */

//-----------------------------------------------
console.log('\n 1) Las funciones son objetos')

var a = {}
console.log(a)

function foo() {
    console.log('Hola soy foo')
}
foo()
console.log(foo)
console.dir(foo)

foo.x = true
console.log(foo.x)

//-----------------------------------------------
console.log('\n 2) Las funciones en JS son variádicas')

function suma(a=0,b=0) {
    console.log(a,b)
    return a + b
}

console.log(suma(5,6))

//-----------------------------------------------
console.log('\n 3) Las funciones en JS tienen ambito o scope')

var global = 'global'

function foo2(argumento) {
    var local2 = 'local2'
    console.log(global, local2, argumento)//, local3)
}

function foo3() {
    var local3 = 'local3'
    console.log(global, local3)//, argumento)//, local2)
}

foo2('argumento')
foo3()
console.log(global)
//console.log(local2)
//console.log(local3)
//console.log(argumento)

//-----------------------------------------------
console.log('\n 4) Las funciones en JS tienen closure (clausuras)')

function externa(x) {
    //console.log(x)
    //return x
    let z = 5
    return function interna(y) {
        console.log(y+x+z)
    }
}

var resultado = externa(50)
console.log(resultado)
//console.log(x)    

resultado(10)
console.dir(resultado)


//-----------------------------------------------
console.log('\n 5) Las funciones en JS tienen contexto (this)')

function foo4() {
    console.log(this)
}

foo4()

var nombre = 'Pablo'
var apellido = 'Gomez'

var persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    saludo: function() {
        console.log(this)
        console.log(`hola soy ${this.nombre} ${this.apellido}`)
    }
}

//Saludo se está ejecutando en el contexto de persona
persona.saludo()

const saludoExt = persona.saludo

//Saludo de está ejecutando en contexto global (window)
saludoExt()

// Puedo redefinir el contexto de ejecución para tomar las propiedades de persona
saludoExt.call(persona)


//-----------------------------------------------
console.log('\n 6) Funciones: formas de ejecución')

function ctx(a,b) {
    console.log(this,a,b)
}

console.dir(ctx)

ctx(5,6)               // forma normal de ejecución
ctx.apply({x:1},[5,6])     // forma de ejecución a través del método apply
ctx.call({x:1},5,6)      // forma de ejecución a través del método call
ctx.bind({x:1})(5,6)    // forma de ejecución a través del método bind

//Otro ejemplo con bind
var x = 9
var modulo = {
    x: 81,
    getX : function() {
        return this.x
    }
}

// da 81
console.log(modulo.getX())

// da 9
var getX = modulo.getX
console.log(getX())

// da 81 (al bindear la función global con el this correcto)
var getXBind = getX.bind(modulo)
console.log(getXBind())

console.log(getX.call(modulo))
console.log(getX.apply(modulo))
