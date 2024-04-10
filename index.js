let userscore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const btn=document.querySelector("button");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const renewScore=(userscore,compScore)=>{
    
        userScorePara.innerText=0;
        userscore===0;
    compScorePara.innerText=0;
    compScore===0;
    document.querySelector("body").style.backgroundColor="white";
        
    
}

const genCompchoice=()=>{
    const options=["rock","paper","scissors"]; 
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

const draw=()=>{
    console.log("Game Drawn");
    msg.innerText="Game drawn.. Play again!!";
    document.querySelector("body").style.backgroundColor="white";
}

const showWinner=(win,userChoice,compchoice)=>{
    if(win){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you won");
        msg.innerText=`You Won! Your ${userChoice} beats ${compchoice}`;
        document.querySelector("body").style.backgroundColor="Green";
    }
    else{

        compScore++;
        compScorePara.innerText=compScore;
        console.log("you Lost");
        msg.innerText=`You Lost! ${compchoice} beats your ${userChoice}`;
        document.querySelector("body").style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{

    console.log("userChoice = ",userChoice);

    // generate the computer choice randomly
    const compchoice=genCompchoice();
    console.log("compchoice = ",compchoice);

    if(userChoice==compchoice){
        // draw game
        draw();
    }
    else{
        let win=true;
        if(userChoice==="rock"){
            win=compchoice==="paper"?false: true;
        }
        else if(userChoice==="paper"){
           win= compchoice==="scissors"?false:true;
        }
        else{
            win=compchoice==="rock"?false:true;
        }
        showWinner(win,userChoice,compchoice);
    }

    


}



choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

btn.addEventListener("click",renewScore);