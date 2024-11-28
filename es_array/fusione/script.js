let myArray1 = [];
let myArray2 = [];

function aggiungi1(){

    let aggiunta = document.getElementById("array1").value;

    myArray1.push(aggiunta);
    document.getElementById("array1").value=``;

}

function aggiungi2(){

    let aggiunta = document.getElementById("array2").value;

    myArray2.push(aggiunta);
    document.getElementById("array2").value=``;

}

function unisci(){

    let fusione = [];
    let risposta = `<br> {`;

    for (let i = 0; i< Math.max(myArray1.length, myArray2.length); i++){

        if (myArray1[i]){
            fusione.push(myArray1[i]);
        }

        if (myArray2[i]){
            fusione.push(myArray2[i]);
        }

    }

    for (let i = 0; i<fusione.length; i++){
        risposta += `${fusione[i]}; `;
    }
    document.getElementById(`risposta`).innerHTML = `${risposta}}`
}