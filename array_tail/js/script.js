/*
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
*/

let text = document.getElementById('text');
let button = document.querySelector('.btn');
let myArray = [];
let myArrayNumbers = ''
console.log(myArrayNumbers);
button.addEventListener('click', function(){
   
   let arrayLenght = parseInt(text.value);
   console.log(arrayLenght);
   for(let i = 0; i < arrayLenght; i++){
    myArrayNumbers = `${getRndInteger(1, 100)} `
    myArray.push(myArrayNumbers)
    }
    console.log(myArray);
    let lastFiveNumbers = ""
    for(let i = myArray.length - 5; i < myArray.length; i++){
        lastFiveNumbers += myArray[i];
    }
    console.log("ultimi 5 numeri "+lastFiveNumbers);

    let numbertoprint = parseInt(prompt(`Quanti numeri dell'\Array vuoi vedere?`))
    let userRequest = ''
    if (myArray.length > numbertoprint) {
        for(let i = 0; i < numbertoprint; i++){
            userRequest += myArray[i];
        }
        console.log("numeri richiesti "+userRequest);
    }
});


