let numeri= [];

function aggiungi(){

num = parseInt(document.getElementById(`num`).value);

    if (!isNaN(num)){
    
        numeri.push(num);

    } else {
        alert("deve essere un numero");
    }
    document.getElementById(`num`).value = ``;

}

function trova_pari(){

    let risposta = `<br> Tra i numeri inseriti quelli pari sono: {`;
    let num_pari = [];
    console.log(numeri);

    for (let i = 0; i<numeri.length; i++){

            if ( numeri[i]%2 == 0 ){

                num_pari.push(numeri[i])

            }
        }
        for (let i = 0; i< num_pari.length; i++){
            risposta += `${num_pari[i]}; `;
        }

        document.getElementById(`risposta`).innerHTML = `${risposta}} `;
}