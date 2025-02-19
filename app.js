let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];
let highest=0;
document.addEventListener("keypress",function (){
    if(started==false){
        started=true;
        console.log("game is started");
        levelup();
    }
});
function flashbtn(randbtn){
    randbtn.classList.add("flash");
    setTimeout(function(){
       randbtn.classList.remove("flash")
    },500);
}
function levelup(){
    userseq=[];
  level++;
  h2.innerText=`Level ${level}`;
  let randomindex=Math.floor(Math.random()*4);
  let randcol=btns[randomindex];
  gameseq.push(randcol);
  let randbtn=document.querySelector(`.${randcol}`);
  flashbtn(randbtn);
}
function checkans(idx){
  if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
  }
  else{
    if(highest<level)highest=level;
    h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Highest Score was <b>${highest}</b><br>Press Any Key To Restart`;
    document.querySelector("body").style.background="red";
    setTimeout(function () {
        document.querySelector("body").style.background="black";
    },150)
    reset();
  }
}
function btnpress(){
    let btn=this;
    flashbtn(btn);
    let usercol=btn.getAttribute("id");
    userseq.push(usercol);
    checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
 for(btn of allbtn){
    btn.addEventListener("click",btnpress);

 }
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}