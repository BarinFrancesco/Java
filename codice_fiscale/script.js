function codice(){
    let codice_fiscale =``;
    let cognome = user_name(`cognome`).toUpperCase();
    let nome = user_name(`nome`).toUpperCase();
    let anno = data_nascita().toUpperCase();
    let codice_finale = codice_catastale();

    codice_fiscale = `${cognome}${nome}${anno}${codice_finale}`;

    let carattere_controllo = check_digit(`${codice_fiscale}`);

    codice_fiscale += carattere_controllo;

    document.getElementById("risposta").innerHTML = `Il tuo codice fiscale è: ${codice_fiscale}`;

    //manca controllo finale
}


function user_name(n){
    const vowels = "aeiou";
    let nome = document.getElementById(`${n}`).value;
    let name_caracther = ``;
    let conta = 0;

    nome = nome.toLowerCase();

    if (nome==`` || nome.length<2){
        alert("C'è un errore nel tuo nome");
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
    let data = document.getElementById('data').value;
    let data_code=``;
    let mese;
    let giorno;
    let sesso = document.querySelector(`input[name='sesso']:checked`).value;


    if(data==``){
        alert("C'è un errore nella data");
        return;
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
    value = value.split(";");

    return value[1];
}

function check_digit(codice){
    let somma = 0;
    let aggiunta=0;

    const valoriDispari = {
        "A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8, 
        "J":9, "K":10, "L":11, "M":12, "N":13, "O":14, "P":15, "Q":16, "R":17, 
        "S":18, "T":19, "U":20, "V":21, "W":22, "X":23, "Y":24, "Z":25, "0":0,
        "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9,
    }

    const valoriPari = {
        "A":1, "B":0, "C":5, "D":7, "E":9, "F":13, "G":15, "H":17, "I":19, 
        "J":21, "K":2, "L":4, "M":18, "N":20, "O":11, "P":3, "Q":6, "R":8, 
        "S":12, "T":14, "U":16, "V":10, "W":22, "X":25, "Y":24, "Z":23, "0":1,
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
    alert(somma);
    let char = String.fromCharCode(somma);
    alert(char);
    return char;
}