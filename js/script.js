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



// sommiamo i due numeri
var risFinale = numRandUtente + risBot;
console.log(risFinale);


// stabiliamo se la somma dei due numeri è pari o dispari(usando funzione)
function pariDispari(numRandUtente, risBot){
    if ( (risBot + numRandUtente)% 2 == 0 ){
        return "pari";
    }else {
    }
    
    return "dispari"
}
var pariDispariRis = pariDispari(numRandUtente, risBot);
console.log(pariDispariRis);


// dichiariamo chi ha vinto.
if (parDispUtente === pariDispariRis ) {
    document.getElementById("risultato-es1").innerHTML = "Complimenti la tua scelta è esatta!"
}else {
    document.getElementById("risultato-es1").innerHTML = "Mi dispiace. La tua scelta è errata!"
}



// es2
// palindroma: chiedere all'utente di inserire una parola. creare una funzione per capire se la pora inserita è palindroma

// chiedere all'utente di inserire una parola
var word = prompt("inserire una parola qui!")


// creare una funzione per capire se la pora inserita è palindroma

function palindromo(word) {
    var pali = word.split("").reverse().join("");

    if (pali === word){
        return "è palindroma";
    } else {
        return "non è palindroma";
    }
}

var risPalindromo = palindromo(word);
document.getElementById("risultato-es2").innerHTML ="la parola " + risPalindromo;