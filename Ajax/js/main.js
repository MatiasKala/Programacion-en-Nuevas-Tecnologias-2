console.log(document.querySelector('title').textContent)

const url = 'https://jsonplaceholder.typicode.com/posts/'

/* ------------------------------------------------------------------------- */
/*            ANIDADO DE PETICIONES ASINCRÓNICAS CON CALLBACKS               */
/* ------------------------------------------------------------------------- */
const getPostCb = (id,cb) => {
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
        if(cb) cb(respuesta)
      }
      else {
        console.error(`Error en GET -> status: ${xhr.status}`)
      }
    })
    //envío la petición al servidor
    xhr.send()
}


function getPostsCb() {

    /* CALLBACK HELL -> infierno de callbacks ó pirámide de la perdición */
    getPostCb(1, respuesta => {
        console.log(respuesta)
        getPostCb(2, respuesta => {
            console.log(respuesta)
            getPostCb(3, respuesta => {
                console.log(respuesta)
                getPostCb(4, respuesta => {
                    console.log(respuesta)
                    getPostCb(5, respuesta => {
                        console.log(respuesta)
                    })
                })
            })
        })
    })
}

/*
console.log('Pedido de recursos')
getPostsCb()
console.log('Otras tareas...')
*/

/* ------------------------------------------------------------------------- */
/*            ANIDADO DE PETICIONES ASINCRÓNICAS CON PROMESAS                */
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

function getPostsPromise() {
    getPostPromise(1)
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(2)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(3)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(4)
    })
    .then(respuesta => {
        console.log(respuesta)
        return getPostPromise(5)
    })
    .then(respuesta => {
        console.log(respuesta)
    })
    .catch(error => console.log(error))
}

/*
console.log('Pedido de recursos')
getPostsPromise()
console.log('Otras tareas...')
*/

/* ------------------------------------------------------------------------- */
/*                 PETICIONES ASINCRÓNICAS AJAX CON FETCH                    */
/* ------------------------------------------------------------------------- */
const getPostFetch = id => {
    fetch(url+id)
    .then(datos => datos.json())
    .then(respuesta => console.log(respuesta))
}

getPostFetch(5)
