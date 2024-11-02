function es_tasse(){
 let reddito = parseFloat(document.getElementById("reddito").value);
 let tax, tax_fissa, tot;

 if ( !isNaN(reddito) && reddito>0 ){
    
   if ( reddito>=75000 ){
     tax = 0.43;
     tax_fissa=25420;
   } else if ( reddito>=55000 ) {
    tax = 0.41;
    tax_fissa=17220;
   } else if( reddito>=28000 ) {
    tax = 0.38;
    tax_fissa=6960;
   } else if( reddito>=15000){
    tax = 0.27;
    tax_fissa=3450;
   } else if (reddito>=3000){
    tax = 0.23;
    reddito = reddito-3000;
   } else {
   tax=0;
   tax_fissa=0;
   }

   tot = (reddito*tax) + tax_fissa; 

   if (tot>0) {
       document.getElementById("risposta").innerHTML = `Devi pagare ${tot}€ di tasse`;
   } else{
       document.getElementById("risposta").innerHTML = `Non devi pagare tasse`;
   }
} else{
alert("Il valore che hai inserito non è realistico, inserisci un numero positivo");
}
}