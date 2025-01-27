let lista = [
    { nome:"vino" , prezzo:55 , sconto:10, quantità:1, categoria:"bevande alcoliche" },
    { nome:"popcorn" , prezzo:15 , sconto:0, quantità:1, categoria:"stuzzichini" },
    { nome:"patatine" , prezzo:15 , sconto:0, quantità:1, categoria:"stuzzichini" },
    { nome:"pizzette" , prezzo:35 , sconto:10, quantità:1, categoria:"stuzzichini" },
    { nome:"greygoose" , prezzo:36.5 , sconto:0, quantità:1, categoria:"bevande alcoliche" },
    { nome:"bibite" , prezzo:15 , sconto:10, quantità:1, categoria:"bevande analcoliche" }
];
let row_count = 0;
let modifica_riga = 0;

window.onload = function(){
        lista.forEach( (x,i) => {
            let row = document.createElement("tr");
            row.setAttribute(`id`,`row_${i}`);
            row.innerHTML=`
            <td>${x.nome}</td>
            <td>${x.prezzo}€</td>
            <td>${x.sconto}%</td>
            <td><input type="number" value=1 min="1" class="table_input" id="input_${i}"></td>
            <td>${x.categoria}</td>
            <td><button onclick="elimina(${i})" class="button" id="elimina">Elimina</button></td>
            <td><button onclick="mostra_modifica(${i})" class="button" id="modifica">Modifica</button></td>`
            row_count++;
            document.getElementById("receipt").appendChild(row);
        })
        calcola()
    }


function aggiungi(){

    let articolo_oggetto = document.getElementById("articolo");
    let costo_oggetto = document.getElementById("prezzo");
    let sconto_oggetto = document.getElementById("sconto");
    let quantità_oggetto = document.getElementById("quantità");
    let categoria_oggetto = document.getElementById("categoria");


    let nome = articolo_oggetto.value;
    let prezzo = parseFloat(costo_oggetto.value);
    let sconto = parseFloat(sconto_oggetto.value);
    let quantità = parseFloat(quantità_oggetto.value);
    let categoria = categoria_oggetto.value;

    if( sconto >= 100 || quantità <= 0 || articolo == "" || isNaN(sconto) || isNaN(quantità) || isNaN(prezzo)){

        articolo_oggetto.style.border="1px solid rgb(255,0,0)";
        costo_oggetto.style.border="1px solid rgb(255,0,0)";
        sconto_oggetto.style.border="1px solid rgb(255,0,0)";
        quantità_oggetto.style.border="1px solid rgb(255,0,0)";
        categoria_oggetto.style.border="1px solid rgb(255,0,0)";
        alert(`oggetto che hai provato ad inserire non può esistere`);
        return;

    } else {

        lista.push({nome:`${nome}`, prezzo:prezzo, sconto:sconto, quantità:quantità, categoria:categoria});
        articolo_oggetto.value="";
        costo_oggetto.value="";
        sconto_oggetto.value="";
        quantità_oggetto.value="";
        categoria_oggetto.value="";
        articolo_oggetto.style.border="1px solid rgb(128,128,128)";
        costo_oggetto.style.border="1px solid rgb(128,128,128)";
        sconto_oggetto.style.border="1px solid rgb(128,128,128)";
        quantità_oggetto.style.border="1px solid rgb(128,128,128)";
        categoria_oggetto.style.border="1px solid rgb(128,128,128)";

    }
    console.log(row_count);
        let row = document.createElement("tr");
        row.setAttribute(`id`,`row_${row_count}`)
        row.innerHTML=`
        <td>${nome}</td>
        <td>${prezzo}€</td>
        <td>${sconto}%</td>
        <td><input type="number" value=${quantità} min="1" class="table_input" id="input_${row_count}"></td>
        <td>${categoria}</td>
        <td><button onclick="elimina(${row_count})" class="button" id="elimina">Elimina</button></td>
        <td><button onclick="mostra_modifica(${row_count})" class="button" id="modifica">Modifica</button></td>`
        row_count++;
        document.getElementById("receipt").appendChild(row);
        calcola();
}

function calcola() {
    console.log(row_count);
    document.getElementById("risposta").innerHTML ="";
    let tot = 0;
    let tot_sconto = 0 ;

    lista.forEach( (x,i) => {
        let quantità = parseInt(document.getElementById(`input_${i}`).value);
        x.quantità = quantità;
        tot += x.prezzo*x.quantità;
    })

    lista.forEach( (x) => tot_sconto += (x.prezzo-(x.prezzo*x.sconto)/100)*x.quantità );

    document.getElementById("risposta").innerHTML += `
    <p>Il totale senza sconto è: ${tot.toFixed(2)}€</p><br>
    <p>Il totale scontato è: ${tot_sconto.toFixed(2)}€</p><br>
    <p>A testa servono senza sconto: ${tot/10}€</p><br>
    <p>A testa servono con lo sconto: ${tot_sconto/10}€</p><br>
    `;
}

function elimina(x) {
    lista.splice(x,1);

    console.log(row_count);
    
    lista.forEach( (x,i) =>{
    
        let row = document.getElementById(`row_${i}`);
        row.innerHTML= `
            <td>${x.nome}</td>
            <td>${x.prezzo}€</td>
            <td>${x.sconto}%</td>
            <td><input type="number" value="${x.quantità}" min="1" class="table_input" id="input_${i}"></td>
            <td>${x.categoria}</td>
            <td><button onclick="elimina(${i})" class="button" id="elimina">Elimina</button></td>
            <td><button onclick="mostra_modifica(${i})" class="button" id="modifica">Modifica</button></td>`
    }  )

    document.getElementById(`row_${row_count-1}`).remove();
    row_count--;
    calcola();
}

function mostra_modifica(i){
document.getElementById("div_modifica").style.display="flex";
modifica_riga=i;
}

function modifica(){
    let item = lista[modifica_riga];
    document.getElementById("div_modifica").style.display="none";
    item.prezzo = parseFloat(document.getElementById("modifica_prezzo").value)
    item.sconto = parseFloat(document.getElementById("modifica_sconto").value)
    item.prezzo = parseFloat(document.getElementById("modifica_categoria").value)


    let row = document.getElementById(`row_${modifica_riga}`);
        row.innerHTML= `
            <td>${item.nome}</td>
            <td>${item.prezzo}€</td>
            <td>${item.sconto}%</td>
            <td><input type="number" value="${item.quantità}" min="1" class="table_input" id="input_${modifica_riga}"></td>
            <td>${item.categoria}</td>
            <td><button onclick="elimina(${modifica_riga})" class="button" id="elimina">Elimina</button></td>
            <td><button onclick="mostra_modifica(${modifica_riga})" class="button" id="modifica">Modifica</button></td>`
}