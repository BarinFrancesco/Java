let lista = [
    { nome:"vino" , prezzo:55 , sconto:10, quantità:1 },
    { nome:"popcorn" , prezzo:15 , sconto:0, quantità:1 },
    { nome:"patatine" , prezzo:15 , sconto:0, quantità:1 },
    { nome:"pizzette" , prezzo:35 , sconto:10, quantità:1 },
    { nome:"greygoose" , prezzo:36.5 , sconto:0, quantità:1 },
    { nome:"bibite" , prezzo:15 , sconto:10, quantità:1 }
];

window.onload = function(){
        lista.forEach( (x) => {
            let row = document.createElement("tr");
            row.innerHTML=`
            <td>${x.nome}</td>
            <td>${x.prezzo}€</td>
            <td>${x.sconto}%</td>
            <td><input type="number" value=1 min="1" class="table_input"></td>`//
            document.getElementById("receipt").appendChild(row);
        })
        calcola()
    }


function aggiungi(){

    let articolo_oggetto = document.getElementById("articolo");
    let costo_oggetto = document.getElementById("prezzo");
    let sconto_oggetto = document.getElementById("sconto");
    let quantità_oggetto = document.getElementById("quantità");


    let nome = articolo_oggetto.value;
    let prezzo = parseFloat(costo_oggetto.value);
    let sconto = parseFloat(sconto_oggetto.value);
    let quantità = parseFloat(quantità_oggetto.value)

    if( sconto >= 100){

        articolo_oggetto.style.border="1px solid rgb(255,0,0)";
        costo_oggetto.style.border="1px solid rgb(255,0,0)";
        sconto_oggetto.style.border="1px solid rgb(255,0,0)";
        quantità_oggetto.style.border="1px solid rgb(255,0,0)";
        alert(`oggetto che hai provato ad inserire non può esistere`);
        return;

    } else {

        lista.push({nome:`${nome}`, prezzo:prezzo, sconto:sconto, quantità:quantità});
        articolo_oggetto.value="";
        costo_oggetto.value="";
        sconto_oggetto.value="";
        quantità_oggetto.value="";
        articolo_oggetto.style.border="1px solid rgb(128,128,128)";
        costo_oggetto.style.border="1px solid rgb(128,128,128)";
        sconto_oggetto.style.border="1px solid rgb(128,128,128)";
        quantità_oggetto.style.border="1px solid rgb(128,128,128)";

    }

        let row = document.createElement("tr");
        row.innerHTML=`
        <td>${nome}</td>
        <td>${prezzo}€</td>
        <td>${sconto}%</td>
        <td><input type="number" value=${quantità} min="1" class="table_input"></td>`
        document.getElementById("receipt").appendChild(row);
        calcola();
}

function calcola() {
    document.getElementById("risposta").innerHTML ="";
    let tot = 0;
    let tot_sconto = 0 ;

    lista.forEach( (x) => tot += x.prezzo*x.quantità);
    lista.forEach( (x) => tot_sconto += (x.prezzo-(x.prezzo*x.sconto)/100)*x.quantità );

    document.getElementById("risposta").innerHTML += `
    <p>Il totale senza sconto è: ${tot.toFixed(2)}€</p><br>
    <p>Il totale scontato è: ${tot_sconto.toFixed(2)}€</p><br>
    <p>A testa servono senza sconto: ${tot/10}€</p><br>
    <p>A testa servono con lo sconto: ${tot_sconto/10}€</p><br>
    `;
}