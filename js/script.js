// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5. generiamo un numero random (sempre tra 1 e 5) per il computer (usanto una funzione). sommiamo i due numeri. stabiliamo se la somma dei due numeri è pari o dispari(usando funzione) dichiariamo chi ha vinto.


// L'utente sceglie pari o dispari
var parDispUtente = prompt ("scegli digitando tra PARI o DISPARI").toLowerCase();
console.log(parDispUtente);

numRandUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(numRandUtente);

// per il computer usando funzione
function numRandBot() {
   var numeroRandom = Math.floor(Math.random() * 5)+1;
    return numeroRandom;
}

var risBot = numRandBot();
console.log(risBot); 