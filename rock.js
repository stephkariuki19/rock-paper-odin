const finalMessage =document.querySelector(".final-text");
const finalWinner = document.querySelector(".final-winner")
finalMessage.remove()
const scoreBoard = document.querySelector(".score-board")
const computerRoundScore = document.querySelector(".computer-result")
const playerRoundScore = document.querySelector(".player-result")
let playerScore =0;
let  computerScore =0;
let round =1;
const computerChoice =()=>{
    const choices  =["rock","paper","scissors"];
     const choice = choices[Math.floor(Math.random()*choices.length)]
     return choice;
     }
 const playerChoice = ()=>{
        const answer= prompt("enter your choice");
         return answer.toLowerCase();
     }
 
 function play(player){
console.log("Round: "+round);
console.log(`player took ${player}`)
 const computer = computerChoice()
 console.log(`computer took ${computer}`)
 console.log("player score :"+playerScore)
 console.log("comp score : "+computerScore)
 playerRoundScore.innerHTML= playerScore
 computerRoundScore.textContent = computerScore
 document.querySelector(".round-value") .textContent=round;
    if(
         (player == "rock" &&  computer == "scissors")||
         (player == "scissors" && computer == "paper")||
         (player == "paper" && computer == "rock"))
         { 
            declareWin();
            round++;
             return playerScore++;
             
             
             
         }else if (
         (player == "rock" && computer == "paper")||
         (player == "scissors" && computer== "rock")||
        (player == "paper" && computer == "scissors")
         )
         {  declareWin();
            round++; 
            return computerScore++;
            
              
         
         }else{
            declareWin();
            round++;
            return "Tie"
                 
               }
 
 }

 function rockChoice(){
    return play("rock")

 }
 function paperChoice(){
    return play("paper")

 }
 function scChoice(){
    return play("scissors")

 }
 const rockBtn = document.querySelector(".rock")
 const paperBtn = document.querySelector(".paper")
 const scBtn = document.querySelector(".scissors")
 scBtn.addEventListener("click",scChoice)
 paperBtn.addEventListener("click",paperChoice)
 rockBtn.addEventListener("click",rockChoice)
 function declareWin(){
    if(playerScore==5){
        console.log("You have won ")
        console.log(`Final results: Player: ${playerScore} : Computer: ${computerScore}`)
        scoreBoard.appendChild(finalMessage)
        finalWinner.textContent = "YOU WON"
        
    }else if(computerScore==5){
        console.log("Computer  has won")
        console.log(`Final results: Player: ${playerScore} : Computer: ${computerScore}`)
        scoreBoard.appendChild(finalMessage)
        finalWinner.textContent = "COMPUTER WON"
    }
 }
 
     
 
 
 
 
 

 
 
     
 