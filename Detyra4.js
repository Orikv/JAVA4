
let produkti1 = 35;
let produkti2 = 24;
let zbritja = 15;
let transporti = 4;

let cmimiParaZbritjes = (2 * produkti1) + produkti2;
let shumaZbritjes = (cmimiParaZbritjes * zbritja / 100);
let cmimiPasZbritjes = cmimiParaZbritjes - shumaZbritjes;
let cmimiPerfundimtar = cmimiPasZbritjes + transporti;

console.log("Çmimi para zbritjes është " + cmimiParaZbritjes + " €.");
console.log("Zbritja është " + zbritja + "%.");
console.log("Shuma e zbritjes është " + shumaZbritjes + " €.");
console.log("Çmimi pas zbritjes është " + cmimiPasZbritjes + " €.");
console.log("Transporti kushton " + transporti + " €.");
console.log("Çmimi përfundimtar është " + cmimiPerfundimtar + " €.");
