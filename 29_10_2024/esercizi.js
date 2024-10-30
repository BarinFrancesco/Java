function es_1(){

let A = parseInt(prompt("inserisci il primo valore"));
let B = parseInt(prompt("inserisci il secondo valore")); 
let pos, par, som;

while ( isNaN(A) || isNaN(B) ){
alert( "Il tuo valore deve essere un numero, cambialo");
A = parseInt(prompt("inserisci il primo valore"));
B = parseInt(prompt("inserisci il secondo valore")); 
} 

if (B>0) {
   pos = " è positivo ";
} else {
   pos = " è negativo ";
}

if (A%2==0) {
   par = " è pari";
} else {
   par = " è dispari";
}

som = A+B;
max = Math.abs(A)+ Math.abs(B); 

document.getElementById("pos_neg").innerHTML = "Il valore " + B + pos;
document.getElementById("par_disp").innerHTML = "Il valore " + A + par;
document.getElementById("somma").innerHTML = "La somma dei due valori (" + A +","+ B +") è: "+  som;
document.getElementById("val_max").innerHTML = "Il valore massimo che puoi raggiungere con queste due cifre è " + max;
}


function es_2(){
  let num1 = parseInt(prompt("inserisci il tuo primo numero"));
  let num2 = parseInt(prompt("inserisci il tuo secondo numero"));
  let num3 = parseInt(prompt("inserisci il tuo terzo numero"));
  let dist;

  while ( isNaN(num1) || isNaN(num2) || isNaN(num3) ){
   alert("Attento, tutti e tre i tuoi valori devono essere dei numeri!!")
   num1 = parseInt(prompt("inserisci di nuovo il tuo primo numero"));
   num2 = parseInt(prompt("inserisci di nuovo il tuo secondo numero"));
   num3 = parseInt(prompt("inserisci di nuovo il tuo terzo numero"));
  }

  dist = Math.abs(num1-num2);

  if ( dist==num3 ){
    document.getElementById("condizione").innerHTML = "si, i tuoi due numeri sono distanti esattamente " + dist + " cifre";
  } else {
    document.getElementById("condizione").innerHTML = "no, i tuoi due numeri non sono distanti " + dist + " cifre";
  }
}


function es_3(){

 let val = parseInt(prompt("Inserisci il tuo reddito annuale e noi di diremo quante tasse devi pagare"));
 let tax;

 while (isNaN(val) || val<0){
  alert("Attenzione, devi mettere un valore e deve essere maggiore di 0");
  val= parseInt(prompt("Inserisci il tuo VERO reddito"));
 }

 if ( val>=15000 && val<=30000 ){
   tax = 0.2;
 } else if ( val>30000 ){
   tax = 0.3;
 } else{
   tax = 0.1;
 }

 tax = val*tax; 
  
 document.getElementById("tasse").innerHTML = "Devi pagare un totale di " + tax + "€ di tasse";
}


function es_4() {

let importo = parseInt(prompt("Inserisci l'importo della tua spesa"));
let sconto;

while (isNaN(importo)|| importo<0){
  alert("Attento, il tuo importo deve essere un numero maggiore di 0");
  importo = prompt("Reinserisci il tuo vero importo");
}

if ( importo>=50 && importo<=100 ) {
  sconto = 0.05;
} else if ( importo<50 ){
  sconto = 0;
} else {
   sconto = 0.1;
}

importo = importo-(importo*sconto);

document.getElementById("sconto").innerHTML = "Il tuo importo scontato è di " + importo + "€";
}