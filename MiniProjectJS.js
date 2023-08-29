let gameSeq = [];
let userSeq = [];
let hScore = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("current Level : ", level);
    // let idx = level-1;

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 700);
        }
    } else {
        hScore.push(level*25);
        // // console.log(hScore);

        for (let i = 0; i < hScore.length; i++) {
            if (highScore < hScore[i]) {
                highScore = hScore[i];
            }
        }
        // console.log(`Your highest score is : `, highScore);
        h2.innerHTML = `<b>Your highest score is : ${highScore}</b>`;

        h3.innerHTML = `<b>Game Over!</b> <br> <b>Level ${level}</b> <br> Your score is <b>${level*25}</b><br> Press any key to start the game.`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}