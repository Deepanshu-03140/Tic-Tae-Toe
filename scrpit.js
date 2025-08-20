let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-continer");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// reset game
const resetGame = () => {
    turnO = true;
    enabBoxes();
    msgContainer.classList.add("hide");
}

//box onclick
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("hello");
        if(turnO){
            //player 1
            box.innerText = "O";
            turnO = false;
        }
        else{
            //player 2
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    })
})

//disable box
const disableBoxes = () => {
    for(let box of boxes){
    box.disabled = true;
    }
}
 
//enable box 
const enabBoxes = () => {
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
}

//show winner 
const showWinner = (Winner) => {
    msg.innerText = `Congrulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


//check winner 
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos1Va2 != "" && pos1Va3 != ""){
            if(pos1Val === pos1Va2 && pos1Va2 === pos1Va3){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
