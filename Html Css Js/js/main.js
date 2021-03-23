console.log('Ejemplo')

var reftitulo= document.querySelector('#titulo')
reftitulo.innerHTML='<i>Lo cambié</i>'
console.log(reftitulo.innerHTML)
console.log(reftitulo.innerText)

var refparrafo=document.querySelector('#parrafo')
refparrafo.style.color='magenta';
refparrafo.style.backgroundColor='black';
refparrafo.style.padding='5px'
console.log(refparrafo.innerText)

var reflista = document.getElementById('lista')
reflista.innerHTML= '<ul>'+
                        '<li>Item 1</li>'+
                        '<li>Item 2</li>'+
                        '<li>Item 3</li>'+
                    '</ul>'
