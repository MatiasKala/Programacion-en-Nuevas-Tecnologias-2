console.log(document.querySelector('#button2').textContent)


/* CON JAVASCRIPT */

/*
document.querySelector('#parrafo').style.color="green"

document.querySelector('button').onclick=onBoton

var oculto=false
function onBoton(){
    oculto = !oculto
    console.log(oculto)
    document.querySelector('#parrafo').style.display = oculto? 'none' : 'block'
    document.querySelector('button').innerText = oculto? 'Mostrar' : 'Ocultar'

}
*/

/* CON jQuery */

$('#parrafo').css('color','green')

document.querySelector('#button2').addEventListener('click', sumarNumeros)

var oculto=false
function onBoton(){
    oculto = !oculto
    console.log(oculto)
   
    // $('#parrafo').css('display'), oculto? 'none' : 'block'
    var sel=$('#parrafo')
    oculto? sel.fadeOut(200) : sel.fadeIn(200)

    $('#button1').text(oculto? 'Mostrar' : 'Ocultar')

}

$('.titulo').mouseover(onMouseOver)
$('.titulo').mouseout(onMouseOut)

function onMouseOver(){
    console.log('El mouse esta por encima del elemento')
    $('.titulo').css('color','#fff')
    $('.titulo').css('background-color', '#000')
}

function onMouseOut(){
    console.log('El mouse esta por fuera del elemento')
    $('.titulo').css('color','')
    $('.titulo').css('background-color', '#e4d')

}

function sumarNumeros(){
    console.log("FUNCO")
    const num1=parseInt(document.querySelector('#suma1').textContent);
    const num2=parseInt(document.querySelector('#suma2').textContent);
    var resultado=document.getElementById('resul');
    resultado.innerHTML='<b>El resultado es '+(num1+num2)+'</b>'
}

