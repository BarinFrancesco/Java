function Bisestile(){ 

let Anno = prompt ("Inserisci l'anno del quale vuoi verificare se è bisestile o no");
Anno=parseInt(Anno);


while(isNaN(Anno) || Anno<0){
    alert("Devi mettere un valore realistico, non può essere nullo o minore dell'anno 0");
    Anno = prompt ("Inserisci l'anno del quale vuoi verificare se è bisestile o no");
    Anno=parseInt(Anno);
}

if (Anno%4==0) {
 alert("L'anno inserito("+ Anno +") è bisestile");
} else {
 alert("L'anno inserito("+ Anno +") NON è bisestile");
}

}



function Età_votatore(){
    
let Età = prompt("Inserisci il tuo anno di nascita e ti diremo se puoi votare per il senato");
Età=parseInt(Età);
    
while (Età<1900){
alert("Il tuo anno di nascità non è realistico, inseriscine uno vero!!");
Età = prompt("Inserisci il tuo VERO anno di nascita e ti diremo se puoi votare per il senato");
Età=parseInt(Età);
}
    
if (2024-Età>=18){
    alert("Puoi votare per il senato");
} else {
    alert("NON puoi votare per il senato");
}
    
}