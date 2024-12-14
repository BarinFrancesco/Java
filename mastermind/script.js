let row = 1;
let color1=``;
let color2=``;
let color3=``;
let color4=``;

window.onload = function(){

    const colors = ["red","green","blue","yellow","purple","light_blue","gray"];

    color1 = colors[Math.floor(Math.random()*7)];
    color2 = colors[Math.floor(Math.random()*7)];
    color3 = colors[Math.floor(Math.random()*7)];
    color4 = colors[Math.floor(Math.random()*7)];
    
    document.getElementById("container_win").setAttribute("style", "display:none;");

    for (let x = 1; x<9; x++){
        for (let y = 1; y<5; y++){
            document.getElementById(`${x}-${y}`).classList = "gray"
        }
    }

}

function reboot(){

    const colors = ["red","green","blue","yellow","purple","light_blue","gray"];

    color1 = colors[Math.floor(Math.random()*7)];
    color2 = colors[Math.floor(Math.random()*7)];
    color3 = colors[Math.floor(Math.random()*7)];
    color4 = colors[Math.floor(Math.random()*7)];

    document.getElementById("container_win").setAttribute("style", "display:none;");

    for (let x = 1; x<9; x++){
        for (let y = 1; y<5; y++){
            document.getElementById(`${x}-${y}`).classList = "gray"
            document.getElementById(`${x}-${y}`).style.border = "none"
        }
    }

    row = 1;

    for (let i = 1; i<5; i++){
        document.getElementById(`${row}-${i}`).setAttribute(`onclick`,`change_color(${i})`);
    }
}





function change_color(y){
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
        
    let btn_color_1 = document.getElementById(`${row}-1`);
    let btn_color_2 = document.getElementById(`${row}-2`);
    let btn_color_3 = document.getElementById(`${row}-3`);
    let btn_color_4 = document.getElementById(`${row}-4`);
    let change = "";



    if (btn_color_1.classList == color1){
        change = "4px solid rgb(10, 120, 20)"
    } else if (btn_color_1.classList == color2 || btn_color_1.classList == color3  || btn_color_1.classList == color4 ){
        change = "4px solid rgb(190, 100, 10)"
    } else {
        change = `4px solid rgb(150, 30, 30)`
    }
    btn_color_1.style.border = change;



    if (btn_color_2.classList == color2){
        change = "4px solid rgb(10, 120, 20)"
    } else if (btn_color_2.classList == color1 || btn_color_2.classList == color3  || btn_color_2.classList == color4 ){
        change = "4px solid rgb(190, 100, 10)"
    } else {
        change = `4px solid rgb(150, 30, 30)`
    }
    btn_color_2.style.border = change;



    if (btn_color_3.classList == color3){
        change = "4px solid rgb(10, 120, 20)"
    } else if (btn_color_3.classList == color1 || btn_color_3.classList == color2  || btn_color_3.classList == color4 ){
        change = "4px solid rgb(190, 100, 10)"
    } else {
        change = `4px solid rgb(150, 30, 30)`
    }
    btn_color_3.style.border = change;



    if (btn_color_4.classList == color4){
        change = "4px solid rgb(10, 120, 20)"
    } else if (btn_color_4.classList == color1 || btn_color_4.classList == color2  || btn_color_4.classList == color3 ){
        change = "4px solid rgb(190, 100, 10)"
    } else {
        change = `4px solid rgb(150, 30, 30)`
    }
    btn_color_4.style.border = change;

    if(btn_color_1.classList == color1 && btn_color_2.classList == color2 && btn_color_3.classList == color3 && btn_color_4.classList == color4){
        document.getElementById("container_win").style.display = "block";
        document.getElementById("win_text").innerHTML = "COMPLIMENTI, HAI VINTO";
    } else if(row == 8){
        document.getElementById("container_win").style.display = "block";
        document.getElementById("win_text").innerHTML = "PECCATO, HAI PERSO";
    }

    row++
    for (let i = 1; i<5; i++){
        document.getElementById(`${row}-${i}`).setAttribute(`onclick`,`change_color(${i})`)
    }
    for (let i = 1; i<5; i++){
        document.getElementById(`${row-1}-${i}`).setAttribute(`onclick`,``)
    }

}