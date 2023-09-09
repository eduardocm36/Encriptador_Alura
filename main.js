let nuevoTexto = "";

function encriptar() {
  let texto = document.querySelector("#ingresado").value;
  nuevoTexto = texto.replace(/e/g, "enter");
  nuevoTexto = nuevoTexto.replace(/i/g, "imes");
  nuevoTexto = nuevoTexto.replace(/a/g, "ai");
  nuevoTexto = nuevoTexto.replace(/o/g, "ober");
  nuevoTexto = nuevoTexto.replace(/u/g, "ufat");
  document.querySelector("#encriptado").innerHTML = nuevoTexto;
  document.querySelector("#ingresado").value = "";
  console.log(nuevoTexto);
  return nuevoTexto;
}

function desencriptar() {
  let texto = document.querySelector("#ingresado").value;

  // nuevoTexto = texto.replace(/ai/g, "a");
  // nuevoTexto = nuevoTexto.replace(/enter/g, "e");
  // nuevoTexto = nuevoTexto.replace(/imes/g, "i");
  // nuevoTexto = nuevoTexto.replace(/ober/g, "o");
  // nuevoTexto = nuevoTexto.replace(/ufat/g, "u");

  nuevoTexto = texto.replace(/enter/g, "e");
  nuevoTexto = nuevoTexto.replace(/imes/g, "i");
  nuevoTexto = nuevoTexto.replace(/ai/g, "a");
  nuevoTexto = nuevoTexto.replace(/ober/g, "o");
  nuevoTexto = nuevoTexto.replace(/ufat/g, "u");
  document.querySelector("#encriptado").innerHTML = nuevoTexto;
}

function copiar() {}
