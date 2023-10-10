/* Encriptador, basado en el challenge #1 del programa Oracle one */

const dickyDick = {a:'ai', e:'enter', i:'imes', o:'ober', u:'ufat'}

function main() {
    const encriptarButton = document.getElementById('encriptador__input-encriptar');
    encriptarButton.addEventListener('click',encriptar); 
    const desEncriptarButton = document.getElementById('encriptador__input-desencriptar');
    desEncriptarButton.addEventListener('click',desEncriptar); 
    const copiarButton = document.getElementById('encriptador__output-copiar');
    copiarButton.addEventListener('click',copiarTexto);
}

function encriptar(){
    const texto = document.getElementById('encriptador__input-text');
    const textoBase = texto.value.toLowerCase();
    if(textoBase === ""){
        return (0)
    }
    if(validacion(textoBase)){ 
        let textoEncriptado ='';//en js las strings son como tuplas no se puede modificar una posicion existente pero pueden añadirse posiciones nuevas
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

function desEncriptar(){ //hay codigo que se repite se optimiza luego
    console.log('desEncriptar');
    const encriptado = document.getElementById('encriptador__output-texto');
    let textoEncriptado = encriptado.innerText;
    console.log(textoEncriptado);
    console.log(dickyDick);
    //* acceder a la clave de un objeto conociendo su valor 
    if(textoEncriptado === "Texto encriptado"){
        console.log('return 0')
        return (0)
    }
    let textoDesencriptado =''; 
        for(let i=0; i<textoEncriptado.length; i++){//*funciona pero ta feo
            let key = textoEncriptado[i];
            console.log(key);   
            if(key == 'a'){
                i+=1; //*'a:ai', e:'enter', i:'imes', o:'ober', u:'ufat
            }else if(key == 'e'){
                i+=4;
            }else if(key == 'i' || key == 'o' || key == 'u'){
                i+=3;
            }
            textoDesencriptado += key; 
        }
        mostrar(textoDesencriptado);
    
}

function copiarTexto(){
    const encriptado = document.getElementById('encriptador__output-texto');
    navigator.clipboard.writeText(encriptado.innerText)
        .then(() => {
    console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })

}

function validacion(texto){
    const invalidos = /[0-9ÁÉÍÓÚÜ¡¿@#$%^&*()_+={}[\]:;"'<>,.?\\/]/; // el - representa un espacio vacio cuando no se usa en un rango e.g [a-g]
    return !invalidos.test(texto);
}

function mostrar(textoEncriptado){
    const encriptado = document.getElementById('encriptador__output-texto');
    encriptado.innerText = textoEncriptado;

    //* la fuente es diferente en el texto de entrada y el de salida 
}

window.addEventListener('load', main)
