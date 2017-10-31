// Ingresar unicamente numeros y comprobar que no este vacio
var numbers =[];
while (numbers.length===0)
{
  var numbers = prompt ("Ingresa tu núero de tarjeta de crédito");
}
console.log(numbers);


// Vamos a pasar los datos de la tarjeta a un array de números, separadondo cada elemento por comas, para ello utilizamos los siguientes métodos:
//Array.from() crea un Array de un objeto iterable.
// .toString une el array y devuelve una cadena de caracteres que contiene cada elemento del array separado por comas.
// .map() itera sobre cada uno de los elementos convirtiendolos a número (gracias a la funcion Number), en lugar de string
var arr= Array.from(numbers.toString()).map(Number);
console.log (arr);

// Voltear los elementos del array utilizando el método reverse
  arr.reverse();
  console.log(arr);

//Crear la función isValidCard para identificar el valor de los index pares, multiplicarlos por 2 y colocarlos en el nuevo array pairMulty.
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

 /* Identificar los valores del array que contengan más de dos dígitos y sumarlos entre ellos. Posteriormente sumar estos nuevos valores con los demás valores del array y verificar que tenga modulo 0 al dividirlo entre 10*/
}
//Llamar a la función
isValidCard(arr);
