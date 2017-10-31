/*Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha */
var phrase = [];
var acsii=[];
var letters= [];

// Comprobar que la variable phrase no esté vacia
while (phrase.length===0)
{
  var phrase = prompt("Escribe una Frase");
}
  var phraseCl = phrase.toUpperCase();
  console.log (phraseCl);

var n = 33;
var cipher = function (string)
{
 //Recorrer cada uno de los elementos que forman phrase
  for (var i = 0; i<string.length; i ++)
    {
        // En la variable cesar guardar los index de phrase en código ASCII con el métodoo charCodeAt
        acsii[i] = (string.charCodeAt(i));
    }
    console.log (acsii);


   //Aplicar formula de cifredo César con espaciado de 33
   var n = 33;

   for (var j=0; j < acsii.length; j++){
     var alphabeth = [(acsii[j] - 65 + n) % 26 + 65];
   console.log(alphabeth);
   }
};


// Funcion para desencriptar el cifrado cesar
  var decipher = function (variable){
  for(var j = 0; j< variable.length; j++)
    {
      // En la variable letters guardar los index de acsii con el métodoo String.fromCharCode
      letters[j] = String.fromCharCode(variable[j]);
    }
  console.log(letters);
  };

cipher (phraseCl);
decipher(acsii);
