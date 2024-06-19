import BaseComponent from '../base-component';

export default class Quiz extends BaseComponent {
  constructor(wordLength, hint) {
    super({ tag: 'div', class: 'quiz-wrapper' });
    this.createAnswerComponent(wordLength);
    this.createHint(hint);
    this.createIncorrectGuessesComponent();
  }

  createAnswerComponent = (wordLength) => {
    const answerWrapper = new BaseComponent({ tag: 'div', class: 'quiz-side__word' });
    let i = 0;
    while (i < wordLength) {
      const spaceForLetter = new BaseComponent({
        tag: 'div',
        class: 'quiz-side__space-for-letter',
      });
      answerWrapper.node.append(spaceForLetter.node);
      i += 1;
    }
    this.node.append(answerWrapper.node);
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
        new BaseComponent({ tag: 'span', class: 'quiz-side__counter-numbers_changed' }),
        new BaseComponent({ tag: 'span', class: 'quiz-side__counter-numbers-max', text: ' / 6' }),
      ),
    );
    this.node.append(counterWrapper.node);
  };
}
