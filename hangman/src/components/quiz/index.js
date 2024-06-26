import Counter from '../../state';
import BaseComponent from '../base-component';
import './style.scss';

export default class Quiz extends BaseComponent {
  currentAttempt = 0;

  counter;

  maxAttempt = 6;

  answerWrapper;

  constructor(wordLength, hint) {
    super({ tag: 'div', class: 'quiz-wrapper' });
    this.counter = Counter.getInstance();
    this.createAnswerComponent(wordLength);
    this.createHint(hint);
    this.createIncorrectGuessesComponent();
  }

  createAnswerComponent = (wordLength) => {
    this.answerWrapper = new BaseComponent({ tag: 'div', class: 'quiz-side__word' });
    let i = 0;
    while (i < wordLength) {
      const spaceForLetter = new BaseComponent({
        tag: 'div',
        class: 'quiz-side__space-for-letter',
      });
      this.answerWrapper.node.append(spaceForLetter.node);
      i += 1;
    }
    this.node.append(this.answerWrapper.node);
  };

  createHint = (hint) => {
    const hintWrapper = new BaseComponent(
      { tag: 'div', class: 'quiz-side__hint-wrapper' },
      new BaseComponent({ tag: 'p', class: 'quiz-side__hint', text: 'Hint' }),
      new BaseComponent({ tag: 'p', class: 'quiz-side__hint-description', text: hint }),
    );
    this.node.append(hintWrapper.node);
  };

  createIncorrectGuessesComponent = () => {
    const counterWrapper = new BaseComponent(
      { tag: 'div', class: 'quiz-side__counter-wrapper' },
      new BaseComponent({
        tag: 'p',
        class: 'quiz-side__counter-text',
        text: 'Incorrect guesses: ',
      }),
      new BaseComponent(
        { tag: 'p', class: 'quiz-side__counter-numbers' },
        (this.currentAttempt = new BaseComponent({
          tag: 'span',
          class: 'quiz-side__counter-numbers_changed',
          textContent: 0,
        })),
        new BaseComponent({
          tag: 'span',
          class: 'quiz-side__counter-numbers-max',
          text: ` / ${this.maxAttempt}`,
        }),
      ),
    );
    this.node.append(counterWrapper.node);
  };

  increaseCounter = () => {
    this.counter.increase();
    this.currentAttempt.node.textContent = this.counter.count;
  };

  addCorrectLetter = (answer, letter) => {
    const letterPlaces = this.answerWrapper.node.children;
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i].toLowerCase() === letter) {
        letterPlaces[i].textContent = letter;
      }
    }
  };

  getEnteredWord = () => {
    const letterPlaces = this.answerWrapper.node.children;
    const enteredLetters = [];
    for (let i = 0; i < letterPlaces.length; i += 1) {
      const letter = letterPlaces[i].textContent;
      enteredLetters.push(letter);
    }
    return enteredLetters.join('');
  };
}
