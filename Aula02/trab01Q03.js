const prompt = require('prompt-sync')();





let anos = prompt ('Anos:');
let meses = prompt ('Meses:');
let dias = prompt ('dias:');


let diasDeIdade = anos * 365 + meses * 30  +  1 * dias;

console.log(diasDeIdade);
