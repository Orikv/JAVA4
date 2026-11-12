let pjesemarresit = 45;
let pagesa = 12;
let salla = 180;
let materialet = 95;
let reklama = 60;
let teArdhurat = pjesemarresit * pagesa;
let shpenzimet = salla + materialet + reklama;
let diferenca = teArdhurat - shpenzimet;

console.log("Te ardhurat totale: " + teArdhurat + " euro.");
console.log("Shpenzimet totale: " + shpenzimet + " euro.");
console.log("Diferenca fillestare: " + diferenca + " euro.");

shpenzimet += 25;
diferenca = teArdhurat - shpenzimet;

console.log("Shpenzimet pas shtimit: " + shpenzimet + " euro.");
console.log("Diferenca perfundimtare: " + diferenca + " euro.");
