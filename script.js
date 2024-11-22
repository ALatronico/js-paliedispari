let parola = prompt("Inserisci una parola per verificare se è palindroma: ");

function isPalindroma(parola) {
    // Converto la parola in minuscolo per evitare problemi con le maiuscole
    parola = parola.toLowerCase();

    // Inverto la parola
    let parolaInversa = parola.split('').reverse().join('');

    return parola === parolaInversa;
}


if (isPalindroma(parola)) {
    console.log(`La parola ${parola} è palindroma!`);
} else {
    console.log(`La parola ${parola} non è palindroma.`);
}