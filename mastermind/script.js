let row = 1;
let color1=``;
let color2=``;
let color3=``;
let color4=``;



window.onload = function(){
        for ( let i = 1; 1<5; i++ ){
            let x = Math.floor(Math.random()*7);
            alert(x);
        }
}

function change_color(x,y){
    let btn = document.getElementById(`${row}-${y}`);
    let color;

    switch (btn.classList.toString()){
        case "red":
            color ="green";
            break;

        case "green":
            color ="blue";
            break;
        
        case "blue":
            color ="yellow";
            break;
        
        case "yellow":
            color ="purple";
            break;
        
        case "purple":
            color ="light_blue";
            break;

        case "light_blue":
            color ="gray";
            break;

        case "gray":
            color ="red";
            break;
    }

    btn.setAttribute("class", `${color}`);
}

function verifica(){
        
    row++
    for (let i = 1; i<5; i++){
        document.getElementById(`${row}-${i}`).setAttribute(`onclick`,`change_color(${row},${i})`)
    }
    for (let i = 1; i<5; i++){
        document.getElementById(`${row-1}-${i}`).setAttribute(`onclick`,``)
    }

}