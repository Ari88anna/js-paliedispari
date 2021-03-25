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
}

// var somma = utenteNumero + numeroCasuale();
// console.log(somma);

vincitore(utenteNumero, numeroCasuale());

function vincitore(numeroPreso, numeroDato) {

    var somma = numeroPreso + numeroDato;

    if ( somma % 2 == 0) {

       var risultato ='pari';
    
    }else {
    
       var risultato ='dispari';
    }
    

    if ( numeroPreso == somma ) {
        
        alert ('Hai vinto!');

    } else {
        alert('Hai perso!');
    }

    return somma
}






