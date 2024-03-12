/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let text = document.getElementById('text');
let button = document.querySelector('.btn');

/*button.addEventListener('click', function(){
   
});
*/

let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']
console.log(fridge);
let newFruit = 'pesca'
fridge.push(newFruit);
console.log(fridge);
let flag = false

for( let i = 0; i < fridge.length; i++){
    if(newFruit === fridge[i]){
        flag = true
    }
};
console.log(flag);