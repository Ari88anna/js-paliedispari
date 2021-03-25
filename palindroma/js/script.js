// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma


// chiedo all'utente di inserire una parola (stringa)
var inputUtente = prompt('Inserisci una parola');

// suddivido i caratteri della parola

parolaDaVerificare(inputUtente);



// creo una funzione per capire se la parola inserita è palindroma

function parolaDaVerificare(parolaUtente) {

    var palindromo = true;    

    for ( var i= 0; i < parolaUtente.length; i++ ) {
    
        var lettereParola = parolaUtente[i];
        // console.log(lettereParola); 

        var lettereInvertite = parolaUtente[parolaUtente.length -1 -i];
        console.log(lettereInvertite)

        if( lettereInvertite != lettereParola ) {

            palindromo = false;          
        }        
    }
    
    var messaggioFinale;
    
    if (palindromo == false ) {

        messaggioFinale = alert('La parola inserita non è un palindromo');  

    } else {

        messaggioFinale = alert('La parola inserita è un palindromo');
    }    
          
}

