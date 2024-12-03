let codice_fiscale =``;
const vowels = /aeiou/;

function codice(){
    
    let cognome = user_name(`cognome`);
    let nome = user_name(`nome`);


    codice_fiscale = `${cognome}${nome}`;
    alert(codice_fiscale);
}

function user_name(n){

    let nome = document.getElementById(`${n}`).value;
    let name_caracther = ``;
    let conta = 0;

    nome = nome.toLowerCase();

    for (let i = 0; i<nome.length; i++){

        if( !(nome[i]==="a" || nome[i]==="e" || nome[i]==="i" || nome[i]==="o" || nome[i]==="u") && conta<3) {   /* .include("aeiuo")  */
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
