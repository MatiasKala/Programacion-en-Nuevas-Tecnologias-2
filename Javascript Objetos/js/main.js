console.log(document.querySelector('title').textContent)

/* ---------------------------------------------------------------- */
/*            Objetos en Javascript: formas de crearlos             */
/* ---------------------------------------------------------------- */
//1) Forma literal (JS5)
//2) Forma a través de la función create de Object (JS5)
//3) Forma a través de las funciones constructoras
//     a) Factories (fábricas de objetos)  
//     b) Operador new
//4) Forma a través de la función class de ES6
/* ---------------------------------------------------------------- */
console.log('\n/* 1) Forma literal */')

let objLiteral = {nombre: 'Juan'}
objLiteral.nombre = 'Perez'

console.log(objLiteral)

console.log(objLiteral.hasOwnProperty('nombre'))
console.log(objLiteral.hasOwnProperty('apellido'))
console.log(objLiteral.hasOwnProperty('edad'))

/* ---------------------------------------------------------------- */
console.log('\n/* 2) Forma función create de Object */')

console.log(Object)
console.dir(Object)

let prototipo1 = {
    saludo: function() {
        console.log('Hola soy el prototipo 1')
    }
}

/* let prototipo2 = {
    saludo: function() {
        console.log('Hola soy el prototipo 2')
    }
} */

//let prototipo2 = Object.create(null)
let prototipo2 = Object.create(Object.prototype, {
    saludo : {
        value : function() {
            console.log('Hola soy el prototipo 2')
        } 
    }
})
/*
prototipo2.saludo = function() {
    console.log('Hola soy el prototipo 2')
}
*/

/* ----------- Obj 1------------  */
//let objCreate = Object.create(null)
//let objCreate = Object.create(Object.prototype)
let objCreate = Object.create(prototipo1)
objCreate.nombre = 'Ana'
console.log(objCreate)

console.log(objCreate.hasOwnProperty('nombre'))
console.log(objCreate.hasOwnProperty('edad'))
objCreate.saludo()

/* ----------- Obj 2------------  */
let objCreate2 = Object.create(prototipo1)
objCreate2.nombre = 'Pedro'
console.log(objCreate2)
objCreate2.saludo()

/* ----------- Obj 3------------  */
let objCreate3 = Object.create(prototipo2)
objCreate3.nombre = 'José'
console.log(objCreate3)
objCreate3.saludo()

console.log(prototipo1.isPrototypeOf(objCreate))
console.log(prototipo1.isPrototypeOf(objCreate2))
console.log(prototipo1.isPrototypeOf(objCreate3))

console.log(prototipo2.isPrototypeOf(objCreate))
console.log(prototipo2.isPrototypeOf(objCreate2))
console.log(prototipo2.isPrototypeOf(objCreate3))

console.log(`
/* ------------------------------------- */
/*           Objeto dinámico             */
/* ------------------------------------- */
`)
let objDinamico = Object.create(prototipo2)
objDinamico.nombre = 'Pedro'
objDinamico.apellido = 'Mei'
console.log(objDinamico)

//objDinamico.apellido = 'Gomez'          //write property
//delete objDinamico.apellido               //delete property
for(let key in objDinamico) {             //Iterate properties
    console.log(key)
}

console.log(objDinamico)


//----------------------------------------
console.log(`
/* ------------------------------------- */
/*           Objeto estático             */
/* ------------------------------------- */
`)
let objEstatico = Object.create(prototipo2, {
    nombre: {
        value: 'Pedro'
    },
    apellido: {
        value: 'Mei',
        writable: true,
        configurable: true,
        enumerable: true
    }
})
console.log(objEstatico)

objEstatico.nombre = 'Gomez'          //write property (con writable en true)
//delete objEstatico.apellido               //delete property (con configurable en true)
for(let key in objEstatico) {             //Iterate properties
    console.log(key)
}

console.log(objEstatico)


/* ---------------------------------------------------------------- */
console.log('\n/* 3) Funciones constructoras */')

/*
//NO FUNCIONA -> los objetos creados no son independientes, son referencias al mismo objeto
var persona = {
    nombre : null,
    edad: null
}

var juan = persona
var ana = persona

//SOLUCIÓN -> usar funciones 
*/

//--------------------------------------------------------
console.log('/* a) Factories */')

function persona(nombre,edad) {
    var p = {
        nombre : nombre,
        edad: edad
    }
    return p
}

var juan = persona('Juan',23)
var ana = persona('Ana',21)

console.log(juan)
console.log(ana)


//--------------------------------------------------------
console.log('\n/* b) Operador new */')

function Persona(nombre,edad) {
    //console.log(this)
    this.nombre = nombre
    this.edad = edad
}

var mario = new Persona('Mario',26)
var cecilia = new Persona('Cecilia',25)
console.log(mario)
console.log(cecilia)


/* ------------------------------------------------------------------------------------ */
/*                          'new' ejecuta las siguientes tareas                         */
/* ------------------------------------------------------------------------------------ */
//1) Crea un objeto vacío -> p = {}
//2) Ejecuta la función constructo que tiene a su derecha, redefiniendo su contexto (this)
//    al del objeto p (creado en l punto 1) -> Persona.call(p, ..., ...)
//3) Retorna el objeto p a su izquierda -> var mario <- p <- Persona.call(p, ... , ...)
/* ------------------------------------------------------------------------------------ */

/* ---------------------------------------------------------------- */
console.log('\n/* 4) Clases en ES6 */')

class Alumno {

    constructor(nombre,edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

var lucia = new Alumno('Lucia',24)

console.log(Alumno)
console.dir(Alumno)

console.log(lucia)











