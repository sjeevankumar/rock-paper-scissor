let userScore = 0;
let computerScore = 0;
// getting references to all required html elements
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
// function to generate a computer choice randomly with the help math.random function
const getComputerChoice = () => {
      const choices = ["r", "p", "s"];
      const randomNumber = Math.floor(Math.random() * 3);
      return choices[randomNumber]
}
// function for converting a letter of user choice and computer choice to a word eg:- r to rock, p to paper
const convertToWord = (letter) => {
      if (letter === "r") return "Rock";
      if (letter === "p") return "Paper";
      return "Scissor";
}
// defining the function for all possibilities when user wins
const win = (user, computer) => {
      userScore++
      userScore_span.textContent = userScore;
      result_div.textContent = `  ${convertToWord(user)} beats ${convertToWord(computer)} . You Won! 🔥`;
      const userChoice_div = document.getElementById(convertToWord(user).toLowerCase());
      userChoice_div.classList.add('green-glow');
      setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}
// defining the function for all possibilities when user loose
const loose = (user, computer) => {
      computerScore++
      computerScore_span.textContent = computerScore;
      result_div.textContent = ` ${convertToWord(computer)} beats ${convertToWord(user)}. You Lost! 😢`;
      const userChoice_div = document.getElementById(convertToWord(user).toLowerCase());
      userChoice_div.classList.add('red-glow');
      setTimeout(() =>
            userChoice_div.classList.remove('red-glow'), 300);
}
// defining the function for all possibilities when there is a draw
const draw = (user, computer) => {
      result_div.textContent = ` ${convertToWord(computer)} equals ${convertToWord(user)}. It's Draw! 🌊`;
      const userChoice_div = document.getElementById(convertToWord(user).toLowerCase());
      userChoice_div.classList.add('grey-glow');
      setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}
// passing the user choice to the game function through click events 
const game = (userChoice) => {
      // calling the getComputerChoice function and storing it in a computerChoice variable
      const computerChoice = getComputerChoice();
      // calling the win,loose and draw functions by considering all possibilities from user point of view
      switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                  win(userChoice, computerChoice);
                  break;
            case "sr":
            case "rp":
            case "ps":
                  loose(userChoice, computerChoice);
                  break;
            case "ss":
            case "rr":
            case "pp":
                  draw(userChoice, computerChoice);
                  break;
      }
}
// adding click event listener to rock,paper and scissor buttons
const main = () => {
      rock_div.addEventListener('click', () => game("r"));
      paper_div.addEventListener('click', () => game("p"));
      scissor_div.addEventListener('click', () => game("s"));
}
// calling the main function
main();