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

function play(player,computer){
    if(player == "rock" &&  computer == "scissors"){
        return "You win";
    }else if (player == "scissors" && computer == "paper"){
        return "You win";
          }
    else if(player == "rock" && computer == "paper"){
        return "You win";
          }
    else if(player == "rock" && computer == "paper"){
        return "You lose";
          }
    else if(player == "scissors" && computer== "rock"){
        return "You lose";
          }
    else if(player == "paper" && computer == "scissors"){
        return "You lose";
          }
    else if(player == "paper" && computer == "rock"){
            return "You won";
              }
    else{
        return "try again"
    }

}
const game = ()=>{
    for(let i=0;i<5;i++){
        
    }
}
console.log(play(playerSelection,computerSelection));

    
