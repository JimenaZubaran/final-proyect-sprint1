// ingresar unicamente numeros
var arr = parseInt(prompt ("Ingresa tu núero de tarjeta de crédito"));
console.log(arr);

/*Vamos a pasar los datos que nos dan de la tarjeta a un array de numeros, separadondo cada elemento por comas, para ello utilizamos los sigueintes metodos:
- Array.from() crea un Array de un objeto iterable.
- toString une el array y devuelve una cadena de caracteres que contiene cada elemento del array separado por comas.
- map itera sobre cada uno de los elementos convirtiendolos a numero (gracias a la funcion Number), en lugar de string*/
var numbers= Array.from(arr.toString()).map(Number);
console.log (numbers);

// voltear los elementos del array utilizando el metodo reverse
  numbers.reverse();
  console.log(numbers);

//crear la funcion isValidCard para identificar el valor de los index pares, multiplicarlos por 2 y colocarlos en el nuevo array pairMulty. Posteriormente sumar los valores de cada uno de los elementos contenidos en el array y verificar que tenga modulo 0 al dividirlo entre 10
function isValidCard(numero)
{
  var pairMulty = [];
  for (var i=0;i<numero.length;i++ )
  {
    if ((i)%2 !==0)
    {
    pairMulty[i]=numero[i]*2;
    }else
    {
      pairMulty[i]=numero[i];
    }
  }
console.log (pairMulty);
}
//Llamar a la funcion
isValidCard(numbers);
