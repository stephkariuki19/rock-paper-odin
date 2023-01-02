const computerChoice =()=>{
    const choices  =["rock","paper","scissors"];
     const choice = choices[Math.floor(Math.random()*choices.length)]
     return choice;
     }
 const playerChoice = ()=>{
        const answer= prompt("enter your choice");
         return answer.toLowerCase();
     }
 
 
 function play(player,round){
console.log("Round: "+round);
 console.log(`player took ${player}`)
 const computer = computerChoice()
 console.log(`computer took ${computer}`)
    if(
         (player == "rock" &&  computer == "scissors")||
         (player == "scissors" && computer == "paper")||
         (player == "rock" && computer == "paper")||
         (player == "paper" && computer == "rock"))
         { 
             
             return "You won";
         }else if (
         (player == "rock" && computer == "paper")||
         (player == "scissors" && computer== "rock")||
         (player == "scissors" && computer== "rock")||
         (player == "paper" && computer == "scissors")
         )
         {   
             return  "Computer won";
         
         }else{
                 return "Try again"
               }
 
 }
 
 function game(){
 let playerScore =0;
 let  computerScore =0;
 for(let i = 1;i<4;i++){
    const playerSelection = playerChoice();
         const result =play(playerSelection,i);
         switch(result){
            case "You won":
                console.log("you win");
                playerScore++;
                break;
            case "Computer won":
                console.log("computer wins");
                computerScore++;
                break;
            default:
                console.log("was a tie or wrong entry");
                break;
             }
         
     }
     console.log(`Final results: Player: ${playerScore} : Computer: ${computerScore}`)
     if(playerScore>computerScore){
         console.log("You won after 3 rounds")
     }else if(playerScore<computerScore){
         console.log("Computer won after 3 rounds")
     }
     else{
        console.log("was a tie")
     }
 }
 
 game();
 
 
     
 