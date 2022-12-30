const computerScore=0;
const playerScore =0;
const rounds =0
for(i=0;i<5;i++){
function play(player,computer){
    if(
    (player == "rock" &&  computer == "scissors")||
    (player == "scissors" && computer == "paper")||
    (player == "rock" && computer == "paper")||
    (player == "paper" && computer == "rock"))
    {
        playerScore++;
        rounds++;
        return playerScore;
        
    }else if (
    (player == "rock" && computer == "paper")||
    (player == "scissors" && computer== "rock")||
    (player == "scissors" && computer== "rock")||
    (player == "paper" && computer == "scissors")
    )
    {
        computerScore++;
        rounds++;
        return computerScore++;
        
        
        
          }
    if(rounds==5){
        declarewinner();
    }
 

}
}
function declarewinner(){
    if(computerScore>playerScore){
        return "You win"
    }else if(computerScore<playerScore){
        return "Computer wins"
    }else{
        return "tie"
    }
}

const computerChoice =()=>{
const random =Math.floor(Math.random()*3)
switch(random){
        case 0:
            
            return "rock";
            break;
        case 1:
            
            return "paper";
            break;
        case 2:
            
            return "scissors";
            break;
            
    }
        
    }
 const playerChoice = ()=>{
       const answer= prompt("enter your choice");
        return answer.toLowerCase();
    }
const playerSelection = playerChoice()
console.log(`player took ${playerSelection}`)
const computerSelection = computerChoice()
console.log(`computer took ${computerSelection}`)

console.log(play(playerSelection,computerSelection));
        




    
