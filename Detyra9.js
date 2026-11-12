let qmimi1 = "19.90";
let qmimi2 = "8.50";
let sasia1 = 2;
let sasia2 = 3;

let numri1 = Number(qmimi1);
let numri2 = Number(qmimi2);

let totali1 = numri1 * sasia1;
let totali2 = numri2 * sasia2;

let shumaPorosise = totali1 + totali2;
let tarifa = shumaPorosise * 10 / 100;
let shumaFinale = shumaPorosise + tarifa;

let shumaFormatizuar = shumaFinale.toFixed(2);

console.log("Totali i artikullit 1: " + totali1 + " euro.");
console.log("Totali i artikullit 2: " + totali2 + " euro.");
console.log("Shuma e porosise: " + shumaPorosise + " euro.");
console.log("Tarifa e sherbimit: " + tarifa + " euro.");
console.log("Shuma finale: " + shumaFormatizuar + " euro.");
console.log("Tipi i vleres se formatizuar: " + typeof shumaFormatizuar);
