
function es_3(){

let giorni = parseInt(document.getElementById("giorni").value);
let stagione = document.getElementById("stagione").value;
let stanza = document.getElementById("stanza").value;
let parcheggio = document.getElementById("Parcheggio").value;
let costo;
let sconto;

if ((giorni>0 && !isNaN(giorni) && giorni<45) && ( stagione=="bs" || stagione=="ms" || stagione=="as") && (stanza=="a" || stanza=="b" || stanza=="m") && (parcheggio=="si" || parcheggio=="no")){

   if ( stagione=="bs" ) {

       if ( stanza="b" ) {
        costo = 15;
       } else if( stanza="m" ){
        costo = 30;
       } else{
        costo = 45;
       }

   } else if ( stagione=="ms"){

       if ( stanza="b" ) {
        costo = 20;
       } else if( stanza="m" ){
        costo = 35;
       } else{
        costo = 50;
       }


   } else {

     if ( stanza="b" ) {
        costo = 25;
       } else if( stanza="m" ){
        costo = 40;
       } else{
        costo = 55;
       }

   }
 

   costo = giorni*costo

   if (giorni>=3 && giorni<=7){
      sconto = costo*0.25;
   } else if (giorni>7){
      sconto = costo*0.35;
   } else {
      sconto = costo*0;
   }

   costo = costo - sconto;

   if (parcheggio=="si"){
    costo = costo + (giorni*5);
   }

document.getElementById("risposta").innerHTML = `devi pagare un totale di ${costo}€`
} else{
 alert("c'è un errore con i tuoi dati, ricorda: non puoi soggiornare per più di 45 giorni, la stagione deve essere espressa con AS, BS o MS e la stanza deve essere espressa con B, A o M");
}

}