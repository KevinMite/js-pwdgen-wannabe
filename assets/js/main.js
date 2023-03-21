// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nome = prompt("scrivi il tuo nome");
const cognome = prompt("scrivi il tuo cognome");
const colorePreferito = prompt("scrivi il tuo colore preferito");


const numeroFisso = 21;

let password = nome + cognome + colorePreferito + 21;

console.log(password);

document.getElementById(`password`).innerHTML = `<p>Questa è la tua password ${password}</p>`
