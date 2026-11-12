let fletet = 157;
let fletetPerStudent = 6;

let grupet = parseInt(fletet / fletetPerStudent);
let mbetja = fletet % fletetPerStudent;
let kontrolli = (grupet * 6) + mbetja;
console.log("Numri total i fleteve eshte " + fletet);
console.log("Numri i grupeve te plota eshte " + grupet);
console.log("Fletet e mbetura jane " + mbetja);
console.log("Kontrollimi i llogaritjes: " + kontrolli);
