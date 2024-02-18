var encript_txt

const encriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const desencriptacion = {
    "enter" : "e",
    "imes" : "i",
    "ai" : "a",
    "ober" : "o",
    "ufat" : "u"
}

function hideElements(){
    document.getElementById("conver-img").style.display="none";
    document.getElementById("primer-mensaje").style.display="none";
}

function showbutton(){
    document.getElementById("hideButton").style.display="block";
}

async function copiarPortapapeles(text){
    try{
        await navigator.clipboard.writeText(text);
        console.log('Texto copiado');
        console.log(text)
    }catch (err){
        console.log('Copia fallida', err);
    }
}

async function copiaTxt(){
    console.log(encript_txt)
    await copiarPortapapeles(encript_txt);
}

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function encriptar_txt(){
    encript_txt = document.getElementById('txtUsuario').value;
    for (let letra in encriptacion) {
        if (encript_txt.includes(letra)) {
            encript_txt = encript_txt.replaceAll(letra, encriptacion[letra]);
        }
    }
    hideElements();
    asignarTextoElemento('#iterMessa', encript_txt);
    showbutton();
    return encript_txt
}

function desencriptar_txt(){
    encript_txt = document.getElementById('txtUsuario').value;
    for (let frase in desencriptacion){
        if (encript_txt.includes(frase)){
            encript_txt = encript_txt.replaceAll(frase, desencriptacion[frase]);
        }
    }
    hideElements();
    asignarTextoElemento('#iterMessa', encript_txt);
    showbutton();
    return encript_txt
}


