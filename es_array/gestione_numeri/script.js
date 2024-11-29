function calcola(){

    let str = document.getElementById("num").value;
    let num = ``;
    let somma = 0;

    num = str.split(`,`);
    console.log(num);

    for (let i = 0; i< num.length; i++){
        
        if ( !isNaN(parseFloat(num[i])) ){
        somma += parseFloat(num[i]);
        } else {
            alert(`non puoi inserire dei non numeri come valori`);
            document.getElementById("num").value = ``;
            return;
        }
    }

    document.getElementById(`risposta`).innerHTML = `la somma dei numeri che hai inserito è ${somma}`;
}