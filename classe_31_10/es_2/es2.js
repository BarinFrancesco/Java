function iscrizione_palestra(){
    let n_mesi = parseInt( document.getElementById("n_mesi").value );
    let sesso = document.getElementById("sesso").value;
    let fascia_oraria = document.getElementById("fascia").value;
    let prezzo; 
    document.getElementById("risposta").innerHTML = `dati acquisiti`;

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

    } else {
        alert("C'è un errore nei tuoi dati ricorda che: il numero di mesi deve essere un valore positivo e che non puoi iscriverti per più di 2 anni, il sesso deve essere espresso con le lettere M o F, la fascia oraria deve essere segnalata con F1 o F2")
    }
    prezzo = prezzo*n_mesi;
    document.getElementById("risposta").innerHTML = prezzo;
}