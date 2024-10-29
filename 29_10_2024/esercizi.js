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

}

function es_3(){

 let val = parseInt(prompt("Inserisci il tuo reddito annuale e noi di diremo quante tasse devi pagare"));
 let tax;

 while (isNaN(val) || val<0){
  alert("Attenzione, devi mettere un valore e deve essere maggiore di 0");
  val= parseInt(prompt("Inserisci il tuo VERO reddito"));
 }

 if ( val>=15000 && val<=30000 ){
   tax = 20;
   val = val - (val*20/100);
 } else if (val>30000){
   tax = 30;
   val = val - (val*30/100);
 } else{
   tax = 10;
   val = val - (val*10/100);
 }
  
 document.getElementById("tasse").innerHTML = "Il tuo reddito tassato è di " + val + "; hai dovuto pagare il "+ tax + "% di tasse";

}