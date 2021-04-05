 // Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola (stringa)
var inputUtente = prompt('Inserisci una parola');

var parolaUtente = palindromo(inputUtente);

var messaggioFinale;
    
    if (parolaUtente == true ) {

        messaggioFinale = 'La parola inserita E\' un palindromo' ;

    } else {

        messaggioFinale = 'La parola inserita NON è un palindromo';
    } 
    
    alert(messaggioFinale);

// FUNZIONI

// Funzione per capire se una parola è un palindromo
//
// parolaDaVerificare -> parola che confronteremo per capire se è un palindromo 

function palindromo(parolaDaVerificare) {

    var isPalindromo = true;    

    for ( var i= 0; i < parolaDaVerificare.length; i++ ) {

        // suddivido i caratteri della parola
        var lettereParola = parolaDaVerificare[i];
        // console.log(lettereParola); 

        //inverto la parola
        var lettereInvertite = parolaDaVerificare[parolaDaVerificare.length -1 -i];
        console.log(lettereInvertite);

        // faccio il confronto: controllo se la parola scritta dall'utente è palindroma
        if( lettereInvertite != lettereParola ) {

            isPalindromo = false;          
        }        
    }

    return isPalindromo;
          
}

