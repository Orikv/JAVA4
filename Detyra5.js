let vlera1 = "25";
let vlera2 = "17";
let vlera3 = "8";

// Pa konvertim vlerat bashkohen si tekst sepse jane string
let shumaPaKonvertim = vlera1 + vlera2 + vlera3;

console.log("Shuma pa konvertim: " + shumaPaKonvertim);
console.log("Tipi: "+ typeof shumaPaKonvertim);

// Konvertimi i vlerave ne numra
let numri1 = Number(vlera1);
let numri2 = Number(vlera2);
let numri3 = Number(vlera3);

let shuma = numri1 + numri2 + numri3;
let mesatarja = shuma / 3;

console.log("Shuma pas konvertimit: " + shuma);
console.log("Mesatarja: "+ mesatarja);
console.log("Tipi i shumes: "+ typeof shuma);
console.log("Tipi i mesatares: "+ typeof mesatarja);
