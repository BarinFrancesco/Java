function form_tasse(){
 
     document.getElementById("form").innerHTML = ` 
     <h1>Calcolo tasse</h1>   
     <label for="reddito"> Inserisci il tuo reddito annuo: €</label>
     <input type="number" id="reddito" placeholder="Inserisci qui il tuo reddito" required>
    <button class="conferma" onclick="es_tasse()">Conferma</button>
    <div id="risposta"> </div>`

}

function form_palestra(){
 
    document.getElementById("form").innerHTML = ` 
    <h1>Iscrizione in palestra</h1>    
    <label for="n_mesi">Inserisci il numero di mesi per della tua iscrizione</label>
    <input type="number" id="n_mesi" placeholder="mesi" required> 
    <br>
    <label for="sesso">Inserisci il tuo sesso</label>
    <input type="text" id="sesso" placeholder="M/F" required>
    <br>
    <label for="fascia">Inserisci la tua fascia oraria preferita (f1=9:30-13:00 f2=13:01-22:00)</label>
    <input type="text" id="fascia" placeholder="F1/F2" required>
    <br> 
    <button class="conferma" onclick="iscrizione_palestra()">Conferma</button>
    <div id="risposta"></div>`

}

function form_hotel(){
 
    document.getElementById("form").innerHTML = ` 
    <h1>Prenotazione hotel</h1>    
    <label for="giorni">Quanti giorni vorresti soggiornare al nostor hotel:</label>
    <input type="number" id="giorni" placeholder="giorni" required>
    <br>
    <label for="stagione">In che stagione vorresti venire:</label>
    <input type="text" id="stagione" placeholder="stagione" required>
    <br>
    <label for="stanza">Che stanza scegli (Base:B, Media:M, Alta:A):</label>
    <input type="text" id="stanza" placeholder="stanza" required>
    <br>
    <label for="Parcheggio">Vuoi anche il box auto (SI/NO):</label>
    <input type="text" id="Parcheggio" placeholder="Parcheggio" required>
    <br> 
    <button class="conferma" onclick="es_3()">Calcola</button>
    <div id="risposta"></div>`

}

function es_tasse(){
    let reddito = parseFloat(document.getElementById("reddito").value);
    let tax, tax_fissa, tot;
   
    if ( !isNaN(reddito) && reddito>=0 ){
       
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

    function iscrizione_palestra(){
        let n_mesi = parseInt( document.getElementById("n_mesi").value );
        let sesso = document.getElementById("sesso").value;
        let fascia_oraria = document.getElementById("fascia").value;
        let prezzo; 
        if (((n_mesi>0 && n_mesi<24 && !isNaN(n_mesi)) && (sesso=="M" || sesso=="m" || sesso=="F" || sesso=="f")) && (fascia_oraria=="F1" || fascia_oraria=="f1" || fascia_oraria=="F2" || fascia_oraria=="f2")){
            
            if ((sesso=="M" || sesso=="m")){
            
                if (fascia_oraria=="F1" || fascia_oraria=="f1"){
                prezzo = 10;
                } else {
                prezzo = 15;
                }
    
            } else if (fascia_oraria=="F1" || fascia_oraria=="f1"){
                prezzo = 7;
                } else {
                prezzo = 11;
                }
    
                prezzo = prezzo*n_mesi;
        document.getElementById("risposta").innerHTML = `devi pagare ${prezzo}`;
        } else {
            alert("C'è un errore nei tuoi dati ricorda che: il numero di mesi deve essere un valore positivo e che non puoi iscriverti per più di 2 anni, il sesso deve essere espresso con le lettere M o F, la fascia oraria deve essere segnalata con F1 o F2")
        }
    }