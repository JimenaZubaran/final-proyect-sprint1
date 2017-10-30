var phrase = 0;
var cesar=[];
var letters= [];
// Comprobar que la variable phrase no esté vacia
while (phrase===0)
{
  var phrase = prompt("Escribe una Frase");
}

var n = 33;

var cipher = function (variable)
{
 //recorrer cada uno de los elementos que forman phrase
  for (var i = 0; i< variable.length; i ++)
    {
        // en la variable cesar guardar los index de phrase en código ASCII con el métodoo charCodeAt
        cesar[i] = (variable.charCodeAt(i));
    }
    console.log (cesar);

  for (var j = 0; j< cesar.length; j++)
    {
      // en la variable letters guardar los index de cesar
      letters[j] = (String.fromCharCode(j));
    }
  console.log(letters);
};
cipher (phrase);

/*identificar el lugar que ocupa cada uno de las letras de la frase en el cifrado cesar (usando 33 espacios) para encriptarlo.*/
