import { questions } from "./questions.js";

function createNewElement(elementName, className) {
  const element = document.createElement(elementName);
  element.className = className;
  return element;
}

document.body.className = "body";
const gameWrapper = createNewElement("div", "game-wrapper");

document.body.append(gameWrapper);

// create gallows-side section
const gallowsSideSection = createNewElement("section", "gallows-side");

gameWrapper.append(gallowsSideSection);

const canvas = document.createElement("canvas");
canvas.id = "example";

gallowsSideSection.append(canvas);

const example = document.getElementById("example"),
  ctx = example.getContext("2d"),
  pic = new Image();
const head = new Image();
const body = new Image();
const handOne = new Image();
const handTwo = new Image();
const legOne = new Image();
const legTwo = new Image();
example.width = 300;
example.height = 450;

ctx.scale(0.7, 0.7);

pic.src = "img/gallows.svg";
head.src = "img/head.svg";
body.src = "img/body.svg";
handOne.src = "img/hand-one.svg";
handTwo.src = "img/hand-two.svg";
legOne.src = "img/leg-one.svg";
legTwo.src = "img/leg-two.svg";

// pic.onload = function () {
//   ctx.drawImage(pic, 0, 0);
//   ctx.drawImage(head, 253, 145);
//   ctx.drawImage(body, 300, 242);
//   ctx.drawImage(handOne, 238, 242);
//   ctx.drawImage(handTwo, 300, 242);
//   ctx.drawImage(legOne, 238, 365);
//   ctx.drawImage(legTwo, 300, 365);
// };

pic.onload = function() {
  ctx.drawImage(pic, 0, 0);
}

head.onload = function() {
  ctx.drawImage(head, 253, 145);
}

body.onload = function() {
  ctx.drawImage(body, 300, 242);
}

handOne.onload = function() {
  ctx.drawImage(handOne, 238, 242);
}

handTwo.onload = function() {
  ctx.drawImage(handTwo, 300, 242);
}

legOne.onload = function() {
  ctx.drawImage(legOne, 238, 365);
}

legTwo.onload = function() {
  ctx.drawImage(legTwo, 300, 365);
}

// const gallowsSideImages = createNewElement('div', 'gallows-side__images');
// const gallowsSideImg = createNewElement('img', 'gallows-side__img');
// gallowsSideImg.src = 'img/gallows.svg';
// gallowsSideImg.alt = 'Gallows image';

const gallowsSideTitle = createNewElement("h2", "gallows-side__title");
gallowsSideTitle.innerText = "Hangman game";

// gallowsSideSection.append(gallowsSideImages);
gallowsSideSection.append(gallowsSideTitle);

// gallowsSideImages.append(gallowsSideImg);

// Create quiz-side section
const quizSideSection = createNewElement("section", "quiz-side");

gameWrapper.append(quizSideSection);

const quizSideWord = createNewElement("div", "quiz-side__word");

quizSideSection.append(quizSideWord);

let spaceForLetter;
function createSpaceForLetters(wordLength) {
  let i = 0;
  
  while (i < wordLength) {
    spaceForLetter = createNewElement("div", "quiz-side__space-for-letter");
    quizSideWord.append(spaceForLetter);
    i += 1;
  }
  // console.log(quizSideWord.childNodes);
  return quizSideWord;
}

const hintWrapper = createNewElement("div", "quiz-side__hint-wrapper");

quizSideSection.append(hintWrapper);

const hint = createNewElement("p", "quiz-side__hint");
hint.innerText = "Hint:";
const hintDescription = createNewElement("p", "quiz-side__hint-description");
hintDescription.innerText = "A human-powered vehicle with two wheels.";

hintWrapper.append(hint);
hintWrapper.append(hintDescription);

const counterWrapper = createNewElement("div", "quiz-side__counter-wrapper");

quizSideSection.append(counterWrapper);

const counterText = createNewElement("p", "quiz-side__counter-text");
counterText.innerText = "Incorrect guesses:";
const counterNumbers = createNewElement("p", "quiz-side__counter-numbers");
const changedCounter = createNewElement(
  "span",
  "quiz-side__counter-numbers_changed",
);
changedCounter.innerText = 0;
const maxCounter = createNewElement("span", "quiz-side__counter-numbers-max");
maxCounter.innerText = " / 6";

counterWrapper.append(counterText);
counterWrapper.append(counterNumbers);
counterNumbers.append(changedCounter);
counterNumbers.append(maxCounter);

const keyboard = createNewElement("div", "quiz-side__keyboard");

quizSideSection.append(keyboard);

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function createNewKeyboardElement(arr) {
  return arr.forEach((el) => {
    const keyboardLetter = createNewElement(
      "div",
      "quiz-side__keyboard-letter",
    );
    keyboardLetter.innerText = el;
    keyboard.append(keyboardLetter);
  });
}
createNewKeyboardElement(letters);

const lettersList = document.querySelector('.quiz-side__keyboard').childNodes;

let counterValue = 0;

function changeCounter() {
  counterValue += 1;
  changedCounter.textContent = counterValue;
  if (counterValue >= 6) {
    changeCounter.textContent = 6;
    openModal(randomAnswer);
    contentMessage.textContent = negativeResultMessage;
    return counterValue;
  }
}

function addLetter(word, currentLetter) {
  const letters = quizSideWord.children;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === currentLetter) {
      letters[i].innerText = currentLetter;
      letters[i].style.borderBottom = 'none';
    }
  }
  return letters;
}

function checkLetter(word, letter) {
  let currentLetterElement;
  for (const letterElement of lettersList) {
    if (letterElement.textContent === letter) {
      currentLetterElement = letterElement;
      break;
    }
  }
  if (word.includes(letter)) {
    addLetter(word, letter);
    currentLetterElement.className = 'quiz-side__keyboard-letter quiz-side__keyboard-letter_active';
  } else {
    // currentLetterElement.classList.add("quiz-side__keyboard-letter_active");
    currentLetterElement.className = 'quiz-side__keyboard-letter quiz-side__keyboard-letter_active';
    changeCounter();
  }
}

let prevRandomNumber;
let randomAnswer;
function getRandomQuestion() {
  let randomNumber = Math.floor(Math.random() * questions.length);
  if (randomNumber === prevRandomNumber) {
    while(randomNumber === prevRandomNumber) {
      randomNumber = Math.floor(Math.random() * questions.length);
    }
  }
  const randomQuestion = questions[randomNumber].question;
  randomAnswer = questions[randomNumber].answer;
  console.log(randomQuestion, randomAnswer);

  prevRandomNumber = randomNumber;
  
  createSpaceForLetters(randomAnswer.length);
  hintDescription.textContent = randomQuestion;

  for (const keyboardElem of lettersList) {
    keyboardElem.addEventListener("click", function() {
      checkLetter(randomAnswer.toUpperCase(), keyboardElem.textContent);
    });
  }
  document.addEventListener('keydown', function(event) {
    const currentLetter = event.key.toUpperCase();
    checkLetter(randomAnswer.toUpperCase(), currentLetter);
  });
}
getRandomQuestion();



// modal window

const modal = createNewElement("div", "modal");
modal.style.display = "none";

document.body.append(modal);

const modalWrapper = createNewElement("div", "modal__wrapper");

modal.append(modalWrapper);

const modalContent = createNewElement("div", "modal__content");

modalWrapper.append(modalContent);

const contentMessage = createNewElement("div", "modal__content-message");
contentMessage.innerText = "Congratulations!";
const contentSecretWord = createNewElement("div", "modal__content-secret-word");
contentSecretWord.innerText = "The secret word was ";

modalContent.append(contentMessage);
modalContent.append(contentSecretWord);

const openedSecretWord = createNewElement("span", "modal__content-secret-word_opened");
openedSecretWord.innerText = "piano";

contentSecretWord.append(openedSecretWord);

const modalButton = createNewElement("button", "modal__content-btn");
modalButton.innerText = "Play again";

modalContent.append(modalButton);

const positiveResultMessage = "Congratulations!";
const negativeResultMessage = "Game over!";

function openModal(answer) {
  modal.style.display = "flex";
  openedSecretWord.textContent = answer;
}

function removeWord() {
  // const wordElements = quizSideWord.childNodes;
  // wordElements.forEach((el) => el.textContent = '');
  // wordElements.forEach((el) => quizSideWord.removeChild(el));
  while(quizSideWord.childNodes.length !== 0) {
    quizSideWord.removeChild(quizSideWord.childNodes[0]);
  }
  
  return;
  // console.log(wordElements.length);
}

// function removeLines() {
//   const wordElements = quizSideWord.childNodes;
//   return wordElements.forEach((el) => el.remove());
// }

function resetState() {
  for (const keyboardElem of lettersList) {
    keyboardElem.className = 'quiz-side__keyboard-letter';
    // keyboardElem.classList.remove = 'quiz-side__keyboard-letter_active';
  }
  counterValue = 0;
  changedCounter.textContent = 0;

  // removeWord();
}

modal.addEventListener('click', function(event) {
  if (event.target === modalButton) {
    modal.style.display = 'none';
    resetState();
    getRandomQuestion();
  }
})