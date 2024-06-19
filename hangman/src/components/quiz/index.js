import BaseComponent from '../base-component';

export default class Quiz extends BaseComponent {
  constructor() {
    super({ tag: 'div' });
  }

  createAnswerComponent = (wordLength) => {
    const answerWrapper = new BaseComponent({ tag: 'div', class: 'quiz-side__word' });
    let i = 0;
    while (i < wordLength) {
      const spaceForLetter = new BaseComponent({
        tag: 'div',
        class: 'quiz-side__space-for-letter',
      });
      answerWrapper.append(spaceForLetter);
      i += 1;
    }
    return quizSideWord;
  };

  createHint = (hint) => {
    const hintWrapper = new BaseComponent(
      { tag: 'div', class: 'quiz-side__hint-wrapper' },
      new BaseComponent({ tag: 'p', class: 'quiz-side__hint', text: 'Hint' }),
      new BaseComponent({ tag: 'p', class: 'quiz-side__hint-description', text: hint }),
    );
    return hintWrapper;
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
  };
}
