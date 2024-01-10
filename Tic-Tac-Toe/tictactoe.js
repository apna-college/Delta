let winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options =["","","","","","","","",""];
let statusText = document.querySelector("h5");
let running = false;
let currPlayer="X";
let cells = document.querySelectorAll(".btn");
let restartbtn = document.querySelector("#restart");

document.addEventListener("keypress",()=>{
    if(running == false){
        initialiseGame();
        running = true;
    }
    else{
        console.log("Game has already Started");
    }
})


function initialiseGame(){
    cells.forEach(cell => cell.addEventListener("click",cellClicked));
    restartbtn.addEventListener("click",restart);
    statusText.textContent = `${currPlayer}'s Turn`;
    running = true;
};

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    // console.log(cellIndex)
    if(options[cellIndex] !="" || !running ){ //from this cell can't be clicked again
        return;
    }

    updateCell(this,cellIndex);
    checkWinner();
};

function updateCell(cell,index){
    options[index] = currPlayer;
    cell.textContent = currPlayer;
};

function changePlayer(){
    currPlayer = (currPlayer == "X") ? "O" : "X" ;
    statusText.textContent = `${currPlayer}'s Turn`;
}

function checkWinner(){
    let roundWon = false;

    for(let i =0;i<winConditions.length;i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if(cellA =="" || cellB=="" || cellC ==""){
            continue;
        }
        if(cellA ==cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    if(roundWon == true){
        statusText.textContent = `${currPlayer} wins!`;
        running = false;
    }else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }else{
        changePlayer();
    }
};

function restart(){
    currPlayer = "X";
    options =["","","","","","","","","",""];
    statusText.textContent = `${currPlayer}'s Turn`;
    cells.forEach(cell => cell.textContent="");
    running = true;
}


