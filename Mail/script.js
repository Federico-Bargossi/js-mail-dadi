let emailAutorizzate = ['fedeb@gmail.com' ,  'bargof@gmail.it'];

// Chiedi all'utente la sua email
let emailUtente = prompt("Inserisci la tua email:");

// Variabile per verificare l'accesso
let accessoConsentito = false;

// Controlla se l'email è nella lista
for (let i = 0; i < emailAutorizzate.length; i++) {
    if (emailUtente === emailAutorizzate[i]) {
        accessoConsentito = true;
    }
}

// Messaggio basato sul risultato del controllo
if (accessoConsentito === true) {
    console.log("Accesso consentito");
} else {
    console.log("Accesso negato.");
}