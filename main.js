let inputText = document.getElementById("ingresado");
let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let outputInicial = document.getElementById("empty_output");
let outpuMsg = document.getElementById("output_with_msg");
let copiar = document.getElementById("copiarMsg");
let output = document.getElementById("output");
let msg = "";

const llaves = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
}

//revierte la posicion de la constante llaves (llaves - valor) => (valor - llaves)
const llavesReversed =  Object.keys(llaves).reduce((result, key) => {
  const value = llaves[key];
  result[value] = key;
  return result;
}, {});


//FUNCION DE ENCRIPTAR Y DESENCRIPTAR
function encrip_Desencrip (texto, llaves){
  let newText = texto.value;
  Object.keys(llaves).forEach((element) => {
    let expReg = new RegExp(element, 'g');
    newText = newText.replace(expReg, llaves[element]);
  })
  return newText;
}

function verifyString(texto){
  let invalid = 0;
  let newData = [...texto.value];
  if (newData.length !== 0) {
    for(i = 0; i < newData.length; i++){
      let code = newData[i].charCodeAt(0);
      if ( !(code >= 92 && code <= 122 || code === 241 || code === 32) ) {
        invalid++;
        msg = "Solo se permiten Minusculas sin tilde";
        break;
      }
    }
  } else {
    invalid = 2;
    msg = "No se aceptan cadenas vacías"
  }
  return invalid;
}

function actionSystem(finalText){
  if ( verifyString(inputText) !== 0 ){
    alert(msg);
    inputText.value = "";
  } else {
    if(outpuMsg.classList.contains('output_none')){
      outpuMsg.classList.toggle('output_none');
      outputInicial.classList.toggle('output_none');
    }
    output.innerHTML = finalText;
    inputText.value = "";
  }
}

btnDesencriptar.addEventListener('click', () => {
  actionSystem(encrip_Desencrip(inputText, llavesReversed));
})

btnEncriptar.addEventListener('click', () => {
  actionSystem(encrip_Desencrip(inputText, llaves));
})

copiar.addEventListener('click', () => {
  navigator.clipboard.writeText(output.innerHTML);
  alert("Texto copiado");
})