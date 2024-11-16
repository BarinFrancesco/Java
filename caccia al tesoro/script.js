//dichiaro delle variabili locali perché mi servirano in entrambe le funzioni per controllare la coordinate della cella
let x=0;
let y=0;
let x_tesoro;
let y_tesoro;

function tabella(){ //questa funzione crea la taballa da cui cercare il tesoro

    // dichiaro in input le variabili che mi servono per creare le colonne e le righe, poi ci assegno il valore degli input
    let righe = parseInt(document.getElementById("righe").value);
    let colonne = parseInt(document.getElementById("colonne").value);
    let new_table;
    let new_row;
    let new_column;
    let new_button;
    // asssumo in input due valori randomici per identficare le coordinare di una cella qualunque che sarà quindi quella del tesoro.
    y_tesoro = Math.floor((Math.random()*righe)+1);
    x_tesoro = Math.floor((Math.random()*colonne)+1);

    if(isNaN(righe) || isNaN(colonne)){
        alert("errore nei dati in input");
        input.value="";
    }

    document.getElementById("table").innerHTML=``; // scuoto il div contenente la tabella nel caso fosse pieno da un tantativo precendente
    new_table = document.createElement(`table`); // creo una nuova tabella
    
    //con i for creo le tabelle cella per cella, ed a ciascuda assegno una coordinata
    for (y=1; y<righe+1; y++){ 

        new_row = document.createElement(`tr`);// creo la riga

        for (x=1; x<colonne+1; x++){

            new_column = document.createElement(`td`); //creo la colonna della taballa
            new_button = document.createElement("button"); //creo il bottone che andrò ad inserire
            new_button.setAttribute(`onclick`, `coordinate(${x}, ${ (righe+1)-y})`); // assegno al bottone la capacità di lanciare una funzione con le sue coordinate er fare la verifica
            new_button.setAttribute(`id`, `${x}-${ (righe+1)-y}`)
            new_button.setAttribute(`class`, `but_tab`); // per lo stile
            new_column.appendChild(new_button); //inserisco il bottone nella colonna
            new_row.appendChild(new_column); // inserisco la colonna col bottone nella riga
        }

        new_table.appendChild(new_row); //insersco a riga nella colonna
    }
    
    document.getElementById("table").appendChild(new_table);

}

function coordinate(x,y){ //questa funzione va a verificare le condizioni di vittpria

    let risposta;

    // con questo if controllo se entrmabe le condizioni sono vere e mando un messaggio all'utente
    if ((y === y_tesoro) && (x === x_tesoro)){

        risposta = "COMPLIMENTI HAI TROVATO IL TESORO"
        document.getElementById(`${x}-${y}`).style.backgroundColor =`rgb(255,215,0)`;

       } else {

        // in questi if controllo la posizione orizzonale del mio bottone rispoetto a quello del tesoro, se è più grande allora sarà più a destras rispetto al tesoro e viceversa, e segnalo allì'utente come muoversi
        if(x > x_tesoro){
            alert("il tesoro stà più a sinistra");
        } else if(x < x_tesoro){
            alert("il tesoro stà più a destra");
        } else{
            alert("sei sulla stessa colonna del tesoro")
        }

        // in questi if controllo la posizione verticale del mio bottone rispoetto a quello del tesoro, se è più grande allora sarà più in alto rispetto al tesoro e viceversa, e segnalo allì'utente come muoversi
        if(y > y_tesoro){
            alert("il tesoro stà più in basso");
        } else if(y < y_tesoro){
            alert("il tesoro stà più in alto");
        } else{
            alert("sei sulla stessa riga del tesoro")
        }

        risposta = "dai che manca poco a trovare il tesoro"
    }

    document.getElementById("risposta").innerText=`${risposta}`

}