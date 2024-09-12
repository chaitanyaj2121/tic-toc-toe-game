let gameOver=new Audio("assets/AUDIO.wav")

let box=document.querySelectorAll(".box");
let innertext=document.querySelectorAll(".box-text");

let turn="X";

//Function to change turn

const changeTurn=()=>{
    if(turn==="X"){
        turn="0";
    }
    else{
        turn="X";
    }
}

// Function to check win
function checkwin() {
        if ((innertext[0] & innertext[1] & innertext[2])==="X") {
        alert("X is the winner");
    }
}


for (let index = 0; index < box.length; index++) {
     
    box[index].addEventListener("click",()=>{
        innertext[index].innerHTML= `${turn}`;
        changeTurn();

    })
    checkwin();
}