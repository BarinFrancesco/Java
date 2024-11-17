// con questa funzione genero un valore casuale in esadecimale, che poi diventerà il mio colore
function color(){
    let lettere = `0123456789abcdef`
    let colore =`#`;

    // con questo for mi assicuro di asumere esattamente 6 valori così che il codice colori non di errori
    for(let i=0; i<6; i++){
        colore+= lettere[Math.floor(Math.random()*16)] // schelgo a caso una delle lettere dell'alfabeto esadecimale 
    }
    return colore;
}

function tabella(){

    const tabella = document.createElement(`table`); // creo la tabellla
    
    document.getElementById("content").innerHTML=""; // svuoto il div che contiene la tabella, nel caso questa fosse piana da un uso precendente
    let righe = parseInt(document.getElementById("righe").value); // assumo in input il n di righe volute
    let colonne = parseInt(document.getElementById("colonne").value);// assumo in input il n di colonne volute
    // queste 3 variabili mi serviranno per creare tutte le celle della tabella
    let crea_righe;
    let crea_colonne;
    
    //verifico che non ci siano errori in input e nel caso ci siano blocco tutto il procedimento 
    if (isNaN(righe) || isNaN(colonne) || righe<0 || colonne<0){
        alert("errore nei dati in input");
        return;
    }

    // questo for crea tutte le righe volute in input dall'utente
    for(let i=0; i<righe; i++){
        
        crea_righe = document.createElement("tr"); // questo elemento crea effettivamente la riga 

        //questo for crea tante celle (quindi colonne) quante selezionato dall'utente
        for(let x=0; x<colonne; x++){ 
            let chose_color= color() // avvio la funzione color() per avere un colore randomico con cui colorare la mia cella
            crea_colonne = document.createElement("td"); // creo la riga
            crea_colonne.style.backgroundColor = chose_color; // assegno alla riga come sfondo il colore randomico
            crea_righe.appendChild(crea_colonne); // aggiungo la tabella appena creata alla riga
        }
        
        tabella.appendChild(crea_righe); // aggiungo alla tabella la riga appena creata, piena delle celle

        }

    document.getElementById("content").appendChild(tabella); // finito di creare la tabella la stampo sul div
}