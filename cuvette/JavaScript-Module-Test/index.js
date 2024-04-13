console.log("script index.js");


/*
// - Rock beats scissors, scissors beat paper, and paper beats rock
// - Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors."
// - Use rock, paper, scissors to settle minor decisions or simply play to pass the time
// - If both players lay down the same hand, each player lays down another hand


const getResult = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log(computerChoice)
    let result = '';
  
    if(userChoice === computerChoice){
      result = 'Tie'
    } else if(userChoice === "rock"){
      if(computerChoice=='scissors'){
        result = 'You win against PC'
      }else{
        result = 'You lost against PC'
      }    
    } else if(userChoice === "paper"){
      if(computerChoice==="rock"){
        result = 'You win against PC'
      }else{
        result = 'You lost against PC'
      }
    } else if(userChoice === "scissors"){
      if(computerChoice==="paper"){
        result = 'You win against PC'
      }else{
        result = 'You lost against PC'
      }
    }
    console.log(result)
  };
  
  const getComputerChoice = () => {
    const findRandomNumber = Math.floor(Math.random() * 3);
    console.log(findRandomNumber);
    switch (findRandomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  getResult('rock');
*/  