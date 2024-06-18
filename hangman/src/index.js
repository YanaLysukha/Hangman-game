import questions from "./questions.js";
import "./css/style.css";

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

const gallowsSideImg = createNewElement("img", "gallows-side__img");
gallowsSideImg.src = "img/hangman-0.svg";
gallowsSideImg.alt = "Gallows image";

gallowsSideSection.append(gallowsSideImg);

const gallowsSideTitle = createNewElement("h2", "gallows-side__title");
gallowsSideTitle.innerText = "Hangman game";

gallowsSideSection.append(gallowsSideTitle);

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

const lettersList = document.querySelector(".quiz-side__keyboard").childNodes;
// quizSideWord nodes
const quizWordLetters = document.querySelector(".quiz-side__word").childNodes;

let counterValue = 0;

function changeCounter() {
  counterValue += 1;
  changeImage();
  changedCounter.textContent = counterValue;
  if (counterValue >= 6) {
    changeCounter.textContent = 6;
    openModal(randomAnswer, negativeResultMessage);
    contentMessage.textContent = negativeResultMessage;
    return counterValue;
  }
}

function changeImage() {
  gallowsSideImg.src = `img/hangman-${counterValue}.svg`;
}

function isFull() {
  let counter = 0;
  for (const element of quizWordLetters) {
    if (element.innerText !== "") {
      counter += 1;
    }
  }
  return counter === quizWordLetters.length;
}

function addLetter(word, currentLetter) {
  const letters = quizSideWord.children;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === currentLetter) {
      letters[i].innerText = currentLetter;
      letters[i].style.borderBottom = "none";
    }
    if (isFull()) {
      openModal(word, positiveResultMessage);
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
    currentLetterElement.className =
      "quiz-side__keyboard-letter quiz-side__keyboard-letter_active";
  } else {
    if (
      currentLetterElement.className !==
      "quiz-side__keyboard-letter quiz-side__keyboard-letter_active"
    ) {
      changeCounter();
    }
    currentLetterElement.className =
      "quiz-side__keyboard-letter quiz-side__keyboard-letter_active";
  }
}

let prevRandomNumber = Number(localStorage.getItem("number"));
let randomAnswer;
function getRandomQuestion() {
  let randomNumber = Math.floor(Math.random() * questions.length);
  if (randomNumber === prevRandomNumber) {
    while (randomNumber === prevRandomNumber) {
      randomNumber = Math.floor(Math.random() * questions.length);
    }
  }
  const randomQuestion = questions[randomNumber].question;
  randomAnswer = questions[randomNumber].answer;
  console.log(randomQuestion, randomAnswer);

  prevRandomNumber = randomNumber;
  localStorage.setItem("number", prevRandomNumber);

  createSpaceForLetters(randomAnswer.length);
  hintDescription.textContent = randomQuestion;

  for (const keyboardElem of lettersList) {
    keyboardElem.addEventListener("click", function () {
      checkLetter(randomAnswer.toUpperCase(), keyboardElem.textContent);
    });
  }
  document.addEventListener("keydown", function (event) {
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
const contentSecretWord = createNewElement("div", "modal__content-secret-word");
contentSecretWord.innerText = "The secret word was ";

modalContent.append(contentMessage);
modalContent.append(contentSecretWord);

const openedSecretWord = createNewElement(
  "span",
  "modal__content-secret-word_opened",
);
openedSecretWord.innerText = "piano";

contentSecretWord.append(openedSecretWord);

const modalButton = createNewElement("button", "modal__content-btn");
modalButton.innerText = "Play again";

modalContent.append(modalButton);

const positiveResultMessage = "Congratulations!";
const negativeResultMessage = "Game over!";

function openModal(answer, result) {
  modal.style.display = "flex";
  openedSecretWord.textContent = answer;
  contentMessage.textContent = result;
}

function removeElements() {
  for (const el of quizWordLetters) {
    el.remove();
  }
  if (quizWordLetters.length !== 0) {
    removeElements();
  }
  return;
}

function removeLines() {
  const wordElements = quizSideWord.childNodes;
  return wordElements.forEach((el) => el.remove());
}

function resetState() {
  for (const keyboardElem of lettersList) {
    keyboardElem.className = "quiz-side__keyboard-letter";
  }
  counterValue = 0;
  changedCounter.textContent = 0;
  gallowsSideImg.src = `img/hangman-${counterValue}.svg`;
  removeElements();
  removeLines();
}

modal.addEventListener("click", function (event) {
  if (event.target === modalButton) {
    modal.style.display = "none";
    resetState();
    getRandomQuestion();
  }
});
