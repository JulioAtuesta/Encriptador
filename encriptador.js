function main() {
    const submit = document.getElementById('encriptador__input-encriptar');
    submit.addEventListener('click',encriptar); 
}

function encriptar(){
    let textoEncriptado =''
  console.log('funcion encriptadora');
    const texto = document.getElementById('encriptador__input-text');
  console.log(texto.value);
  let a =validacion(texto.value);
  console.log(a);
    if(a){
        console.log('encriptando');
        let textoEncriptado = ""
        mostrar(textoEncriptado)
    }      
}
function validacion(texto){
    console.log(typeof(texto) + texto);
    const invalidos = /[A-Z0-9ÁÉÍÓÚÜÑ¡¿@#$%^&*()_+={}[\]:;"'<>,.?\\/]/; // el - representa un espacio vacio cuando no se usa en un rango e.g [a-g]
    return !invalidos.test(texto);

// function validacion(texto){
//     const invalidos = /^[A-Z]*$/;
//     // const invalidos = /^[A-Z0-9ÁÉÍÓÚÜÑ¡¿@#$%^&*()_+={}[\]:;"'<>,.?\\/ -]*$/;
//     if (invalidos.test(texto)){
//         return(false)
//     }return(true)
    
    // return(!(texto.match(invalidos)!= null))    
    
    
    // if(texto == "" || texto.match(invalidos)){
    //         console.log('caracteres no validos');
    //         return(false);
    //     }else{ return(true);

    //     }
}

function mostrar(textoEncriptado){
    const encriptado = document.getElementById('encriptador__output-texto');
    console.log(textoEncriptado);
    encriptado.innerText = textoEncriptado;
}

window.addEventListener('load', main)