function genera_form(n){

    if (n==1){
        document.getElementById(`decritta`).innerHTML = `<button onclick="genera_form(2)" class="btn_r" id="genera_form_2"> Decritta il messaggio</button>`;
        
        document.getElementById(`crittografa`).innerHTML=`
            <label for="messaggio_da_crittografare">Inserisci il messaggio che devi crittografare:</label>
            <input type="text" id="messaggio_da_crittografare">
            <button onclick="cambia_messaggio(1)" class="btn_l"> Trasforma </button>
            <p id="risposta"></p>
        `;
    } else{
        document.getElementById(`crittografa`).innerHTML = `<button onclick="genera_form(1)" class="btn_l" id="genera_form_1"> Cripta il messaggio</button>`;

        document.getElementById(`decritta`).innerHTML = `
            <label for="messaggio_da_crittografare">Inserisci il messaggio che devi decrittare:</label>
            <input type="text" id="messaggio_da_decrittare">
            <button onclick="cambia_messaggio(2)" class="btn_r"> Trasforma </button>
            <p id="risposta"></p>
        `;
    }

}

function cambia_messaggio(x){

    if(x==1){
        
        let str = document.getElementById(`messaggio_da_crittografare`).value;
        let traduzione=``;

        for (let i=0; i < str.length; i++ ){

            
            let codice = str.charCodeAt(i);

            if (codice!=32 && codice!=44 && codice!=39 && codice!=59 && codice!=58 && codice!=63){
                
                if (codice>=97 && codice<=122){

                    if (codice < 119 ){
                        codice+=3;
                    } else {
                        codice = codice-23;
                    }

                } else {

                    if (codice < 87 ){
                        codice+=3;
                    } else {
                        codice = codice-23;
                    }

                }


            }
            traduzione += String.fromCharCode(codice);
        }
        document.getElementById(`risposta`).innerHTML = `${traduzione}`;
    } else {
        
        let str = document.getElementById(`messaggio_da_decrittare`).value;
        let traduzione=``;

        for (let i=0; i < str.length; i++ ){

            
            let codice = str.charCodeAt(i);

            if (codice!=32 && codice!=44 && codice!=39 && codice!=59 && codice!=58 && codice!=63){

                if (codice>=97 && codice<=122){

                    if (codice > 99){
                        codice-=3;
                    } else {
                        codice = codice+23;
                    } 

                } else {

                    if (codice > 67){
                        codice-=3;
                    } else {
                        codice = codice+23;
                    }
                }
             
            }   

            traduzione += String.fromCharCode(codice);
        }
        document.getElementById(`risposta`).innerHTML = `${traduzione}`;
    }

}