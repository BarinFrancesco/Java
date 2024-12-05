let codice_fiscale =``;
const vowels = /aeiou/;

function codice(){
    
    let cognome = user_name(`cognome`);
    let nome = user_name(`nome`);
    let anno = data_nascita();


    codice_fiscale = `${cognome}${nome}`;
    alert(codice_fiscale);
}

function user_name(n){

    let nome = document.getElementById(`${n}`).value;
    let name_caracther = ``;
    let conta = 0;

    nome = nome.toLowerCase();

    for (let i = 0; i<nome.length; i++){

        if( !(nome[i]==="a" || nome[i]==="e" || nome[i]==="i" || nome[i]==="o" || nome[i]==="u") && conta<3) {   
            name_caracther += nome[i];
            conta += 1;
        }
    }

    if(conta<3){
        for (let i = 0; i<nome.length; i++){

            if ((nome[i]==="a" || nome[i]==="e" || nome[i]==="i" || nome[i]==="o" || nome[i]==="u") && conta<3){
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
    data = data.split("/");


    if(data[0]>31 || data[0]<0){
        alert("errore nel giorno della data");
        return;
    } 

    if (data[1]>12 || data[1]<0){
        alert("errore nel mese della data");

        return;
    } 

    if (data[2]>2024 || data[2]<1900){
        alert("errore nell'anno della data");

        return;
    }

    data_code += `${data[2]}${data[3]}`

    switch (data[1]){
        case 1:
            break;

        case 2:

         break;
        case 3:
            break;


        case 4:
            break;


        case 5:
            break;


        case 6:
            break;


        case 7:
             break;


        case 8:
            break;


        case 9:
                                        
            break;


        case 10:
            break;


        case 11:
         break;


        case 12:
         break;

    }
}
