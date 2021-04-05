// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

// facciamo scegliere aal'utente se vuole pari o dispari
var pariODispari = prompt('pari o dispari?');

// e chiediamo un numero da 1 a 5

var utenteNumero = parseInt( prompt('Dammi un numero da 1 a 5') );
console.log(utenteNumero) 

// generiamo numero random per il computer
var numeroRandomComputer = getRandomNum(1, 5);

// sommare i numeri
var somma = utenteNumero + numeroRandomComputer;

// stabilire se la somma è pari o dispari
var sommaPariODispari = valutaPariDispari(somma);

// Dichiariamo chi ha vinto.
var messaggioFinale;

if ( utenteNumero == sommaPariODispari) {
        
    messaggioFinale = 'Hai vinto!';

} else {

    messaggioFinale = 'Hai perso!';
}

alert(messaggioFinale);

// FUNZIONI

// fuzione per generare un numero random
//
// min -> numero minimo da generare
// max-> numero massimo da generare
function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min +1)) +min;         
}



// Valuta se il numero è pari o dispari
//
//numeroDaValutare
//
//return: stringa 'pari' se il numero è pari, altrimenti 'dispari'

function valutaPariDispari(numeroDaValutare) {

    var risultato

    if ( numeroDaValutare % 2 == 0) {

       var risultato ='pari';
    
    }else {
    
       var risultato ='dispari';
    } 

    return risultato; 
}








