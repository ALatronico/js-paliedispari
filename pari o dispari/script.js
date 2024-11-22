let scelta = prompt('Pari o dispari?').toLowerCase();
let playerNumber = parseInt(prompt('Inserisci un numero tra 1 e 5: '));

function generaNumeroRandom(){
  return Math.floor(Math.random() * 5) + 1;
}

function isPari (numero){
  return numero % 2 === 0;
}

let pcNumber = generaNumeroRandom();
let somma = playerNumber + pcNumber;

let result = isPari(somma) ? 'pari' : 'dispari';

console.log(`Hai scelto: ${scelta}`);
console.log(`Hai il numero: ${playerNumber}`);
console.log(`Il pc ha il numero: ${pcNumber}`);
console.log(`La somma è: ${somma}, che è ${result}`);

if(scelta === result){
  console.log('Complimenti, hai vinto!');
} else {
  console.log('Mi dispiace, hai perso.');
}