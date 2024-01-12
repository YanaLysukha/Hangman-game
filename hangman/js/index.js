function createNewElement(elementName, className) {
  const element = document.createElement(elementName);
  element.className = className;
  return element;
}

document.body.className = 'body';
const gameWrapper = createNewElement('div', 'game-wrapper');

document.body.append(gameWrapper);

// create gallows-side section
const gallowsSideSection = createNewElement('section', 'gallows-side');

gameWrapper.append(gallowsSideSection);

const gallowsSideImages = createNewElement('div', 'gallows-side__images');
const gallowsSideImg = createNewElement('img', 'gallows-side__img');
gallowsSideImg.src = 'img/gallows.svg';
gallowsSideImg.alt = 'Gallows image';

const gallowsSideTitle = createNewElement('h2', 'gallows-side__title');
gallowsSideTitle.innerText = 'Hangman game';

gallowsSideSection.append(gallowsSideImages);
gallowsSideSection.append(gallowsSideTitle);

gallowsSideImages.append(gallowsSideImg);

// Create quiz-side section
const quizSideSection = createNewElement('section', 'quiz-side');

gameWrapper.append(quizSideSection);

const quizSideWord = createNewElement('div', 'quiz-side__word');

quizSideSection.append(quizSideWord);

const spaceForLetter1 = createNewElement('div', 'quiz-side__space-for-letter');
const spaceForLetter2 = createNewElement('div', 'quiz-side__space-for-letter');
const spaceForLetter3 = createNewElement('div', 'quiz-side__space-for-letter');
const spaceForLetter4 = createNewElement('div', 'quiz-side__space-for-letter');
const spaceForLetter5 = createNewElement('div', 'quiz-side__space-for-letter');
const spaceForLetter6 = createNewElement('div', 'quiz-side__space-for-letter');
const spaceForLetter7 = createNewElement('div', 'quiz-side__space-for-letter');

quizSideWord.append(spaceForLetter1);
quizSideWord.append(spaceForLetter2);
quizSideWord.append(spaceForLetter3);
quizSideWord.append(spaceForLetter4);
quizSideWord.append(spaceForLetter5);
quizSideWord.append(spaceForLetter6);
quizSideWord.append(spaceForLetter7);

const hintWrapper = createNewElement('div', 'quiz-side__hint-wrapper');

quizSideSection.append(hintWrapper);

const hint = createNewElement('p', 'quiz-side__hint');
hint.innerText = 'Hint:';
const hintDescription = createNewElement('p', 'quiz-side__hint-description');
hintDescription.innerText = 'A human-powered vehicle with two wheels.';

hintWrapper.append(hint);
hintWrapper.append(hintDescription);

const counterWrapper = createNewElement('div', 'quiz-side__counter-wrapper');

quizSideSection.append(counterWrapper);

const counterText = createNewElement('p', 'quiz-side__counter-text');
counterText.innerText = 'Incorrect guesses:';
const counterNumbers = createNewElement('p', 'quiz-side__counter-numbers');
const changedCounter = createNewElement(
  'span',
  'quiz-side__counter-numbers_changed',
);
changedCounter.innerText = '0';
const maxCounter = createNewElement('span', 'quiz-side__counter-numbers-max');
maxCounter.innerText = ' / 6';

counterWrapper.append(counterText);
counterWrapper.append(counterNumbers);
counterNumbers.append(changedCounter);
counterNumbers.append(maxCounter);

const keyboard = createNewElement('div', 'quiz-side__keyboard');

quizSideSection.append(keyboard);

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function createNewKeyboardElement(arr) {
  return arr.forEach((el) => {
    const keyboardLetter = createNewElement(
      'div',
      'quiz-side__keyboard-letter',
    );
    keyboardLetter.innerText = el;
    keyboard.append(keyboardLetter);
  });
}
createNewKeyboardElement(letters);
