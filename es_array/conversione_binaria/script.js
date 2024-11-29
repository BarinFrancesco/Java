let myArray1 = [];
let myArray2 = [];

function calcola(){

    let bin = document.getElementById("array1").value;
    let exp = 0;
    let somma = 0;
    
    bin = bin.split("");
    
    for (let i = bin.length-1; i>=0; i-- ){

        if(bin[i]==0 || bin[i]==1){
        somma += ((bin[i])*(2**exp));
        exp++;
        } else {
            alert(`il numero che hai inserito non è binario`);
            return;
        }
    }

    document.getElementById(`risposta`).innerHTML = `${somma}`
}
