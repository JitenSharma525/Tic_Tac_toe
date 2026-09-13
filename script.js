let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-button");
let message = document.querySelector(".msg");
// console.log(boxes, resetBtn);

let turnO = true;  // playerX, playerO.

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

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    message.innerText = "";
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO == true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = (winner) => {
    for(pattern of winPatterns) {
        let position1_value = boxes[pattern[0]].innerText;
        let position2_value = boxes[pattern[1]].innerText;
        let position3_value = boxes[pattern[2]].innerText;
        if(position1_value != "" && position2_value != "" && position3_value != ""){
            if(position1_value == position2_value && position2_value == position3_value){
                //console.log("Winner", position1_value);
                message.innerText = `Congratulation the winner is ${position1_value}`;
                disableBoxes();
            }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
