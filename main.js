const getUserChoice = (userInput) => {
  //A user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, to avoid this the program will transform the case to lowercase
  userInput = userInput.toLowerCase()

  // Conditional used to validate user choice
  if(userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors') {
    return userInput
  }
  else { console.log("Error! Your choice must be either rock, paper or scissors")}
  }





//The computer uses random number selection and conditionals to determine rock, paper, scissor choice

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random()*3)

  switch(compChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
  }
}



//Using conditionals to determine the winner of the game

const determineWinner = (userChoice, compChoice) => {
  //Scenario 1: A Tie
  if(userChoice === compChoice) {
    return `It's A Tie! `
  }
  
  //Scenario 2: User Choice =  Rock
  if(userChoice === 'rock' && compChoice !== 'paper') {
    return `The user wins. `
    }
else if (userChoice === 'rock' && compChoice == 'paper') {
  return  `The computer wins.`
  }

  //Scenario 3: User Choice =  Paper
    if(userChoice === 'paper' && compChoice !== 'scissors') {
    return `The user wins. `
    }
else if (userChoice === 'paper' && compChoice == 'scissors') {
  return  `The computer wins.`
  }

  //Scenario 3: User Choice =  Scissors
    if(userChoice === 'scissors' && compChoice !== 'rock') {
    return `The user wins. `
    }
else if (userChoice === 'scissors' && compChoice == 'rock') {
  return  `The computer wins.`
  }
}


//The function below initiates the game play

const playGame = () => {
//The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.
let userChoice = getUserChoice('rock')

//Code generates the computer choice
let computerChoice = getComputerChoice()

//Determine Winner
console.log(`User Choice: ${userChoice} --- Computer Choice: ${ computerChoice}. `)
console.log(determineWinner(userChoice, computerChoice))
}



playGame()
