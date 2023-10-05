function main() {
    const submit = document.getElementById('encriptador__input-encriptar');
    submit.addEventListener('click',encriptar); 
}
/*
!no uses codigo que no entiendas
*/
function encriptar(){
    const dickyDick = {a:'ai', e:'enter', i:'imes', o:'ober', u:'ufat'}
    let textoEncriptado =''
  console.log('funcion encriptadora');
    const texto = document.getElementById('encriptador__input-text');
    const textoBase = texto.value;
    if(textoBase === ""){
        return (0)
    }
  console.log(textoBase); 
  let a =validacion(textoBase);
  console.log(a);
    if(a){  // si, se peude cambiar, todavia no
        console.log('encriptando');
        for (const key of Object.keys(dickyDick)){//recorrer el texto base y bucar las keys para cambiarlas por el value
            textoEncriptado = textoBase.replace(key,dickyDick[key]);
            console.log(textoEncriptado);
        }
        mostrar(textoEncriptado)
    }      
}

function validacion(texto){
    console.log(typeof(texto) + texto);
    const invalidos = /[A-Z0-9ÁÉÍÓÚÜÑ¡¿@#$%^&*()_+={}[\]:;"'<>,.?\\/]/; // el - representa un espacio vacio cuando no se usa en un rango e.g [a-g]
    return !invalidos.test(texto);
}

function mostrar(textoEncriptado){
    const encriptado = document.getElementById('encriptador__output-texto');
    console.log(textoEncriptado);
    encriptado.innerText = textoEncriptado;
}

window.addEventListener('load', main)
