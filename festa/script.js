function calcola() {

    let lista = [
        { nome:"vino" , prezzo:55 , sconto:0.9 },
        { nome:"popcorn" , prezzo:15 , sconto:1 },
        { nome:"patatine" , prezzo:15 , sconto:1 },
        { nome:"pizzette" , prezzo:35 , sconto:0.9 },
        { nome:"greygoose" , prezzo:36.5 , sconto:1 },
        { nome:"bibite" , prezzo:15 , sconto:0.9 }
    ];

    let tot = 0;

    let totale = lista.map( (x , i) => tot += lista[i].prezzo);
    let totale_scontato = lista.map( (tot , i) => tot += (lista[i].prezzo)*lista[i].sconto);
    
    let totale_a_testa = totale/10;
    let totale_a_testa_scontato = totale_scontato/10;

    document.getElementById("risposta").innerHTML=`
    <p>Il totale senza sconto è: ${totale}€</p><br>
    <p>Il totale scontato è: ${totale_scontato}€</p><br>
    <p>A testa servono senza sconto: ${totale_a_testa}€</p><br>
    <p>A testa servono con lo sconto: ${totale_a_testa_scontato}€</p><br>
    `;
}