const computerChoice =()=>{
   const choices  =["rock","paper","scissors"];
    const choice = choices[Math.floor(Math.random()*choices.length)]
    return choice;
    }
const playerChoice = ()=>{
       const answer= prompt("enter your choice");
        return answer.toLowerCase();
    }
const playerSelection = playerChoice()
console.log(`player took ${playerSelection}`)
const computerSelection = computerChoice()
console.log(`computer took ${computerSelection}`)

function play(player,computer){
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
console.log( play(playerSelection,computerSelection));
function game(){
const playerScore =0;
const computerScore =0;
const result = "";
   console.log("game activated")
    for(let i = 0;i<5;i++){
        const result =play(playerSelection,computerSelection);
        
    }
    if(playerScore>computerScore){
        console.log("You won after 5 rounds")
    }else{
        console.log("Computer won after 5 rounds")
    }
}


    
