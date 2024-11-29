window.onload = function(){

let myArray = [`Antonio `, `Balan: `,  `10`, `Cristian `, `Baldinazzo: `,  `6`, `Riccardo `, `Baldinazzo: `,  `5`, `Francesco `, `Barin: `,  `8`,`Derek `, `Biolo: `,  `9`, `Cristian `, `Borsan: `,  `7`,`Davide `, `Bisello: `,  `4`, `Manuel `, `De Stefano: `,  `10`] ;
let scrivi = ``;


for (let i = 0; i<24; i){

    for (let j = 0; j<3; j++){

    scrivi += myArray[i];
    i++;
    }
    scrivi += `<br>`
}

document.body.innerHTML = scrivi ;
}