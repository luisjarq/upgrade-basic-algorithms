// Iteración #1
    // 1.1
let myFavoriteHero = 'Hulk';
    // 1.2
let x = 50;
let h = 5;
    //1.2
let y = 10;
    // 1.4
let z = h + y;
// Iteración #2
    // 1.1
const character = { name: 'Jack Sparrow', age: 10 };
character.age = 25;
    // 1.2
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
);
    // 1.3
const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };
console.log(toy1.price + toy2.price);
    // 1.4
let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
// Iteración #3
    // 1.1
alert(10*5);
    //1.2
alert(10/5);
    //1.3
alert(15%9);
    //1.4
let y = 10;
let z = 5;
let result = y+z;
    //1.5
    //teniendo dos variables y = 10 y z = 5.
let result2 = y*z;
// Iteración #4
    // 1.1
    const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
    console.log(avengers[0]);
        // 1.2
    avengers.splice(0,1,'IRONMAN');
        // 1.3
    avengers.splice(0,1,'HULK');
    alert(`El numero de elementos en el array avengers es: ${avengers.length}`);
        // 1.4
    const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];
    rickAndMortyCharacters.push('Morty');
    rickAndMortyCharacters.push('Summer');
    console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);
        //1.5
        //const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez'];
    rickAndMortyCharacters.push('Lapiz Lopez');
    rickAndMortyCharacters.pop();
    console.log(`El primer elemento del array es: ${rickAndMortyCharacters[0]}, y el ultimo es:${rickAndMortyCharacters[rickAndMortyCharacters.length-1]}`)
        //1.6 Elimina el segundo elemento del array y muestra el array por consola.
        //const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez']
    rickAndMortyCharacters.push('Lapiz Lopez');
    rickAndMortyCharacters.splice(1,1);
    console.log(rickAndMortyCharacters);
// Iteracion #5
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 == 2) {
  console.log('number2 dividido entre number1 es igual a 2');
}

if (! (number1 === number2)) {
  console.log('number1 es estrictamente distinto a number2');
}

if (! (number3 == number1)) {
  console.log('number3 es distinto number1');
}

if (number3 * 5 == number1) {
  console.log('number3 por 5 es igual a number1');
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log('number3 por 5 es igual a number1 Y number1 por 2 es igual a number2');
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log('number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3');
}
//Iteración #6:
    //1.1
for (var index = 0; index < 9; index++) {
    console.log(index)
}
    //1.2
for (var index = 0; index < 9; index++) {
    if(index % 2 == 0){
        console.log(index)
    }
}
    //1.3
for (var index = 0; index < 10; index++) {
    if(index < 9){
        console.log('Intentando dormir')
    }
        if(index == 9){
        console.log('Dormido!')
    }
}
