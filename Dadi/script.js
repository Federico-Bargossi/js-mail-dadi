// Genera un numero casuale da 1 a 6 per il giocatore
let dadoGiocatore = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale da 1 a 6 per il computer
let dadoComputer = Math.floor(Math.random() * 6) + 1;

// Risultati
console.log("num Giocatore:", dadoGiocatore);
console.log("num Computer:", dadoComputer);

// Determina il vincitore
if (dadoGiocatore > dadoComputer) {
    console.log("Il giocatore vince!");
} else if (dadoGiocatore < dadoComputer) {
    console.log("Il computer vince!");
} else {
    console.log("È un pareggio!");
}