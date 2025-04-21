let userNum = prompt("Enter the Number from 1-10; ");
let luckyNum = 0;
function Guess() {
  function anotherGuess() {
    let storedNum = 7;

    function num() {
      luckyNum = storedNum;
    }
    num();
  }
  anotherGuess();
}
Guess();
for (i = 3; i > 0; i--) {
  if (userNum > 10) {
    console.log("Not a valid Number");
    userNum = prompt("Enter the Number from 1-10; ");
  } else {
    if (userNum == luckyNum) {
      console.log("Hurray You Won ");
      break;
    } else {
      console.log("Please Try Again");
      console.log("Your Chances left", i);
      userNum = prompt("Enter the Number from 1-10; ");
    }
    if (i == 1 && userNum == luckyNum) {
      console.log("Hurray You Won ");
    } else if (i == 1) {
      console.log("No More Chances Game Over !");
    }
  }
}
