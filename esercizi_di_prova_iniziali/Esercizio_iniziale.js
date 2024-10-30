function Bisestile(){ 

let Anno = prompt ("Inserisci l'anno del quale vuoi verificare se è bisestile o no");
Anno=parseInt(Anno);

while(isNaN(Anno) || Anno<0){
    alert("Devi mettere un valore realistico, non può essere nullo o minore dell'anno 0");
    Anno = prompt ("Inserisci l'anno del quale vuoi verificare se è bisestile o no");
    Anno=parseInt(Anno);
}

if ( (Anno%4==0 && Anno%100!=0) || Anno%400==0 ) {
 alert("L'anno inserito("+ Anno +") è bisestile");
} else {
 alert("L'anno inserito("+ Anno +") NON è bisestile");
}
}



function Età_votatore(){
    
let Anno_nascita = prompt("Inserisci il tuo anno di nascita e ti diremo se puoi votare per il senato");
    
while (isNaN(Anno_nascita) || Anno_nascita==""){

    alert("Il tuo anno di nascita deve essere un numero!!");
    Anno_nascita = prompt("Inserisci il tuo VERO anno di nascita e ti diremo se puoi votare per il senato");

} 

Anno_nascita=parseInt(Anno_nascita);

while (Anno_nascita<1900 || Anno_nascita>2024){
    
    alert("Il tuo anno di nascita Non è realistico, mettine uno possibile");
    Anno_nascita = prompt("Inserisci il tuo VERO anno di nascita e ti diremo se puoi votare per il senato");
 
}

    let Età=2024-Anno_nascita;    

if (Età>=25){
    alert("Puoi votare per la camera ed il senato");
} else if (Età>=18) {
    alert("Puoi votare solo per la camera ma NON per il senato");
} else {
    alert("NON puoi ancora votare");
}   
}