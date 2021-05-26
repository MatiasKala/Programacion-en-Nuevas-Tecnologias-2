console.log(document.querySelector('title').textContent)

const url = 'https://jsonplaceholder.typicode.com/posts/'

/* ------------------------------------------------------------------------- */
/*                  PETICIONES ASINCRÓNICAS CON PROMESAS                     */
/* ------------------------------------------------------------------------- */
const getPostPromise = id => {
    return new Promise((resolve,reject) => {
        //creo la instancia de comunicación asincrónica AJAX con XMLHttpRequest
        let xhr = new XMLHttpRequest
        //configuro dicha instancia
        xhr.open('get',url+id)
        //registro el evento de fin de la comunicación
        xhr.addEventListener('load', () => {
            //la comunicación finalizó en forma exitosa
            if(xhr.status == 200) {
                let respuesta = JSON.parse(xhr.response)
                //console.log(respuesta)
                resolve(respuesta)
            }
            else {
                console.error(`Error en GET -> status: ${xhr.status}`)
                let error = {
                    descripcion: 'Error en GET status',
                    body: xhr.status
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => {
            let error = {
                descripcion: 'Error Ajax',
                body: e
            }
            reject(error)
        })
        //envío la petición al servidor
        xhr.send()
    })
}

/* ------------------------------------------------------------------ */
/*  Uso de XMLHttpRequest con promesas utilizando sintaxis then catch */
/* ------------------------------------------------------------------ */
function getPostsPromiseThenCatch() {
    getPostPromise(2)
    .then(respuesta => {
        console.log(respuesta)
    })
    .catch(error => console.log(error))
}

/* ------------------------------------------------------------------- */
/*  Uso de XMLHttpRequest con promesas utilizando sintaxis async await */
/* ------------------------------------------------------------------- */
//async function getPostsPromiseAsyncAwait() {
//const getPostsPromiseAsyncAwait = async function() {
const getPostsPromiseAsyncAwait = async () => {
    try {
        let respuesta = await getPostPromise(3)
        console.log(respuesta)
    }
    catch(error) {
        console.log(error)
    }
}

//console.log('Pedido de recursos')
//getPostsPromiseThenCatch()
//getPostsPromiseAsyncAwait()
//console.log('Otras tareas...')

/* ------------------------------------------------------------------------- */
/*                 PETICIONES ASINCRÓNICAS AJAX CON FETCH                    */
/* ------------------------------------------------------------------------- */
const getPostFetchThenCatch = id => {
    fetch(url+id)
    .then(datos => datos.json())
    .then(respuesta => console.log(respuesta))
    .catch(error => console.error(error))
}

const getPostFetchAsyncAwait = async id => {
    console.log('getPostFetchAsyncAwait -> inicio')
    try {
        let datos = await fetch(url+id)
        let respuesta = await datos.json()
        console.log(respuesta)
    }
    catch(error) {
        console.error(error)
    }
    console.log('getPostFetchAsyncAwait -> fin')
}

//getPostFetchThenCatch(4)
console.log('Inicio de peticiones')
getPostFetchAsyncAwait(5)
console.log('Otras tareas...')