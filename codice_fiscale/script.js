let codice_fiscale

function user_name(){
    let nome = document.getElementById(`nome`).value;
    let name_caracther = ``;
    let conta = 0;

    name = name.toLowercase();

    for (let i = 0; i<nome.length; i++){

        if( !(nome[i]==="a" || nome[i]==="e" || nome[i]==="i" || nome[i]==="o" || nome[i]==="u") && conta<3 ){
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

    }
    codice_fiscale += name_caracther;
}

function user_surname(){

}