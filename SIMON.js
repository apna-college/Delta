let gameSeq=[]
let userSeq=[]

let btns=["yellow","green","red","purple"]


let started=false;
let level=0;
let hscore=[]
let highscore=0

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started..")
        started=true;

        levelUp()
    }
        

})



function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`

    let randIndx=Math.floor(Math.random()*3)
    let randColor=btns[randIndx]
    let randBtn=document.querySelector(`.${randColor}`)
    gameFlash(randBtn)
    gameSeq.push(randColor)
    console.log(gameSeq)

}





function gameFlash(btn){
    btn.classList.add("gameflash")
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function btnPress(){
    let btn=this;
    
    userflash(btn)

    userColor=btn.getAttribute("id")
    console.log(userColor)
    userSeq.push(userColor)

Check(userSeq.length-1)
}

function Check(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        hscore.push(level)
        
        for( let i=0;i<hscore.length;i++){
        if(hscore[i]>highscore){
        highscore=hscore[i]
             }
        }
        let h3=document.querySelector("h3")
        h3.innerHTML=`HIGHEST SCORE = ${highscore}`
       
        
        h2.innerHTML=`GAME OVER ! YOUR SCORE IS ${level} <br> PRESS ANY KEY TO RESTART THE GAME `
        wrong()
        reset()


    }

}

let allBtns=document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener('click',btnPress)
}

function reset(){
    userSeq=[]
    gameSeq=[]
    started=false
    level=0

}

function wrong(){
    let body=document.querySelector("body")
    body.style.backgroundColor="red"
    setTimeout(function(){
    body.style.backgroundColor="white"

    },150)

}



