var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");

botonEncriptar.addEventListener("click",function(event) {

    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;
    var textoEncriptado = texto.replace (/e/gi, "enter").replace (/i/gi, "imes").replace (/a/gi, "ai").replace (/o/gi, "ober").replace (/u/gi, "ufat");
    document.querySelector("#msg").value = textoEncriptado;

});

botonDesencriptar.addEventListener("click",function(event) {

    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;
    var textoDesencriptado = texto.replace (/enter/gi, "e").replace (/imes/gi, "i").replace (/ai/gi, "a").replace (/ober/gi, "o").replace (/ufat/gi, "u");
    document.querySelector("#msg").value = textoDesencriptado;

});
  
  botonCopiar.addEventListener("click", function() {

    var textoCopiado = document.querySelector("#msg");
    textoCopiado.select();
    document.execCommand("copy");

  });

  jQuery(document).ready(function() {

    jQuery(".text-input").keypress(function(tecla) {      
      if(tecla.charCode < 97 || tecla.charCode > 122)
      {
         return false;
      }
   });
   
});