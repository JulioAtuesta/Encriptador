function main() {
    const submit = document.getElementById('encriptador__input-encriptar');
    submit.addEventListener('click',encriptar); 
}


function encriptar(){
    const dickyDick = {a:'ai', e:'enter', i:'imes', o:'ober', u:'ufat'}
    const texto = document.getElementById('encriptador__input-text');
    const textoBase = texto.value;
    if(textoBase === ""){
        return (0)
    }
    if(validacion(textoBase)){ 
        let textoEncriptado ='';
        for(let i=0; i<textoBase.length; i++){
            let key = textoBase[i];
            if(Object.keys(dickyDick).includes(key)){
                    textoEncriptado += dickyDick[key];
            } else{
                textoEncriptado += key;
            }
        }
        mostrar(textoEncriptado)
    }      
}

function desEncroptar(){

}

function copiarTexto(){
    
}

function validacion(texto){
    console.log(typeof(texto) +' '+ texto);
    const invalidos = /[A-Z0-9ÁÉÍÓÚÜÑ¡¿@#$%^&*()_+={}[\]:;"'<>,.?\\/]/; // el - representa un espacio vacio cuando no se usa en un rango e.g [a-g]
    return !invalidos.test(texto);
}

function mostrar(textoEncriptado){
    const encriptado = document.getElementById('encriptador__output-texto');
    encriptado.innerText = textoEncriptado;
}

window.addEventListener('load', main)
