/* 1. Chiedere all’utente il cognome
 2. Inseriscilo in un array con altri cognomi
 3. Stampa la lista ordinata alfabeticamente
 4. Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


 //1. Chiedo il cognome
 var cognomeUtente = prompt('Inserisci il tuo cognome');
    cognomeUtente = cognomeUtente.toLowerCase();
 //Lista cognomi
 var listaCognomi = ['bertoldi','marrazzi','smusi','cavacchione','gastanifrinzi','rapaponte','astroboldi'];

 //Inserisco il cognome utente nella lista
 listaCognomi.push(cognomeUtente);
    listaCognomi = listaCognomi.sort();

for( var i = 0; i < listaCognomi.length; i ++){

    console.log(listaCognomi[i]);
}  

// Posizione del cognome aggiunto nella lista
    console.log('Il signor ' + cognomeUtente + ' è alla posizione ' + (listaCognomi.indexOf(cognomeUtente)+1));
















