import test from "./test.js";
const easy = document.querySelector(".js-easy");
const entery = document.querySelector(".js-entery");
const medium = document.querySelector(".js-medium");
const hard = document.querySelector(".js-hard");
const wrongAnswer = document.querySelector(".js-wrong-answers");
const correctAnswer = document.querySelector(".js-correct-answers");
const mainContent = document.querySelector(".main-content");
const level = document.querySelector(".js-level");
const img = document.querySelector(".js-img");
const answer1 = document.querySelector(".js-answer1");
const answer2 = document.querySelector(".js-answer2");
const answer3 = document.querySelector(".js-answer3");
const success = new Audio('../audio/success.mp3');
const fail = new Audio('../audio/fail.mp3');
let fails = 5;
let correctAnswers = 0;
let currentQuestion = getRandomSymbol(test);
let wrongAnswers = 0;
let timer;

const easyTime = 600;
const mediumTime = 300;
const hardTime = 180;

easy.addEventListener("click", () => {
mainContent.classList.remove("hidden");
level.textContent = "Level: Easy";
entery.classList.add("hidden");
startTimer(easyTime);
currentQuestion = getRandomSymbol(test);
img.src = currentQuestion.symbol_img;
answer3.textContent = currentQuestion.symbol_title;
getRandomSymbols(test, 2, currentQuestion);
});


medium.addEventListener("click", () => {
mainContent.classList.remove("hidden");
level.textContent = "Level: Medium";
entery.classList.add("hidden");
startTimer(mediumTime);
currentQuestion = getRandomSymbol(test);
img.src = currentQuestion.symbol_img;
answer3.textContent = currentQuestion.symbol_title;
getRandomSymbols(test, 2, currentQuestion);
});

hard.addEventListener("click", () => {
mainContent.classList.remove("hidden");
level.textContent = "Level: Hard";
entery.classList.add("hidden");
startTimer(hardTime);
currentQuestion = getRandomSymbol(test);
img.src = currentQuestion.symbol_img;
answer3.textContent = currentQuestion.symbol_title;
getRandomSymbols(test, 2, currentQuestion);
});

function startTimer(time) {
let remainingTime = time;
timer = setInterval(() => {
remainingTime--;
const minutes = Math.floor(remainingTime / 60);
const seconds = remainingTime % 60;
const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
document.querySelector(".js-time").textContent = `Time: ${formattedTime}`;
if (remainingTime <= 0) {
clearInterval(timer);
mainContent.classList.add("hidden");
}
}, 1000);
}


function getRandomSymbol(array) {
return array[Math.floor(Math.random() * array.length)];
}



function getRandomSymbols(array, count, correctAnswer) {
const shuffled = array.sort(() => 0.5 - Math.random());
const result = shuffled.slice(0, count);
result.push(correctAnswer);
randomButtons(result);
const answerButtons = [answer1, answer2, answer3];
randomButtons(answerButtons);
answerButtons.forEach((button, index) => {
button.textContent = result[index].symbol_title;
});
}


function randomButtons(array) {
array.sort(() => 3 - Math.random());
}

function displayResult() {
   mainContent.classList.add('hidden');
   document.querySelector(".js-result").classList.remove('hidden');
   document.querySelector(".js-correct-result").textContent = `Correct Answers ${correctAnswers}`;
   document.querySelector(".js-fail-result").textContent = `Wrong Answer ${wrongAnswers}`;


}
answer1.addEventListener("click", () => {
  setTimeout(() => {
    if (answer1.textContent === currentQuestion.symbol_title) {
      answer1.checked = true; 
      correctAnswers++;
      correctAnswer.textContent = `Answers: ${correctAnswers}`;
      success.play();
    } else {
      fails--;
      wrongAnswers++;
      wrongAnswer.textContent = `wrong Answers: ${wrongAnswers}`;
      if (fails <= 0) {
        clearInterval(timer);
        mainContent.classList.add("hidden");
        showResult();
        return;
      } else {
        fail.play();
      }
    }
    currentQuestion = getRandomSymbol(test);
    img.src = currentQuestion.symbol_img;
    answer3.textContent = currentQuestion.symbol_title;
    getRandomSymbols(test, 2, currentQuestion);
  }, 2000); 
});



answer2.addEventListener("click", () => {
  if (answer2.textContent === currentQuestion.symbol_title) {
    correctAnswers++;
    correctAnswer.textContent = `Answers: ${correctAnswers}`;
    success.play();
  } else {
    fails--;
    wrongAnswers++;
    wrongAnswer.textContent = `wrong Answers: ${wrongAnswers}`;
    if (fails <= 0) {
      clearInterval(timer);
      mainContent.classList.add("hidden");
      showResult();
      return;
    } else {
      fail.play();
    }
  }
  currentQuestion = getRandomSymbol(test);
  img.src = currentQuestion.symbol_img;
  answer3.textContent = currentQuestion.symbol_title;
  getRandomSymbols(test, 2, currentQuestion);
});

answer3.addEventListener("click", () => {
  if (answer3.textContent === currentQuestion.symbol_title) {
    correctAnswers++;
    correctAnswer.textContent = `Answers: ${correctAnswers}`
    success.play();
    if (correctAnswers === 10) {
      clearInterval(timer);
      displayResult();
    } 
  } else {
    fails--;
    wrongAnswers++;
    wrongAnswer.textContent = ` wrong Answers: ${wrongAnswers}`
    if (fails <= 0) {
      clearInterval(timer);
      mainContent.classList.add("hidden");
      showResult();
      return;
    } else {
      fail.play();
    }
  }
  currentQuestion = getRandomSymbol(test);
  img.src = currentQuestion.symbol_img;
  answer3.textContent = currentQuestion.symbol_title;
  getRandomSymbols(test, 2, currentQuestion);
});
