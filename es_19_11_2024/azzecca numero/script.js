let num_computer = (Math.floor(Math.random()*50)+1); // creo un numero radomico tra 1 e 100
let tentativi_utente=1; // impisto i tentativi dell'utente a 1

//questa funzione va a controllare le condizioni di vittoria ed errore della partita
function confronta_num(){
    let num_utente = parseInt(document.getElementById("num").value); // leggo in input il numero dell'utente
    let risposta;

    //se il valore non è un numero positivo minore di 100 allora svuoto la casella di input e ne faccio selezionare un'altro
    if ( isNaN(num_utente) || num_utente<1 || num_utente>50 ){
        alert("Errore nei dati in input");
        document.getElementById("num").value=``;
        return;
    }
    
    // finchè il umero è diverso e l'utente ha abbastanza tentativi allora lo facci riprovare
    while ( num_utente != num_computer && tentativi_utente<10 ){
        document.getElementById("num").value=``;
        document.getElementById("risposta").innerText = `peccato hai sbagliato, hai ancora ${10-tentativi_utente} tentativi`;
        tentativi_utente+=1;
        return;
    }

    //controllo se l'utente è uscito perché ha finito i tentativi o perchè ha vinto, e mando i rispettivi messaggi
    if ( tentativi_utente===10 ){
        risposta = `Hai finito i tentativi`;
    } else {
        risposta = `Complimenti hai vinto, ci hai messo ${tentativi_utente} tentativi`; 
    }

    document.getElementById("invia").style.display = `none`; //quando il giovo è finit gli impedisco di inviare altri numeri
    document.getElementById("ritenta").style.display = `block`; //quando il gioco è finito do la possibilità di rigiocare
    document.getElementById("risposta").innerText = `${risposta}`;
}

//qusta funzione permette di rigiocare, crea un'altro numero da azzeccare e  azzera i tentativi dell'utente
function ritenta(){

    num_computer = (Math.floor(Math.random()*500)+1); 
    tentativi_utente=1;
    document.getElementById("invia").style.display = `block`;
    document.getElementById("ritenta").style.display = `none`;

}