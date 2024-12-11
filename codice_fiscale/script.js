function codice(){
    let codice_fiscale =``;
    let cognome = user_name(`cognome`);
    let nome = user_name(`nome`);
    let anno = data_nascita();
    let codice_finale = codice_catastale();

    if (!cognome || !nome || !anno || !codice_finale){
        alert("Impossibile calcolare il codice: non hai inserito tutti i dati");
        return;
    }

    codice_fiscale = `${cognome}${nome}${anno}${codice_finale}`;

    let carattere_controllo = check_digit(`${codice_fiscale}`);

    codice_fiscale += carattere_controllo;


    document.getElementById("risposta").innerHTML = `Il tuo codice fiscale è: ${codice_fiscale.toUpperCase()}`;

}


function user_name(n){
    const vowels = "aeiou";
    let nome = document.getElementById(`${n}`).value;
    let name_caracther = ``;
    let conta = 0;

    nome = nome.toLowerCase();

    if (nome==`` || nome.length<2){
        alert("C'è un errore nel tuo nome");
        return false;
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
    let data = document.getElementById('data').value;
    let data_code=``;
    let mese;
    let giorno;
    let sesso = document.querySelector(`input[name='sesso']:checked`).value;


    if(data==``){
        alert("C'è un errore nella data");
        return false;
    }

    data = data.split("-");

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
        giorno = parseInt(data[2])+40;
    } else {
        giorno = data[2].toString().padStart(2, '0');
    }

    data_code += `${(data[0]%100).toString().padStart(2, '0')}${mese}${giorno}`;

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

    if(value==""){
        return false;
    }
    value = value.split(";");

    return value[1].toLowerCase();
}

function check_digit(codice){
    let somma = 0;
    let aggiunta=0;

    const valoriDispari = {
        "a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7, "i":8, 
        "j":9, "k":10, "l":11, "m":12, "n":13, "o":14, "p":15, "q":16, "r":17, 
        "s":18, "t":19, "u":20, "v":21, "w":22, "x":23, "y":24, "z":25, "0":0,
        "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9,
    }

    const valoriPari = {
        "a":1, "b":0, "c":5, "d":7, "e":9, "f":13, "g":15, "h":17, "i":19, 
        "j":21, "k":2, "l":4, "m":18, "n":20, "o":11, "p":3, "q":6, "r":8, 
        "s":12, "t":14, "u":16, "v":10, "w":22, "x":25, "y":24, "z":23, "0":1,
        "1":0, "2":5, "3":7, "4":9, "5":13, "6":15, "7":17, "8":19, "9":21,
    }

    for (let i = 0; i<codice.length; i++){

        if(i%2 == 0){

            aggiunta = valoriPari[`${codice[i]}`];
            somma += aggiunta;


        }else{

            aggiunta = valoriDispari[`${codice[i]}`];
            somma += aggiunta;

        }
    }

    somma = (somma%26)+65;
    let char = String.fromCharCode(somma);
    return char;
}