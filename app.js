let gameSeq= [];
let userSeq= [];
let started = false;
let level = 0;

let btns = ["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
// step -1 : keyPress => game started
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started =true;
        levelUp();
    }
});
// step-2 : Flash+ level 1

function gameFlash(btn){
  btn.classList.add("gameflash");
  setTimeout(function(){
    btn.classList.remove("gameflash");
  },250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}

function levelUp(){
    userSeq=[]; 
 level++;
 h2.innerText = `level ${level}`;

//  random btn
let randIndx = Math.floor(Math.random()*3);
let randColor = btns[randIndx];


// randColor store the color of given index.
// .${randColor} here have a class such as yellow,red ,green and purple
let randbtn = document.querySelector(`.${randColor}`);
// console.log(randIndx); 
// console.log(randColor); 
// console.log(randbtn); 
gameSeq.push(randColor);
console.log(gameSeq);
 gameFlash(randbtn);

}

// step 3: btn press

function checkAns(idx){
    // console.log("curr level:",level);
    if(userSeq[idx]===gameSeq[idx]){
   if(userSeq.length==gameSeq.length){
   setTimeout( levelUp,1000);
   }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();    }
}
function btnpress(){
    // console.log(this);
    let btn = this;
    userFlash(btn); 
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btn")
    for(btn of allBtn){
       btn.addEventListener("click",btnpress);
    }

function reset(){
    started = false;
    gameSeq = [];  
    userSeq = [];
    level = 0;
}