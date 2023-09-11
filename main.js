let inputText = document.getElementById("ingresado");
let btnEncriptar = document.getElementById("encriptar");
let btnDesencriptar = document.getElementById("desencriptar");
let outputInicial = document.getElementById("empty_output");
let outpuMsg = document.getElementById("output_with_msg");
let copiar = document.getElementById("copiarMsg");
let output = document.getElementById("output");

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

function encriptarTexto (texto, llaves){
  let newpalabra = texto.value;
  Object.keys(llaves).forEach((element) => {
    let expReg = new RegExp(element, 'g');
    newpalabra = newpalabra.replace(expReg, llaves[element]);
  })
  return newpalabra;
}

function verifyString(texto){
  let invalid = 0;
  let newData = [...texto.value];
  for(i = 0; i < newData.length; i++){
    let code = newData[i].charCodeAt(0);
    if ( !(code >= 92 && code <= 122 || code === 241) ) {
      invalid++;
      break;
    }
  }
  return invalid;
}

btnDesencriptar.addEventListener('click', () => {
  if ( verifyString(inputText) !== 0 ){
    alert("Solo se permiten Minusculas");
    inputText.value = "";
  } else {
    if(outpuMsg.classList.contains('output_none')){
      outpuMsg.classList.toggle('output_none');
      outputInicial.classList.toggle('output_none');
    }
    output.innerHTML = encriptarTexto(inputText, llaves);
    inputText.value = "";
  }
})

btnEncriptar.addEventListener('click', () => {
  if ( verifyString(inputText) !== 0 ){
    alert("Solo se permiten Minusculas");
    inputText.value = "";
  } else {
    if(outpuMsg.classList.contains('output_none')){
      outpuMsg.classList.toggle('output_none');
      outputInicial.classList.toggle('output_none');
    }
    output.innerHTML = encriptarTexto(inputText, llaves);
    inputText.value = "";
  }
})