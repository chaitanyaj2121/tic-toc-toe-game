let gameOver = new Audio("assets/AUDIO.wav")
//

let turn = "X";
let isGameOver = "false";

//Function to change turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check win
function checkwin() {

    let boxtext = document.querySelectorAll('.box-text');
    let wins = [
        [0, 1, 2, 0, 5, 0], // First row
        [3, 4, 5, 0, 15, 0], // Second row
        [6, 7, 8, 0, 25, 0], // Third row
        [0, 3, 6, -5, 15, 90], // First column
        [1, 4, 7, 0, 15, 90], // Second column
        [2, 5, 8, 10, 15, 90], // Third column
        [0, 4, 8, 0, 15, 45], // Left diagonal
        [2, 4, 6, 0, 15, 135]  // Right diagonal
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== '') {
              let info=document.querySelector('.info')
                 info.innerText = `${boxtext[e[0]].innerText} has won`;
            isGameOver = "true";

            // Play music after the game over 
            gameOver.play(); 
              

            // js for cutting line
            document.querySelector(".line").style.display = "inline";
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
             count=0;
            setTimeout(() => {
                alert("Congratulations,Click on restart button to start the game again")
            }, 3000);
        }
    });

}

// Game Logic 
let boxes = document.getElementsByClassName("box");
let arrayofboxes=Array.from(boxes);
let count=0;
console.log(arrayofboxes)// It makes the html collection in the array

arrayofboxes.forEach(element => {
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', () => {

        if (boxtext.innerText == '') {
            boxtext.innerText = turn;
            turn = changeTurn();            
            checkwin();
            count++;
            if (isGameOver != "true") {
                document.querySelector('.info').innerText = `Turn for ${turn}`;
            }
        }
    });
});


// Working on reset button
let rstbtn = document.querySelector("#reset");

rstbtn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach(element => {
        element.innerText = " ";
        isGameOver = "true"
        turn = "X";
        if (isGameOver != "false") {
            document.querySelector('.info').innerText = `Turn for ${turn}`;
            isGameOver = "false";
        }
    })

    //To hide the line after the game over
    document.querySelector(".line").style.display = "none";
})
