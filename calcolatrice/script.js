let segno;
let riga = 1;
function add(n){
    let numero = document.getElementById(`num_${riga}`);
    
    if(n<=9){
    numero.innerText += n;
    } else {
        numero.innerText += `,`;
    }
}

function operazione(x){
    let primo_numero = document.getElementById(`num_1`);
    let secondo_numero = document.getElementById(`num_2`);
    
    switch (x){

        case 1:
            segno = `+`;
            primo_numero.innerText += segno;
            break;
        
        case 2:
           segno = `-`;
           primo_numero.innerText += segno;
            break;
        
        case 3:
            segno = `*`;
            primo_numero.innerText += segno;
            break;

        case 4:
            segno = `/`;
            primo_numero.innerText += segno;
            break;

        case 5:
            primo_numero.innerText= ``;
            secondo_numero.innerText= ``;
            break;

        case 6:
            segno = `√`;
            secondo_numero = document.getElementById(`num_2`).innerText = `0`;
            primo_numero.innerText += segno;
            break;

        case 7:
            segno = `x^2`;
            secondo_numero = document.getElementById(`num_2`).innerText = `0`;
            primo_numero.innerText += `^2`;
            break;
        
        case 8:
            segno = `1/x`;
            secondo_numero = document.getElementById(`num_2`).innerText = `0`;
            primo_numero.innerText += `/x`;
            break;
        
    }

    if(riga == 1 && primo_numero.innerText!=``){
        riga = 2;
    } else {
        riga = 1;
    }

}

function calcola(){
    let num_1 = parseFloat(document.getElementById(`num_1`).innerText);
    let num_2 = parseFloat(document.getElementById(`num_2`).innerText);
    let risultato = 0;

    if(!isNaN(num_1) && !isNaN(num_2)){
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
            if(num_2 == 0){
                alert("ERROR");
                document.getElementById(`num_1`).value = ``;
                document.getElementById(`num_2`).value = ``;
            }else{
            risultato += num_1/num_2;
            }
            break;

        case `√`:
            risultato = Math.sqrt(num_1);
            break;
        
        case `x^2`:
            risultato = num_1*num_1;
            console.log(risultato)
            break;

        case `1/x`:
            if(num_1 == 0){
                alert("ERROR");
                document.getElementById(`num_1`).value = ``;
                document.getElementById(`num_2`).value = ``;
            } else {
                risultato = 1/num_1;
            }

            break;
    }

    } else {
        alert(`sono nan`);
    }

    document.getElementById(`num_1`).innerText = risultato; 
    document.getElementById(`num_2`).innerText = ``; 
    document.getElementById(`results`).innerHTML += `<br> <div id="inner_history"><p id="history_p">${num_1.toFixed(4)}${segno}${num_2.toFixed(4)}=${risultato.toFixed(4)}</p></div> `
    riga = 1;
}