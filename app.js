let textoUsuario = document.getElementById('textoIngresado');
let textoEncriptado = document.getElementById('textoEncriptado');

function botonEncriptar(){
    let mensajeEncriptado = encriptacion(textoUsuario.value);
    textoEncriptado.value = mensajeEncriptado;
    textoUsuario.value = "";

}

function encriptacion(texto) {
    let caracteresInvalidos = /[A-Z!@#$%^&*(),.?":{}|<>]/;

    if (caracteresInvalidos.test(texto)) {
        alert('El texto es inválido. No se aceptan mayúsculas ni caracteres especiales.');
    } else {
        texto = texto.replace(/e/igm, 'enter');
        texto = texto.replace(/i/igm, 'imes');
        texto = texto.replace(/a/igm, 'ai');
        texto = texto.replace(/o/igm, 'ober');
        texto = texto.replace(/u/igm, 'ufat');
    }
    return texto;
}

function botonDesencriptar(){
    let mensajeEncriptado = desencriptacion(textoUsuario.value)
    textoEncriptado.value = mensajeEncriptado;
}

function desencriptacion(texto) {
    let caracteresInvalidos = /[A-Z!@#$%^&*(),.?":{}|<>]/;

    if (caracteresInvalidos.test(texto)) {
        alert('El texto es inválido. No se aceptan mayúsculas ni caracteres especiales.');
    } else {
        texto = texto.replace(/enter/igm, 'e');
        texto = texto.replace(/imes/igm, 'i');
        texto = texto.replace(/ai/igm, 'a');
        texto = texto.replace(/ober/igm, 'o');
        texto = texto.replace(/ufat/igm, 'u');
    }
    return texto;
}

function copiarTexto(){
    navigator.clipboard.writeText(document.getElementById('textoEncriptado').value);
}
