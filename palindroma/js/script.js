 // Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola (stringa)
var inputUtente = prompt('Inserisci una parola');

parolaDaVerificare(inputUtente);

// Funzioni

// Funzione per capire se una parola è un palindromo
//
// parolaUtente -> parola che confronteremo per capire se è un palindromo 

function parolaDaVerificare(parolaUtente) {

    var palindromo = true;    

    for ( var i= 0; i < parolaUtente.length; i++ ) {

        // suddivido i caratteri della parola
        var lettereParola = parolaUtente[i];
        // console.log(lettereParola); 

        //inverto la parola
        var lettereInvertite = parolaUtente[parolaUtente.length -1 -i];
        console.log(lettereInvertite);

        // faccio il confronto: controllo se la parola scritta dall'utente è palindroma
        if( lettereInvertite != lettereParola ) {

            palindromo = false;          
        }        
    }
    
    var messaggioFinale;
    
    if (palindromo == false ) {

        messaggioFinale = 'La parola inserita non è un palindromo' ;

    } else {

        messaggioFinale = 'La parola inserita è un palindromo';
    } 
    
    alert(messaggioFinale);
          
}

