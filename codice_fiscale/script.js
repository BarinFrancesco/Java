function codice(){
    let codice_fiscale =``;
    let cognome = user_name(`cognome`).toUpperCase();
    let nome = user_name(`nome`).toUpperCase();
    let anno = data_nascita().toUpperCase();
    let codice_finale = codice_catastale();

    codice_fiscale = `${cognome}${nome}${anno}${codice_finale}`;
    document.getElementById("risposta").innerHTML = `Il tuo codice fiscale è: ${codice_fiscale}`;
}


function user_name(n){
    const vowels = "aeiou";
    let nome = document.getElementById(`${n}`).value;
    let name_caracther = ``;
    let conta = 0;

    nome = nome.toLowerCase();

    if (nome==``){
        alert("ci sono dei campi mancanti");
        return;
    } 

if( n==`nome` ){

    for (let i = 0; i<nome.length; i++){

        if(!(vowels.includes(nome[i]))) {   
            conta += 1;
        }
    }

    if(conta<4){
        conta = 0;
        for (let i = 0; i<nome.length; i++){

            if(!(vowels.includes(nome[i])) && conta<3) {   
                name_caracther += nome[i];
                conta += 1;
            }
        }

        if(conta<3){

            for (let i = 0; i<nome.length; i++){

                if ((vowels.includes(nome[i])) && conta<3){
                    name_caracther += nome[i];
                    conta += 1;
                }
            }

            if(conta<3){
                    name_caracther +=`x`
            }

        }

    } else {

        conta = 0;
        for (let i = 0; i<nome.length; i++){

            if(!(vowels.includes(nome[i])) && conta<4) {   
                if (conta!=1){
                    name_caracther += nome[i];
                    
                } else {
                }
                conta += 1;
            }
        }
    }
} else {

        for (let i = 0; i<nome.length; i++){

            if(!(vowels.includes(nome[i])) && conta<3) {   
                name_caracther += nome[i];
                conta += 1;
            }
        }

        if(conta<3){

            for (let i = 0; i<nome.length; i++){

                if ((vowels.includes(nome[i])) && conta<3){
                    name_caracther += nome[i];
                    conta += 1;
                }
            }

            if(conta<3){
                    name_caracther +=`x`
            }

        }
}

    return name_caracther;
}


function data_nascita(){
    let data = document.getElementById("anno").value;
    let data_code=``;
    let mese;
    let giorno;
    let sesso = document.querySelector(`input[name='sesso']:checked`).value;

    if (data==``){
        alert("ci sono dei campi mancanti");
        return;
    } 
    
    data = data.split("/");


    if(data[0]>31 || data[0]<0 || data[1]>12 || data[1]<0 || data[2]>2024 || data[2]<1900){
        alert("C'è unerrore nella data");
        return;
    }

    switch (parseInt(data[1])){
        case 1:
            mese = `a`;
            break;

        case 2:
            mese = `b`;
            break;

        case 3:
            mese = `c`;
            break;

        case 4:
            mese = `d`;
            break;


        case 5:
            mese = `e`;
            break;


        case 6:
            mese = `h`;
            break;


        case 7:
            mese = `l`;
             break;


        case 8:
            mese = `m`;
            break;


        case 9:
            mese = `p`;                   
            break;


        case 10:
            mese = `r`;
            break;


        case 11:
            mese = `s`;
            break;


        case 12:
            mese = `t`;
            break;
    }

    if (sesso == `f`){
        giorno = parseInt(data[0])+40;
    } else {
        giorno = data[0].toString().padStart(2, '0');
    }

    data_code += `${(data[2]%100).toString().padStart(2, '0')}${mese}${giorno}`;

    return data_code;
}


function leggi_lista(input){
    let testo= ``;
    let lista_val = input.files[0];

        if (lista_val){
            let lettore = new FileReader();

            lettore.readAsText(lista_val);

            lettore.onload = function(){
                testo = lettore.result;

                riempi_select(testo);
            }
        }


}


function riempi_select(testo){
    let lista = testo.split("\r\n");
    let elenco = document.getElementById("comune");
    let element_select;

    for ( let i = 0; i< lista.length; i++){
        element_select = document.createElement("option");
        element_select.text = lista[i];
        element_select.value = lista[i];
        elenco.add(element_select);
    }
}


function codice_catastale(){
    let value = document.getElementById("comune").value;
    value = value.split(";");

    return value[1];
}
