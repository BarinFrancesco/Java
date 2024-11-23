let segno;
let riga = 1;
function add(n){
    let numero = document.getElementById(`num_${riga}`);
    numero.innerText += n;
}

function operazione(x){
    let primo_numero = document.getElementById(`num_1`);
    
    switch (x){

        case 1:
            segno = `+`;
            break;
        
        case 2:
           segno = `-`;
            break;
        
        case 3:
            segno = `*`;
            break;

        case 4:
            segno = `/`;
            break;

        case 5:
            primo_numero.innerText= ``;
            break;
    }

    console.log(parseInt(primo_numero.innerText))
    console.log(riga)

    if(riga==1 && primo_numero!=``){
        riga = 2;
    } else {
        riga = 1;
    }

}

function calcola(){
    let num_1 = parseFloat(document.getElementById(`num_1`).innerText);
    let num_2 = parseFloat(document.getElementById(`num_2`).innerText);
    let risultato = 0;

    switch (segno){

        case `+`:
            risultato += num_1+num_2;
            break;


        case `-`:
            risultato += num_1-num_2;
            break;


        case `*`:
            risultato += num_1*num_2;
            break;
        

        case `/`:
            risultato += num_1/num_2;
            break;
    }
    document.getElementById(`num_1`).innerText = risultato; 
    document.getElementById(`num_2`).innerText = ``; 
    riga = 1;
}