let codice_fiscale =``;
const vowels = "aeiou";

function codice(){
    
    let cognome = user_name(`cognome`);
    let nome = user_name(`nome`);
    let anno = data_nascita();
    let codice_finale = codice_catastale();

    codice_fiscale = `${cognome}${nome}${anno}`;
    alert(codice_fiscale);
}

function user_name(n){

    let nome = document.getElementById(`${n}`).value;
    let name_caracther = ``;
    let conta = 0;

    nome = nome.toLowerCase();

    for (let i = 0; i<nome.length; i++){

        if(!(vowels.includes(nome[i])) && conta<3) {   //==="a" || nome[i]==="e" || nome[i]==="i" || nome[i]==="o" || nome[i]==="u"
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

    return name_caracther;
}

function data_nascita(){
    let data = document.getElementById("anno").value;
    let data_code=``;
    let mese;
    let giorno;
    let sesso = document.querySelector(`input[name='sesso']:checked`).value;
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

function codice_catastale(){
    
}
