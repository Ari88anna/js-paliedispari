// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

// facciamo scegliere aal'utente se vuole pari o dispari
var pariODispari = prompt('Pari o dispari?');

// e chiediamo un numero da 1 a 5

var utenteNumero = parseInt( prompt('Dammi un numero da 1 a 5') );
console.log(utenteNumero) 

// generare numero casuale utilizzando una funzione

function numeroCasuale() {

    var numeroProdotto = Math.floor (Math.random()*4) + 1;

    return numeroProdotto; 
    console.log(numeroProdotto)      
}

function somma( numeroUtente, numeroComputer) {

    var risultato = numeroUtente + numeroComputer;

    return risultato;

}

