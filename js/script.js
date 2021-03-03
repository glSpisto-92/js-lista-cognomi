/* 1. Chiedere all’utente il cognome
 2. Inseriscilo in un array con altri cognomi
 3. Stampa la lista ordinata alfabeticamente
 4. Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


 //1. Chiedo il cognome
 var cognomeUtente = prompt('Inserisci il tuo cognome');

 //Lista cognomi
 var listaCognomi = ['Bertoldi','Marrazzi','Smusi','Cavacchione','Gastanifrinzi','Rapaponte','Astroboldi'];

 //Inserisco il cognome utente nella lista
 listaCognomi.push(cognomeUtente);


for( var i = 0; i < listaCognomi.length; i ++){

    console.log(listaCognomi.sort()[i]);
}  

// Posizione del cognome aggiunto nella lista
    console.log('Il signor ' + cognomeUtente + ' è alla posizione numero ' + listaCognomi.indexOf(cognomeUtente));
















